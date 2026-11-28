"use client";

import Button from "@/components/shared/Button";
import ResumeButton from "@/components/shared/ResumeButton";
import { mergeClasses } from "@/utils/styles";
import Dismiss24Regular from "@fluentui/svg-icons/icons/dismiss_24_regular.svg";
import Navigation24Regular from "@fluentui/svg-icons/icons/navigation_24_regular.svg";
import { HTMLAttributes, ReactElement, ReactEventHandler, useCallback, useEffect, useRef, useState } from "react";
import TitleLogo from "../../../data/components/TitleLogo";
import NavigationLinks from "./NavigationLinks";
import cls from "./Sidemenu.module.scss";
import Socials from "./Socials";

export default function Sidemenu({ button: buttonProps, ...props }: SidemenuProps): ReactElement {
	const [open, setOpen] = useState<boolean>(false);
	const dialogRef = useRef<HTMLDialogElement>(null);

	const onCancel: ReactEventHandler<HTMLDialogElement> = useCallback((args) => {
		args.preventDefault();
		setOpen(false);
		return true;
	}, []);

	const onClick: ReactEventHandler<HTMLDialogElement> = useCallback((args) => {
		const wrapper = args.currentTarget.childNodes[0];

		// If user clicked outside of the dialog boundaries, or clicked specifically on an anchor, we can close the menu
		if (!wrapper.contains(args.target as Node) || args.target instanceof HTMLAnchorElement) setOpen(false);
	}, []);

	useEffect(() => {
		if (open) {
			dialogRef.current?.showModal();
		} else if (
			dialogRef.current?.classList.contains(cls.show)
		) // This check is to prevent a bug when the menu is closed before opening
		{
			dialogRef.current?.addEventListener("transitionend", function onAnimationEnd() {
				dialogRef.current?.removeEventListener("transitionend", onAnimationEnd);
				dialogRef.current?.close();
			});
		}

		dialogRef.current?.classList.toggle(cls.show, open);
	}, [open]);

	return (
		<>
			<Button
				as="button"
				title="Menu"
				appearance="secondary"
				icon={<Navigation24Regular />}
				aria-label="open menu"
				{...buttonProps}
				onClick={() => setOpen(true)}
			/>

			<dialog
				{...props}
				onCancel={onCancel}
				onClick={onClick}
				ref={dialogRef}
				className={mergeClasses(cls.dialog, props.className)}
			>
				<div className={cls.wrapper}>
					<header>
						<TitleLogo />
						<Button
							as="button"
							title="Close"
							appearance="secondary"
							icon={<Dismiss24Regular />}
							aria-label="close menu"
							onClick={() => setOpen(false)}
						/>
					</header>

					<NavigationLinks className={cls.nav} />
					<Socials className={cls.socials} />
					<ResumeButton />
				</div>
			</dialog>
		</>
	);
}

export type SidemenuProps = React.DialogHTMLAttributes<HTMLDialogElement> & {
	button?: HTMLAttributes<HTMLButtonElement>;
};
