/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlineArrowUp } from 'react-icons/hi';
import { FiSend, FiArrowUpRight } from 'react-icons/fi';
import Link from 'next/link';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [focused, setFocused] = useState('');

	const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

	const handleSubmit = () => {
		setName('');
		setEmail('');
		setSubject('');
		setMessage('');
	};

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

	const socialLinks = [
		{ icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/sankalp-sharma156/', label: 'LinkedIn', handle: '@sankalp-sharma156' },
		{ icon: <FaGithub />, href: 'https://github.com/sankalpsharmaofficial', label: 'GitHub', handle: '@sankalpsharmaofficial' },
		{ icon: <AiOutlineMail />, href: 'mailto:sankalp.sharma156@gmail.com', label: 'Email', handle: 'sankalp.sharma156@gmail.com' }
	];

	return (
		<section id="contact" className="relative w-full py-28 md:py-36">
			<div className="dot-grid"></div>

			{/* Decorative aurora orb */}
			<div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.08)_0%,transparent_70%)] blur-3xl pointer-events-none"></div>

			<motion.div
				ref={ref}
				className="relative z-10 max-w-[1200px] mx-auto px-6"
				variants={containerVariants}
				initial="hidden"
				animate={inView ? 'visible' : 'hidden'}
			>
				{/* Section Header */}
				<motion.div variants={itemVariants} className="mb-16">
					<span className="section-label">Contact</span>
					<h2 className="text-[var(--text-primary)] mb-4">
						Let's build something
						<br />
						<span className="gradient-text">amazing together.</span>
					</h2>
					<p className="max-w-[500px] text-[var(--text-secondary)]">
						Have a project in mind or want to collaborate? I'm always open to
						discussing new opportunities and creative ideas.
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
					{/* Left - Info & Social */}
					<motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
						{/* Info Cards */}
						<div className="space-y-4">
							<div className="glass-card p-5 flex items-start gap-4">
								<div className="w-10 h-10 rounded-xl bg-[rgba(0,212,255,0.1)] flex items-center justify-center flex-shrink-0">
									<HiOutlineMail className="text-[var(--accent-cyan)]" size={18} />
								</div>
								<div>
									<p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-1">Email</p>
									<a href="mailto:sankalp.sharma156@gmail.com" className="text-sm text-[var(--text-primary)] hover:text-[var(--accent-cyan)] transition-colors">
										sankalp.sharma156@gmail.com
									</a>
								</div>
							</div>

							<div className="glass-card p-5 flex items-start gap-4">
								<div className="w-10 h-10 rounded-xl bg-[rgba(124,58,237,0.1)] flex items-center justify-center flex-shrink-0">
									<HiOutlineLocationMarker className="text-[var(--accent-violet)]" size={18} />
								</div>
								<div>
									<p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider mb-1">Location</p>
									<p className="text-sm text-[var(--text-primary)]">San Francisco Bay Area 🇺🇸</p>
								</div>
							</div>
						</div>

						{/* Social Links */}
						<div>
							<p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-4">
								Find me on
							</p>
							<div className="space-y-3">
								{socialLinks.map((social, i) => (
									<motion.a
										key={i}
										href={social.href}
										target={social.href.startsWith('http') ? '_blank' : undefined}
										rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
										className="glass-card px-4 py-3 flex items-center justify-between group cursor-pointer block"
										whileHover={{ x: 4 }}
									>
										<div className="flex items-center gap-3">
											<span className="text-[var(--text-muted)] group-hover:text-[var(--accent-cyan)] transition-colors text-lg">
												{social.icon}
											</span>
											<div>
												<p className="text-sm font-medium text-[var(--text-primary)]">{social.label}</p>
												<p className="text-xs text-[var(--text-muted)] hidden sm:block">{social.handle}</p>
											</div>
										</div>
										<FiArrowUpRight className="text-[var(--text-muted)] group-hover:text-[var(--accent-cyan)] transition-all duration-300" size={14} />
									</motion.a>
								))}
							</div>
						</div>

						{/* Availability */}
						<div className="glass-card p-5">
							<div className="flex items-center gap-3 mb-2">
								<span className="status-dot"></span>
								<p className="text-sm font-medium text-[var(--text-primary)]">Currently available</p>
							</div>
							<p className="text-xs text-[var(--text-muted)] leading-relaxed">
								I'm open to freelance, full-time, and contract opportunities.
								Let's create something extraordinary. ✨
							</p>
						</div>
					</motion.div>

					{/* Right - Contact Form */}
					<motion.div variants={itemVariants} className="lg:col-span-3">
						<div className="glass-card p-6 md:p-8">
							<form
								onSubmit={handleSubmit}
								action="https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060"
								method="POST"
							>
								<div className="grid sm:grid-cols-2 gap-5 mb-5">
									<div className="space-y-2">
										<label className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
											Name
										</label>
										<input
											className={`w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.03)] border transition-all duration-300 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] ${
												focused === 'name'
													? 'border-[var(--accent-cyan)]'
													: 'border-[var(--border-glass)]'
											}`}
											type="text"
											name="name"
											placeholder="John Doe"
											value={name}
											onChange={(e) => setName(e.target.value)}
											onFocus={() => setFocused('name')}
											onBlur={() => setFocused('')}
										/>
									</div>
									<div className="space-y-2">
										<label className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
											Email
										</label>
										<input
											className={`w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.03)] border transition-all duration-300 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] ${
												focused === 'email'
													? 'border-[var(--accent-cyan)]'
													: 'border-[var(--border-glass)]'
											}`}
											type="email"
											name="email"
											placeholder="john@example.com"
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											onFocus={() => setFocused('email')}
											onBlur={() => setFocused('')}
										/>
									</div>
								</div>

								<div className="space-y-2 mb-5">
									<label className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
										Subject
									</label>
									<input
										className={`w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.03)] border transition-all duration-300 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] ${
											focused === 'subject'
												? 'border-[var(--accent-cyan)]'
												: 'border-[var(--border-glass)]'
										}`}
										type="text"
										name="subject"
										placeholder="Project inquiry"
										value={subject}
										onChange={(e) => setSubject(e.target.value)}
										onFocus={() => setFocused('subject')}
										onBlur={() => setFocused('')}
									/>
								</div>

								<div className="space-y-2 mb-6">
									<label className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
										Message
									</label>
									<textarea
										className={`w-full px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.03)] border transition-all duration-300 text-sm text-[var(--text-primary)] placeholder-[var(--text-muted)] resize-none ${
											focused === 'message'
												? 'border-[var(--accent-cyan)]'
												: 'border-[var(--border-glass)]'
										}`}
										rows="5"
										name="message"
										placeholder="Tell me about your project..."
										value={message}
										onChange={(e) => setMessage(e.target.value)}
										onFocus={() => setFocused('message')}
										onBlur={() => setFocused('')}
									></textarea>
								</div>

								<motion.button
									type="submit"
									className="btn-glow w-full !py-4 flex items-center justify-center gap-2"
									whileHover={{ scale: 1.01 }}
									whileTap={{ scale: 0.98 }}
								>
									<FiSend size={16} />
									Send Message
								</motion.button>
							</form>
						</div>
					</motion.div>
				</div>

				{/* Scroll to Top */}
				<motion.div
					variants={itemVariants}
					className="flex justify-center mt-20"
				>
					<Link href="/">
						<motion.div
							className="w-12 h-12 rounded-full glass-card flex items-center justify-center cursor-pointer group"
							whileHover={{ y: -4, scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<HiOutlineArrowUp className="text-[var(--text-muted)] group-hover:text-[var(--accent-cyan)] transition-colors" size={20} />
						</motion.div>
					</Link>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Contact;
