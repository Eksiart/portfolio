"use client";
import Link from 'next/link';
import NavLink from '@/app/components/NavLink';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from '@/app/components/MenuOverlay';

const navLinks = [
	{
		title: 'Обо мне',
		path: '#about',
	},
	{
		title: 'Проекты',
		path: '#projects',
	},
	{
		title: 'Контакты',
		path: '#contact',
	},
]

const Navbar = () => {
	const [isNavbarOpen, setIsNavbarOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 right-0 z-10 bg-[#2b2b2b] bg-opacity-90">
			<div className="flex flex-wrap items-center justify-between mx-auto p-4 xl:p-8">
				<Link href={'/'} className="text-2xl md:text-4xl text-white font-semibold">
					EKSIART
				</Link>
				<div className="mobile-menu block md:hidden">
					{
						isNavbarOpen ? (
							<button
								aria-label="navgation menu close"
								className="flex items-center px-3 py-2 text-slate-200 hover:text-white"
								onClick={() => setIsNavbarOpen(false)}
							>
								<XMarkIcon className="h-5 w-5"/>
							</button>
						) : (
							<button
								aria-label="navgation menu open"
								className="flex items-center px-3 py-2 text-slate-200 hover:text-white"
								onClick={() => setIsNavbarOpen(true)}
							>
								<Bars3Icon className="h-5 w-5"/>
							</button>
						)
					}
				</div>
				<div className="menu hidden md:block md:w-auto" id="navbar">
					<ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
						{navLinks.map(e =>
							<li key={e.path}>
								<NavLink href={e.path} title={e.title}/>
							</li>
						)}
					</ul>
				</div>
			</div>
			{isNavbarOpen ? <MenuOverlay links={navLinks}/> : null}
		</nav>
	);
};

export default Navbar;
