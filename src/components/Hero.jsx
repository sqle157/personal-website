import { useRef } from 'react';
import { Link } from 'react-scroll';
import { useIntersection } from '../hooks/useIntersection';
// Components
import ActiveElementContainer from './ActiveElementContainer/ActiveElementContainer';
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
		<ActiveElementContainer visible={visible} active={null}>
			<section
				id='home'
				className='relative flex h-screen w-full items-center justify-center text-center'>
				<div
					ref={ref}
					className={`mx-auto flex w-full max-w-[1240px] flex-col items-center justify-center gap-4 p-2 ${
						visible ? 'opacity-100' : 'opacity-0'
					} delay-100 duration-700 ease-in`}>
					<div>
						<p className='text-2xl font-semibold uppercase tracking-wider text-[#EEEEEE] opacity-75'>
							Nice to meet you.
						</p>
						<h1 className='py-3 text-5xl font-bold text-[#EEEEEE] md:text-7xl'>
							I'm <span className='text-[#00ADB5]'>Sang</span>,
						</h1>
						<h2 className='py-3 text-4xl font-bold uppercase text-[#EEEEEE] md:text-5xl'>
							A Front-end Web Developer
						</h2>
						<p className=' mx-auto py-2 text-[#EEEEEE] opacity-75 sm:max-w-[70%]'>
							I'm focused on building responsive front-end web applications.
							With every line of code, I strive to create a clean and beautiful
							product.
						</p>
					</div>
					<div className='flex max-w-[330px] flex-wrap items-center justify-between gap-4 py-4'>
						{heroData.map(({ id, image, href, download }) => (
							<a
								key={id}
								href={href}
								rel='noreferrer'
								target='_blank'
								download={download}
								className='cursor-pointer rounded-full bg-[#EEEEEE] p-6 text-black shadow-md shadow-gray-400 outline-none duration-300 ease-in focus-within:scale-110 hover:scale-110'>
								{image}
							</a>
						))}
					</div>
				</div>
				<Link
					className={`absolute bottom-3 grid h-16 w-16 animate-bounce cursor-pointer place-items-center rounded-full bg-[#EEEEEE] text-black ${
						visible ? 'opacity-100' : 'opacity-0'
					} delay-100 duration-700 ease-in`}
					to='about'
					smooth
					duration={200}>
					<FaArrowDown size={20} />
				</Link>
			</section>
		</ActiveElementContainer>
	);
};
export default Hero;
