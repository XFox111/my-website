import Image from "next/image";
import React from "react";
import { spinnerDark, spinnerLight } from "./_assets/illustrations";
import cls from "./loading.module.scss";

const LoadingPage: React.FC = () => (
	<div className={ `not-found ${cls.root}` } role="alert" aria-label="Loading page">
		<Image className={ cls.dark } src={ spinnerDark.src } alt={ spinnerDark.alt } loading="eager" unoptimized />
		<Image className={ cls.light } src={ spinnerLight.src } alt={ spinnerLight.alt } loading="eager" unoptimized />
	</div>
);

export default LoadingPage;
