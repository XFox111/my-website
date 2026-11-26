import type { StaticImageData } from "next/image";

declare module "@fluentui/svg-icons/*.svg" {
	import type { FC, SVGProps } from "react";
	const content: FC<SVGProps<SVGSVGElement>>;
	export default content;
}

declare module "@fluentui/svg-icons/*.svg?url" {
	const url: string;
	export default url;
}

declare module "*.svg" {
	const url: StaticImageData;
	export default url;
}
