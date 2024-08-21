export { generateMetadata } from "@/_data/metadata";
import type { Viewport } from "next";
import Script from "next/script";
import { PropsWithChildren } from "react";
import CookieBanner from "./_components/CookieBanner";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { canLoadAnalytics, requireExcplicitConsent } from "./_utils/analytics/server";
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

export default function RootLayout(props: PropsWithChildren)
{
	return (
		<html lang="en" className={ fonts.map(i => i.variable).join(" ") }>
			{ canLoadAnalytics() &&
				// If "Do Not Track" is enabled, or there's no CLARITY_ID set up, we don't load any analytics
				<Script id="ms-clarity" src="/clarity.js" data-id={ process.env.CLARITY_ID } />
			}
			<body>
				{ canLoadAnalytics() && <CookieBanner askForConsent={ requireExcplicitConsent() } /> }
				<Header />
				{ props.children }
				<Footer />
			</body>
		</html>
	);
}
