import { useState, useEffect, useCallback } from 'react';
import { useActiveContext } from '../hooks/useActiveContext';
import { Link } from 'react-scroll';
// Logo & Icons
import Logo from '../assets/sang-logo.webp';
import { FaBars, FaTimes } from 'react-icons/fa';
// Components
import Hero from './Hero';
// Data
import { linkData } from '../data/linkData';

const Navbar = () => {
	const [mobileMenu, setMobileMenu] = useState(false);
	const [scrollY, setScrollY] = useState(window.scrollY);
	// get the active element from global context
	const { activeElement } = useActiveContext();

	// Handle mobile menu
	const handleMobileMenu = () => {
		setMobileMenu((prevState) => !prevState);
	};

	// Handle scrolling
	const handleScrolling = useCallback(
		(e) => {
			const window = e.currentTarget;
			setScrollY(window.scrollY);
		},
		[scrollY]
	);

	useEffect(() => {
		window.addEventListener('scroll', (e) => {
			handleScrolling(e);
		});

		return () => {
			// return a cleanup function to unregister our function since its gonna run multiple times
			window.removeEventListener('scroll', (e) => handleScrolling(e));
		};
	}, []);

	return (
		<header className='header'>
			<div
				className={`fixed z-[100] h-20 w-full ${
					scrollY > 90 &&
					'bg-[#252A34]/50 shadow-sm shadow-slate-600 backdrop-blur-md'
				} duration-300 ease-in`}>
				<div className='mx-auto flex h-full w-full max-w-[1600px] items-center justify-between pr-4'>
					{/* Logo */}
					<div className='h-full'>
						<Link
							to='home'
							href='home'
							smooth
							duration={200}
							aria-label='Sang Le - Home'>
							<img
								className='cursor-pointer'
								src={Logo}
								alt='Logo'
								width={105}
								height={50}
							/>
						</Link>
					</div>

					{/* Desktop Navbar */}
					<nav>
						<ul className='hidden items-center gap-12 md:flex'>
							{linkData.map(({ id, to }) => (
								<li key={id}>
									<Link
										className={`cursor-pointer border-[#00ADB5] uppercase tracking-wide text-[#EEEEEE] hover:border-b-2 ${
											activeElement === to ? 'border-b-2' : ''
										} 2xl:text-3xl`}
										to={to}
										href={to}
										smooth
										duration={200}>
										{to}
									</Link>
								</li>
							))}
						</ul>

						{/* Mobile Menu Burger */}
						<button
							onClick={handleMobileMenu}
							className='z-10 cursor-pointer text-[#EEEEEE] md:hidden'
							aria-label='Mobile Menu'
							aria-expanded={mobileMenu}
							aria-controls='mobile-menu'
							type='button'>
							{!mobileMenu ? (
								<FaBars size={20} aria-hidden />
							) : (
								<FaTimes size={20} aria-hidden />
							)}
						</button>

						{/* Mobile Navbar */}
						{mobileMenu && (
							<div
								id='mobile-menu'
								className={`${
									mobileMenu ? 'block' : 'hidden'
								} fixed left-0 top-0 h-screen w-full origin-top animate-open-menu bg-[#222831]`}>
								<div className='grid h-full w-full place-items-center p-10'>
									<div>
										<ul className='flex flex-col items-center justify-center gap-12'>
											{linkData.map(({ id, to }) => (
												<li key={id}>
													<Link
														className='cursor-pointer text-3xl uppercase tracking-wide text-[#EEEEEE]'
														onClick={handleMobileMenu}
														to={to}
														href={to}
														smooth
														duration={200}>
														{to}
													</Link>
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						)}
					</nav>
				</div>
			</div>
			<Hero />
		</header>
	);
};
export default Navbar;
