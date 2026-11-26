import Button from "@/components/shared/Button";
import { title } from "@/data/metadata";
import { readFile } from "fs/promises";
import { Metadata } from "next";
import { cacheLife } from "next/cache";
import { connection } from "next/server";
import { ReactElement } from "react";
import { social_icons, SocialIcon } from "react-social-icons";
import cls from "./page.module.scss";
import ResumeButtons from "../../components/resume/ResumeButtons";
import { ResumeLinks } from "@/data/resumes";

export const instant = false;

export const metadata: Metadata = {
	title: `Resume - ${title}`,
	robots: "noindex"
};

// [SPECIAL]

export default async function ResumePage(): Promise<ReactElement> {
	await connection();
	const links = await getLinks();

	return (
		<main className={cls.page}>
			<h1>Who are you looking for?</h1>

			<ResumeButtons links={links} className={cls.links} />

			<p>You can also check out my</p>
			<Button
				as="a"
				href="https://linkedin.com/in/xfox"
				target="_blank"
				className={cls.linkedin}
				// @ts-expect-error Inline variables are not supported by TS definition, although they work as intended.
				style={{ "--network-color": social_icons.get("linkedin")!.color }}
				icon={<SocialIcon network="linkedin" as="i" aria-hidden />}
			>
				LinkedIn profile
			</Button>
		</main>
	);
}

async function getLinks(): Promise<ResumeLinks> {
	"use cache: remote";
	cacheLife("weeks");
	return JSON.parse(await readFile("resumes.json", "utf-8"));
}
