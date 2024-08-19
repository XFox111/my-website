import socials, { Socials } from "./socials";
import Package from "@/../package.json";

const contacts: ContactLinks =
{
	email:
	{
		text: Package.author.email,
		href: "mailto:" + Package.author.email
	},
	telephone:
	{
		text: "+7 996 929-19-69",
		href: "tel:79969291969",
		country: "Russia"
	},
	socials:
	{
		"LinkedIn": socials["LinkedIn"],
		"Telegram":
		{
			username: "@xfox111",
			href: "https://t.me/xfox111"
		},
		"Twitter": socials["Twitter"]
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
