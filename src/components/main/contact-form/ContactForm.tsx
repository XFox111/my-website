"use client";

import Button from "@/components/shared/Button";
import { Turnstile } from "next-turnstile";
import { InputHTMLAttributes, ReactElement, useActionState, useEffect, useMemo, useState } from "react";
import cls from "./ContactForm.module.scss";
import sendInquiry, { FormResult } from "./sendInquiry";

export default function ContactForm(): ReactElement {
	const [{ result, message }, formAction, isPending] = useActionState<FormResult, FormData>(sendInquiry, {});

	// Added state-backing for the form fields to prevent it from resetting on submit
	// See https://github.com/facebook/react/issues/29034
	// https://react.dev/reference/react-dom/components/form#preserve-form-values-after-an-action
	// FIXME: Remove form state once #29034 is fixed
	const [form, setForm] = useState<Record<string, string>>({});

	function submitForm(formData: FormData): void {
		setForm({
			email: formData.get("email")!.toString(),
			subject: formData.get("subject")!.toString(),
			message: formData.get("message")!.toString()
		});
		return formAction(formData);
	}

	useEffect(() => {
		console.log("NEXT_PUBLIC_TURNSTILE_SITEKEY", process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY);
	}, []);

	const sharedProps: InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> = useMemo(
		() => ({
			required: true,
			disabled: isPending,
			readOnly: result === "success",
			autoComplete: "off",
			spellCheck: "true",
			"data-clarity-mask": true
		}),
		[result, isPending]
	);

	return (
		<form className={cls.form} action={submitForm}>
			<input
				name="email"
				{...sharedProps}
				defaultValue={form.email}
				type="email"
				autoComplete="email"
				spellCheck={false}
				maxLength={60}
				placeholder="Email"
			/>

			<input name="subject" {...sharedProps} defaultValue={form.subject} maxLength={120} placeholder="Subject" />

			<textarea
				name="message"
				{...sharedProps}
				defaultValue={form.message}
				minLength={100}
				maxLength={2000}
				placeholder="Message (min 100 characters)"
			/>

			<input name="timezone" type="hidden" readOnly value={Intl.DateTimeFormat().resolvedOptions().timeZone} />

			<div>
				{process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY && !isPending && result !== "success" && (
					<Turnstile
						siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY!}
						appearance="interaction-only"
						language="en-us"
						size="flexible"
					/>
				)}
				<p>*Using this form does not guarantee I will respond to your request</p>
			</div>

			<div className={cls.toolbar}>
				<div className={cls.status} data-complete={!!result && !isPending} data-result={result}>
					<span>{message}</span>
				</div>

				{result !== "success" && (
					<Button as="button" type="submit" disabled={isPending}>
						Submit
					</Button>
				)}
			</div>
		</form>
	);
}
