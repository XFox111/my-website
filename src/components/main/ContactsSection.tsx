import Package from "@//package.json";
import { contacts } from "@/data/links";
import Mail24Regular from "@fluentui/svg-icons/icons/mail_24_regular.svg";
import { ReactElement } from "react";
import Button from "../shared/Button";
import SocialLink from "../shared/SocialLink";
import cls from "./ContactsSection.module.scss";
import ContactForm from "./contact-form/ContactForm";

export default function ContactsSection(): ReactElement {
	return (
		<section id="contacts" className={cls.section}>
			<h2>Let&apos;s get in touch!</h2>

			<div className={cls.form}>
				<h3>Inquiries, requests, or proposals</h3>
				<ContactForm />
			</div>

			<div className={cls.direct}>
				<h3>Direct contacts</h3>

				<Button as="a" href={`mailto:${Package.author.email}`} icon={<Mail24Regular />}>
					{Package.author.email}
				</Button>

				<div className={cls.socials}>
					{contacts.map(({ href, network, title }, index) => (
						<SocialLink href={href} network={network} title={title} key={index} />
					))}
				</div>
			</div>
		</section>
	);
}
