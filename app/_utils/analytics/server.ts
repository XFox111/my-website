import { unstable_noStore } from "next/cache";
import { headers } from "next/headers";

/**
 * Check if Clarity is enabled
 * @returns true if Clarity is enabled
 */
export const analyticsEnabled = (): boolean =>
{
	unstable_noStore();
	return !!process.env.CLARITY_ID;
};

/**
 * Check if Clarity requires explicit consent
 * @returns true if Clarity requires explicit consent
 */
export const requireExcplicitConsent = (): boolean =>
{
	unstable_noStore();
	return process.env.CLARITY_CONSENT === "1";
};

/**
 * Check if Clarity is enabled and the browser didn't send a DNT signal
 * @returns true if Clarity is enabled and the browser didn't send a DNT signal
 */
export const canLoadAnalytics = (): boolean =>
	analyticsEnabled() && headers().get("Dnt") !== "1";
