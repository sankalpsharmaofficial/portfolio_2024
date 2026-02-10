import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaHeart } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="relative w-full border-t border-[var(--border-glass)]">
			<div className="max-w-[1200px] mx-auto px-6 py-12">
				<div className="flex flex-col md:flex-row justify-between items-center gap-6">
					{/* Left - Branding */}
					<div className="flex items-center gap-3">
						<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-violet flex items-center justify-center">
							<span className="text-white font-bold text-xs">S</span>
						</div>
						<div>
							<p className="text-sm font-medium text-[var(--text-primary)]">
								Sankalp Sharma
							</p>
							<p className="text-xs text-[var(--text-muted)]">
								Full Stack Developer & AI Prompt Engineer
							</p>
						</div>
					</div>

					{/* Center - Social Links */}
					<div className="flex items-center gap-3">
						{[
							{ icon: <FaLinkedinIn size={14} />, href: 'https://www.linkedin.com/in/sankalp-sharma156/' },
							{ icon: <FaGithub size={14} />, href: 'https://github.com/sankalpsharmaofficial' },
							{ icon: <AiOutlineMail size={14} />, href: 'mailto:sankalp.sharma156@gmail.com' }
						].map((social, i) => (
							<motion.a
								key={i}
								href={social.href}
								target={social.href.startsWith('http') ? '_blank' : undefined}
								rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
								className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-all duration-300"
								whileHover={{ y: -2 }}
							>
								{social.icon}
							</motion.a>
						))}
					</div>

					{/* Right - Copyright */}
					<p className="text-xs text-[var(--text-muted)] flex items-center gap-1">
						© {currentYear} · Built with <FaHeart className="text-[var(--accent-pink)] text-[10px]" /> & React
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
