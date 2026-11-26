import experience from "@/data/sections/experience";
import { mergeClasses } from "@/utils/styles";
import experienceBgVertical from "@assets/decorations/pawprint-trail-vertical.svg";
import experienceBgHorizontal from "@assets/decorations/pawprint-trail.svg";
import Image from "next/image";
import { ReactElement } from "react";
import cls from "./ExperienceSection.module.scss";

export default function ExperienceSection(): ReactElement {
	return (
		<section id="experience" className={cls.section}>
			<h2>My work experience</h2>

			<div role="list" className={cls.timeline}>
				<Image className={mergeClasses(cls.trail, cls.horizontal)} alt="" src={experienceBgHorizontal} />
				<Image className={mergeClasses(cls.trail, cls.vertical)} alt="" src={experienceBgVertical} />
				{experience.map(({ description, year, place, summary, title }, index) => (
					<div key={index} tabIndex={0} role="listitem" className={cls.item}>
						<div className={cls.info}>
							<p className={mergeClasses(cls.place, cls.secondary)}>{place}</p>
							<h3 className={mergeClasses(cls.title, cls.primary)}>{title}</h3>
							<p className={mergeClasses(cls.summary, cls.secondary)}>{summary}</p>
						</div>
						<p
							className={mergeClasses(cls.year, cls.primary)}
							data-duplicate={index > 0 && experience[index - 1].year === year}
						>
							{year}
						</p>
						<div className={cls.description}>{description}</div>
					</div>
				))}
			</div>
		</section>
	);
}
