"use server";

import { headers } from "next/headers";

export async function getSitekey(): Promise<string | undefined>
{
	return process.env.CF_SITEKEY;
}

export async function verifyTurnstile(token: string): Promise<[false, TurnstileErrorType] | [true]>
{
	if (!process.env.CF_SECRET)
		return [true];

	const formData = new FormData();
	const headerList = await headers();

	formData.append("secret", process.env.CF_SECRET);
	formData.append("response", token);
	formData.append("remoteip", headerList.get("CF-Connecting-IP") ?? "");

	const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify",
		{
			body: formData,
			method: "POST"
		}
	);

	const result: TurnstileValidationResponse = await response.json();

	if (result.success)
		return [true];
	else
		return [false, result["error-codes"][0]];
}

export type TurnstileValidationResponse =
	{
		success: boolean;
		challenge_ts: string;
		hostname: string;
		"error-codes": TurnstileErrorType[];
		action: string;
		cdata: `sessionid-${string}`;
		metadata: Record<string, string>;
	};

export type TurnstileErrorType =
	"missing-input-secret" | "invalid-input-secret" | "missing-input-response" |
	"invalid-input-response" | "bad-request" | "timeout-or-duplicate" | "internal-error";
