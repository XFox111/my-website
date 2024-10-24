import { unstable_noStore } from "next/cache";

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
export const requireExplicitConsent = (): boolean =>
{
	unstable_noStore();
	return process.env.CLARITY_CONSENT === "1";
};
