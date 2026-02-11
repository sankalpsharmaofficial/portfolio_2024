/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/#about' },
	{ name: 'Skills', href: '/#skills' },
	{ name: 'Projects', href: '/#projects' },
	{ name: 'Contact', href: '/#contact' }
];

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleNav = () => {
		setNav(!nav);
	};

	return (
		<>
			{/* Desktop Navbar */}
			<motion.nav
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
				className={`fixed w-full z-[100] transition-all duration-500 ${
					scrolled
						? 'py-3'
						: 'py-5'
				}`}
			>
				<div className={`max-w-[1200px] mx-auto px-6 ${
					scrolled
						? 'glass-card !rounded-full px-8 py-2'
						: ''
				}`}>
					<div className="flex justify-between items-center h-14">
						{/* Logo */}
						<Link href="/">
							<motion.div
								className="flex items-center gap-2 cursor-pointer group"
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#FFE946] to-[#FE7501] flex items-center justify-center">
									<span className="text-white font-bold text-sm">S</span>
								</div>
								<span className="font-semibold text-[var(--text-primary)] text-lg hidden sm:block">
									sankalp
									<span className="text-[#FFE946]">.</span>
								</span>
							</motion.div>
						</Link>

						{/* Desktop Nav Links */}
						<div className="hidden md:flex items-center gap-1">
							{navLinks.map((link, i) => (
								<Link key={i} href={link.href}>
									<motion.span
										className="px-4 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-300 cursor-pointer rounded-lg hover:bg-[rgba(255,255,255,0.05)]"
										whileHover={{ y: -1 }}
										transition={{ duration: 0.2 }}
									>
										{link.name}
									</motion.span>
								</Link>
							))}
						</div>

						{/* Status Badge + CTA */}
						<div className="hidden md:flex items-center gap-4">
							<div className="flex items-center gap-2 text-xs text-[var(--text-muted)] font-mono">
								<span className="status-dot"></span>
								Available for work
							</div>
							<Link href="/#contact">
								<span className="btn-glow !py-2 !px-5 !text-xs cursor-pointer">
									Let&apos;s Talk
								</span>
							</Link>
						</div>

						{/* Mobile Menu Button */}
						<motion.div
							onClick={handleNav}
							className="md:hidden p-2 rounded-lg glass-card cursor-pointer"
							whileTap={{ scale: 0.9 }}
						>
							<AiOutlineMenu size={20} className="text-[var(--text-primary)]" />
						</motion.div>
					</div>
				</div>
			</motion.nav>

			{/* Mobile Fullscreen Menu */}
			<AnimatePresence>
				{nav && (
					<>
						{/* Backdrop */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
							onClick={handleNav}
						/>

						{/* Menu Panel */}
						<motion.div
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ type: 'spring', damping: 30, stiffness: 300 }}
							className="fixed right-0 top-0 w-[85%] sm:w-[60%] h-screen z-[300] p-8"
							style={{ background: 'var(--bg-secondary)' }}
						>
							{/* Close Button */}
							<div className="flex justify-end mb-12">
								<motion.div
									onClick={handleNav}
									className="p-3 rounded-full glass-card cursor-pointer"
									whileTap={{ scale: 0.9 }}
								>
									<AiOutlineClose size={18} className="text-[var(--text-primary)]" />
								</motion.div>
							</div>

							{/* Mobile Nav Links */}
							<div className="flex flex-col gap-2">
								{navLinks.map((link, i) => (
									<motion.div
										key={i}
										initial={{ x: 50, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
									>
										<Link href={link.href}>
											<span
												onClick={handleNav}
												className="block py-4 px-4 text-2xl font-semibold text-[var(--text-primary)] hover:text-[var(--accent-cyan)] transition-colors duration-300 cursor-pointer rounded-xl hover:bg-[rgba(255,255,255,0.03)]"
											>
												{link.name}
											</span>
										</Link>
									</motion.div>
								))}
							</div>

							{/* Mobile Status */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.5, duration: 0.4 }}
								className="mt-12 pt-8 border-t border-[var(--border-glass)]"
							>
								<div className="flex items-center gap-2 text-sm text-[var(--text-muted)] font-mono mb-4">
									<span className="status-dot"></span>
									Available for work
								</div>
								<Link href="/#contact">
									<span
										onClick={handleNav}
										className="btn-glow w-full cursor-pointer block text-center"
									>
										Let&apos;s Talk
									</span>
								</Link>
							</motion.div>
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;
