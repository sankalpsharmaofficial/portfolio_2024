/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaArrowDown } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { HiDownload } from 'react-icons/hi';
import Link from 'next/link';

const Main = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.12,
				delayChildren: 0.3
			}
		}
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
		}
	};

	return (
		<section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
			{/* Aurora Background */}
			<div className="aurora-bg">
				<div className="aurora-orb-3"></div>
			</div>

			{/* Dot Grid Overlay */}
			<div className="dot-grid"></div>

			{/* Noise Overlay */}
			<div className="noise-overlay"></div>

			{/* Content */}
			<motion.div
				className="relative z-10 max-w-[1200px] w-full mx-auto px-6 pt-28 pb-20"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				<div className="max-w-[800px]">
					{/* Greeting Badge */}
					<motion.div variants={itemVariants} className="mb-6">
						<span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono glass-card !rounded-full">
							<span className="status-dot"></span>
							<span className="text-[var(--text-muted)]">Full Stack Engineer @ Snowflake</span>
						</span>
					</motion.div>

					{/* Heading */}
					<motion.h1 variants={itemVariants} className="mb-4 leading-[1.05]">
						<span className="block text-[var(--text-primary)]">I build</span>
						<span className="block gradient-text">scalable experiences</span>
						<span className="block text-[var(--text-primary)]">end to end.</span>
					</motion.h1>

					{/* Subtitle */}
					<motion.p
						variants={itemVariants}
						className="text-lg md:text-xl max-w-[560px] mb-10 leading-relaxed"
					>
						I'm <span className="text-[var(--text-primary)] font-medium">Sankalp Sharma</span> — 
						a full stack developer & AI prompt engineer crafting performant, 
						intelligent applications from frontend to backend.
					</motion.p>

					{/* CTA Buttons */}
					<motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-14">
						<Link href="/#projects">
							<span className="btn-glow cursor-pointer">
								View My Work
								<svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</span>
						</Link>
						<Link href="/#contact">
							<span className="btn-outline cursor-pointer">
								<AiOutlineMail className="text-lg" />
								Get In Touch
							</span>
						</Link>
					</motion.div>

					{/* Social Links */}
					<motion.div variants={itemVariants} className="flex items-center gap-6">
						<span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
							Connect
						</span>
						<div className="w-12 h-[1px] bg-[var(--border-glass)]"></div>
						<div className="flex gap-3">
							{[
								{ icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/sankalp-sharma156/', label: 'LinkedIn' },
								{ icon: <FaGithub />, href: 'https://github.com/sankalpsharmaofficial', label: 'GitHub' },
								{ icon: <AiOutlineMail />, href: 'mailto:sankalp.sharma156@gmail.com', label: 'Email' }
							].map((social, i) => (
								<motion.a
									key={i}
									href={social.href}
									target={social.href.startsWith('http') ? '_blank' : undefined}
									rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
									className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-all duration-300"
									whileHover={{ y: -3, scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									aria-label={social.label}
								>
									{social.icon}
								</motion.a>
							))}
						</div>
					</motion.div>
				</div>

				{/* Scroll Indicator */}
				<motion.div
					className="absolute bottom-8 left-1/2 -translate-x-1/2"
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.5, duration: 0.8 }}
				>
					<Link href="/#about">
						<motion.div
							className="flex flex-col items-center gap-2 cursor-pointer group"
							animate={{ y: [0, 8, 0] }}
							transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
						>
							<span className="text-xs font-mono text-[var(--text-muted)] group-hover:text-[var(--accent-cyan)] transition-colors">
								scroll
							</span>
							<div className="w-5 h-8 rounded-full border border-[var(--border-glass)] flex justify-center pt-1.5 group-hover:border-[var(--accent-cyan)] transition-colors">
								<motion.div
									className="w-1 h-2 rounded-full bg-[var(--text-muted)] group-hover:bg-[var(--accent-cyan)] transition-colors"
									animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
									transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
								/>
							</div>
						</motion.div>
					</Link>
				</motion.div>
			</motion.div>

		</section>
	);
};

export default Main;
