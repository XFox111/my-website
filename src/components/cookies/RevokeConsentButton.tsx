"use client";

import Button from "@/components/shared/Button";
import { getCookieChoice, rejectCookies } from "@/utils/cookie";
import { ReactElement, useCallback, useEffect, useState } from "react";

export default function RevokeConsentButton(): ReactElement {
	const [hasConsent, setConsent] = useState<boolean>(false);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setConsent(getCookieChoice() === "granted");
	}, []);

	const revoke = useCallback((): void => {
		rejectCookies();
		setConsent(false);
		window.alert("Your consent has been revoked");
	}, []);

	if (!hasConsent) return <></>;

	return (
		<Button as="button" onClick={revoke}>
			Revoke my consent
		</Button>
	);
}
