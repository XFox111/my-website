"use server";

import { canonicalUrl } from "@/data/metadata";
import { validateTurnstileToken } from "next-turnstile";
import { headers } from "next/headers";
import { createTransport } from "nodemailer";
import z from "zod";

const schema = z.object({
	email: z.email().max(60),
	subject: z.string().max(120),
	message: z.string().min(100).max(2000),
	timezone: z.string().optional()
});

const mailClient = createTransport({
	host: process.env.SMTP_HOST,
	port: parseInt(process.env.SMTP_PORT!),
	auth: {
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASSWORD
	}
});

export default async function sendInquiry(_: FormResult, formData: FormData): Promise<FormResult> {
	if (process.env.CF_TURNSTILE_SECRETKEY) {
		const cfToken = formData.get("cf-turnstile-response")?.toString();

		if (!cfToken)
			return {
				result: "error",
				message: "You must complete the challenge"
			};

		const headerList = await headers();
		const remoteip: string =
			headerList.get("CF-Connecting-IP") ||
			headerList.get("X-Forwarded-For") ||
			headerList.get("X-Real-IP") ||
			"unknown";

		const result = await validateTurnstileToken({
			token: cfToken,
			secretKey: process.env.CF_TURNSTILE_SECRETKEY!,
			remoteip
		});

		if (!result.success) {
			if (result.error_codes?.[0] === "timeout-or-duplicate")
				return {
					result: "error",
					message: "Challenge has expired. Try again."
				};

			return {
				result: "error",
				message: "Something went wrong. Try refreshing the page"
			};
		}
	}

	const { success, data } = schema.safeParse({
		email: formData.get("email"),
		subject: formData.get("subject"),
		message: formData.get("message"),
		timezone: formData.get("timezone"),
		token: formData.get("cf-turnstile-response")
	});

	if (!success)
		return {
			result: "error",
			message: "Invalid request"
		};

	const timeFormatter = new Intl.DateTimeFormat("en-US", {
		timeZone: data.timezone ?? "Etc/GMT",
		dateStyle: "full",
		timeStyle: "long"
	});
	const timezoneName: string = data.timezone ?? "Unknown";

	const text: string =
		`From: ${data.email}\n` +
		`Sender time: ${timeFormatter.format(new Date())} (${timezoneName})\n` +
		`\n${data.message}\n`;

	try {
		await mailClient.sendMail({
			from: process.env.SMTP_FROM_EMAIL,
			to: process.env.SMTP_TO_EMAIL,
			priority: "high",
			cc: data.email,
			subject: `[Contact Inquiry (${canonicalUrl.hostname})]: ${data.subject}`,
			text
		});
	} catch (ex) {
		console.error(ex);

		return {
			result: "error",
			message: "Something went wrong. Sorry"
		};
	}

	return {
		result: "success",
		message: "Message successfully sent"
	};
}

export type FormResult = {
	result?: "error" | "success";
	message?: string;
};
