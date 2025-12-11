"use client";

import Button from "@/_components/Button";
import links from "@/_data/links";
import skills from "@/_data/skills";
import shared from "@/_styles/gallery.module.scss";
import ArrowDownload24Regular from "@fluentui/svg-icons/icons/arrow_download_24_regular.svg";
import ChevronLeft24Regular from "@fluentui/svg-icons/icons/chevron_left_24_regular.svg";
import ChevronRight24Regular from "@fluentui/svg-icons/icons/chevron_right_24_regular.svg";
import Image from "next/image";
import React, { useCallback, useId, useState } from "react";
import cls from "./SkillsSection.module.scss";

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
					<div key={ index } className={ cls.item } hidden={ selection !== index }>
						<Image src={ i.image.src } alt={ i.image.alt } loading="eager" />

						<h3>{ i.title }</h3>
						<p>{ i.description }</p>

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
						{ selection === 7 &&
							// [SPECIAL] sus
							<div role="button" aria-label="Click me"
								className={ cls.sus }
								onClick={ () =>
								{
									window.clarity?.("event", "sus");
									const track = new Audio("sus.mp3");
									track.volume = 0.1;
									track.play();
								} } />
						}
					</div>
				) }

				<div className={ cls.mobileNav }>
					<Button type="button"
						icon={ <ChevronLeft24Regular /> }
						aria-label="Previous skill"
						disabled={ selection < 1 }
						onClick={ () => setSelection(selection - 1) } />

					{ selection < skills.length - 1 &&
						<Button type="button" className={ cls.next }
							icon={ <ChevronRight24Regular /> }
							onClick={ () => setSelection(selection + 1) } >

							Next skill: { skills[selection + 1].title }
						</Button>
					}
				</div>

			</div>
			<div className={ cls.content }>
				<h2>My skills &amp; tools</h2>

				<div className={ `${shared.list} ${cls.list}` }>
					{ skills.map((skill, index) =>
						<Button key={ index } type="button" aria-current={ selection === index } aria-controls={ illustrations }
							className={ shared.listItem } appearance={ selection === index ? "primary" : "secondary" }
							data-selected={ selection === index }
							onClick={ () => select(index) }
							aria-label={ `${skill.title} skills. Associated stack: ${skill.caption}` }
							icon={ <skill.icon /> } >

							<div className={ shared.content }>
								<span className={ shared.title }>{ skill.title }</span>
								<span>{ skill.caption }</span>
							</div>
						</Button>
					) }
				</div>

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
