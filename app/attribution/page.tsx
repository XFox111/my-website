import Package from "@/../package.json";
import Button from "@/_components/Button";
import RevokeConsentButton from "@/_components/RevokeConsentButton";
import { canonicalName, getTitle } from "@/_data/metadata";
import ThirdPartyAttribution from "@/_data/ThirdPartyAttributiont";
import { analyticsEnabled, requireExplicitConsent } from "@/_utils/analytics/server";
import { ArrowLeft24Regular, ArrowRight24Regular } from "@fluentui/react-icons";
import { Metadata } from "next";
import { unstable_noStore } from "next/cache";
import React from "react";
import cls from "./page.module.scss";

export async function generateMetadata(): Promise<Metadata>
{
	unstable_noStore();
	return {
		title: getTitle("Attributions & information", canonicalName.hostname),
		robots: "noindex"
	};
}

const AttributionPage: React.FC = () => (
	<main className={ cls.page }>

		<Button appearance="secondary" as="next" href="/" icon={ <ArrowLeft24Regular /> }>
			Back
		</Button>

		<article>
			<h1>Attributions &amp; information</h1>

			{ analyticsEnabled() &&
				<section>
					<h2>Privacy policy</h2>
					<p>
						We partner with Microsoft Clarity and Microsoft Advertising to capture how you use and interact with this website through behavioral metrics, heatmaps, and session replay.
						Website usage data is captured using first and third-party cookies and other tracking technologies for site optimization purposes and general statistics collection.
					</p>
					<p>
						As website owners, we do not collect any personal data.
						For more information about how Microsoft collects and uses your data,
						see the <a href="https://privacy.microsoft.com/privacystatement" target="_blank">Microsoft Privacy Statement</a>.
					</p>
					<p>
						If the &quot;Do Not Track&quot; option is enabled in your browser,
						the website will not execute any tracking code.
					</p>
					{ requireExplicitConsent() &&
						<p>
							If you previously gave your consent to use cookies,
							you can revoke it by clicking &quot;Revoke my consent&quot; button on this page below
							(the button is available only if the consent was given).
							Recorded data will be deleted after 30-day retention period.
						</p>
					}

					<div className={ cls.buttonRow }>
						{ requireExplicitConsent() && <RevokeConsentButton /> }
						<Button appearance="secondary"
							href="https://learn.microsoft.com/clarity/faq#privacy" target="_blank"
							iconAfter={ <ArrowRight24Regular /> }>

							Visit Clarity privacy FAQ
						</Button>
					</div>
				</section>
			}

			<section>
				<h2>Content copyright policy</h2>
				<p>
					Copyright &copy; { new Date().getFullYear() } { Package.author.name }. Some rights reserved.
				</p>
				<p>
					Text and graphical material of this website is a subject to general copyright law. You must obtain written permission from the author to use any copyrighted material.
				</p>
				<p>
					You may use copyrighted material without excplicit permission in following cases:
				</p>
				<ul>
					<li>Educational purposes.</li>
					<li>Any other cases that may be deemed as fair use.</li>
				</ul>
				<p>
					When shared or modified, each copyrighted material must have a proper attribution.
				</p>

				<Button appearance="secondary"
					href={ new URL("./blob/main/COPYING", Package.repository.url).href } target="_blank"
					iconAfter={ <ArrowRight24Regular /> }>

					View copyright notice
				</Button>
			</section>

			<section>
				<h2>Website source code license</h2>
				<p>MIT License</p>
				<p>Copyright &copy; { new Date().getFullYear() } { Package.author.name }</p>
				<p>
					Permission is hereby granted, free of charge, to any person obtaining a copy
					of this software and associated documentation files (the &quot;Software&quot;), to deal
					in the Software without restriction, including without limitation the rights
					to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
					copies of the Software, and to permit persons to whom the Software is
					furnished to do so, subject to the following conditions:
				</p>
				<p>
					The above copyright notice and this permission notice shall be included in all
					copies or substantial portions of the Software.
				</p>
				<p>
					THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
					IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
					FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
					AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
					LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
					OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
					SOFTWARE.
				</p>

				<Button appearance="secondary"
					href={ Package.repository.url } target="_blank"
					iconAfter={ <ArrowRight24Regular /> }>

					Source code
				</Button>
			</section>

			<section>
				<h2>Third-party content</h2>
				<ThirdPartyAttribution />
				<p>
					Source code of this website has a list of dependencies which are subject to their individual licenses and terms.
					License text can be found for each dependency library individually in their own designated source code repositories.
				</p>
				<Button appearance="secondary"
					href={ new URL("./network/dependencies", Package.repository.url).href } target="_blank"
					iconAfter={ <ArrowRight24Regular /> }>

					Full list of third-party libraries
				</Button>
			</section>

		</article>
	</main>
);

export default AttributionPage;
