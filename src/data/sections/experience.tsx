import ResumeButton from "@/components/shared/ResumeButton";
import { ReactElement } from "react";

const experience: WorkplaceEntry[] = [
	{
		place: "Nordcloud, Saint-Petersburg, RU",
		title: ".NET developer",
		summary: "Working on MightyCall cloud call center product",
		year: "2021",
		description: (
			<ul>
				<li>Developed a payment system using ASP.NET, C#, and REST API in Agile environment</li>
				<li>Worked with Git (BitBucket) for version control and conducted code reviews</li>
				<li>Worked with CI/CD pipeline (Jenkins) for testing and deployment</li>
			</ul>
		)
	},
	{
		place: "Quantorium, Saint-Petersburg, RU",
		title: "System administrator",
		summary: "Administration of school's IT infrastructure and inventory",
		year: "2021",
		description: (
			<ul>
				<li>Integrated M365 and Microsoft Azure services to reduce staff&apos;s workload.</li>
				<li>Implemented Azure Intune services to streamline maintenance of 100+ school computers.</li>
				<li>Integrated modern interactive solutions into education process during COVID-19 pandemic.</li>
				<li>Implemented storage inventory system for tracking of school&apos;s inventory and supplies.</li>
			</ul>
		)
	},
	{
		place: "Ubitel, Saint-Petersburg, RU",
		title: "Fullstack developer",
		summary: "Working on software for Wi-Fi related devices",
		year: "2023",
		description: (
			<ul>
				<li>
					Developed a web interface for a Linux access point using React, TypeScript/JavaScript, HTML, and CSS
				</li>
				<li>
					Used ASP.NET, C#, Dependency Injection and Reflection to create a modular Wi-Fi analyzer software
				</li>
				<li>Implemented a full-cycle CI/CD pipeline for new firmware releases</li>
				<li>Worked in a team of 4 in Agile environment</li>
			</ul>
		)
	},
	{
		place: "A-rial, Saint-Petersburg, RU",
		title: "Senior Fullstack developer",
		summary: "Working on WLAN Controller system",
		year: "2025",
		description: (
			<ul>
				<li>
					Designing and implementing large-scale distributed WLAN controller system using ASP.NET, C#, and
					REST API
				</li>
				<li>
					Designed Mongo and PostgreSQL databases using Entity Framework and LINQ for tracking access points
					and their configurations
				</li>
				<li>Used Redis, RabbitMQ, gRPC and SignalR for data exchange between services</li>
				<li>
					Designed a microservice architecture of the WLAN controller using Docker based on OOP, SOLID, and
					CQRS principles
				</li>
				<li>Used NUnit for integration and unit tests</li>
			</ul>
		)
	},
	{
		place: "Your company",
		title: "Here",
		summary: "Working on new and exciting projects",
		year: process.env.NEXT_PUBLIC_BUILD_YEAR,
		description: <ResumeButton />
	}
];

export default experience;

export type WorkplaceEntry = {
	year?: string;
	place?: string;
	title: string;
	summary?: string;
	description?: ReactElement;
};
