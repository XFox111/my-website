import Button from "@/_components/Button";
import links from "@/_data/links";
import { getTitle } from "@/_data/metadata";
import resumeList from "@/_data/resumeList";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import { SocialIcon, social_icons } from "react-social-icons";
import cls from "./page.module.scss";

export const metadata: Metadata =
{
	title: getTitle("Resume")
};

// [SPECIAL]

const ResumePage: React.FC = () => (
	<main className={ cls.page }>

		<h1>Who are you looking for?</h1>
		<div className={ cls.resumeButtons }>
			{ resumeList.map(i =>
				<Button key={ i.key } className={ cls.button }
					href={ `/resume/download?type=${i.key}` } download
					icon={
						<Image className={ cls.image } src={ i.image.src } priority draggable={ false }
							aria-hidden alt={ i.image.alt } />
					}>

					{ i.label }
				</Button>
			) }
		</div>

		{ links.linkedin &&
			<>
				<p>You can also check out my</p>
				<Button href={ links.linkedin } target="_blank"
					className={ cls.linkedin }
					// @ts-expect-error Inline variables are not supported by TS definition, although they work as intended.
					style={ { "--network-color": social_icons.get("linkedin")!.color } }
					icon={ <SocialIcon network="linkedin" as="i" aria-hidden /> }>

					LinkedIn profile
					<span className={ cls.circle } />
				</Button>
			</>
		}

	</main>
);

export default ResumePage;
