import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const navLinks = [
	{ name: 'Career', href: '/#career' },
	{ name: 'Projects', href: '/#projects' },
	{ name: 'About', href: '/#about' },
	{ name: 'Contact', href: '/#contact' }
];

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<header className="fixed top-0 inset-x-0 z-50 pt-3 md:pt-4">
			<nav className="wrap flex items-center justify-between" aria-label="Main">
				<Link href="/" className="card !rounded-full !shadow-[3px_3px_0_var(--ink)] px-4 py-1.5 font-extrabold text-ink">
					Sankalp Sharma
				</Link>

				<ul className="hidden md:flex items-center gap-1 card !rounded-full !shadow-[3px_3px_0_var(--ink)] px-2 py-1">
					{navLinks.map((link) => (
						<li key={link.name}>
							<Link href={link.href} className="block px-4 py-1 rounded-full font-bold text-ink hover:bg-[var(--sun)] transition-colors">
								{link.name}
							</Link>
						</li>
					))}
				</ul>

				<button
					type="button"
					onClick={() => setOpen(!open)}
					className="md:hidden card !rounded-full !shadow-[3px_3px_0_var(--ink)] p-2.5 text-ink"
					aria-expanded={open}
					aria-controls="mobile-menu"
					aria-label={open ? 'Close menu' : 'Open menu'}
				>
					{open ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
				</button>
			</nav>

			{open && (
				<ul id="mobile-menu" className="md:hidden wrap mt-3">
					<li className="card p-2">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								onClick={() => setOpen(false)}
								className="block px-4 py-3 rounded-xl display text-2xl hover:bg-[var(--sun)]"
							>
								{link.name}
							</Link>
						))}
					</li>
				</ul>
			)}
		</header>
	);
};

export default Navbar;
