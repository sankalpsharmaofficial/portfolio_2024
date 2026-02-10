/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiOutlineCode, HiOutlineSparkles, HiOutlineLightBulb, HiOutlineGlobe } from 'react-icons/hi';

const stats = [
	{ number: '4+', label: 'Years Experience' },
	{ number: '20+', label: 'Projects Built' },
	{ number: '15+', label: 'Technologies' },
	{ number: '∞', label: 'Curiosity' }
];

const passions = [
	{
		icon: <HiOutlineCode className="text-2xl" />,
		title: 'Full Stack Dev',
		desc: 'Building end-to-end applications — from React frontends to Node.js backends and cloud infrastructure.',
		color: 'var(--accent-cyan)'
	},
	{
		icon: <HiOutlineSparkles className="text-2xl" />,
		title: 'AI & Prompt Engineering',
		desc: 'Leveraging AI models and crafting intelligent prompts to build smarter, more adaptive applications.',
		color: 'var(--accent-violet)'
	},
	{
		icon: <HiOutlineLightBulb className="text-2xl" />,
		title: 'Design & Performance',
		desc: 'Crafting intuitive UIs with obsessive attention to performance — lazy loading, code splitting, caching.',
		color: 'var(--accent-pink)'
	},
	{
		icon: <HiOutlineGlobe className="text-2xl" />,
		title: 'Cloud & Observability',
		desc: 'Working with Snowflake data cloud platform, building tools for AI-powered observability at scale.',
		color: 'var(--accent-emerald)'
	}
];

const About = () => {
	const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.1, delayChildren: 0.1 }
		}
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
		}
	};

	return (
		<section id="about" className="relative w-full py-28 md:py-36">
			<div className="dot-grid"></div>

			<motion.div
				ref={ref}
				className="relative z-10 max-w-[1200px] mx-auto px-6"
				variants={containerVariants}
				initial="hidden"
				animate={inView ? 'visible' : 'hidden'}
			>
				{/* Section Header */}
				<motion.div variants={itemVariants} className="mb-16">
					<span className="section-label">About Me</span>
					<h2 className="text-[var(--text-primary)] mb-6">
						Turning ideas into
						<br />
						<span className="gradient-text">production reality.</span>
					</h2>
				</motion.div>

				{/* Two Column Layout */}
				<div className="grid lg:grid-cols-5 gap-12 lg:gap-16 mb-20">
					{/* Left - Bio */}
					<motion.div variants={itemVariants} className="lg:col-span-3 space-y-5">
						<p className="text-lg leading-relaxed">
							I'm a full stack developer at <span className="text-[var(--accent-cyan)] font-medium">Snowflake</span>, 
							where I help build the future of AI-powered observability. With 4+ years of hands-on experience 
							shipping production software, I bridge the gap between pixel-perfect frontends 
							and robust backend systems.
						</p>
						<p className="leading-relaxed">
							My expertise spans the entire stack — from 
							<span className="text-[var(--accent-cyan)]"> React</span> & 
							<span className="text-[var(--accent-violet)]"> Next.js</span> on the frontend, to 
							<span className="text-[var(--accent-emerald)]"> Node.js</span> & 
							<span className="text-[var(--accent-pink)]"> Python</span> on the backend, 
							with a growing passion for AI prompt engineering and building intelligent systems. 
							I hold an MS in Computer Science from 
							<span className="text-[var(--text-primary)] font-medium"> Cal State East Bay</span>.
						</p>
						<p className="leading-relaxed">
							I'm obsessed with performance optimization — lazy loading, code splitting, 
							caching strategies — and creating applications that are not just beautiful, 
							but blazing fast. When I'm not shipping features, you'll find me exploring 
							the bleeding edge of AI and web development.
						</p>

						{/* Tech marquee */}
						<div className="pt-6">
							<p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-4">
								Currently working with
							</p>
							<div className="flex flex-wrap gap-2">
								{['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'Snowflake', 'AI/LLMs', 'Tailwind CSS', 'PostgreSQL', 'Docker'].map((tech, i) => (
									<motion.span
										key={i}
										className="skill-tag"
										initial={{ opacity: 0, scale: 0.8 }}
										animate={inView ? { opacity: 1, scale: 1 } : {}}
										transition={{ delay: 0.4 + i * 0.05, duration: 0.4 }}
									>
										{tech}
									</motion.span>
								))}
							</div>
						</div>
					</motion.div>

					{/* Right - Stats */}
					<motion.div variants={itemVariants} className="lg:col-span-2">
						<div className="grid grid-cols-2 gap-4">
							{stats.map((stat, i) => (
								<motion.div
									key={i}
									className="glass-card p-6 text-center"
									initial={{ opacity: 0, scale: 0.9 }}
									animate={inView ? { opacity: 1, scale: 1 } : {}}
									transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
									whileHover={{ scale: 1.03 }}
								>
									<div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
										{stat.number}
									</div>
									<div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
										{stat.label}
									</div>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>

				{/* Passion Cards - Bento Style */}
				<motion.div variants={itemVariants}>
					<p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-6">
						What drives me
					</p>
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
						{passions.map((passion, i) => (
							<motion.div
								key={i}
								className="glass-card p-6 group cursor-default"
								initial={{ opacity: 0, y: 20 }}
								animate={inView ? { opacity: 1, y: 0 } : {}}
								transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
								whileHover={{ y: -4 }}
							>
								<div
									className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
									style={{
										background: `${passion.color}15`,
										color: passion.color
									}}
								>
									{passion.icon}
								</div>
								<h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">
									{passion.title}
								</h3>
								<p className="text-sm text-[var(--text-muted)] leading-relaxed">
									{passion.desc}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default About;
