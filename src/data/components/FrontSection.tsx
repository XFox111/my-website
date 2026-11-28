import Package from "@//package.json";
import Button from "@/components/shared/Button";
import ResumeButton from "@/components/shared/ResumeButton";
import decor from "@assets/illustrations/home-decor.svg";
import picture from "@assets/illustrations/its_me.webp";
import Image from "next/image";
import { ReactElement } from "react";
import cls from "./FrontSection.module.scss";

export default function FrontSection(): ReactElement {
	return (
		<section className={cls.section}>
			<div className={cls.content}>
				<h1>Hello there!</h1>
				<h2>
					My name is <span className="hl">{Package.author.name}</span>
				</h2>
				<p>
					I am a <span className="hl">software engineer</span> from Russia
					<br />
					with extensive experience in <span className="hl">.NET and React</span> development
				</p>
				<div className={cls.buttons}>
					<ResumeButton />
					<Button as="next-link" href="#contacts" appearance="secondary">
						Contact me
					</Button>
				</div>
			</div>
			<div className={cls.illustrations}>
				<Image className={cls.main} src={picture} alt="" loading="eager" />
				<Image className={cls.secondary} src={decor} alt="" loading="eager" />
			</div>
		</section>
	);
}
