import Image from "next/image";
import React from "react";
import { spinner } from "./_assets/illustrations";
import cls from "./loading.module.scss";

const LoadingPage: React.FC = () => (
	<div className={ cls.root } role="alert" aria-label="Loading page">
		<Image src={ spinner.src } alt={ spinner.alt } priority unoptimized />
	</div>
);

export default LoadingPage;
