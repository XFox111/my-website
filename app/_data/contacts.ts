import Package from "@/../package.json";
import socials, { Socials } from "./socials";

const contacts: ContactLinks =
{
	email:
	{
		text: Package.author.email,
		href: "mailto:" + Package.author.email
	},
	socials:
	{
		"LinkedIn": socials["LinkedIn"],
		"Facebook":
		{
			username: "@xfox111",
			href: "https://at.xfox111.net/facebook"
		},
		"WhatsApp":
		{
			username: "@xfox111",
			href: "https://at.xfox111.net/whatsapp",
			network: "whatsapp"
		}
	}
};

export default contacts;

export type ContactLinks =
	{
		email:
		{
			text: string;
			href: string;
		};
		telephone?:
		{
			text: string;
			href: string;
			country: string;
		};
		socials: Socials;
	};
