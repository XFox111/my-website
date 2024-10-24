export { generateMetadata } from "@/_data/metadata";
import type { Viewport } from "next";
import Script from "next/script";
import { PropsWithChildren } from "react";
import CookieBanner from "./_components/CookieBanner";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import { analyticsEnabled, requireExplicitConsent } from "./_utils/analytics/server";
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
			{ analyticsEnabled() &&
				<Script id="ms-clarity" src="/clarity.js" data-id={ process.env.CLARITY_ID } />
			}
			<body>
				{ analyticsEnabled() &&
					<CookieBanner askForConsent={ requireExplicitConsent() } />
				}

				<Header />
				{ props.children }
				<Footer />
			</body>
		</html>
	);
}
