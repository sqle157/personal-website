import { useRef } from 'react';
import { useIntersection } from '../hooks/useIntersection';
import { Link } from 'react-scroll';
// Icons
import { FaLinkedin, FaGithub, FaArrowUp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
	// get a reference to the element
	const ref = useRef();
	// pass that element into the custom hook
	const { visible } = useIntersection(ref);

	return (
		<section
			id='contact'
			className='md:pt-[10rem] md-pb[7.5rem] py-[7.5rem] w-full px-5 border-b border-b-gray-600 bg-[#393E46] grid grid-cols-1 gap-20'>
			<div
				ref={ref}
				className={`max-w-[1240px] w-full mx-auto grid grid-cols-1 gap-10 ${
					visible ? 'opacity-100' : 'opacity-0'
				} ease-in duration-500`}>
				<div className='mx-auto lg:m-0 flex items-center gap-5 w-full'>
					<span
						className={`block ${
							visible ? 'flex-1' : 'flex-none'
						} h-[1px] bg-gray-600 ease-in duration-700 origin-right`}></span>
					<h2 className='border-b-2 border-[#00ADB5] font-bold uppercase inline-block text-3xl md:text-4xl text-[#EEEEEE]'>
						Get In Touch
					</h2>
					<span
						className={`block ${
							visible ? 'flex-1' : 'flex-none'
						} h-[1px] bg-gray-600 ease-in duration-700 origin-right`}></span>
				</div>

				<p className='text-xl text-[#eeeeee] opacity-75 text-center max-w-[700px] mx-auto'>
					My inbox is always open. Whether you have a question or just want to
					say hi, I'll try my best to get back to you!{' '}
				</p>

				<div className='grid grid-cols-1 md:grid-cols-2 w-full max-w-[750px] mx-auto border-y-2 border-y-gray-600'>
					<div>
						<a
							href='https://github.com/sqle157'
							target='_blank'
							className='text-white text-md py-6 flex items-center gap-3 w-max'>
							<FaGithub size={32} />
							https://github.com/sqle157
						</a>
					</div>
					<div>
						<a
							href='https://www.linkedin.com/in/sangle98/'
							target='_blank'
							className='text-white text-md py-6 flex items-center md:ml-auto gap-3 w-max'>
							<FaLinkedin size={32} />
							linkedin.com/in/sangle98/
						</a>
					</div>
					<div>
						<a
							href='mailto:sqle157@gmail.com'
							target='_blank'
							className='text-white text-md py-6  flex items-center gap-3 w-max'>
							<AiOutlineMail size={32} />
							sqle157@gmail.com
						</a>
					</div>
				</div>
			</div>
			<Link
				className='cursor-pointer rounded-full w-16 h-16 mx-auto grid place-items-center bg-[#EEEEEE] text-black animate-bounce'
				to='home'
				smooth
				duration={200}>
				<FaArrowUp size={20} />
			</Link>
		</section>
	);
};
export default Contact;
