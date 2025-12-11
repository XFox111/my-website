"use client";

import { acceptCookies, getCookieChoice, rejectCookies } from "@/_utils/analytics/client";
import React, { useCallback, useEffect, useState } from "react";
import Button from "./Button";
import cls from "./CookieBanner.module.scss";

const CookieBanner: React.FC = () =>
{
	const [visible, setVisible] = useState(false);

	useEffect(() =>
	{
		if (navigator.doNotTrack === "1")
			return;

		const choice = getCookieChoice();
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setVisible(choice === "none");

		// Since Clarity cookies expiration dates extend well beyond 60 days,
		// we need to terminate them manually once our consent tracking cookie expired.
		if (choice !== "accepted")
			window.clarity?.("consent", false);
	}, []);

	const accept = useCallback(() =>
	{
		acceptCookies();
		setVisible(false);
	}, []);

	const reject = useCallback(() =>
	{
		rejectCookies();
		setVisible(false);
	}, []);

	if (!visible)
		return null;

	return (
		<div className={ `cookie-banner ${cls.banner}` }>
			<Button
				as="next" href="/attribution"
				className={ cls.learnMore }
				aria-label="We use cookies for analytics purposes. Click to learn more"
				icon={ <span>🍪</span> }>

				<p aria-hidden>
					<span>We use cookies for analytics purposes</span><br />
					Click to learn more
				</p>
			</Button>

			<div className={ cls.controls }>
				<Button onClick={ accept }>Accept</Button>
				<Button onClick={ reject }>Reject</Button>
			</div>

		</div>
	);
};

export default CookieBanner;
