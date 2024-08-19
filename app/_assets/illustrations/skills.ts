import { ImageExport } from "../assets";
import adminSkills from "./skills/admin-skills.svg";
import architectureSkills from "./skills/architecture-skills.svg";
import databasesSkills from "./skills/databases-skills.svg";
import designSkills from "./skills/design-skills.svg";
import devopsSkills from "./skills/devops-skills.svg";
import dotnetSkills from "./skills/dotnet-skills.svg";
import nodejsSkills from "./skills/nodejs-skills.svg";

export const admin: ImageExport =
{
	src: adminSkills,
	alt: "Illustration of a server rack with various servers and panels, some displaying graphs and lights, and a large orange fox wrapped around one of the servers, that displays a message saying \"kernel panic\" and \"rebooting\". Below is a laptop with system logs that read: \"rf -rf / in progress\"."
};

export const architecture: ImageExport =
{
	src: architectureSkills,
	alt: "Cartoon fox draws in a blueprint. Behind him on the left is a chalkboard with a drawing that reads: \"coffee + imaination = magic\". On the right is a drafting table, and a laptop with stickers. The stickers say: \"This is a server, do not turn off\""
};

export const databases: ImageExport =
{
	src: databasesSkills,
	alt: "Cartoon fox balancing on a warehouse shelf with different boxes, that have database logos on them (Redis, SQL Server, Mongo, Postgres and MySQL). The shelf is about to crash onto .NET bot, who is relaxed in a chair."
};

export const design: ImageExport =
{
	src: designSkills,
	alt: "Illustration of a fox wearing a blue beret, painting on a canvas that reads has a green \"Click me\" button, surrounded by colorful paw prints and two paint cans, one labeled \"Ps\", and the other having Figma logo on it."
};

export const devops: ImageExport =
{
	src: devopsSkills,
	alt: "An orange fox wearing a construction helmet, using a laptop. Behind him is a production line that features Git, unit tests and Docker. There's a wrench falling from one of the containers onto fox's head."
};

export const dotnet: ImageExport =
{
	src: dotnetSkills,
	alt: "Cartoon fox looking cautiously at .NET bot"
};

export const nodejs: ImageExport =
{
	src: nodejsSkills,
	alt: "Cartoon fox lifted by balloons representing TypeScript, JavaScript, and React, with a laptop below."
};

const skills =
{
	nodejs,
	dotnet,
	architecture,
	databases,
	design,
	devops,
	admin,
};

export default skills;
