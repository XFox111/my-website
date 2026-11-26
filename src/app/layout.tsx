import CookieBanner from "@/components/cookies/CookieBanner";
import "@/styles/globals.scss";
import type { Viewport } from "next";
import { type ReactElement } from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/header/Header";
import fonts from "../utils/fonts";

export { metadata } from "@/data/metadata";

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
		{ media: "(prefers-color-scheme: dark)", color: "#242424" }
	],
	colorScheme: "dark light"
};

export default function RootLayout({ children }: LayoutProps<"/">): ReactElement {
	return (
		<html lang="en" className={fonts.map((font) => font.variable).join(" ")} data-scroll-behavior="smooth">
			<body>
				<CookieBanner />
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
