import Head from 'next/head';
import dynamic from 'next/dynamic';
import Overlay from '../components/Overlay';

// The 3D world only renders in the browser
const World = dynamic(() => import('../components/world/World'), { ssr: false });

export default function Home() {
	return (
		<>
			<Head>
				<title>Sankalp Sharma — Full Stack Developer & AI Prompt Engineer</title>
				<meta
					name="description"
					content="Sankalp Sharma is a Full Stack Developer and AI Prompt Engineer at Snowflake, building performant, scalable applications with React, Next.js, Node.js, and modern AI tools."
				/>
				<meta name="keywords" content="full stack developer, AI prompt engineer, react developer, node.js, snowflake, web developer, portfolio, sankalp sharma" />
				<meta name="author" content="Sankalp Sharma" />
				<meta property="og:title" content="Sankalp Sharma — Full Stack Developer & AI Prompt Engineer" />
				<meta property="og:description" content="Full Stack Developer at Snowflake. Building performant, scalable digital experiences with modern web technologies and AI." />
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Sankalp Sharma — Full Stack Developer & AI Prompt Engineer" />
				<meta name="twitter:description" content="Full Stack Developer at Snowflake. Building performant, scalable digital experiences with modern web technologies and AI." />
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
				<meta name="theme-color" content="#8fd3ff" />
			</Head>

			<div className="fixed inset-0 z-0" aria-hidden="true">
				<World />
			</div>
			{/* Clicks fall through to the 3D world except on the overlay cards */}
			<main className="pointer-events-none">
				<Overlay />
			</main>
		</>
	);
}
