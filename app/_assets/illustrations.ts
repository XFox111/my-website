import { ImageExport } from "./assets";
import netResume from "./illustrations/dotnet-resume.svg";
import footer from "./illustrations/footer.svg";
import foxRuns from "./illustrations/fox_runs.gif";
import fullstackResumeImg from "./illustrations/fullstack-resume.svg";
import fox from "./illustrations/home-decor.svg";
import itsMe from "./illustrations/its_me.webp";
import meKvant from "./illustrations/me_kvant.webp";
import nextLogo from "./illustrations/next-logo.svg";
import notFound from "./illustrations/not-found.svg";
import petProjects from "./illustrations/pet-projects.svg";
import reactResumeImg from "./illustrations/react-resume.svg";

export const dotnetResume: ImageExport =
{
	src: netResume,
	alt: "Fox riding on a back of angry .NET bot"
};

export const fullstackResume: ImageExport =
{
	src: fullstackResumeImg,
	alt: "Fox balancing on a React logo, while happy .NET bot is sitting on his back"
};

export const reactResume: ImageExport =
{
	src: reactResumeImg,
	alt: "Fox laying on his back and playing with a React logo"
};

export const footerImage: ImageExport =
{
	src: footer,
	alt: "A cartoon fox looking at a laptop"
};

export const spinner: ImageExport =
{
	src: foxRuns,
	alt: "Cute cartoon fox runs to the left"
};

export const homeDecor: ImageExport =
{
	src: fox,
	alt: "A cartoon fox working at a laptop"
};

export const profilePicture: ImageExport =
{
	src: itsMe,
	alt: "Photo of a young person with glasses, red hair, red shirt and computers on the background"
};

export const aboutPicture: ImageExport =
{
	src: meKvant,
	alt: "Photo of a young person sitting on a pong table with headphones and a badge. Behind them is a cartoon 2D fox looking at them."
};

export const nextjsLogo: ImageExport =
{
	src: nextLogo,
	alt: "Next.js"
};

export const notFoundImage: ImageExport =
{
	src: notFound,
	alt: "Cardboard box put upside down with a fox tail seen from beneath"
};

export const projectsImg: ImageExport =
{
	src: petProjects,
	alt: "Cartoon fox looking curiously at the incubator with chickens"
};

const illustrations =
{
	footerImage,
	spinner,
	homeDecor,
	profilePicture,
	aboutPicture,
	nextjsLogo,
	notFoundImage,
	projectsImg,
	dotnetResume,
	fullstackResume,
	reactResume
};

export default illustrations;
