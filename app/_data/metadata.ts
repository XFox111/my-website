import { Metadata } from "next";
import bio from "./bio";
import socials from "./socials";
import Package from "@/../package.json";

export const canonicalName: URL = new URL("https://xfox111.net");
const baseTitle: string = "Eugene Fox - Software developer";

const gender: string = "male";
const keywords: string[] = ["Eugene Fox", "software developer", ".net", "react", "frontend developer", "backend developer", ".net developer", "react developer", "fullstack developer", "software engineer", "Michael Gordeev", "Mikhail Gordeev"];

export const getTitle = (pageTitle: string, customBase?: string): string =>
	pageTitle + " - " + (customBase ?? baseTitle);

export const metadata: Metadata =
{
	title: baseTitle,
	description: bio[0],
	metadataBase: canonicalName,
	openGraph:
	{
		title: baseTitle,
		description: bio[0],
		type: "profile",
		firstName: Package.author.name.split(" ")[0],
		lastName: Package.author.name.split(" ")[1],
		gender,
		username: socials["Twitter"].username,
		siteName: canonicalName.hostname,
		locale: "en_US"
	},
	twitter:
	{
		site: socials["Twitter"].username,
		card: "summary_large_image"
	},
	alternates:
	{
		canonical: canonicalName.href
	},
	authors: [
		{
			name: Package.author.name,
			url: socials["LinkedIn"].href
		}
	],
	keywords
};
