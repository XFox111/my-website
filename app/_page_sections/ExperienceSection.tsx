import { experienceBgHorizontal, experienceBgVertical } from "@/_assets/decorations";
import experience, { WorkplaceEntry } from "@/_data/experience";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import cls from "./ExperienceSection.module.scss";

const ExperienceSection: React.FC = () => (
	<section id="experience" className={ cls.section }>
		<h2>My work experience</h2>

		<div className={ cls.timeline } role="list" aria-label="My work experience">
			<div aria-hidden className={ cls.line }>
				<Image className={ cls.trailHorizontal }
					alt={ experienceBgHorizontal.alt } src={ experienceBgHorizontal.src } />
				<Image className={ cls.trailVertical }
					alt={ experienceBgVertical.alt } src={ experienceBgVertical.src } />

				<i className={ cls.strip } />
			</div>
			{ experience.map((i, index) =>
				<div className={ cls.item } key={ index }
					tabIndex={ 0 } role="listitem" aria-label={ getAriaLabel(i) }>

					<p aria-hidden className={ cls.year }>{ i.year }</p>
					<i />
					<div className={ cls.description }>
						<p aria-hidden>{ i.place }</p>
						<h3 aria-hidden className={ cls.title }>{ i.title }</h3>
						<p aria-hidden={ !!i.tech }>{ i.tech ?? <Link href="#contacts">Contact me</Link> }</p>
					</div>
				</div>
			) }
		</div>
	</section>
);

function getAriaLabel(item: WorkplaceEntry): string
{
	const str: string[] = [];

	if (item.year)
		str.push(`${item.year} -`);

	str.push(item.title);

	if (item.place)
		str.push(`at ${item.place}`);

	if (item.tech)
		return str.join(" ") + `. ${item.tech}`;
	else
		return str.join(" ");

}

export default ExperienceSection;
