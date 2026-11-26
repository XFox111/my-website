declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NEXT_PUBLIC_BUILD_YEAR: string;
			NEXT_PUBLIC_CLARITY_ID: string | undefined;
			NEXT_PUBLIC_TURNSTILE_SITEKEY: string | undefined;
			CF_TURNSTILE_SECRETKEY: string | undefined;
			SMTP_HOST: string | undefined;
			SMTP_PORT: string | undefined;
			SMTP_USER: string | undefined;
			SMTP_PASSWORD: string | undefined;
			SMTP_FROM_EMAIL: string | undefined;
			SMTP_TO_EMAIL: string | undefined;
		}
	}
}

export default global;
