import Button from "@/components/shared/Button";
import { resumeLink } from "@/data/links";
import { ReactElement } from "react";
import TitleLogo from "../../../data/components/TitleLogo";
import cls from "./Header.module.scss";
import NavigationLinks from "./NavigationLinks";
import Sidemenu from "./Sidemenu";
import Socials from "./Socials";

export default function Header(): ReactElement {
	return (
		<header className={cls.header}>
			<div className={cls.container}>
				<TitleLogo />
				<NavigationLinks className={cls.nav} />
				<Socials className={cls.socials} />
				<Button as="next-link" href={resumeLink} className={cls.resume}>
					Download resume
				</Button>
				<Sidemenu button={{ className: cls.menu }} />
			</div>
		</header>
	);
}
