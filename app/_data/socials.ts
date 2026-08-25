import Package from "@/../package.json";

const socials: Socials =
{
	"GitHub":
	{
		href: Package.author.url,
		username: "@xfox111",
		network: "github"
	},
	"LinkedIn":
	{
		href: "https://at.xfox111.net/linkedin",
		username: "@xfox",
		network: "linkedin"
	},
	"Bluesky":
	{
		href: "https://at.xfox111.net/bluesky",
		username: "@xfox111.net",
		network: "bsky.app"
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
