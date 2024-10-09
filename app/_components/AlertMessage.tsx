import React from "react";
import cls from "./AlertMessage.module.scss";
import { ChatWarningRegular } from "@fluentui/react-icons";

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

const AlertMessage: React.FC = async () =>
{
	if (!process.env.ALERT_TEXT_URL)
		return null;

	try
	{
		const response: Response = await fetch(process.env.ALERT_TEXT_URL, { cache: "no-cache" });
		const alertText: string = await response.text();

		if (!response.ok || !alertText)
			return null;

		const title: string = alertText.split("\n", 1)[0];
		const message: string = alertText.substring(title.length);

		return (
			<div role="alert" className={ cls.alertBox } aria-label={ alertText }>
				<ChatWarningRegular className={ cls.icon } />
				<div>
					<p className={ cls.title }>{ title }</p>
					<p dangerouslySetInnerHTML={ { __html: message } } />
				</div>
			</div>
		);
	}
	catch
	{
		return null;
	}
};

export default AlertMessage;
