import ChatWarningRegular from "@fluentui/svg-icons/icons/chat_warning_24_regular.svg";
import React from "react";
import cls from "./AlertMessage.module.scss";

/**
 * This alert box displays a custom message at the top of the homepage.
 *
 * It retrieves the message from a text file located at ALERT_TEXT_URL.
 * Useful when needed to display a quick urgent message without recompiling the website.
 *
 * The message is shown when following criterias are met:
 * - ALERT_TEXT_URL variable is set
 * - The file located at ALERT_TEXT_URL is accessible, not empty, and returns successfull HTTP status code (2xx)
 */

async function fetchAlert(): Promise<[string, string, string] | null>
{
	if (!process.env.ALERT_TEXT_URL)
		return null;

	try
	{
		const response: Response = await fetch(process.env.ALERT_TEXT_URL, { cache: "no-cache" });
		const alertText: string = await response.text();

		if (!response.ok || !alertText)
			return null;

		const title: string = alertText.split("\n", 1)[0].trim();
		const message: string = alertText.substring(title.length + 1).trim();

		return [alertText, title, message];
	}
	catch
	{
		return null;
	}
}

const AlertMessage: React.FC = async () =>
{
	const result = await fetchAlert();

	if (!result)
		return null;

	const [alertText, title, message] = result;

	return (
		<div role="alert" className={ cls.alertBox } aria-label={ alertText }>
			<ChatWarningRegular className={ cls.icon } />
			<div>
				<p className={ cls.title }>{ title }</p>
				<p className={ cls.message } dangerouslySetInnerHTML={ { __html: message } } />
			</div>
		</div>
	);
};

export default AlertMessage;
