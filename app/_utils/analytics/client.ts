"use client";

export const acceptCookies = (): void =>
{
	setCookie("CC", "1", 5184000);	// 60 days
	window.clarity?.("consent", true);
};

export const rejectCookies = (): void =>
{
	setCookie("CC", "0", 86400);	// 1 day
	window.clarity?.("consent", false);
};

export const dismissCookies = (): void =>
{
	setCookie("CC", "", 1209600);	// 14 days
};

export const requireExcplicitConsent: boolean = process.env.NEXT_PUBLIC_CLARITY_CONSENT === "1";

export const getCookieChoice = (): "accepted" | "rejected" | "acknowledged" | "none" =>
{
	switch (getCookie("CC"))
	{
		case "1": return "accepted";
		case "0": return "rejected";
		case "": return "acknowledged";
		default: return "none";
	}
};

function setCookie(name: string, value: string | number, maxAge: number): void
{
	window.document.cookie = `${name}=${value}; max-age=${maxAge}; path=/`;
}

function getCookie(name: string): string | undefined
{
	let cookieName = name + "=";
	let rawCookies = decodeURIComponent(window.document.cookie);
	let cookies = rawCookies.split(";");

	for (const cookie of cookies)
		if (cookie.trim().startsWith(cookieName))
			return cookie.substring(cookieName.length);

	return undefined;
}
