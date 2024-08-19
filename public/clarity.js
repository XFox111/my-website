// Microsoft Clarity tracking code
// Learn more: https://clarity.microsoft.com
// Privacy FAQ: https://learn.microsoft.com/clarity/faq#privacy

/*
 * This is a modified version of the original script provided by Microsoft.
 * It was reverse-engineered for better readability and transparency.
 *
 * Original code snippet:
 *
 * <script type="text/javascript">
 * 		(function(c,l,a,r,i,t,y){
 * 			c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
 * 			t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
 * 			y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
 * 		})(window, document, "clarity", "script", "[redacted_clarity_id]");
 * 	</script>
 */

// If you want to setup Clarity analytics as well, you'll need to specify the ID in .env file,
// which can be found in the snippet above (see "[redacted_clarity_id]").
// Snippet can be obtained from the Clarity dashboard.

// @ts-check

(function ()
{
	/** @type {string | undefined} */
	const id = document.getElementById("ms-clarity")?.dataset.id;

	if (!id)
		return;

	window["clarity"] ??= function ()
	{
		window["clarity"].q ??= [];
		window["clarity"].q.push(arguments);
	};

	/** @type {HTMLScriptElement} */
	const scriptTag = document.createElement("script");
	scriptTag.async = true;
	scriptTag.src = "https://www.clarity.ms/tag/" + id;

	/** @type {HTMLScriptElement} */
	const firstScript = document.getElementsByTagName("script")[0];
	firstScript.parentNode?.insertBefore(scriptTag, firstScript);
})();
