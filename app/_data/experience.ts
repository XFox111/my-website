const experience: WorkplaceEntry[] =
	[
		{ title: "IT/VR tutor", year: "2020", place: "Quantorium", tech: "Unity, STEM" },
		{ title: "System administrator", year: "2021", place: "Quantorium", tech: "M365, Intune, Azure" },
		{ title: "Software Engineer", place: "[nordcloud]", tech: "ASP.NET, EF Core" },
		{ title: "CTO", year: "2022", place: "FoxDev Studio", tech: "Unity, Xamarin, .NET, React, Azure" },
		{ title: "Senior Software Engineer", year: "2023", place: "A-rial", tech: ".NET, React, DevOps" },
		{ title: "Senior Software Architect", year: "2024", place: "Ubitel", tech: ".NET, React, Embedded devices" },
		{ title: "Here", place: "Your company" },
	];

export default experience;

export type WorkplaceEntry =
	{
		year?: string;
		place?: string;
		title: string;
		tech?: string;
	};
