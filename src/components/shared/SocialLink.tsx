import { mergeClasses } from "@/utils/styles";
import { AnchorHTMLAttributes, ReactElement } from "react";
import { networkFor, social_icons, SocialIconObject } from "react-social-icons";
import cls from "./SocialLink.module.scss";

export default function SocialLink({ network, ...props }: SocialLinkProps): ReactElement {
	const icon: SocialIconObject =
		social_icons.get(network ?? networkFor(props.href)) ?? social_icons.get("sharethis")!;
	return (
		<a
			target="_blank"
			{...props}
			className={mergeClasses(cls.link, "social-icon", props.className)}
			data-network={network}
		>
			<svg viewBox="0 0 64 64">
				<path data-color={icon.color} className={cls.icon} d={`M0,0H64V64H0Z${icon.path}`} />
				<path data-color={icon.color} className={cls.mask} d={icon.path} />
			</svg>
		</a>
	);
}

export type SocialLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
	network?: string;
};
