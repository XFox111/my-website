import { ImageExport } from "@/_assets/assets";
import imgs from "@/_assets/illustrations/skills";
import * as ic from "@fluentui/react-icons";

const skills: Skill[] =
	[
		{
			title: "NodeJS",
			description: "React, Vite, Next.js, SASS, TypeScript",
			icon: ic.WindowDevToolsRegular,
			image: imgs.nodejs
		},
		{
			title: ".NET",
			description: "ASP.NET, Razor, WinUI/UWP, WPF, WinForms | Xamarin.Forms, MAUI",
			icon: ic.PhoneDesktopRegular,
			image: imgs.dotnet
		},
		{
			title: "Architecture & systems",
			description: "Docker, Nginx, Linux | Modules, microservices",
			icon: ic.DesktopFlowRegular,
			image: imgs.architecture
		},
		{
			title: "Databases",
			description: "Entity Framework, MongoDB",
			icon: ic.DatabaseMultipleRegular,
			image: imgs.databases
		},
		{
			title: "Design",
			description: "Figma, Photoshop, Illustrator",
			icon: ic.DesignIdeasRegular,
			// Note, this picture has a special behavior in @/_page_sections/SkillsSection.tsx:24
			image: imgs.design
		},
		{
			title: "DevOps",
			description: "GitHub, Azure DevOps, AppCenter, Atlassian",
			icon: ic.FlashFlowRegular,
			image: imgs.devops
		},
		{
			title: "Administration",
			description: "Ansible, M365, Azure, InTune",
			icon: ic.ConnectedRegular,
			image: imgs.admin
		}
	];

export default skills;

export type Skill =
	{
		title: string;
		description: string;
		icon: ic.FluentIcon;
		image: ImageExport;
	};
