/* eslint-disable no-unused-vars */
declare global
{
	interface Window
	{
		/**
		 * Notify Clarity about user's cookie consent
		 * @param cmd - command
		 * @param consent - consent (default: true)
		 * @see https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-api
		 */
		clarity?(cmd: "consent", consent?: boolean): void;
		/**
		 * Set custom Clarity user identifier
		 * @param cmd - command
		 * @param customId - user identifier
		 * @param customSessionId - session identifier
		 * @param customPageId - page identifier
		 * @param friendlyName - user friendly name
		 * @see https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-api
		 */
		clarity?(cmd: "identify", customId: string, customSessionId?: string, customPageId?: string, friendlyName?: string): void;
		/**
		 * Add custom tag to Clarity session recording
		 * @param cmd - command
		 * @param key - tag
		 * @param value - value
		 * @see https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-api
		 */
		clarity?(cmd: "set", key: string, value: string): void;
		/**
		 * Add custom event to Clarity session recording
		 * @param cmd - command
		 * @param value - event name
		 * @see https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-api
		 */
		clarity?(cmd: "event", value: string): void;
		/**
		 * Prioritize current Clarity session recording
		 * @param cmd - command
		 * @param reason - reason for upgrade
		 * @see https://learn.microsoft.com/en-us/clarity/setup-and-installation/clarity-api
		 */
		clarity?(cmd: "upgrade", reason: string): void;
	}
}

export type ClarityProps =
	{ cmd: "consent", consent?: boolean; } |
	{ cmd: "identify", customId: string, customSessionId?: string, customPageId?: string, friendlyName?: string; } |
	{ cmd: "set", key: string, value: string; } |
	{ cmd: "event", value: string; } |
	{ cmd: "upgrade", reason: string; };

export default global;
