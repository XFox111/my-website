import Package from "@/../package.json";
import { Metadata } from "next";
import { unstable_noStore } from "next/cache";
import { bioPremise } from "./bio";
import socials from "./socials";

export const canonicalName: URL = new URL(`https://${process.env.DOMAIN_NAME}`);
const baseTitle: string = "Eugene Fox - Software developer";

const gender: string = "male";
const keywords: string[] = ["Eugene Fox", "software developer", ".net", "react", "frontend developer", "backend developer", ".net developer", "react developer", "fullstack developer", "software engineer", "Michael Gordeev", "Mikhail Gordeev"];

export const getTitle = (pageTitle: string, customBase?: string): string =>
	pageTitle + " - " + (customBase ?? baseTitle);

export async function generateMetadata(): Promise<Metadata>
{
	unstable_noStore();
	return {
		title: baseTitle,
		description: bioPremise,
		metadataBase: canonicalName,
		openGraph:
		{
			title: baseTitle,
			description: bioPremise,
			type: "profile",
			firstName: Package.author.name.split(" ")[0],
			lastName: Package.author.name.split(" ")[1],
			gender,
			siteName: canonicalName.hostname,
			locale: "en_US"
		},
		twitter:
		{
			site: "@xfox111",
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
}
