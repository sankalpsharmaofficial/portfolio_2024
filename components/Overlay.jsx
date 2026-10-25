import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import portrait from '../public/assets/me/my_pic.jpg';
import { career, contact, projects, skills } from '../lib/content';
import { stopCenters } from './world/layout';

// One full-screen block per camera stop. Blocks let clicks fall through to the
// 3D world except on their cards.
const Stop = ({ id, align = 'left', children }) => (
	<section
		id={id}
		data-stop
		className={`relative min-h-[100svh] wrap flex pointer-events-none pt-20 pb-6 md:pb-0 items-end ${
			align === 'top' ? 'md:items-start md:pt-28' : 'md:items-center'
		}`}
	>
		<div className="pointer-events-auto w-full md:w-auto">{children}</div>
	</section>
);

const Chip = ({ children, color }) => (
	<span className="inline-block px-2.5 py-0.5 rounded-full border-2 border-ink text-sm font-semibold text-ink" style={{ background: color }}>
		{children}
	</span>
);

const Overlay = () => {
	const ref = useRef(null);
	const [sent, setSent] = useState(false);

	// Tell the camera rig where each stop sits on the page
	useEffect(() => {
		const measure = () => {
			stopCenters.values = [...ref.current.querySelectorAll('[data-stop]')].map(
				(el) => el.getBoundingClientRect().top + window.scrollY + el.offsetHeight / 2
			);
		};
		measure();
		const ro = new ResizeObserver(measure);
		ro.observe(ref.current);
		window.addEventListener('resize', measure);
		return () => {
			ro.disconnect();
			window.removeEventListener('resize', measure);
		};
	}, []);

	return (
		<div ref={ref} className="relative z-10 pointer-events-none">
			{/* Hero */}
			<section id="home" data-stop className="relative min-h-[100svh] wrap flex items-end md:items-center pb-10 md:pb-0 pt-20 pointer-events-none">
				<div className="max-w-[44rem]">
					<h1 className="display text-[clamp(3.5rem,13vw,8.5rem)] leading-[0.85] mb-6 md:mb-8 text-ink">
						Sankalp
						<br />
						Sharma
					</h1>
					<p className="text-lg md:text-2xl font-semibold text-ink max-w-[30ch] mb-6 md:mb-8">
						Full stack engineer at Snowflake. Scroll to fly through my work.
					</p>
					<div className="flex flex-wrap gap-3 pointer-events-auto">
						<a href="#career" className="btn btn-sun">
							Start the tour
						</a>
						<a href="#contact" className="btn btn-white">
							Get in touch
						</a>
					</div>
				</div>
			</section>

			{/* Career: one stop per stepping stone */}
			{career.map((item, i) => (
				<Stop key={item.id} id={i === 0 ? 'career' : `career-${i}`}>
					<article className="card max-w-[27rem] p-6 md:p-7">
						<div className="flex items-center justify-between gap-4 mb-4">
							<Chip color={item.kind === 'edu' ? 'var(--sun)' : 'var(--mint)'}>{item.period}</Chip>
							{/* The career is a real sequence, so a step counter earns its place */}
							<span className="flex gap-1.5" aria-label={`Step ${i + 1} of ${career.length}`}>
								{career.map((c, j) => (
									<span key={c.id} className={`w-2.5 h-2.5 rounded-full border-2 border-ink ${j <= i ? 'bg-ink' : 'bg-white'}`} />
								))}
							</span>
						</div>
						<h2 className="display text-[1.9rem] md:text-[2.3rem] leading-[0.95] mb-1">{item.title}</h2>
						<p className="text-lg font-semibold text-tomato mb-3">{item.org}</p>
						<p className="mb-4">{item.description}</p>
						<p className="text-sm font-semibold text-ink">{item.stack.join(', ')}</p>
					</article>
				</Stop>
			))}

			{/* Projects: the screens in the world are the links */}
			<Stop id="projects" align="top">
				<div className="card max-w-[22rem] p-5 md:p-6">
					<h2 className="display text-[2rem] md:text-[2.5rem] leading-[0.9] mb-2">Side projects</h2>
					<p>Apps I built to learn APIs, state and UI. Click a screen to open one.</p>
					<ul className="sr-only">
						{projects.map((p) => (
							<li key={p.title}>
								<Link href={p.link}>{p.title}</Link>
							</li>
						))}
					</ul>
				</div>
			</Stop>

			{/* About */}
			<Stop id="about">
				<article className="card max-w-[30rem] p-6 md:p-7">
					<div className="flex items-center gap-4 mb-5">
						<Image src={portrait} alt="Sankalp Sharma" sizes="80px" className="w-20 h-20 rounded-full border-[3px] border-ink object-cover" placeholder="blur" />
						<h2 className="display text-[2rem] md:text-[2.5rem] leading-[0.9]">About me</h2>
					</div>
					<div className="space-y-3">
						<p>
							I’m a full stack engineer at Snowflake, working on AI-powered observability. I joined through the
							Observe acquisition, where I built the dashboards enterprise teams used to watch their systems.
						</p>
						<p>
							I care about how fast things feel, and lately I’ve been wiring LLMs into products and working out how to
							observe them once they’re live. I hold an MS in Computer Science from Cal State East Bay.
						</p>
					</div>
				</article>
			</Stop>

			{/* Skills */}
			<Stop id="skills">
				<article className="card max-w-[30rem] p-6 md:p-7">
					<h2 className="display text-[2rem] md:text-[2.5rem] leading-[0.9] mb-5">What I work with</h2>
					<div className="grid grid-cols-2 gap-x-6 gap-y-5">
						{skills.map((g) => (
							<div key={g.title}>
								<h3 className="mb-2">
									<Chip color={g.color}>{g.title}</Chip>
								</h3>
								<ul className="text-ink font-medium leading-snug">
									{g.tools.map((t) => (
										<li key={t}>{t}</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</article>
			</Stop>

			{/* Contact */}
			<Stop id="contact">
				<article className="card max-w-[30rem] p-6 md:p-7 mb-4 md:mb-0">
					<h2 className="display text-[2.4rem] md:text-[3rem] leading-[0.88] mb-3">Get in touch</h2>
					<p className="mb-5">Open to full-time, contract and freelance work. Email is the fastest way to reach me.</p>
					<div className="flex flex-wrap gap-3 mb-6">
						<a href={`mailto:${contact.email}`} className="btn btn-tomato">
							Email me
						</a>
						<a href={contact.linkedin} target="_blank" rel="noreferrer" className="btn btn-white">
							LinkedIn
						</a>
						<a href={contact.github} target="_blank" rel="noreferrer" className="btn btn-white">
							GitHub
						</a>
					</div>
					{sent ? (
						<p className="font-semibold text-ink">Message sent. I’ll reply by email.</p>
					) : (
						<form
							action="https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060"
							method="POST"
							target="getform-result"
							onSubmit={() => setTimeout(() => setSent(true), 300)}
							className="grid grid-cols-2 gap-3"
						>
							<label className="sr-only" htmlFor="name">Name</label>
							<input id="name" name="name" required placeholder="Name" autoComplete="name" className="field" />
							<label className="sr-only" htmlFor="email">Email</label>
							<input id="email" name="email" type="email" required placeholder="Email" autoComplete="email" className="field" />
							<label className="sr-only" htmlFor="message">Message</label>
							<textarea id="message" name="message" required rows="3" placeholder="Message" className="field col-span-2 resize-none" />
							<button type="submit" className="btn btn-ink col-span-2 justify-center">
								Send message
							</button>
						</form>
					)}
					<iframe name="getform-result" title="Form submission" className="hidden" />
					<p className="text-sm mt-5">© {new Date().getFullYear()} Sankalp Sharma</p>
				</article>
			</Stop>
		</div>
	);
};

export default Overlay;
