import { canonicalUrl } from "@/data/metadata";
import { MetadataRoute } from "next";

const date = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: canonicalUrl.href,
			lastModified: date,
			changeFrequency: "monthly",
			priority: 1
		},
		{
			url: new URL("/resume", canonicalUrl).href,
			lastModified: date,
			changeFrequency: "yearly",
			priority: 0.5
		},
		{
			url: new URL("/attribution", canonicalUrl).href,
			lastModified: date,
			changeFrequency: "yearly",
			priority: 0.1
		}
	];
}
