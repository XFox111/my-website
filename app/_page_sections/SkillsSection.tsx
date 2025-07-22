"use client";

import Button from "@/_components/Button";
import skills from "@/_data/skills";
import shared from "@/_styles/gallery.module.scss";
import { ArrowDownload24Regular } from "@fluentui/react-icons";
import Image from "next/image";
import React, { useCallback, useId, useState } from "react";
import cls from "./SkillsSection.module.scss";
import links from "@/_data/links";

const SkillsSection: React.FC = () =>
{
	const [selection, setSelection] = useState<number>(0);
	const illustrations = useId();

	const select = useCallback((index: number) =>
	{
		setSelection(index);
		window.clarity?.("set", "checked", "skills");
	}, []);

	return (
		<section id="skills" className={ cls.section }>
			<div id={ illustrations } className={ cls.illustrations } aria-live="polite" aria-atomic>
				{ skills.map((i, index) =>
					<Image key={ index }
						src={ i.image.src } alt={ i.image.alt }
						hidden={ selection !== index } loading="eager" />
				) }

				{ selection === 4 &&
					// [SPECIAL] It's a surprize tool that will help us later
					<div role="button" aria-label="Click me"
						className={ cls.whatsThis }
						onClick={ () =>
						{
							window.clarity?.("event", "ngguu");
							window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
						} } />
				}
			</div>
			<div className={ `${shared.list} ${cls.list}` }>
				<h2>My skillset</h2>

				{ skills.map((skill, index) =>
					<Button key={ index } type="button" aria-current={ selection === index } aria-controls={ illustrations }
						className={ shared.listItem } appearance={ selection === index ? "primary" : "secondary" }
						data-selected={ selection === index }
						onClick={ () => select(index) }
						aria-label={ `${skill.title} skills. Associated stack: ${skill.description}` }
						icon={ <skill.icon /> } >

						<div className={ shared.content }>
							<span className={ shared.title }>{ skill.title }</span>
							<span>{ skill.description }</span>
						</div>
					</Button>
				) }

				<Button appearance="secondary" className={ cls.cta }
					as="next" href={ links.resume }
					icon={ <ArrowDownload24Regular /> }>

					Download resume
				</Button>
			</div>
		</section>
	);
};

export default SkillsSection;
