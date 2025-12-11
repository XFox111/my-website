import { textCorrection } from "@/_assets/decorations";
import Home24Regular from "@fluentui/svg-icons/icons/home_24_regular.svg";
import { Metadata } from "next";
import { unstable_noStore } from "next/cache";
import Image from "next/image";
import React from "react";
import { notFoundImage } from "./_assets/illustrations";
import Button from "./_components/Button";
import { canonicalName, getTitle } from "./_data/metadata";
import cls from "./not-found.module.scss";

export async function generateMetadata(): Promise<Metadata>
{
	unstable_noStore();
	return {
		title: getTitle("Page not found", canonicalName.hostname),
		robots: "noindex"
	};
}

// [SPECIAL]

const NotFoundPage: React.FC = () => (
	<main className={ `${cls.page} not-found` }>
		<div className={ cls.illustration }>
			<h1>404...</h1>
			<Image src={ notFoundImage.src } alt={ notFoundImage.alt } loading="eager" />
		</div>
		<div className={ cls.content }>
			<div className={ cls.caption }>
				<h2>...fox not found</h2>
				<Image src={ textCorrection.src } alt={ textCorrection.alt } />
			</div>
			<Button as="next" href="/" icon={ <Home24Regular /> }>
				To the homepage
			</Button>
		</div>
	</main>
);

export default NotFoundPage;
