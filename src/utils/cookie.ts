import Clarity from "@microsoft/clarity";
import "client-only";

export function acceptCookies(): void {
	setCookie("CC", "1", 5184000); // 60 days
	try {
		Clarity.consentV2({ ad_Storage: "denied", analytics_Storage: "granted" });
	} catch {}
}

export function rejectCookies(): void {
	setCookie("CC", "0", 86400); // 1 day
	try {
		Clarity.consentV2({ ad_Storage: "denied", analytics_Storage: "denied" });
	} catch {}
}

export function getCookieChoice(): "granted" | "denied" | "none" {
	switch (getCookie("CC")) {
		case "1":
			return "granted";
		case "0":
			return "denied";
		default:
			return "none";
	}
}

function setCookie(name: string, value: string | number, maxAge: number): void {
	window.document.cookie = `${name}=${value}; max-age=${maxAge}; path=/`;
}

function getCookie(name: string): string | undefined {
	const cookieName = name + "=";
	const rawCookies = decodeURIComponent(window.document.cookie);
	const cookies = rawCookies.split(";");

	for (const cookie of cookies)
		if (cookie.trim().startsWith(cookieName)) return cookie.trim().substring(cookieName.length);

	return undefined;
}
