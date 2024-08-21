import { headers } from "next/headers";

/**
 * Check if Clarity is enabled
 * @returns true if Clarity is enabled
 */
export const analyticsEnabled = (): boolean => !!process.env.CLARITY_ID;

/**
 * Check if Clarity is enabled and the browser didn't send a DNT signal
 * @returns true if Clarity is enabled and the browser didn't send a DNT signal
 */
export const canLoadAnalytics = (): boolean =>
	analyticsEnabled() && headers().get("Dnt") !== "1";
