import Button from "@/components/shared/Button";
import correction from "@assets/decorations/page-not-fox.svg";
import notFoundImage from "@assets/illustrations/not-found.svg";
import { canonicalUrl } from "@/data/metadata";
import Home24Regular from "@fluentui/svg-icons/icons/home_24_regular.svg";
import { Metadata } from "next";
import Image from "next/image";
import { ReactElement } from "react";
import cls from "./not-found.module.scss";

export const metadata: Metadata = {
	title: `Page not found - ${canonicalUrl.hostname}`,
	robots: "noindex"
};

// [SPECIAL]

export default function NotFoundPage(): ReactElement {
	return (
		<main className={cls.page}>
			<div className={cls.image}>
				<h1 aria-hidden>404...</h1>
				<Image src={notFoundImage} alt="" loading="eager" aria-hidden />
			</div>
			<div className={cls.text}>
				<div className={cls.caption} aria-label="Test">
					<h2 aria-hidden>...fox not found</h2>
					<Image src={correction} alt="" aria-hidden />
				</div>
				<Button as="next-link" href="/" icon={<Home24Regular />}>
					To the homepage
				</Button>
			</div>
		</main>
	);
}
