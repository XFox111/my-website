import links from "@/_data/links";
import Link from "next/link";
import React from "react";
import cls from "./NavigationLinks.module.scss";

const navLinks: { text: string, href: string; }[] =
	[
		{ text: "Home", href: "/" },
		{ text: "My skills", href: "/#skills" },
		{ text: "Projects", href: "/#projects" },
		{ text: "About", href: "/#about" },
		{ text: "Contacts", href: "/#contacts" }
	];

const NavigationLinks: React.FC<NavigationLinksProps> = ({ links: linkProps, ...props }) => (
	<nav role="navigation" { ...props } className={ `${cls.navigation} ${props.className}` }>

		{ navLinks.map((i, index) =>
			<Link key={ index } { ...linkProps }
				href={ i.href }
				className={ `${cls.link} ${linkProps?.className ?? ""}` }>

				{ i.text }
				<i />
			</Link>
		) }

		{ links.blog &&
			<Link { ...linkProps } className={ `${cls.link} ${linkProps?.className ?? ""}` }
				href={ links.blog } target="_blank">

				Blog
				<i />
			</Link>
		}

	</nav>
);

export default NavigationLinks;

export type NavigationLinksProps = React.HTMLAttributes<HTMLDivElement> & {
	links?: Omit<React.HTMLAttributes<HTMLAnchorElement>, "href">;
};
