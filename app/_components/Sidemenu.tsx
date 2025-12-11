"use client";

import links from "@/_data/links";
import socials from "@/_data/socials";
import Dismiss24Regular from "@fluentui/svg-icons/icons/dismiss_24_regular.svg";
import Navigation24Regular from "@fluentui/svg-icons/icons/navigation_24_regular.svg";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Button, { ButtonProps } from "./Button";
import NavigationLinks from "./NavigationLinks";
import cls from "./Sidemenu.module.scss";
import SocialLinks from "./SocialLinks";

const Sidemenu: React.FC<SidemenuProps> = ({ button, ...panelProps }) =>
{
	const [isOpen, setOpen] = useState<boolean>(false);
	const dialogRef = useRef<HTMLDialogElement>(null);

	const onCancel: React.ReactEventHandler<HTMLDialogElement> = useCallback((args) =>
	{
		args.preventDefault();
		setOpen(false);
		return true;
	}, []);

	// We use this method to enable user to close the menu by clicking ouside it.
	const onClick: React.MouseEventHandler<HTMLDialogElement> = useCallback((args) =>
	{
		const wrapper = args.currentTarget.childNodes[0];

		// If user clicked outside of the dialog boudaries, or clicked specifically on an anchor, we can close the menu
		if (!wrapper.contains(args.target as Node) || args.target instanceof HTMLAnchorElement)
			setOpen(false);
	}, []);

	useEffect(() =>
	{
		if (isOpen)
		{
			dialogRef.current?.showModal();
		}
		else if (dialogRef.current?.classList.contains(cls.show))	// This check is to prevent a bug when the menu is closed before opening
		{
			dialogRef.current?.addEventListener("transitionend", function WaitForClose()
			{
				dialogRef.current?.removeEventListener("transitionend", WaitForClose);
				dialogRef.current?.close();
			});
		}

		dialogRef.current?.classList.toggle(cls.show, isOpen);
	}, [isOpen]);

	return <>
		<Button { ...button }
			appearance="secondary"
			title="Menu"
			onClick={ () => setOpen(true) }
			icon={ <Navigation24Regular /> } />

		<dialog { ...panelProps } className={ `${cls.dialog} ${panelProps.className}` } ref={ dialogRef }
			onCancel={ onCancel } onClick={ onClick }>

			<div className={ cls.wrapper }>

				<header>
					<h3>Menu</h3>
					<Button
						appearance="secondary"
						title="Close"
						onClick={ () => setOpen(false) }
						icon={ <Dismiss24Regular /> } />
				</header>

				<NavigationLinks className={ cls.navigation } links={ { className: cls.link } } />
				<SocialLinks socials={ socials } />
				<Button className={ cls.resume } as="next" href={ links.resume }>Download resume</Button>

			</div>
		</dialog>
	</>;
};

export default Sidemenu;

export type SidemenuProps = React.DialogHTMLAttributes<HTMLDialogElement> & {
	button?: ButtonProps;
};
