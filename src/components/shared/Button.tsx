import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactElement, ReactNode } from "react";
import cls from "./Button.module.scss";
import Link, { LinkProps } from "next/link";

export default function Button({
	as,
	icon,
	iconAfter,
	appearance = "primary",
	children,
	className,
	...props
}: ButtonProps): ReactElement {
	const classList: string[] = [cls.button, cls[appearance]];

	if (icon) classList.push(cls.iconBefore);
	if (iconAfter) classList.push(cls.iconAfter);
	if (children) classList.push(cls.content);
	if (className) classList.push(className);

	const classes: string = classList.join(" ");
	const Component = as === "next-link" ? Link : as;

	return (
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		<Component {...(props as any)} className={classes}>
			{icon}
			{children}
			{iconAfter}
		</Component>
	);
}

export type ButtonProps = (ButtonButtonProps | ButtonAnchorProps | ButtonLinkProps) & ButtonCommonProps;

type ButtonButtonProps = {
	as: "button";
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAnchorProps = {
	as: "a";
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonLinkProps = {
	as: "next-link";
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps<any>> &
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	LinkProps<any> & {
		children?: React.ReactNode | undefined;
	} & React.RefAttributes<HTMLAnchorElement>;

type ButtonCommonProps = {
	appearance?: "primary" | "secondary";
	icon?: ReactNode;
	iconAfter?: ReactNode;
	disabled?: boolean;
};
