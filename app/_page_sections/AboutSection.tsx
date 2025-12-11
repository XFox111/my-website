import { aboutPicture } from "@/_assets/illustrations";
import Bio from "@/_data/bio";
import Image from "next/image";
import React from "react";
import cls from "./AboutSection.module.scss";

const AboutSection: React.FC = () => (
	<section id="about" className={ cls.section }>
		<Image src={ aboutPicture.src } alt={ aboutPicture.alt } />

		<div className={ cls.content }>
			<h2>About me</h2>

			<Bio />
		</div>
	</section>
);

export default AboutSection;
