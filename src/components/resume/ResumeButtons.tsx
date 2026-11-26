"use client";

import Button from "@/components/shared/Button";
import Checkbox from "@/components/shared/Checkbox";
import resumes, { ResumeLinks } from "@/data/resumes";
import Clarity from "@microsoft/clarity";
import Image from "next/image";
import { ReactElement, useMemo, useState } from "react";

export default function ResumeButtons({ links, className }: ResumeButtonsProps): ReactElement {
	const [classic, setClassic] = useState<boolean>(false);
	const resumeList: ResumeItem[] = useMemo(
		() =>
			Object.entries(links)
				.filter(([, { url }]) => url)
				.map(([key, { url, urlClassic }]) => ({
					key,
					url,
					urlClassic,
					label: resumes[key].label,
					image: resumes[key].image
				})),
		[links]
	);

	function onClick(key: string): void {
		try {
			Clarity.upgrade("resume-click");
			Clarity.setTag("resume-download", [classic ? "classic" : "base", key]);
		} catch {}
	}

	return (
		<>
			<div className={className}>
				{resumeList.map(({ key, label, image, url, urlClassic }) => (
					<Button
						key={key}
						as="a"
						href={classic ? urlClassic : url}
						target="_blank"
						download
						hidden={!url}
						disabled={classic && !urlClassic}
						onClick={() => onClick(key)}
					>
						<Image src={image} loading="eager" draggable={false} aria-hidden alt="" />
						{label}
					</Button>
				))}
			</div>

			{resumeList.some((i) => i.urlClassic) && (
				<Checkbox
					label="Use classic resume format"
					checked={classic}
					onChange={(s) => setClassic(s.currentTarget.checked)}
				/>
			)}
		</>
	);
}

export type ResumeButtonsProps = {
	links: ResumeLinks;
	className?: string;
};

type ResumeItem = {
	key: string;
	label: string;
	image: string;
	url?: string;
	urlClassic?: string;
};
