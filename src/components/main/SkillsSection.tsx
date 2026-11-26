"use client";

import skills from "@/data/sections/skills";
import ArrowDownload24Regular from "@fluentui/svg-icons/icons/arrow_download_24_regular.svg";
import ChevronLeft24Regular from "@fluentui/svg-icons/icons/chevron_left_24_regular.svg";
import ChevronRight24Regular from "@fluentui/svg-icons/icons/chevron_right_24_regular.svg";
import Image from "next/image";
import { ReactElement, useCallback, useState } from "react";
import Button from "../shared/Button";
import cls from "./SkillsSection.module.scss";
import gcls from "./gallery.module.scss";
import { mergeClasses } from "@/utils/styles";
import Clarity from "@microsoft/clarity";

export default function SkillsSection(): ReactElement {
	const [selection, setSelection] = useState<number>(0);

	const select = useCallback((index: number): void => {
		setSelection(index);
		try {
			Clarity.setTag("skills", "checked");
		} catch {}
	}, []);

	return (
		<section id="skills" className={mergeClasses(cls.section, gcls.section)}>
			<Title />

			<div className={mergeClasses(cls.illustrations, gcls.illustrations)}>
				{skills.map(({ title, image, description }, index) => (
					<div key={index} data-selected={selection === index} className={mergeClasses(cls.item, gcls.item)}>
						<Image src={image} alt="" loading="eager" />

						<h3>{title}</h3>
						<p>{description}</p>

						{selection === 4 && (
							// [SPECIAL] It's a surprise tool that will help us later
							<div
								role="button"
								aria-label="Click me"
								className={cls.whatsThis}
								onClick={() => {
									try {
										Clarity.event("roll");
									} catch {}
									window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
								}}
							/>
						)}
						{selection === 7 && (
							// [SPECIAL] sus
							<div
								role="button"
								aria-label="Click me"
								className={cls.sus}
								onClick={() => {
									try {
										Clarity.event("sus");
									} catch {}
									const track = new Audio("sus.mp3");
									track.volume = 0.1;
									track.play();
								}}
							/>
						)}
					</div>
				))}
			</div>

			<div className={gcls.listContainer}>
				<Title />

				<div className={gcls.list}>
					{skills.map(({ caption, icon: Icon, title }, index) => (
						<Button
							key={index}
							as="button"
							onClick={() => select(index)}
							data-selected={selection === index}
							icon={<Icon />}
							appearance="secondary"
						>
							<div>
								<span>{title}</span>
								<span>{caption}</span>
							</div>
						</Button>
					))}
				</div>

				<ResumeButton />
			</div>

			<div className={gcls.mobileNav}>
				<div className={gcls.controls}>
					<Button
						as="button"
						icon={<ChevronLeft24Regular />}
						aria-label="Previous skill"
						disabled={selection < 1}
						onClick={() => select(selection - 1)}
					/>

					{selection < skills.length - 1 && (
						<Button as="button" icon={<ChevronRight24Regular />} onClick={() => select(selection + 1)}>
							Next skill: {skills[selection + 1].title}
						</Button>
					)}
				</div>
				<ResumeButton />
			</div>
		</section>
	);
}

function Title(): ReactElement {
	return <h2>My skills &amp; tools</h2>;
}

function ResumeButton(): ReactElement {
	return (
		<Button
			as="next-link"
			href="/resume"
			appearance="secondary"
			icon={<ArrowDownload24Regular />}
			className={gcls.cta}
		>
			Download resume
		</Button>
	);
}
