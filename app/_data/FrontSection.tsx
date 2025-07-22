import { homeDecor, profilePicture } from "@/_assets/illustrations";
import Button from "@/_components/Button";
import Image from "next/image";
import React from "react";
import cls from "./FrontSection.module.scss";
import links from "./links";
import Package from "@/../package.json";

const FrontSection: React.FC = () => (
	<section className={ cls.section }>
		<div className={ cls.content }>
			<h1>Hello World!</h1>
			<h2>{ Package.author.name } is here!</h2>
			<p role="text">
				I am a software engineer with extensive experience in<br aria-hidden />
				<span className={ cls.highlight }>.NET and React development</span><br aria-hidden />
				and you are on my website!
			</p>
			<div className={ cls.ctaButtons }>
				<Button as="next" href={ links.resume }>Download resume</Button>
				<Button appearance="secondary" as="next" href="#contacts">Contact me</Button>
			</div>
		</div>

		<div className={ cls.illustrations }>
			<Image className={ cls.main } src={ profilePicture.src } alt={ profilePicture.alt } loading="eager" />
			<Image className={ cls.secondary } src={ homeDecor.src } alt={ homeDecor.alt } loading="eager" />
		</div>
	</section>
);

export default FrontSection;
