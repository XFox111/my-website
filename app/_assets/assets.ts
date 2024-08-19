import { StaticImageData } from "next/image";

export type ImageExport =
	{
		src: string | StaticImageData;
		alt: string;
	};
