import { MetadataRoute } from "next";
import { canonicalName } from "./_data/metadata";

export default function sitemap(): MetadataRoute.Sitemap
{
	return [
		{
			url: canonicalName.href,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 1
		},
		{
			url: new URL("/resume", canonicalName.href).href,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.2
		},
		{
			url: new URL("/attribution", canonicalName.href).href,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0
		}
	];
}
