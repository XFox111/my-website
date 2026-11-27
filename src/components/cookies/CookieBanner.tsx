"use client";

import { acceptCookies, getCookieChoice, rejectCookies } from "@/utils/cookie";
import Clarity from "@microsoft/clarity";
import { ReactElement, useEffect, useState } from "react";
import Button from "../shared/Button";
import cls from "./CookieBanner.module.scss";
import Checkmark24Regular from "@fluentui/svg-icons/icons/checkmark_24_regular.svg";
import Dismiss24Regular from "@fluentui/svg-icons/icons/dismiss_24_regular.svg";

export default function CookieBanner(): ReactElement {
	const [show, setShow] = useState<boolean>(false);

	useEffect(() => {
		console.log("DNT", navigator.doNotTrack);
		console.log("CLARITY_ID", process.env.NEXT_PUBLIC_CLARITY_ID);
		if (navigator.doNotTrack === "1" || !process.env.NEXT_PUBLIC_CLARITY_ID) return;

		try {
			Clarity.init(process.env.NEXT_PUBLIC_CLARITY_ID!);
		} catch {}

		const choice = getCookieChoice();
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setShow(choice === "none");

		if (choice !== "none") {
			try {
				Clarity.consentV2({ ad_Storage: "denied", analytics_Storage: choice });
			} catch {}
		}
	}, []);

	function accept(): void {
		acceptCookies();
		setShow(false);
	}

	function reject(): void {
		rejectCookies();
		setShow(false);
	}

	if (!show) return <></>;

	return (
		<div className={cls.banner}>
			<Button as="next-link" href="/attribution" icon={<i>🍪</i>} className={cls.learnMore}>
				<p>
					We use cookies (only for analytics)
					<br />
					<span>Click to learn more</span>
				</p>
			</Button>

			<div className={cls.actions}>
				<Button as="button" onClick={accept} icon={<Checkmark24Regular />}>
					Accept
				</Button>
				<Button as="button" onClick={reject} icon={<Dismiss24Regular />}>
					Reject
				</Button>
			</div>
		</div>
	);
}
