"use client";

import React, { useEffect } from "react";
import { useFormStatus } from "react-dom";

// Since useFormStatus requires to be inside of the form, I moved it to a separate helper component.
// Could it be done better? Probably.
// Did I do it? No.

/** Renders a React component that tracks the form status and calls the provided callback function when the form status changes. */
const FormStatusTracker: React.FC<FormStatusTrackerProps> = ({ onPendingChanged }) =>
{
	const { pending } = useFormStatus();

	useEffect(() =>
	{
		onPendingChanged(pending);
	}, [pending, onPendingChanged]);

	return null;
};

export default FormStatusTracker;

/** Props for the `FormStatusTracker` component. */
export type FormStatusTrackerProps =
	{
		/** The callback function that is called when the form status changes. */
		// For some reason ESLint shows a warning for "unused" "pending" parameter.
		// eslint-disable-next-line no-unused-vars
		onPendingChanged: (pending: boolean) => void;
	};
