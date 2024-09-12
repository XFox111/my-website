import React from "react";
import AlertMessage from "./_components/AlertMessage";
import FrontSection from "./_data/FrontSection";
import AboutSection from "./_page_sections/AboutSection";
import ContactSection from "./_page_sections/ContactSection";
import ExperienceSection from "./_page_sections/ExperienceSection";
import ProjectsSection from "./_page_sections/ProjectsSection";
import SkillsSection from "./_page_sections/SkillsSection";
import cls from "./page.module.scss";

const HomePage: React.FC = () => (
	<main className={ cls.page }>

		<AlertMessage />

		<article>
			<FrontSection />

			<SkillsSection />
			<ProjectsSection />
			<ExperienceSection />
			<AboutSection />
			<ContactSection />
		</article>
	</main>
);

export default HomePage;
