import Button from "@/_components/Button";
import { ReactElement } from "react";

const experience: WorkplaceEntry[] =
	[
		{
			place: "Nordcloud, Saint-Petersburg, RU",
			title: "Software Engineer",
			summary: "Working on MightyCall cloud call center product",
			year: "2021",
			description: <>
				<p>Implementing new features and fixing bugs in large-scale distributed VoIP system with ASP.NET and Angular</p>
				<ul>
					<li>Completed 2 week onboarding in 3 days.</li>
					<li>Found and fixed a critical issue in system&apos;s build process, improving performance by 40%</li>
				</ul>
			</>
		},
		{
			place: "Quantorium, Saint-Petersburg, RU",
			title: "System administrator",
			summary: "Administration of school's IT infrastructure",
			year: "2021",
			description: <ul>
				<li>Integrated Microsoft Azure and M365 services which reduced overall workload of the staff by 30%.</li>
				<li>Implemented Azure Intune services for management of 100+ school devices.</li>
				<li>Integrated modern interactive solutions into education process during COVID-19 pandemic.</li>
				<li>Implemented storage inventory system which helped to track 100% of school&apos;s inventory.</li>
			</ul>
		},
		{
			place: "A-rial, Saint-Petersburg, RU",
			title: "Software Engineer",
			summary: "Legacy software support and DevOps",
			year: "2023",
			description: <>
				<p>Supporting legacy WLAN controller system, as well as maintaining company&apos;s IT infrastructure</p>
				<p className="hl">Stack: .NET, React, Golang, Vue, Mongo</p>
				<ul>
					<li>Built company&apos;s IT infrastructure from scratch (email, cloud, git, etc.)</li>
					<li>Found and fixed several critical bugs in one of the projects which allowed the company to receive next round of investments.</li>
					<li>Designed and implemented web interface for wireless routers using React</li>
					<li>Lead critical QA field tests for WLAN controller product.</li>
				</ul>
			</>
		},
		{
			place: "A-rial, Saint-Petersburg, RU",
			title: "Lead Software Engineer",
			summary: "Working on software for RF Analyzer hardware",
			year: "2024",
			description: <>
				<p>Creating, desiging and implementing RF analyzer software, as well as participating in hardware design.</p>
				<p className="hl">Stack: ASP.NET (RESTFul API), React, Linux</p>
				<ul>
					<li>Implemented both frontend and backend as modular components with ASP.NET and React.</li>
					<li>Wrote abstraction layers for managing Wi-Fi and SDR hardware in C#.</li>
					<li>Set up a complete CI/CD pipeline with GitHub Actions.</li>
				</ul>
			</>
		},
		{
			place: "A-rial, Saint-Petersburg, RU",
			title: "Lead System Architect",
			summary: "Working on WLAN Controller system",
			year: "2025",
			description: <>
				<p>Designing and implementing large-scale distributed WLAN controller system</p>
				<p className="hl">Stack: React, ASP.NET (RESTFul API), MongoDB, Postges (EF Core), RabbitMQ (MassTransit), MQTT, Docker.</p>
				<ul>
					<li>Designed an architecture of a new event-driven microservice-based system to replace legacy monolith from scratch (HLD + LLD).</li>
					<li>Wrote a comprehensive techref for each of 16 components.</li>
					<li>Solo implemented the whole system from start to finish in just 3 months.</li>
					<li>Designed and wrote an agent service with .NET NativeAOT to operate OpenWRT routers.</li>
				</ul>
			</>
		},
		{
			place: "Your company",
			title: "Here",
			summary: "Working on new and exciting projects",
			description: <Button href="/resume">Download resume</Button>
		},
	];

export default experience;

export type WorkplaceEntry =
	{
		year?: string;
		place?: string;
		title: string;
		summary?: string;
		description?: ReactElement;
	};
