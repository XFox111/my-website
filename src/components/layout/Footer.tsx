import footerImage from "@assets/illustrations/footer.svg";
import nextjsLogo from "@assets/illustrations/next-logo.svg";
import Package from "@//package.json";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import cls from "./Footer.module.scss";

export default function Footer(): ReactElement {
	return (
		<footer className={cls.footer}>
			<div className={cls.text}>
				<p className={cls.copyright}>{`©${process.env.NEXT_PUBLIC_BUILD_YEAR} ${Package.author.name}`}</p>
				<p>
					This site was created with help of some third-party tools and services.
					<br aria-hidden />
					This site is using Microsoft Clarity for analytics purposes.
				</p>
				<p>
					<Link href="/attribution" prefetch={false}>
						See license disclosure and privacy policy for more information
					</Link>
				</p>

				<div className={cls.nextjs}>
					<span aria-hidden>Built with</span>{" "}
					<a aria-label="Built with Next.js" href="https://nextjs.org/" target="_blank">
						<Image aria-hidden src={nextjsLogo} alt="" loading="eager" />
					</a>
				</div>
			</div>

			<div className={cls.image}>
				<Image src={footerImage} alt="" />
			</div>
		</footer>
	);
}
