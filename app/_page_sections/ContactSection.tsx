"use client";

import Button from "@/_components/Button";
import contacts from "@/_data/contacts";
import FormStatusTracker from "@/_utils/FormStatusTracker";
import React, { InputHTMLAttributes, useMemo, useState } from "react";
import { useFormState } from "react-dom";
import sendInquiry, { FormStatus } from "../_utils/sendInquiry";
import cls from "./ContactSection.module.scss";

const defaultState: FormStatus = { status: "idle" };

const ContactSection: React.FC = () =>
{
	const [pending, setPending] = useState<boolean>(false);
	const [{ status, message }, formAction] = useFormState<FormStatus, FormData>(sendInquiry, defaultState);
	const { telephone: phone, email, socials } = contacts;

	const sharedProps: InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> = useMemo(() => ({
		required: true,
		disabled: pending,
		readOnly: status === "success"
	}), [status, pending]);

	return (
		<section id="contacts" className={ cls.section }>
			<h2>Let's get in touch</h2>

			<div className={ cls.content }>

				<div className={ cls.container }>
					<h3>Inquiries, requests or proposals</h3>

					<form className={ cls.container } action={ formAction }>
						<FormStatusTracker onPendingChanged={ setPending } />

						<input name="email" type="email" { ...sharedProps } data-clarity-mask
							autoComplete="email" spellCheck="false"
							maxLength={ 60 }
							placeholder="Email" />

						<input name="subject" type="text" { ...sharedProps } data-clarity-mask
							autoComplete="off" spellCheck="true"
							maxLength={ 120 }
							placeholder="Subject" />

						<textarea name="message" { ...sharedProps } className={ cls.textarea } data-clarity-mask
							autoComplete="off" spellCheck="true"
							minLength={ 100 } maxLength={ 2000 }
							placeholder="Message (min 100 characters)" />

						<input name="timezone" type="hidden" readOnly
							value={ Intl.DateTimeFormat().resolvedOptions().timeZone } />

						<div className={ cls.formToolbar }>
							<div className={ `${cls.status} ${pending ? "" : cls[status]}` }>
								{ pending &&
									<span role="alert" aria-live="assertive">
										Sending
									</span>
								}
								{ !pending && status === "success" &&
									<span role="alert" aria-live="assertive">
										Message successfully sent
									</span>
								}
								{ !pending && status === "error" &&
									<span role="alert" aria-live="assertive">
										{ message ?? "Something went wrong" }
									</span>
								}
							</div>

							{ status !== "success" &&
								<Button type="submit" disabled={ pending }>
									Submit
								</Button>
							}
						</div>
					</form>
				</div>

				<div className={ `${cls.container} ${cls.contacts}` }>
					<h3>Direct contacts</h3>

					<p>
						{ Object.entries(socials).map(([name, i]) =>
							<span key={ name }>
								<span aria-hidden>{ name + ": " }</span>
								<a aria-label={ `${name}: ${i.username}` } href={ i.href } target="_blank">
									{ i.username }
								</a>
								<br aria-hidden />
							</span>
						) }

						{ phone &&
							<span>
								<span aria-hidden>Telephone: </span>
								<a aria-label={ `Telephone: ${phone.text} (${phone.country})` } href={ phone.href }>
									{ phone.text }
								</a>
								<span aria-hidden> ({ phone.country })</span>
							</span>
						}
					</p>

					<Button href={ email.href } target="_blank">
						{ email.text }
					</Button>
				</div>

			</div>
		</section>
	);
};

export default ContactSection;
