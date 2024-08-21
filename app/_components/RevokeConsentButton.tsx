"use client";

import Button from "@/_components/Button";
import React, { useCallback, useEffect, useState } from "react";
import { getCookieChoice, rejectCookies } from "../_utils/analytics/client";

const RevokeConsentButton: React.FC = () =>
{
	const [hasConsent, setHasConsent] = useState<boolean>(false);

	useEffect(() =>
	{
		console.log("getCookieChoice", getCookieChoice());
		setHasConsent(getCookieChoice() === "accepted");
	}, []);

	const revoke = useCallback(() =>
	{
		rejectCookies();
		setHasConsent(false);
		window.alert("Your consent has been revoked");
	}, []);

	if (!hasConsent)
		return null;

	return <Button onClick={ revoke }>Revoke my consent</Button>;
};

export default RevokeConsentButton;
