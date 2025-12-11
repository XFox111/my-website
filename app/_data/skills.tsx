import { ImageExport } from "@/_assets/assets";
import imgs from "@/_assets/illustrations/skills";
import WindowDevTools24Regular from "@fluentui/svg-icons/icons/window_dev_tools_24_regular.svg";
import PhoneDesktop24Regular from "@fluentui/svg-icons/icons/phone_desktop_24_regular.svg";
import DesktopFlow24Regular from "@fluentui/svg-icons/icons/desktop_flow_24_regular.svg";
import DatabaseMultiple32Regular from "@fluentui/svg-icons/icons/database_multiple_32_regular.svg";
import DesignIdeas24Regular from "@fluentui/svg-icons/icons/design_ideas_24_regular.svg";
import FlashFlow24Regular from "@fluentui/svg-icons/icons/flash_flow_24_regular.svg";
import Connected24Regular from "@fluentui/svg-icons/icons/connected_24_regular.svg";
import ShieldKeyhole24Regular from "@fluentui/svg-icons/icons/shield_keyhole_24_regular.svg";
import React from "react";

const skills: Skill[] =
	[
		{
			title: "NodeJS",
			caption: "React, Vite, Next.js, SASS, TypeScript",
			description: <>
				I learned React while being on a 2 week quarantine back in 2020. Since then, it was my go-to framework for frontend in both commercial and personal projects. While .NET is still my main choice for backend, I occasionally use Next.js for smaller projects as well.
			</>,
			icon: WindowDevTools24Regular,
			image: imgs.nodejs
		},
		{
			title: ".NET",
			caption: "ASP.NET, WebAPI, Minimal API, MVC | MAUI, WinUI",
			description: <>
				My bread and butter. The one and only! I learned C# back in 2018 while trying to make a game in Unity. Since then, I have fallen in love with the language and the ecosystem. I have used .NET for everything: web, desktop, mobile, IoT... you name it.
			</>,
			icon: PhoneDesktop24Regular,
			image: imgs.dotnet
		},
		{
			title: "System design",
			caption: "Clean architecture, Microservices, Event-driven design",
			description: <>
				Working for small companies (especially abmitious ones) has its perks. One of them is that you get to do everything, including architecture design. Throughout my career, I have designed a couple of high-load distributed systems, as well as many smaller applications.
			</>,
			icon: DesktopFlow24Regular,
			image: imgs.architecture
		},
		{
			title: "Databases & ORM",
			caption: "SQL, Postgres, MongoDB, EF Core",
			description: <>
				If there is a SQL, then where is prequel?..
			</>,
			icon: DatabaseMultiple32Regular,
			image: imgs.databases
		},
		{
			title: "UI/UX Design",
			caption: "Figma, Photoshop, Illustrator",
			description: <>
				Even though I am not a professional designer, I know a thing or two about good UX, since for the most of the projects, I was usually responsible for it as well.
				<br /><br />
				For UI though, I prefer sticking to existing design systems (like Fluent UI or Material). But of course, I can draw a couple of buttons if needed.
			</>,
			icon: DesignIdeas24Regular,
			// Note, this picture has a special behavior in @/_page_sections/SkillsSection.tsx
			image: imgs.design
		},
		{
			title: "DevOps & Tooling",
			caption: "Git, Jira, CI/CD automation, Docker",
			description: <>
				Back when I was learning programming, whenever I started a new project, I imagined being at a big company with dozens of people working on the same codebase. So, I always tried to make it look like it: version control, documentation, CI/CD, kanban, sprints...<br /><br />
				Who would&apos;ve thought that this actually would come in handy!
			</>,
			icon: FlashFlow24Regular,
			image: imgs.devops
		},
		{
			title: "Infrastructure & Administration",
			caption: "Azure, AWS, Docker, K8S, Nginx, Linux, Ansible",
			description: <>
				Thanks to my past experience, I have a solid understanding of how to build and manage infrastructure. I have worked with both cloud and on-premises solutions, as well as different containerization and orchestration tools.
			</>,
			icon: Connected24Regular,
			image: imgs.admin
		},
		{
			title: "Application security",
			caption: "JWT, WebAuthn, OAuth2, TOTP",
			description: <>
				Throughout my work (as a system administrator and as an engineer), I had to learn a lot about best security practices and cybersecurity in general.
				<br /><br />
				So, I have experience implementing various authentication and authorization mechanisms (some of which I wrote from scratch by following specifications), as well as securing applications against common vulnerabilities.
			</>,
			icon: ShieldKeyhole24Regular,
			// Note, this picture has a special behavior in @/_page_sections/SkillsSection.tsx
			image: imgs.security
		},
	];

export default skills;

export type Skill =
	{
		title: string;
		caption: string;
		icon: React.FC;
		image: ImageExport;
		description: React.ReactElement;
	};
