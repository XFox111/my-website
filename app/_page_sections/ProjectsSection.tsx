"use client";

import { projectsImg } from "@/_assets/illustrations";
import Button from "@/_components/Button";
import links from "@/_data/links";
import projects from "@/_data/projects";
import shared from "@/_styles/gallery.module.scss";
import { ArrowRight24Regular } from "@fluentui/react-icons";
import Image from "next/image";
import React, { useState } from "react";
import { networkFor } from "react-social-icons";
import cls from "./ProjectsSection.module.scss";

const ProjectsSection: React.FC = () =>
{
	const [selection, setSelection] = useState<number | undefined>(undefined);

	return (
		<section id="projects" className={ cls.section }>
			<div className={ shared.list }>
				<h2>My pet projects</h2>

				{ projects.map((project, index) =>
					<Button key={ index } type="button"
						className={ `${shared.listItem} ${cls.listItem}` }
						appearance={ selection === index ? "primary" : "secondary" }
						data-selected={ selection === index }
						onClick={ () => setSelection(selection == index ? undefined : index) }
						aria-label={ `"${project.title}". ${project.subtitle}` }>

						<div className={ shared.content }>
							<span className={ shared.title }>{ project.title }</span>
							<span>{ project.subtitle }</span>
						</div>
					</Button>
				) }

				<Button className={ cls.cta } appearance="secondary" href={ links.github } target="_blank"
					iconAfter={ <ArrowRight24Regular /> }>

					View GitHub profile
				</Button>
			</div>

			<div className={ cls.descriptions } aria-live="polite" aria-atomic>
				{ projects.map((project, index) =>
					<div key={ index } className={ cls.projectItem } hidden={ selection !== index }>
						<Image src={ project.image } alt={ project.title } data-theme={ project.imageDark ? "light" : "both" } />
						{/* This is a workaround since not all images can be theme-adaptive */ }
						{ project.imageDark &&
							<Image src={ project.imageDark } alt="" data-theme="dark" />
						}

						<h3>{ project.title }</h3>

						{ project.description?.map((i, index) =>
							<p key={ index }>{ i }</p>
						) }

						<h4>Stack</h4>
						<div className={ cls.stack }>
							{ project.stack.map((i, index) =>
								<div key={ index } className={ cls.item }>
									<i.icon /> { i.text }
								</div>
							) }
						</div>

						<Button className={ cls.cta } appearance="secondary" href={ project.link } target="_blank"
							iconAfter={ <ArrowRight24Regular /> }>

							{ networkFor(project.link) === "github" ? "View on GitHub" : "Visit project page" }
						</Button>
					</div>
				) }
				<Image className={ cls.defaultImg } hidden={ selection !== undefined }
					src={ projectsImg.src } alt={ projectsImg.alt } />
			</div>
		</section>
	);
};

export default ProjectsSection;
