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
			href: "https://facebook.com/xfox111"
		},
		"WhatsApp":
		{
			username: "@xfox111",
			href: "https://wa.me/79969291969",
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
