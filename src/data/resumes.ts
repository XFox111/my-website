import dotnetImg from "@assets/illustrations/dotnet-resume.svg";
import fullstackImg from "@assets/illustrations/fullstack-resume.svg";
import reactImg from "@assets/illustrations/react-resume.svg";

const resumes: Resumes = {
	dotnet: {
		label: ".NET developer",
		image: dotnetImg
	},
	react: {
		label: "React developer",
		image: reactImg
	},
	fullstack: {
		label: "Fullstack developer",
		image: fullstackImg
	}
};

export type Resumes = Record<
	string,
	{
		label: string;
		image: string;
	}
>;

export type ResumeLinks = Record<
	string,
	{
		url: string;
		urlClassic: string;
	}
>;

export default resumes;
