import Link, { LinkProps } from "next/link";
import React, { useMemo } from "react";
import cls from "./Button.module.scss";

const Button: React.FC<ButtonProps> = ({
	as = "button",
	iconAfter,
	icon,
	appearance = "primary",
	children,
	...props
}) =>
{
	const Component = as === "button" && !props.href ?
		"button" :
		as === "next" ?
			Link : "a";

	const classList: string = useMemo(() =>
	{
		const list: string[] = [ cls.button, cls[appearance] ];

		// We need these classes to differentiate content in CSS
		if (icon)
			list.push(cls.iconBefore);
		if (iconAfter)
			list.push(cls.iconAfter);
		if (children)
			list.push(cls.content);

		if (props.className)
			list.push(props.className);

		return list.join(" ");
	}, [appearance, children, icon, iconAfter, props.className]);

	return (
		<Component { ...props as any } className={ classList }>
			{ icon }
			{ children }
			{ iconAfter }
		</Component>
	);
};

export default Button;

// Since we want to render button as both "a" and "button" (depending on the props) we do a little trick here
// Shorthand types
type HtmlButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">;
type HtmlAnchorProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "type">;
type NextLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & LinkProps & {
	children?: React.ReactNode;
} & React.RefAttributes<HTMLAnchorElement>;

type ButtonOrAnchorProps =
	| ({ as?: "a"; href?: string; } & HtmlAnchorProps) // If href is present, it must be an <a>
	| ({ as?: "button"; href?: undefined; } & HtmlButtonProps) // If href is absent, it is a <button>
	| ({ as: "next"; } & NextLinkProps);

// Extend the common props
type CommonProps =
	{
		appearance?: "primary" | "secondary";

		iconAfter?: React.ReactNode;
		icon?: React.ReactNode;
		disabled?: boolean;
		children?: React.ReactNode;
	};

export type ButtonProps = ButtonOrAnchorProps & CommonProps;
