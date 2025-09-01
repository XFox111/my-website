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
