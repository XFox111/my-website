import { canonicalUrl } from "@/data/metadata";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: ["/$"],
			disallow: ["/"]
		},
		sitemap: new URL("/sitemap.xml", canonicalUrl.href).href
	};
}
