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
					className={`mx-auto flex w-full max-w-[1240px] flex-col items-center justify-center gap-4 p-2 2xl:max-w-[1600px] ${
						visible ? 'opacity-100' : 'opacity-0'
					} delay-100 duration-700 ease-in`}>
					<div>
						<p className='text-base font-semibold uppercase tracking-wider text-[#EEEEEE] sm:text-2xl 2xl:text-6xl'>
							Nice to meet you.
						</p>
						<h1 className='py-3 text-3xl font-bold text-[#EEEEEE] sm:text-5xl md:text-7xl 2xl:text-9xl'>
							I'm <span className='text-[#00ADB5]'>Sang</span>,
						</h1>
						<h2 className='py-3 text-2xl font-bold uppercase text-[#EEEEEE] sm:text-4xl md:text-5xl 2xl:text-8xl'>
							A Front-end Web Developer
						</h2>
						<p className='mx-auto py-2 text-[0.8125rem] text-[#EEEEEE] sm:max-w-[70%] sm:text-xl 2xl:text-4xl'>
							I'm focused on building responsive front-end web applications.
							With every line of code, I strive to create a clean and visually
							appealing product.
						</p>
					</div>
					<div className='flex max-w-[500px] flex-wrap items-center justify-between gap-4 py-4 2xl:gap-8 '>
						{heroData.map(({ id, title, image, href }) => (
							<a
								key={id}
								href={href}
								rel='noreferrer'
								target='_blank'
								title='open in a new tab'
								aria-label={title}
								className='cursor-pointer rounded-full bg-[#EEEEEE] p-4 text-black shadow-md shadow-gray-400 duration-300 ease-in focus-within:scale-110 hover:scale-110 sm:p-6 2xl:p-10'>
								{image}
							</a>
						))}
					</div>
				</div>
				<Link
					className={`absolute bottom-3 grid h-[3.25rem] w-[3.25rem] animate-bounce cursor-pointer place-items-center rounded-full bg-[#EEEEEE] text-black sm:h-16 sm:w-16 ${
						visible ? 'opacity-100' : 'opacity-0'
					} delay-100 duration-700 ease-in 2xl:h-[7.5rem] 2xl:w-[7.5rem]`}
					to='about'
					href='about'
					aria-label='scroll down button'
					smooth
					duration={200}>
					<FaArrowDown size={20} className='2xl:h-8 2xl:w-8' />
				</Link>
			</section>
		</ActiveElementContainer>
	);
};
export default Hero;
