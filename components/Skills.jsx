import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
	SiReact, SiNextdotjs, SiJavascript, SiTypescript,
	SiTailwindcss, SiFirebase, SiGit, SiNodedotjs,
	SiFigma, SiVercel, SiPython, SiPostgresql,
	SiDocker, SiGraphql, SiMongodb, SiSnowflake
} from 'react-icons/si';

const skills = [
	{ name: 'React', icon: <SiReact />, color: '#61DAFB', level: 95 },
	{ name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff', level: 90 },
	{ name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E', level: 95 },
	{ name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6', level: 88 },
	{ name: 'Node.js', icon: <SiNodedotjs />, color: '#339933', level: 88 },
	{ name: 'Python', icon: <SiPython />, color: '#3776AB', level: 82 },
	{ name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4', level: 95 },
	{ name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1', level: 78 },
	{ name: 'MongoDB', icon: <SiMongodb />, color: '#47A248', level: 75 },
	{ name: 'GraphQL', icon: <SiGraphql />, color: '#E10098', level: 80 },
	{ name: 'Docker', icon: <SiDocker />, color: '#2496ED', level: 72 },
	{ name: 'Git', icon: <SiGit />, color: '#F05032', level: 90 },
	{ name: 'Snowflake', icon: <SiSnowflake />, color: '#29B5E8', level: 85 },
	{ name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28', level: 80 },
	{ name: 'Vercel', icon: <SiVercel />, color: '#ffffff', level: 85 },
	{ name: 'Figma', icon: <SiFigma />, color: '#F24E1E', level: 72 }
];

const toolCategories = [
	{
		title: 'Frontend',
		tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'HTML5/CSS3']
	},
	{
		title: 'Backend & Data',
		tools: ['Node.js', 'Python', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs', 'Snowflake']
	},
	{
		title: 'AI & Prompt Engineering',
		tools: ['OpenAI API', 'LangChain', 'Prompt Design', 'Claude', 'GPT-4', 'AI Agents']
	},
	{
		title: 'DevOps & Tools',
		tools: ['Docker', 'Git', 'GitHub Actions', 'Vercel', 'AWS', 'Figma', 'Postman', 'VS Code']
	}
];

const Skills = () => {
	const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.06, delayChildren: 0.1 }
		}
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
		}
	};

	return (
		<section id="skills" className="relative w-full py-28 md:py-36">
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
					<span className="section-label">Skills & Tools</span>
					<h2 className="text-[var(--text-primary)] mb-4">
						My <span className="gradient-text">tech stack</span>
					</h2>
					<p className="max-w-[500px] text-[var(--text-secondary)]">
						Full stack technologies and AI tools I use to ship production-grade applications.
					</p>
				</motion.div>

				{/* Skills Grid */}
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-20">
					{skills.map((skill, i) => (
						<motion.div
							key={i}
							className="glass-card p-4 group cursor-default text-center"
							variants={itemVariants}
							whileHover={{ y: -6, scale: 1.02 }}
						>
							{/* Icon */}
							<motion.div
								className="text-2xl mb-2.5 mx-auto w-fit transition-all duration-300"
								style={{ color: 'var(--text-muted)' }}
								whileHover={{ color: skill.color, scale: 1.2 }}
							>
								{skill.icon}
							</motion.div>

							{/* Name */}
							<p className="text-xs font-medium text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors duration-300">
								{skill.name}
							</p>

							{/* Level Bar */}
							<div className="mt-2.5 h-1 w-full rounded-full bg-[rgba(255,255,255,0.05)] overflow-hidden">
								<motion.div
									className="h-full rounded-full"
									style={{
										background: `linear-gradient(90deg, ${skill.color}60, ${skill.color})`
									}}
									initial={{ width: 0 }}
									animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
									transition={{ delay: 0.5 + i * 0.05, duration: 1, ease: 'easeOut' }}
								/>
							</div>
						</motion.div>
					))}
				</div>

				{/* Tool Categories */}
				<motion.div variants={itemVariants}>
					<p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-6">
						Organized by domain
					</p>
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
						{toolCategories.map((category, i) => (
							<motion.div
								key={i}
								className="glass-card p-6"
								initial={{ opacity: 0, y: 20 }}
								animate={inView ? { opacity: 1, y: 0 } : {}}
								transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
								whileHover={{ y: -2 }}
							>
								<h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
									<span className="w-2 h-2 rounded-full" style={{
										background: i === 0 ? 'var(--accent-cyan)' : i === 1 ? 'var(--accent-violet)' : i === 2 ? 'var(--accent-pink)' : 'var(--accent-emerald)'
									}}></span>
									{category.title}
								</h3>
								<div className="flex flex-wrap gap-2">
									{category.tools.map((tool, j) => (
										<span
											key={j}
											className="text-xs px-3 py-1.5 rounded-lg bg-[rgba(255,255,255,0.03)] text-[var(--text-muted)] border border-[var(--border-glass)] hover:text-[var(--text-secondary)] hover:border-[rgba(255,255,255,0.12)] transition-all duration-300"
										>
											{tool}
										</span>
									))}
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Skills;
