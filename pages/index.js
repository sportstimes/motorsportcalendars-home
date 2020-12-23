import Head from "next/head";
import Layout from "../components/Layout/Layout";

export default function Home() {
	return (
		<Layout>
			<section className="text-center mb-20">
				<p className="mb-8 text-lg underline">
					<ul className="space-y-2">
						<li>
							<a href="http://f1calendar.com">F1 Calendar</a>
						</li>
						<li>
							<a href="https://f2cal.com">F2 Calendar</a>
						</li>
						<li>
							<a href="https://f3calendar.com">F3 Calendar</a>
						</li>
						<li>
							<a href="http://formulaecal.com">Formula E Calendar</a>
						</li>
						<li>
							<a href="https://wseriescalendar.com">W Series Calendar</a>
						</li>
					</ul>
				</p>

				<p className="mb-8">
					Are we missing something?
					<br />
					<a href="http://github.com/sportstimes/f1" className="underline">
						Contribute your favorite sport and we'll add it to our family
						of calendars.
					</a>
				</p>
			</section>

			<footer className="text-center">
				<p class="attribute">
					©&nbsp;
					<a href="https://andydev.co.uk" rel="author developer">
						Andrew Yates
					</a>
					,&nbsp;
					<a href="https://andyhiggs.uk/" rel="author designer">
						Andy Higgs
					</a>
					,&nbsp;
					<a href="https://sijobling.com" rel="author developer">
						Si Jobling
					</a>{" "}
					&amp;&nbsp;
					<a href="http://abitgone.co.uk/" rel="author">
						Ant Williams
					</a>{" "}
					2020
				</p>
			</footer>
		</Layout>
	);
}
