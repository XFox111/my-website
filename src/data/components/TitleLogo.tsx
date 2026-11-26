import logo from "@/app/icon.svg";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import cls from "./TitleLogo.module.scss";

export default function TitleLogo(): ReactElement {
	return (
		<Link href="/" className={cls.title}>
			<Image src={logo} alt="" aria-hidden loading="eager" />
			<p>
				<span>xfox111</span>
				<sub>.net</sub>
			</p>
		</Link>
	);
}
