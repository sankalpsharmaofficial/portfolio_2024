/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiArrowUpRight } from 'react-icons/fi';

const projects = [
	{
		title: 'Weather Dashboard',
		description: 'A real-time weather application with beautiful visualizations, location-based forecasts, and dynamic backgrounds that adapt to weather conditions.',
		tags: ['React', 'API', 'CSS3', 'Responsive'],
		color: 'var(--accent-cyan)',
		emoji: '🌤️',
		link: '/weather',
		featured: true
	},
	{
		title: 'Task Manager Pro',
		description: 'A productivity-focused todo application with drag-and-drop organization, priority levels, and persistent local storage.',
		tags: ['React', 'Local Storage', 'Drag & Drop'],
		color: 'var(--accent-violet)',
		emoji: '✅',
		link: '/todo',
		featured: true
	},
	{
		title: 'Expense Tracker',
		description: 'Smart financial tracking app with interactive charts, category breakdowns, and monthly spending insights.',
		tags: ['React', 'Charts', 'State Management'],
		color: 'var(--accent-pink)',
		emoji: '💰',
		link: '/expenseTracker',
		featured: true
	},
	{
		title: 'Squid Game Fan App',
		description: 'An immersive themed application inspired by the popular series with gamification elements and themed UI components.',
		tags: ['React', 'CSS Animations', 'Theming'],
		color: 'var(--accent-emerald)',
		emoji: '🦑',
		link: '/squidGame',
		featured: false
	},
	{
		title: 'COVID-19 Tracker',
		description: 'Real-time COVID-19 statistics dashboard with interactive maps, data visualization, and country-wise breakdowns.',
		tags: ['React', 'API', 'Data Viz', 'Maps'],
		color: 'var(--accent-cyan)',
		emoji: '📊',
		link: '/covid',
		featured: false
	},
	{
		title: 'Advice Generator',
		description: 'A beautifully designed random advice generator with smooth animations and shareable wisdom cards.',
		tags: ['React', 'API Integration', 'Animations'],
		color: 'var(--accent-violet)',
		emoji: '💡',
		link: '/adviceGenerator',
		featured: false
	}
];

const Projects = () => {
	const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

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

	const featuredProjects = projects.filter(p => p.featured);
	const otherProjects = projects.filter(p => !p.featured);

	return (
		<section id="projects" className="relative w-full py-28 md:py-36">
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
					<span className="section-label">Projects</span>
					<h2 className="text-[var(--text-primary)] mb-4">
						Featured <span className="gradient-text">work</span>
					</h2>
					<p className="max-w-[500px] text-[var(--text-secondary)]">
						A selection of projects that showcase my passion for building
						thoughtful, user-centric digital experiences.
					</p>
				</motion.div>

				{/* Featured Projects - Large Cards */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
					{featuredProjects.map((project, i) => (
						<motion.a
							key={i}
							href={project.link}
							className="glass-card p-6 group cursor-pointer block border-gradient relative overflow-hidden"
							variants={itemVariants}
							whileHover={{ y: -6 }}
						>
							{/* Glow Effect */}
							<div
								className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
								style={{ background: project.color }}
							/>

							{/* Emoji Icon */}
							<div className="text-4xl mb-5">{project.emoji}</div>

							{/* Title */}
							<div className="flex items-center justify-between mb-3">
								<h3 className="text-lg font-semibold text-[var(--text-primary)] group-hover:gradient-text transition-all duration-300">
									{project.title}
								</h3>
								<FiArrowUpRight
									className="text-[var(--text-muted)] group-hover:text-[var(--accent-cyan)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
									size={18}
								/>
							</div>

							{/* Description */}
							<p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">
								{project.description}
							</p>

							{/* Tags */}
							<div className="flex flex-wrap gap-2">
								{project.tags.map((tag, j) => (
									<span
										key={j}
										className="text-xs px-2.5 py-1 rounded-md font-mono"
										style={{
											background: `${project.color}10`,
											color: project.color,
											border: `1px solid ${project.color}20`
										}}
									>
										{tag}
									</span>
								))}
							</div>
						</motion.a>
					))}
				</div>

				{/* Other Projects - Compact List */}
				<motion.div variants={itemVariants}>
					<p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-6">
						Other notable projects
					</p>
					<div className="space-y-3">
						{otherProjects.map((project, i) => (
							<motion.a
								key={i}
								href={project.link}
								className="glass-card px-6 py-4 flex items-center justify-between group cursor-pointer block"
								initial={{ opacity: 0, x: -20 }}
								animate={inView ? { opacity: 1, x: 0 } : {}}
								transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
								whileHover={{ x: 6 }}
							>
								<div className="flex items-center gap-4">
									<span className="text-xl">{project.emoji}</span>
									<div>
										<h4 className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-cyan)] transition-colors">
											{project.title}
										</h4>
										<p className="text-xs text-[var(--text-muted)] hidden sm:block">
											{project.description.slice(0, 80)}...
										</p>
									</div>
								</div>
								<div className="flex items-center gap-3">
									<div className="hidden md:flex gap-2">
										{project.tags.slice(0, 2).map((tag, j) => (
											<span
												key={j}
												className="text-xs px-2 py-0.5 rounded font-mono text-[var(--text-muted)] bg-[rgba(255,255,255,0.03)]"
											>
												{tag}
											</span>
										))}
									</div>
									<FiArrowUpRight
										className="text-[var(--text-muted)] group-hover:text-[var(--accent-cyan)] transition-all duration-300"
										size={16}
									/>
								</div>
							</motion.a>
						))}
					</div>
				</motion.div>

				{/* GitHub CTA */}
				<motion.div
					variants={itemVariants}
					className="text-center mt-16"
				>
					<a
						href="https://github.com/sankalpsharmaofficial"
						target="_blank"
						rel="noreferrer"
						className="btn-outline inline-flex"
					>
						<FiGithub className="text-lg" />
						View More on GitHub
					</a>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Projects;
