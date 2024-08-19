import socials from "@/_data/socials";
import React from "react";
import { SocialIcon, networkFor, social_icons } from "react-social-icons";
import cls from "./SocialLinks.module.scss";

const SocialLinks: React.FC<SocialLinksProps> = ({ size = 50, ...props }) => (
	<div aria-label="Social links" { ...props } className={ `${cls.socials} ${props.className}` }>
		{ Object.entries(socials).map(([network, i]) =>

			<SocialIcon
				key={ network } title={ network }
				url={ i.href } target="_blank"

				className={ `${cls.link} ${cls[networkFor(i.href)] ?? ""}` }
				style={ {
					// @ts-expect-error Inline variables are not supported in TS definition, but it works.
					"--network-color": social_icons.get(networkFor(i.href))?.color,
					width: size,
					height: size
				} } />

		) }
	</div>
);

export default SocialLinks;

export type SocialLinksProps = React.HTMLAttributes<HTMLDivElement> & {
	size?: number;
};
