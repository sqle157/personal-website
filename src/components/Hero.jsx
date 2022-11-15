import { useRef } from 'react';
import { Link } from 'react-scroll';
import { useIntersection } from '../hooks/useIntersection';
// Icons
import { FaGithub, FaLinkedin, FaArrowDown } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// File
import Resume from '../assets/Sang_Le_Resume.pdf';

// Global data
const heroData = [
	{
		id: 1,
		image: <FaGithub size={20} />,
		href: 'https://github.com/sqle157',
	},
	{
		id: 2,
		image: <FaLinkedin size={20} />,
		href: 'https://www.linkedin.com/in/sangle98/',
	},
	{
		id: 3,
		image: <AiOutlineMail size={20} />,
		href: 'mailto:sqle157@gmail.com',
	},
	{
		id: 4,
		image: <BsFillPersonLinesFill size={20} />,
		href: Resume,
		download: true,
	},
];

const Hero = () => {
	// get a reference to the element
	const ref = useRef();
	// pass that element into the custom hook
	const { visible } = useIntersection(ref);

	return (
		<section id='home' className='w-full h-screen text-center '>
			<div
				ref={ref}
				className={`relative max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center gap-4 ${
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

				<Link
					className='cursor-pointer rounded-full w-16 h-16 absolute bottom-3 grid place-items-center bg-[#EEEEEE] text-black animate-bounce'
					to='about'
					smooth
					duration={200}>
					<FaArrowDown size={20} />
				</Link>
			</div>
		</section>
	);
};
export default Hero;
