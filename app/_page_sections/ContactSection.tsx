"use client";

import Button from "@/_components/Button";
import SocialLinks from "@/_components/SocialLinks";
import contacts from "@/_data/contacts";
import FormStatusTracker from "@/_utils/FormStatusTracker";
import React, { InputHTMLAttributes, useEffect, useMemo, useState } from "react";
import { useFormState } from "react-dom";
import Turnstile from "react-turnstile";
import sendInquiry, { FormStatus } from "../_utils/sendInquiry";
import cls from "./ContactSection.module.scss";
import { getSitekey } from "@/_utils/turnstile";

const defaultState: FormStatus = { status: "idle" };

const ContactSection: React.FC = () =>
{
	const [pending, setPending] = useState<boolean>(false);
	const [{ status, message }, formAction] = useFormState<FormStatus, FormData>(sendInquiry, defaultState);
	const { telephone: phone, email, socials } = contacts;
	const [cfSitekey, setCfSitekey] = useState<string | undefined | null>(null);

	const sharedProps: InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> = useMemo(() => ({
		required: true,
		disabled: pending,
		readOnly: status === "success"
	}), [status, pending]);

	useEffect(() =>
	{
		getSitekey().then(sitekey => setCfSitekey(sitekey));
	}, []);

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

						<div>
							{ cfSitekey &&
								<Turnstile sitekey={ cfSitekey } size="flexible" action="contact_form" />
							}

							<p className={ cls.disclaimer }>
								*Using this form does not guarantee I will respond to your request
							</p>
						</div>

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
