"use server";

import { canonicalName } from "@/_data/metadata";
import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
	email: z.string().email().max(60),
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
			subject: `${canonicalName.hostname}: Contact Inquiry`,
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

const getTemplate = (data: InquiryData): string => (
	`From: ${data.email}
Received on: ${new Date()}
Sender timezone: ${data.timezone ?? "Unknown"}

Subject: ${data.subject}

${data.message}`
);

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
