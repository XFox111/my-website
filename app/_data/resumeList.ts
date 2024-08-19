import { ImageExport } from "@/_assets/assets";
import { dotnetResume, fullstackResume, reactResume } from "@/_assets/illustrations";

const resumeList: Resume[] =
	[
		{
			key: "dotnet",
			label: ".NET developer",
			pageIndex: 1,
			fileName: "Resume - Eugene Fox - .NET developer",
			image: dotnetResume
		},
		{
			key: "react",
			label: "React developer",
			pageIndex: 0,
			fileName: "Resume - Eugene Fox - React developer",
			image: reactResume
		},
		{
			key: "fullstack",
			label: "Fullstack developer",
			pageIndex: 2,
			fileName: "Resume - Eugene Fox - Fullstack developer",
			image: fullstackResume,
			default: true
		},
	];

export default resumeList;

export type Resume =
	{
		key: string;
		pageIndex: number;
		label: string;
		image: ImageExport;
		fileName: string;
		default?: true;
	};
