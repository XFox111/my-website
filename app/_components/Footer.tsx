import Package from "@/../package.json";
import { footerImage, nextjsLogo } from "@/_assets/illustrations";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import cls from "./Footer.module.scss";

const Footer: React.FC = () => (
	<footer className={ cls.footer }>
		<div className={ cls.info }>
			<p className={ cls.copyright }>
				{ `©${new Date().getFullYear()} ${Package.author.name}` }
			</p>
			<p>
				This site was created with help of some third-party tools and services.
			</p>
			{ process.env.CLARITY_ID &&
				<p>
					This site is using Microsoft Clarity for analytics purposes.<br aria-hidden />
					By using this site you agree that we and Microsoft can collect and use this data.
				</p>
			}
			<p>
				<Link href="/attribution" prefetch={ false }>
					See license disclosure and privacy policy for more information
				</Link>
			</p>

			<div className={ cls.nextjs }>
				<span aria-hidden>Built with</span>
				<a aria-label="Built with Next.js" href="https://nextjs.org/" target="_blank">
					<Image aria-hidden src={ nextjsLogo.src } alt={ nextjsLogo.alt } />
				</a>
			</div>
		</div>

		<div className={ `${cls.illustration} illustration` }>
			<Image src={ footerImage.src } alt={ footerImage.alt } />
		</div>
	</footer>
);

export default Footer;
