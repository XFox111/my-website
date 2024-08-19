import socials from "./socials";

const links: Links =
{
	blog: "https://blog.xfox111.net",
	linkedin: socials["LinkedIn"].href,
	resume: "/resume",
	github: socials["GitHub"].href
};

export default links;

type Links =
{
	blog?: string;
	linkedin?: string;
	resume: string;
	github: string;
}
