import Link from "next/link";
import Image from "next/image";
import React from "react";
import logo from "@/icon.svg";
import cls from "./TitleLogo.module.scss";

const TitleLogo: React.FC = () => (
	<Link className={ cls.title } href="/">
		<Image src={ logo }
			alt="A fox jumping down, and a diagonal stripe in the background, forming letters X and F"
			aria-hidden
			loading="eager" />
		<p>
			<span>xfox111</span>
			<sub>.net</sub>
		</p>
	</Link>
);

export default TitleLogo;
