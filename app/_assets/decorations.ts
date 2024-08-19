import { ImageExport } from "./assets";
import pageNotFox from "./decorations/page-not-fox.svg";
import pawprintTrailVertical from "./decorations/pawprint-trail-vertical.svg";
import pawprintTrail from "./decorations/pawprint-trail.svg";

export const textCorrection: ImageExport =
{
	src: pageNotFox,
	alt: "Page, not fox"
};

export const experienceBgVertical: ImageExport =
{
	src: pawprintTrailVertical,
	alt: ""
};

export const experienceBgHorizontal: ImageExport =
{
	src: pawprintTrail,
	alt: ""
};

const decorations =
{
	textCorrection,
	experienceBgVertical,
	experienceBgHorizontal
};

export default decorations;
