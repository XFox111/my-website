"use client";

import Button from "@/_components/Button";
import SocialLinks from "@/_components/SocialLinks";
import contacts from "@/_data/contacts";
import { getSitekey } from "@/_utils/turnstile";
import React, { InputHTMLAttributes, useActionState, useEffect, useMemo, useState } from "react";
import Turnstile from "react-turnstile";
import sendInquiry, { FormStatus } from "../_utils/sendInquiry";
import cls from "./ContactSection.module.scss";

const defaultState: FormStatus = { status: "idle" };

const ContactSection: React.FC = () =>
{
	// Added state-backing for the form fields to prevent it from resetting on submit
	// See https://github.com/facebook/react/issues/29034
	// FIXME: Remove form state once #29034 is fixed
	const [form, setForm] = useState<{ email: string, subject: string, message: string; }>({ email: "", subject: "", message: "" });

	const [{ status, message }, formAction, isPending] = useActionState<FormStatus, FormData>(sendInquiry, defaultState);
	const { telephone: phone, email, socials } = contacts;
	const [cfSitekey, setCfSitekey] = useState<string | undefined | null>(null);

	const sharedProps: InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> = useMemo(() => ({
		required: true,
		disabled: isPending,
		readOnly: status === "success",
		"data-clarity-mask": true
	}), [status, isPending]);

	useEffect(() =>
	{
		getSitekey().then(sitekey => setCfSitekey(sitekey));
	}, []);

	return (
		<section id="contacts" className={ cls.section }>
			<h2>Let&apos;s get in touch</h2>

			<div className={ cls.content }>

				<div className={ cls.container }>
					<h3>Inquiries, requests or proposals</h3>

					<form className={ cls.container } action={ formAction }>
						<input name="email" type="email" { ...sharedProps }
							value={ form.email } onChange={ e => setForm({ ...form, email: e.target.value }) }
							autoComplete="email" spellCheck="false"
							maxLength={ 60 }
							placeholder="Email" />

						<input name="subject" type="text" { ...sharedProps }
							value={ form.subject } onChange={ e => setForm({ ...form, subject: e.target.value }) }
							autoComplete="off" spellCheck="true"
							maxLength={ 120 }
							placeholder="Subject" />

						<textarea name="message" { ...sharedProps } className={ cls.textarea }
							value={ form.message } onChange={ e => setForm({ ...form, message: e.target.value }) }
							autoComplete="off" spellCheck="true"
							minLength={ 100 } maxLength={ 2000 }
							placeholder="Message (min 100 characters)" />

						<input name="timezone" type="hidden" readOnly
							value={ Intl.DateTimeFormat().resolvedOptions().timeZone } />

						<div>
							{ cfSitekey &&
								<Turnstile sitekey={ cfSitekey } size="flexible" action="contact_form" />
							}

							<p className={ cls.disclaimer }>
								*Using this form does not guarantee I will respond to your request
							</p>
						</div>

						<div className={ cls.formToolbar }>
							<div className={ `${cls.status} ${isPending ? "" : cls[status]}` }>
								{ isPending &&
									<span role="alert" aria-live="assertive">
										Sending
									</span>
								}
								{ !isPending && status === "success" &&
									<span role="alert" aria-live="assertive">
										Message successfully sent
									</span>
								}
								{ !isPending && status === "error" &&
									<span role="alert" aria-live="assertive">
										{ message ?? "Something went wrong" }
									</span>
								}
							</div>

							{ status !== "success" &&
								<Button type="submit" disabled={ isPending }>
									Submit
								</Button>
							}
						</div>
					</form>
				</div>

				<div className={ `${cls.container} ${cls.contacts}` }>
					<h3>Direct contacts</h3>

					<SocialLinks socials={ socials } className={ cls.links } />

					{ phone &&
						<p>
							<span aria-hidden>Telephone: </span>
							<a aria-label={ `Telephone: ${phone.text} (${phone.country})` } href={ phone.href }>
								{ phone.text }
							</a>
							<span aria-hidden> ({ phone.country })</span>
						</p>
					}

					<Button href={ email.href } target="_blank">
						{ email.text }
					</Button>
				</div>

			</div>
		</section>
	);
};

export default ContactSection;
