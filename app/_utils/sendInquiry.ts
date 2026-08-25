"use server";

import { canonicalName } from "@/_data/metadata";
import nodemailer from "nodemailer";
import { z } from "zod";
import { verifyTurnstile } from "./turnstile";

const schema = z.object({
	email: z.email().max(60),
	subject: z.string().max(120),
	message: z.string().min(100).max(2000),
	timezone: z.string().optional()
});

const mailClient = nodemailer.createTransport({
	host: process.env.SMTP_HOST,
	port: parseInt(process.env.SMTP_PORT!),
	priority: "high",
	auth:
	{
		user: process.env.SMTP_USER,
		pass: process.env.SMTP_PASSWORD
	}
});

export default async function sendInquiry(_: FormStatus, formData: FormData): Promise<FormStatus>
{
	const cfToken = formData.get("cf-turnstile-response")?.toString();

	if (!cfToken)
		return {
			status: "error",
			message: "You must complete the challenge"
		};

	const [isValid, error] = await verifyTurnstile(cfToken);

	if (!isValid)
	{
		if (error === "timeout-or-duplicate")
			return {
				status: "error",
				message: "Challenge has expired. Try again"
			};

		return {
			status: "error",
			message: "Something went wrong"
		};
	}

	const { success, data } = schema.safeParse({
		email: formData.get("email"),
		subject: formData.get("subject"),
		message: formData.get("message"),
		timezone: formData.get("timezone")
	});

	if (!success)
		return {
			status: "error",
			message: "Invalid request"
		};

	try
	{
		await mailClient.sendMail({
			from: process.env.SMTP_FROM_EMAIL,
			to: process.env.SMTP_TO_EMAIL,
			cc: data.email,
			subject: `[Contact Inquiry (${canonicalName.hostname})]: ${data.subject}`,
			text: getTemplate(data)
		});
	}
	catch (ex)
	{
		console.error(ex);

		return {
			status: "error"
		};
	}

	return {
		status: "success"
	};
}

function getTemplate(data: InquiryData): string
{
	const timeFormatter = new Intl.DateTimeFormat("en-US", {
		timeZone: data.timezone ?? "Etc/GMT",
		dateStyle: "full",
		timeStyle: "long"
	});
	const timezone: string = data.timezone ?? "Unknown";

	return (
		`From: ${data.email}\n` +
		`Sender time: ${timeFormatter.format(new Date())} (${timezone})\n` +
		`\n${data.message}\n`
	);
}

export type FormStatus =
	{
		status: "idle" | "success" | "error";
		message?: string;
	};

type InquiryData =
	{
		email: string;
		subject: string;
		message: string;
		timezone?: string;
	};
