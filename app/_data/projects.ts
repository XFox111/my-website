import ezlogImg from "@/_assets/illustrations/projects/EasyLogon.svg";
import foxTubeDark from "@/_assets/illustrations/projects/FoxTube/FoxTube-dark.webp";
import foxTubeLight from "@/_assets/illustrations/projects/FoxTube/FoxTube-light.webp";
import gutScheduleImg from "@/_assets/illustrations/projects/GUTSchedule.svg";
import motionDecoderDark from "@/_assets/illustrations/projects/MotionDecoder/MotionDecoder-dark.webp";
import motionDecoderLight from "@/_assets/illustrations/projects/MotionDecoder/MotionDecoder-light.webp";
import passwordGeneratorDark from "@/_assets/illustrations/projects/PasswordGenerator/PasswordGeneratorExtension-dark.webp";
import passwordGeneratorLight from "@/_assets/illustrations/projects/PasswordGenerator/PasswordGeneratorExtension-light.webp";
import simpleOtpImg from "@/_assets/illustrations/projects/SimpleOTP.svg";
import tabsAsideDark from "@/_assets/illustrations/projects/TabsAside/dark.webp";
import tabsAsideLight from "@/_assets/illustrations/projects/TabsAside/light.webp";
import Beaker24Regular from "@fluentui/svg-icons/icons/beaker_24_regular.svg";
import Branch24Regular from "@fluentui/svg-icons/icons/branch_24_regular.svg";
import Code24Regular from "@fluentui/svg-icons/icons/code_24_regular.svg";
import Color24Regular from "@fluentui/svg-icons/icons/color_24_regular.svg";
import Database24Regular from "@fluentui/svg-icons/icons/database_24_regular.svg";
import Desktop24Regular from "@fluentui/svg-icons/icons/desktop_24_regular.svg";
import FlashFlow24Regular from "@fluentui/svg-icons/icons/flash_flow_24_regular.svg";
import FlashSettings24Regular from "@fluentui/svg-icons/icons/flash_settings_24_regular.svg";
import Globe24Regular from "@fluentui/svg-icons/icons/globe_24_regular.svg";
import HeartPulse24Regular from "@fluentui/svg-icons/icons/heart_pulse_24_regular.svg";
import Phone24Regular from "@fluentui/svg-icons/icons/phone_24_regular.svg";
import PhoneDesktop24Regular from "@fluentui/svg-icons/icons/phone_desktop_24_regular.svg";
import Server24Regular from "@fluentui/svg-icons/icons/server_24_regular.svg";
import { StaticImageData } from "next/image";

const projects: Project[] =
	[
		{
			title: "EasyLogon",
			subtitle: "QR code authentication on any website",
			description:
				[
					"During one of the classes at university I struggled to log into my account on a lab computer. I have long random passwords, so I had to type them manually from my phone which took about 5 minutes. I thought that there must be a better way to do this.",
					"So, I came up with this idea where you can easily send your credentials to any computer by simply scanning a QR code with a password manager app (this was before WebAuthn became widely adopted).",
					"In the end, I have created a big web service with mobile app and a customer portal, that could authenticate users on any website, and any device within a few seconds."
				],
			image: ezlogImg,
			link: "https://github.com/xfox111/easylogon-web",
			stack:
				[
					{ text: "C#/TypeScript", icon: Code24Regular },
					{ text: ".NET 6", icon: Server24Regular },
					{ text: "React/Vite", icon: PhoneDesktop24Regular },
					{ text: "Xamarin.Forms", icon: Phone24Regular },
					{ text: "SQL Server", icon: Database24Regular },
					{ text: "Azure DevOps", icon: Branch24Regular },
					{ text: "Azure Pipelines/GitHub Actions", icon: FlashFlow24Regular }
				]
		},
		{
			title: "Tabs aside",
			subtitle: "Browser extension inspired by Edge's \"Tabs aside\" and Collections features",
			description:
				[
					"Initially built on pure JS/CSS this extension was designed to recreate the \"Tabs aside\" feature that Microsoft introduced in their EdgeHTML-based Microsoft Edge browser but removed it in subsequent Chromium-based version.",
					"Later I rewrote it in ReactJS and TypeScript, and added new and unique features, yet still maintaining that original aesthetics."
				],
			image: tabsAsideLight,
			imageDark: tabsAsideDark,
			link: "https://github.com/xfox111/TabsAsideExtension",
			stack:
				[
					{ text: "React/WXT", icon: Desktop24Regular },
					{ text: "TypeScript", icon: Code24Regular },
					{ text: "Browser extension", icon: FlashSettings24Regular },
					{ text: "Fluent UI", icon: Color24Regular },
					{ text: "GitHub", icon: Branch24Regular },
					{ text: "GitHub Actions", icon: FlashFlow24Regular },
				]
		},
		{
			title: "SimpleOTP",
			subtitle: "Simple yet powerfull .NET library for OTP implementation",
			description:
				[
					"Initially created during EasyLogon development, this library was designed as a simple, yet flexible solution for one-time password authenticators and validators.",
					"It provides extensive toolset for generation, validation and management of OTP configurations and can be used in any .NET application whether it is an authenticator app or a website that accepts OTP codes."
				],
			image: simpleOtpImg,
			link: "https://github.com/xfox111/SimpleOTP",
			stack:
				[
					{ text: ".NET/C#", icon: Code24Regular },
					{ text: "MSTest", icon: Beaker24Regular },
					{ text: "GitHub", icon: Branch24Regular },
					{ text: "GitHub Actions", icon: FlashFlow24Regular },
				]
		},
		{
			title: "Password generator",
			subtitle: "Simple browser extension for generating passwords",
			description:
				[
					"Small pet project that I developed while my favorite password generator website was down.",
					"Basically, a playground, where I try out new technologies and approaches to web development."
				],
			image: passwordGeneratorLight,
			imageDark: passwordGeneratorDark,
			link: "https://github.com/xfox111/PasswordGeneratorExtension",
			stack:
				[
					{ text: "React/Vite", icon: Desktop24Regular },
					{ text: "TypeScript", icon: Code24Regular },
					{ text: "Browser extension", icon: FlashSettings24Regular },
					{ text: "Fluent UI", icon: Color24Regular },
					{ text: "GitHub", icon: Branch24Regular },
					{ text: "GitHub Actions", icon: FlashFlow24Regular },
				]
		},
		{
			title: "GUT.Schedule / Bonch.Calendar",
			subtitle: "Mobile app that exports Bonch university schedule to e-calendar",
			description:
				[
					"I created this app in 2019 during my time in Bonch-Bruevich University of Telecommunications as a BS student.",
					"It was designed to help students to manage their timetable in a more convenient and effective way – by exporting their schedule to any calendar app on their Android phones.",
					"In 2025 I made it into a web-service that can generate web calendars the students can subscribe to directly from their calendar apps, regardless of the platform they are using.",
				],
			image: gutScheduleImg,
			link: "https://github.com/stars/XFox111/lists/bonch",
			stack:
				[
					{ text: ".NET/C#", icon: Code24Regular },
					{ text: "Xamarin.Android", icon: Phone24Regular },
					{ text: "GitHub", icon: Branch24Regular },
					{ text: "NUnit", icon: Beaker24Regular },
					{ text: "Azure Pipelines", icon: FlashFlow24Regular },
					{ text: "React/Vite", icon: Globe24Regular },
					{ text: "Typescript", icon: Code24Regular },
					{ text: "GitHub Actions", icon: FlashFlow24Regular },
				]
		},
		{
			title: "FoxTube",
			subtitle: "UWP app that gives YouTube a fresh look on Windows",
			description:
				[
					"[2019]",
					"My first published app.",
					"I like to watch videos while working on my projects, but at the time YouTube didn't have a proper picture-in-picture mode and overall had a lot of issues with the UX, so this was my way to fix it.",
					"Unfortunately, Google doesn't like third-party YouTube clients, so soon after publishing, they revoked app's API access :("
				],
			image: foxTubeLight,
			imageDark: foxTubeDark,
			link: "https://www.youtube.com/watch?v=Mio9FbxmbhM",
			stack:
				[
					{ text: ".NET/C#", icon: Code24Regular },
					{ text: "UWP", icon: Desktop24Regular },
					{ text: "Azure DevOps", icon: Branch24Regular },
					{ text: "AppCenter", icon: HeartPulse24Regular },
					{ text: "Azure Pipelines", icon: FlashFlow24Regular },
				]
		},
		{
			title: "MotionDecoder",
			subtitle: "CCTV footage analysis tool",
			description:
				[
					"[2018]",
					"My earliest attempt in software development.",
					"Basically, this program analyzes pre-recorded CCTV footage by comparing different frames and using some simple algorithms and provides user with a set of timecodes where a motion was detected.",
				],
			image: motionDecoderLight,
			imageDark: motionDecoderDark,
			link: "https://github.com/xfox111/MotionDecoder",
			stack:
				[
					{ text: ".NET/C#", icon: Code24Regular },
					{ text: "WinForms", icon: Desktop24Regular },
					{ text: "Accord.NET", icon: FlashSettings24Regular },
					{ text: "GitHub", icon: Branch24Regular },
				]
		}
	];

export default projects;

export type Project =
	{
		title: string;
		subtitle: string;
		description: string[];
		image: string | StaticImageData;
		imageDark?: string | StaticImageData;
		stack: TechStackItem[];
		link: string;
	};

type TechStackItem =
	{
		icon: React.FC;
		text: string;
	};
