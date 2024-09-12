import Image from "next/image";
import React from "react";
import { spinnerDark, spinnerLight } from "./_assets/illustrations";
import cls from "./loading.module.scss";

const LoadingPage: React.FC = () => (
	<div className={ cls.root } role="alert" aria-label="Loading page">
		<Image className={ cls.dark } src={ spinnerDark.src } alt={ spinnerDark.alt } priority unoptimized />
		<Image className={ cls.light } src={ spinnerLight.src } alt={ spinnerLight.alt } priority unoptimized />
	</div>
);

export default LoadingPage;
