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
			<h1>Hello there!</h1>
			<h2>My name is <span className="hl">{ Package.author.name }</span></h2>
			<p role="text">
				I am a <span className="hl">software engineer</span> from Russia<br aria-hidden /> with extensive experience
				in <span className="hl">.NET and React</span> development
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
