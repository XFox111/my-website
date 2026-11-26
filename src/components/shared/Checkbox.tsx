"use client";

import { InputHTMLAttributes, LabelHTMLAttributes, ReactElement } from "react";
import cls from "./Checkbox.module.scss";
import Checkmark24Regular from "@fluentui/svg-icons/icons/checkmark_24_regular.svg";
import { mergeClasses } from "@/utils/styles";

export default function Checkbox({ label, labelProps, ...props }: CheckboxProps): ReactElement {
	return (
		<label {...labelProps} className={mergeClasses(cls.control, labelProps?.className)}>
			<input type="checkbox" {...props} />
			{label}
			<Checkmark24Regular />
		</label>
	);
}

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
	label?: string;
	labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
};
