import SocialLink from "@/components/shared/SocialLink";
import { socials } from "@/data/links";
import { HTMLAttributes, ReactElement } from "react";

export default function Socials(props: HTMLAttributes<HTMLDivElement>): ReactElement {
	return (
		<div {...props}>
			{socials.map(({ href, network, title }, index) => (
				<SocialLink key={index} href={href} network={network} title={title} />
			))}
		</div>
	);
}
