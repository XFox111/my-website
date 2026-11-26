export const navLinks: { text: string; href: string; target?: "_blank" }[] = [
	{ text: "Home", href: "/" },
	{ text: "My skills", href: "/#skills" },
	{ text: "Projects", href: "/#projects" },
	{ text: "About", href: "/#about" },
	{ text: "Contacts", href: "/#contacts" },
	{
		text: "Blog",
		href: "https://at.xfox111.net/blog?utm_source=website&utm_medium=website&utm_campaign=default",
		target: "_blank"
	}
];

export const resumeLink: string = "/resume";

export const socials: SocialLinkItem[] = [
	{
		href: "https://at.xfox111.net/github?utm_source=website&utm_medium=website&utm_campaign=default",
		title: "GitHub",
		network: "github"
	},
	{
		href: "https://at.xfox111.net/linkedin?utm_source=website&utm_medium=website&utm_campaign=default",
		title: "LinkedIn",
		network: "linkedin"
	},
	{
		href: "https://at.xfox111.net/bluesky?utm_source=website&utm_medium=website&utm_campaign=default",
		title: "Bluesky",
		network: "bsky.app"
	}
];

export const contacts: SocialLinkItem[] = [
	{
		href: "https://at.xfox111.net/linkedin?utm_source=website&utm_medium=website&utm_campaign=default",
		title: "LinkedIn",
		network: "linkedin"
	},
	{
		href: "https://at.xfox111.net/facebook?utm_source=website&utm_medium=website&utm_campaign=default",
		title: "Facebook",
		network: "facebook"
	},
	{
		href: "https://at.xfox111.net/whatsapp?utm_source=website&utm_medium=website&utm_campaign=default",
		title: "WhatsApp",
		network: "whatsapp"
	}
];

export type SocialLinkItem = { href: string; title?: string; network?: string };
