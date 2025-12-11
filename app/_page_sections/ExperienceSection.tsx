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

					<div className={ cls.description }>
						{ i.description }
					</div>
					<p aria-hidden className={ cls.year } style={ index > 0 && experience[index - 1].year === i.year ? { fontSize: 0 } : undefined }>
						{ i.year }
					</p>
					<i />
					<div className={ cls.info }>
						<p aria-hidden>{ i.place }</p>
						<h3 aria-hidden className={ cls.title }>{ i.title }</h3>
						<p aria-hidden={ !!i.summary }>{ i.summary ?? <Link href="#contacts">Contact me</Link> }</p>
					</div>
				</div>
			) }
		</div>

		{/* <p>Deserunt esse irure duis magna irure. Eiusmod voluptate amet et elit adipisicing ut. Nulla minim elit anim mollit nisi amet est et magna veniam. Qui deserunt eiusmod laboris ex. Ex aute duis duis incididunt quis adipisicing dolor sit aliqua consectetur eu fugiat. Fugiat ipsum dolor elit ad commodo aliquip anim anim nostrud. Lorem adipisicing ex quis veniam aute amet cupidatat reprehenderit do laborum minim laboris sunt.</p> */}
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

	if (item.summary)
		return str.join(" ") + `. ${item.summary}`;
	else
		return str.join(" ");

}

export default ExperienceSection;
