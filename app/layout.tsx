import { metadata as myMetadata } from "@/_data/metadata";
import type { Metadata, Viewport } from "next";
import { headers as getHeaders } from "next/headers";
import Script from "next/script";
import { PropsWithChildren } from "react";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import fonts from "./fonts";
import "./globals.scss";

export const viewport: Viewport =
{
	themeColor:
		[
			{ media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
			{ media: "(prefers-color-scheme: dark)", color: "#242424" }
		],
	colorScheme: "light dark"
};

export const metadata: Metadata = myMetadata;

export default function RootLayout(props: PropsWithChildren)
{
	const headers = getHeaders();

	return (
		<html lang="en" className={ fonts.map(i => i.variable).join(" ") }>
			{ headers.get("Dnt") !== "1" && process.env.CLARITY_ID &&
				// If "Do Not Track" is enabled, or there's no CLARITY_ID set up, we don't load any analytics
				<Script id="ms-clarity" src="/clarity.js" data-id={ process.env.CLARITY_ID } />
			}
			<body>
				<Header />
				{ props.children }
				<Footer />
			</body>
		</html>
	);
}
