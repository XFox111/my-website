"use client";

import { githubLink } from "@/data/links";
import projects from "@/data/sections/projects";
import { mergeClasses } from "@/utils/styles";
import projectsImage from "@assets/illustrations/pet-projects.svg";
import ArrowRight24Regular from "@fluentui/svg-icons/icons/arrow_right_24_regular.svg";
import ChevronLeft24Regular from "@fluentui/svg-icons/icons/chevron_left_24_regular.svg";
import ChevronRight24Regular from "@fluentui/svg-icons/icons/chevron_right_24_regular.svg";
import Clarity from "@microsoft/clarity";
import Image from "next/image";
import { ReactElement, useCallback, useState } from "react";
import Button from "../shared/Button";
import gcls from "./gallery.module.scss";
import cls from "./ProjectsSection.module.scss";

export default function ProjectsSection(): ReactElement {
	const [selection, setSelection] = useState<number>(-1);

	const select = useCallback((index: number) => {
		setSelection(index);
		try {
			Clarity.setTag("projects", "checked");
		} catch {}
	}, []);

	return (
		<section id="projects" className={gcls.section}>
			<div className={gcls.listContainer}>
				<Title />
				<div className={mergeClasses(cls.list, gcls.list)}>
					{projects.map(({ title, subtitle }, index) => (
						<Button
							key={index}
							as="button"
							onClick={() => select(selection === index ? -1 : index)}
							data-selected={selection === index}
							appearance="secondary"
						>
							<div>
								<span>{title}</span>
								<span>{subtitle}</span>
							</div>
						</Button>
					))}
				</div>
				<GithubButton />
			</div>

			<Title />

			<div className={mergeClasses(cls.illustrations, gcls.illustrations)}>
				{projects.map(({ image, imageDark, title, description, stack, link }, index) => (
					<div key={index} data-selected={selection === index} className={mergeClasses(cls.item, gcls.item)}>
						<Image src={image} data-theme={imageDark ? "light" : "both"} alt="" />
						{imageDark && <Image src={imageDark} data-theme="dark" alt="" />}

						<h3>{title}</h3>

						{description}

						<h4>Stack</h4>
						<div className={cls.stack}>
							{stack.map(({ text, icon: Icon }, index) => (
								<div key={index}>
									<Icon />
									{text}
								</div>
							))}
						</div>

						<Button
							as="a"
							href={link}
							target="_blank"
							icon={<ArrowRight24Regular />}
							appearance="secondary"
						>
							Visit project page
						</Button>
					</div>
				))}

				<Image className={gcls.item} src={projectsImage} alt="" data-selected={selection === -1} />
			</div>

			<div className={gcls.mobileNav}>
				<div className={gcls.controls}>
					<Button
						as="button"
						icon={<ChevronLeft24Regular />}
						aria-label="Previous skill"
						disabled={selection < 0}
						onClick={() => select(selection - 1)}
					/>

					{selection < projects.length - 1 && (
						<Button
							as="button"
							className={gcls.next}
							icon={<ChevronRight24Regular />}
							onClick={() => select(selection + 1)}
						>
							Next project: {projects[selection + 1].title}
						</Button>
					)}
				</div>
				<GithubButton />
			</div>
		</section>
	);
}

function Title(): ReactElement {
	return <h2>My pet projects</h2>;
}

function GithubButton(): ReactElement {
	return (
		<Button
			as="next-link"
			href={githubLink}
			appearance="secondary"
			icon={<ArrowRight24Regular />}
			className={gcls.cta}
		>
			View GitHub profile
		</Button>
	);
}
