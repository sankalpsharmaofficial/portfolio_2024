import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const ProjectDetail = ({ title, image, overview, technologies, codeUrl, demoUrl }) => {
	return (
		<>
			<Head>
				<title>{`${title} | Sankalp Sharma`}</title>
			</Head>
			<main className="min-h-screen pt-24 md:pt-32 pb-20">
				<div className="wrap">
					<Link href="/#projects" className="btn btn-white mb-8 md:mb-10">
						Back to the world
					</Link>

					<h1 className="display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.9] mb-8 md:mb-10">{title}</h1>

					{image && (
						<div className="card overflow-hidden mb-10 aspect-[16/10] md:aspect-[21/9]">
							<Image
								src={image}
								alt={`Screenshot of ${title}`}
								sizes="(min-width: 1280px) 1216px, 100vw"
								className="w-full h-full object-cover object-top"
								placeholder="blur"
								priority
							/>
						</div>
					)}

					<div className="card p-6 md:p-8 md:grid md:grid-cols-[1fr_2fr] gap-10">
						<div className="mb-6 md:mb-0">
							<h2 className="display text-xl mb-3">Built with</h2>
							<ul className="flex flex-wrap gap-2">
								{technologies.map((t) => (
									<li key={t} className="px-2.5 py-0.5 rounded-full border-2 border-ink text-sm font-semibold bg-[var(--sun)]">
										{t}
									</li>
								))}
							</ul>
						</div>
						<div>
							<p className="text-lg mb-6 max-w-[62ch]">{overview}</p>
							<div className="flex flex-wrap gap-3">
								{demoUrl && (
									<a href={demoUrl} target="_blank" rel="noreferrer" className="btn btn-tomato">
										Open live demo
									</a>
								)}
								{codeUrl && (
									<a href={codeUrl} target="_blank" rel="noreferrer" className="btn btn-white">
										View code on GitHub
									</a>
								)}
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default ProjectDetail;
