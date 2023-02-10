import { useState, useEffect, useCallback } from 'react';
import { useActiveContext } from '../hooks/useActiveContext';
import { Link } from 'react-scroll';
// Logo & Icons
import Logo from '../assets/sang-logo.png';
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
					scrollY > 90 && 'bg-[#252A34] shadow-sm shadow-gray-500'
				} duration-300 ease-in`}>
				<div className='mx-auto flex h-full w-full max-w-[1240px] items-center justify-between pr-4'>
					{/* Logo */}
					<div className='h-full'>
						<Link to='home' href='home' smooth duration={200} aria-label='logo'>
							<img
								className='cursor-pointer'
								src={Logo}
								alt=''
								width={105}
								height={50}
							/>
						</Link>
					</div>

					{/* Desktop Navbar */}
					<nav className='hidden md:block'>
						<ul className='flex items-center gap-12'>
							{linkData.map(({ id, to }) => (
								<li key={id}>
									<Link
										className={`cursor-pointer border-[#00ADB5] uppercase tracking-wide text-[#EEEEEE] hover:border-b-2 ${
											activeElement === to ? 'border-b-2' : ''
										}`}
										to={to}
										href={to}
										smooth
										duration={200}>
										{to}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					{/* Mobile Menu Burger */}
					<div
						onClick={handleMobileMenu}
						className='z-10 cursor-pointer text-[#eeeeee] md:hidden'>
						{!mobileMenu ? <FaBars size={20} /> : <FaTimes size={20} />}
					</div>

					{/* Mobile Navbar */}
					{mobileMenu && (
						<div
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
				</div>
			</div>
			<Hero />
		</header>
	);
};
export default Navbar;
