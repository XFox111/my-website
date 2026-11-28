import { ReactElement } from "react";
import Button, { ButtonCommonProps, ButtonLinkProps } from "./Button";

export default function ResumeButton(props: Partial<ButtonLinkProps> & ButtonCommonProps): ReactElement {
	return (
		<Button
			as="next-link"
			href="https://at.xfox111.net/resume?utm_source=website&utm_medium=website&utm_campaign=default&download=true"
			download="Eugene Fox - Software developer resume.pdf"
			{...props}
		>
			Download resume
		</Button>
	);
	// return (
	// 	<Button as="next-link" href="/resume" {...props}>
	// 		Download resume
	// 	</Button>
	// );
}
