import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiOutlineBriefcase, HiOutlineAcademicCap } from 'react-icons/hi';

const experiences = [
	{
		type: 'work',
		title: 'Full Stack Engineer',
		company: 'Snowflake',
		period: '2024 — Present',
		description: 'Building AI-powered observability tools on Snowflake\'s data cloud platform following the acquisition of Observe, Inc. Working across the full stack — React frontends, Node.js services, and Snowflake\'s data infrastructure — to deliver enterprise-grade solutions at scale.',
		technologies: ['React', 'TypeScript', 'Node.js', 'Snowflake', 'Python', 'AI/ML'],
		current: true
	},
	{
		type: 'work',
		title: 'Software Engineer',
		company: 'Observe, Inc.',
		period: '2023 — 2024',
		description: 'Developed observability and monitoring tools for enterprise customers. Built performant dashboards, real-time data visualizations, and contributed to the frontend architecture. Company acquired by Snowflake in 2024.',
		technologies: ['React', 'TypeScript', 'GraphQL', 'PostgreSQL', 'Docker']
	},
	{
		type: 'work',
		title: 'Frontend Developer',
		company: 'Previous Roles',
		period: '2020 — 2023',
		description: 'Built modern web applications across multiple organizations, progressing from frontend specialist to full stack contributor. Focused on React ecosystem, API integrations, and performance optimization. Shipped 15+ production applications.',
		technologies: ['React', 'Next.js', 'JavaScript', 'REST APIs', 'Firebase']
	},
	{
		type: 'education',
		title: 'MS in Computer Science',
		company: 'California State University — East Bay',
		period: '2017 — 2019',
		description: 'Specialized in Advanced AI, Distributed Systems, and Algorithms. Coursework included Cryptography, Cyber Security, and IoT. Published research on ontology-based disease research systems.',
		technologies: ['AI', 'Distributed Systems', 'Algorithms', 'Python', 'Research']
	},
	{
		type: 'education',
		title: 'Bachelor of Technology',
		company: 'University (India)',
		period: '2013 — 2017',
		description: 'Studied Computer Science fundamentals including data structures, algorithms, software engineering, and object-oriented programming. Built foundational skills in Java, Python, and web development.',
		technologies: ['Java', 'Data Structures', 'OOP', 'Web Dev', 'Python']
	}
];

const Experience = () => {
	const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.15, delayChildren: 0.1 }
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
		<section id="experience" className="relative w-full py-28 md:py-36">
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
					<span className="section-label">Experience</span>
					<h2 className="text-[var(--text-primary)] mb-4">
						My <span className="gradient-text">journey</span> so far
					</h2>
					<p className="max-w-[500px] text-[var(--text-secondary)]">
						From a CS graduate to a Full Stack Engineer at Snowflake — here's how the journey unfolded.
					</p>
				</motion.div>

				{/* Timeline */}
				<div className="relative">
					{/* Timeline Line */}
					<motion.div
						className="absolute left-[18px] md:left-1/2 md:-translate-x-[0.5px] top-0 w-[1px] bg-gradient-to-b from-[var(--accent-cyan)] via-[var(--accent-violet)] to-transparent"
						initial={{ height: 0 }}
						animate={inView ? { height: '100%' } : {}}
						transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
					/>

					<div className="space-y-12">
						{experiences.map((exp, i) => (
							<motion.div
								key={i}
								className={`relative flex flex-col md:flex-row ${
									i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
								} items-start gap-8`}
								variants={itemVariants}
							>
								{/* Timeline Dot */}
								<motion.div
									className="absolute left-[10px] md:left-1/2 md:-translate-x-1/2 z-10"
									initial={{ scale: 0 }}
									animate={inView ? { scale: 1 } : {}}
									transition={{ delay: 0.5 + i * 0.2, duration: 0.4, type: 'spring' }}
								>
									<div className={`w-4 h-4 rounded-full border-2 ${
										exp.current
											? 'border-[var(--accent-cyan)] bg-[var(--accent-cyan)] shadow-[0_0_12px_rgba(0,212,255,0.4)]'
											: 'border-[var(--accent-violet)] bg-[var(--bg-primary)]'
									}`} />
								</motion.div>

								{/* Content Card */}
								<div className={`ml-12 md:ml-0 md:w-[calc(50%-40px)] ${
									i % 2 === 0 ? 'md:pr-4' : 'md:pl-4'
								}`}>
									<motion.div
										className="glass-card p-6 group"
										whileHover={{ y: -3 }}
									>
										{/* Period Badge */}
										<div className="flex items-center gap-2 mb-3">
											<span className={`w-7 h-7 rounded-lg flex items-center justify-center ${
												exp.type === 'work'
													? 'bg-[rgba(0,212,255,0.1)] text-[var(--accent-cyan)]'
													: 'bg-[rgba(236,72,153,0.1)] text-[var(--accent-pink)]'
											}`}>
												{exp.type === 'work' ? <HiOutlineBriefcase size={14} /> : <HiOutlineAcademicCap size={14} />}
											</span>
											<span className="text-xs font-mono text-[var(--text-muted)]">
												{exp.period}
											</span>
											{exp.current && (
												<span className="ml-auto flex items-center gap-1 text-xs font-mono text-[var(--accent-emerald)]">
													<span className="status-dot !w-[6px] !h-[6px]"></span>
													Current
												</span>
											)}
										</div>

										{/* Title */}
										<h3 className="text-base font-semibold text-[var(--text-primary)] mb-1">
											{exp.title}
										</h3>
										<p className="text-sm text-[var(--accent-cyan)] mb-3 font-medium">
											{exp.company}
										</p>

										{/* Description */}
										<p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
											{exp.description}
										</p>

										{/* Technologies */}
										<div className="flex flex-wrap gap-2">
											{exp.technologies.map((tech, j) => (
												<span
													key={j}
													className="text-xs px-2.5 py-1 rounded-md font-mono bg-[rgba(255,255,255,0.03)] text-[var(--text-muted)] border border-[var(--border-glass)]"
												>
													{tech}
												</span>
											))}
										</div>
									</motion.div>
								</div>

								{/* Spacer for alternating layout */}
								<div className="hidden md:block md:w-[calc(50%-40px)]" />
							</motion.div>
						))}
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default Experience;
