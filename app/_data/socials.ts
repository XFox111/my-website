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
	"BlueSky":
	{
		href: "https://bsky.app/profile/xfox111.net",
		username: "@xfox111.net",
	}
};

export default socials;

export type Socials = Record<string, SocialLink>;

export type SocialLink =
	{
		href: string;
		username: string;
		network?: string;
	};
