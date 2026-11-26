export function mergeClasses(...classes: (string | null | undefined)[]): string {
	const classList: string[] = [];
	for (const className of classes) if (className) classList.push(className);
	return classList.join(" ");
}
