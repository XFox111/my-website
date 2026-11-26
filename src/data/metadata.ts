import Package from "@//package.json";
import { Metadata } from "next";

export const canonicalUrl: URL = new URL("https://xfox111.net");
export const title: string = "Eugene Fox - Software developer";

const [firstName, lastName] = Package.author.name.split(" ");

const description: string =
	"My name is Eugene Fox. I am a professional .NET/React developer.";

export const metadata: Metadata = {
	title: title,
	description,
	metadataBase: canonicalUrl,
	openGraph: {
		title: title,
		description,
		type: "profile",
		firstName,
		lastName,
		gender: "male",
		siteName: canonicalUrl.hostname,
		locale: "en_US"
	},
	twitter: {
		site: "@xfox111",
		card: "summary_large_image"
	},
	alternates: {
		canonical: canonicalUrl.href
	},
	authors: [
		{
			name: Package.author.name,
			url: Package.author.url
		}
	],
	keywords: [
		"Eugene Fox",
		"software developer",
		".net",
		"react",
		"frontend developer",
		"backend developer",
		".net developer",
		"react developer",
		"fullstack developer",
		"software engineer",
		"Michael Gordeev",
		"Mikhail Gordeev"
	]
};
