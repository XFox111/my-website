import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Aldrich, Ubuntu, Ubuntu_Mono } from "next/font/google";

const AldrichFont = Aldrich({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-alt"
});

const UbuntuMonoFont = Ubuntu_Mono({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-mono"
});

const UbuntuFont = Ubuntu({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-base"
});

const fonts: NextFontWithVariable[] = [
	AldrichFont,
	UbuntuFont,
	UbuntuMonoFont
];

export default fonts;
