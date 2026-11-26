import ContactsSection from "@/components/main/ContactsSection";
import ExperienceSection from "@/components/main/ExperienceSection";
import ProjectsSection from "@/components/main/ProjectsSection";
import SkillsSection from "@/components/main/SkillsSection";
import FrontSection from "@/data/components/FrontSection";
import { About, image as aboutImage } from "@/data/sections/about";
import Image from "next/image";
import { ReactElement } from "react";
import cls from "./page.module.scss";

export default function Home(): ReactElement {
	return (
		<main className={cls.page}>
			<article>
				<FrontSection />
				<section className={cls.about} id="about">
					<Image src={aboutImage} alt="" />

					<div className={cls.content}>
						<h2>About me</h2>

						<About />
					</div>
				</section>
				<SkillsSection />
				<ExperienceSection />
				<ProjectsSection />
				<ContactsSection />
			</article>
		</main>
	);
}
