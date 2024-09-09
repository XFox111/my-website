import Package from "@/../package.json";

const socials: Socials =
{
	"GitHub":
	{
		href: Package.author.url,
		username: "@xfox111"
	},
	"LinkedIn":
	{
		href: "https://www.linkedin.com/in/xfox/",
		username: "@xfox"
	},
	"Twitter":
	{
		href: "https://twitter.com/xfox111",
		username: "@xfox111"
	},
};

export default socials;

export type Socials = Record<string, SocialLink>;

export type SocialLink =
	{
		href: string;
		username: string;
		network?: string;
	};
