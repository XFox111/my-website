import TitleLogo from "@/_data/TitleLogo";
import links from "@/_data/links";
import socials from "@/_data/socials";
import React from "react";
import Button from "./Button";
import cls from "./Header.module.scss";
import NavigationLinks from "./NavigationLinks";
import Sidemenu from "./Sidemenu";
import SocialLinks from "./SocialLinks";

const Header: React.FC = () => (
	<header className={ cls.header }>
		<div>
			<TitleLogo />

			<NavigationLinks className={ cls.navigation } />
			<SocialLinks className={ cls.socials } size={ 40 } socials={ socials } />

			<Button className={ cls.resume } as="next" href={ links.resume }>
				Download resume
			</Button>

			<Sidemenu button={ { className: cls.sidemenu } } />
		</div>
	</header>
);

export default Header;
