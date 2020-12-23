import Head from "next/head";
import React from "react";

const Layout = (props) => {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=5"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/safari-pinned-tab.svg"
					color="#eb000f"
				/>
				<link
					rel="preload"
					as="script"
					href="//www.google-analytics.com/analytics.js"
				/>
				<meta name="msapplication-TileColor" content="#000000" />
				<meta name="theme-color" content="#ffffff" />
			</Head>

			<header className="w-full bg-dark-green py-8">
				<h1 className="text-center text-s">Motorsport Calendars</h1>
			</header>

			<div className="max-w-screen-lg mx-auto font-sans p-8">
				{props.children}
			</div>
		</>
	);
};

export default Layout;
