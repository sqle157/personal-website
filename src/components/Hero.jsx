import { useRef } from 'react';
import { Link } from 'react-scroll';
import { useIntersection } from '../hooks/useIntersection';
// Icons
import { FaArrowDown } from 'react-icons/fa';
// Data
import { heroData } from '../data/heroData';

const Hero = () => {
	// get a reference to the element
	const ref = useRef();
	// pass that element into the custom hook
	const { visible } = useIntersection(ref);

	return (
		<section
			id='home'
			className='relative w-full h-screen text-center flex items-center justify-center'>
			<div
				ref={ref}
				className={`max-w-[1240px] w-full mx-auto p-2 flex flex-col justify-center items-center gap-4 ${
					visible ? 'opacity-100' : 'opacity-0'
				} ease-in duration-700 delay-100`}>
				<div>
					<p className='uppercase font-semibold text-2xl tracking-wider text-[#EEEEEE] opacity-75'>
						Nice to meet you.
					</p>
					<h1 className='text-[#EEEEEE] text-5xl md:text-7xl py-3 font-bold'>
						I'm <span className='text-[#00ADB5]'>Sang</span>,
					</h1>
					<h2 className='text-[#EEEEEE] uppercase text-4xl md:text-5xl py-3 font-bold'>
						A Front-end Web Developer
					</h2>
					<p className=' text-[#EEEEEE] opacity-75 py-2 sm:max-w-[70%] mx-auto'>
						I'm focused on building responsive front-end web applications. With
						every line of code, I strive to create a clean and beautiful
						product.
					</p>
				</div>
				<div className='flex flex-wrap items-center justify-between max-w-[330px] py-4 gap-4'>
					{heroData.map(({ id, image, href, download }) => (
						<a
							key={id}
							href={href}
							rel='noreferrer'
							target='_blank'
							download={download}
							className='rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer bg-[#EEEEEE] text-black hover:scale-110 focus-within:scale-110 outline-none ease-in duration-300'>
							{image}
						</a>
					))}
				</div>
			</div>
			<Link
				className={`cursor-pointer rounded-full w-16 h-16 absolute bottom-3 grid place-items-center bg-[#EEEEEE] text-black animate-bounce ${
					visible ? 'opacity-100' : 'opacity-0'
				} ease-in duration-700 delay-100`}
				to='about'
				smooth
				duration={200}>
				<FaArrowDown size={20} />
			</Link>
		</section>
	);
};
export default Hero;
