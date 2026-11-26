import spinnerImg from "@assets/illustrations/fox-runs-but-its-an-svg.svg";
import Image from "next/image";
import { ReactElement } from "react";
import cls from "./loading.module.scss";

export default function LoadingPage(): ReactElement {
	return (
		<main className={cls.page}>
			<Image src={spinnerImg} alt="" loading="eager" />
		</main>
	);
}
