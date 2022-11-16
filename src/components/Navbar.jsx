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
				className={`fixed w-full h-20 z-[100] ${
					scrollY > 90 && 'bg-[#252A34] shadow-sm shadow-gray-500'
				} ease-in duration-300`}>
				<div className='flex justify-between items-center w-full h-full max-w-[1240px] mx-auto pr-4'>
					{/* Logo */}
					<div className='h-full'>
						<Link to='home' smooth duration={200}>
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
						<ul className='flex gap-12 items-center'>
							{linkData.map(({ id, to }) => (
								<li key={id}>
									<Link
										className={`cursor-pointer uppercase tracking-wide text-[#EEEEEE] border-[#00ADB5] hover:border-b-2 ${
											activeElement === to ? 'border-b-2' : ''
										}`}
										to={to}
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
						className='cursor-pointer z-10 md:hidden text-[#eeeeee]'>
						{!mobileMenu ? <FaBars size={20} /> : <FaTimes size={20} />}
					</div>

					{/* Mobile Navbar */}
					{mobileMenu && (
						<div
							className={`${
								mobileMenu ? 'block' : 'hidden'
							} fixed left-0 top-0 w-full h-screen bg-[#222831] origin-top animate-open-menu`}>
							<div className='grid place-items-center w-full h-full p-10'>
								<div>
									<ul className='flex flex-col justify-center gap-12 items-center'>
										{linkData.map(({ id, to }) => (
											<li key={id}>
												<Link
													className='cursor-pointer uppercase tracking-wide text-[#EEEEEE] text-3xl'
													onClick={handleMobileMenu}
													to={to}
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
