/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiGithub, FiExternalLink, FiArrowLeft } from 'react-icons/fi';

const ProjectDetail = ({ title, emoji, overview, technologies, codeUrl, demoUrl }) => {
	return (
		<div className="w-full min-h-screen" style={{ background: 'var(--bg-primary)' }}>
			{/* Hero */}
			<div className="relative w-full h-[40vh] flex items-end overflow-hidden">
				{/* Background gradient */}
				<div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,212,255,0.08)] via-[rgba(124,58,237,0.05)] to-[var(--bg-primary)]" />
				<div className="dot-grid"></div>

				<motion.div
					className="relative z-10 max-w-[1200px] w-full mx-auto px-6 pb-12"
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, delay: 0.2 }}
				>
					<div className="text-5xl mb-4">{emoji || '🚀'}</div>
					<h1 className="text-[var(--text-primary)] text-3xl md:text-5xl mb-2">{title}</h1>
				</motion.div>
			</div>

			{/* Content */}
			<motion.div
				className="max-w-[1200px] mx-auto px-6 py-12 grid md:grid-cols-4 gap-12"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.4 }}
			>
				{/* Left - Overview */}
				<div className="md:col-span-3">
					<span className="section-label">Project Overview</span>
					<p className="text-[var(--text-secondary)] leading-relaxed mt-4 text-lg">
						{overview}
					</p>

					{/* Action Buttons */}
					<div className="flex flex-wrap gap-4 mt-8">
						{codeUrl && (
							<a href={codeUrl} target="_blank" rel="noreferrer">
								<span className="btn-outline cursor-pointer">
									<FiGithub size={16} />
									View Code
								</span>
							</a>
						)}
						{demoUrl && (
							<a href={demoUrl} target="_blank" rel="noreferrer">
								<span className="btn-glow cursor-pointer">
									<FiExternalLink size={16} className="mr-2" />
									Live Demo
								</span>
							</a>
						)}
					</div>
				</div>

				{/* Right - Technologies Sidebar */}
				<div className="md:col-span-1">
					<div className="glass-card p-6">
						<p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-4">
							Technologies
						</p>
						<div className="flex flex-wrap gap-2">
							{technologies.map((tech, i) => (
								<motion.span
									key={i}
									className="skill-tag"
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 0.5 + i * 0.05 }}
								>
									{tech}
								</motion.span>
							))}
						</div>
					</div>
				</div>
			</motion.div>

			{/* Back Button */}
			<div className="max-w-[1200px] mx-auto px-6 pb-16">
				<Link href="/#projects">
					<motion.span
						className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent-cyan)] cursor-pointer transition-colors group"
						whileHover={{ x: -4 }}
					>
						<FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
						Back to Projects
					</motion.span>
				</Link>
			</div>
		</div>
	);
};

export default ProjectDetail;
