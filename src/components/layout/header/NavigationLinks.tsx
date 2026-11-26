import { navLinks } from "@/data/links";
import { mergeClasses } from "@/utils/styles";
import Link from "next/link";
import { HTMLAttributes, ReactElement } from "react";
import cls from "./NavigationLinks.module.scss";

export default function NavigationLinks(props: HTMLAttributes<HTMLDivElement>): ReactElement {
	return (
		<nav role="navigation" {...props} className={mergeClasses(cls.nav, props.className)}>
			{navLinks.map((link) => (
				<Link key={link.href} href={link.href} target={link.target} className={cls.link}>
					{link.text}
				</Link>
			))}
		</nav>
	);
}
