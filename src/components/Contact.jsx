import { useRef } from 'react';
import { useIntersection } from '../hooks/useIntersection';
import { Link } from 'react-scroll';
// Components
import ActiveElementContainer from './ActiveElementContainer/ActiveElementContainer';
// Icons
import { FaLinkedin, FaGithub, FaArrowUp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
	// get a reference to the element
	const ref = useRef();
	// pass that element into the custom hook
	const { visible } = useIntersection(ref);

	return (
		<ActiveElementContainer visible={visible} active='contact'>
			<section
				id='contact'
				className='md-pb[7.5rem] grid w-full grid-cols-1 gap-20 border-b border-b-gray-600 bg-[#393E46] py-[7.5rem] px-5 md:pt-[10rem]'>
				<div
					ref={ref}
					className={`mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-10 ${
						visible ? 'opacity-100' : 'opacity-0'
					} duration-500 ease-in`}>
					<div className='mx-auto flex w-full items-center gap-5 lg:m-0'>
						<span
							className={`block ${
								visible ? 'flex-1' : 'flex-none'
							} h-[1px] origin-right bg-gray-600 duration-700 ease-in`}></span>
						<h2 className='inline-block border-b-2 border-[#00ADB5] text-2xl font-bold uppercase text-[#EEEEEE] sm:text-3xl md:text-4xl'>
							Get In Touch
						</h2>
						<span
							className={`block ${
								visible ? 'flex-1' : 'flex-none'
							} h-[1px] origin-right bg-gray-600 duration-700 ease-in`}></span>
					</div>

					<p className='mx-auto max-w-[700px] text-center text-[0.875rem] text-[#eeeeee] opacity-75 sm:text-2xl'>
						My inbox is always open. Whether you have a question or just want to
						say hi, I'll try my best to get back to you!{' '}
					</p>

					<div className='mx-auto grid w-full max-w-[750px] grid-cols-1 border-y-2 border-y-gray-600 md:grid-cols-2'>
						<div>
							<a
								href='https://github.com/sqle157'
								target='_blank'
								className='flex items-center gap-3 py-6 text-white focus:outline-gray-600'>
								<FaGithub size={32} />
								https://github.com/sqle157
							</a>
						</div>
						<div>
							<a
								href='https://www.linkedin.com/in/sangle98/'
								target='_blank'
								className='text-md flex items-center gap-3 py-6 text-white focus:outline-gray-600 md:ml-auto md:justify-end'>
								<FaLinkedin size={32} />
								linkedin.com/in/sangle98/
							</a>
						</div>
						<div>
							<a
								href='mailto:sqle157@gmail.com'
								target='_blank'
								className='text-md flex items-center gap-3 py-6 text-white focus:outline-gray-600'>
								<AiOutlineMail size={32} />
								sqle157@gmail.com
							</a>
						</div>
					</div>
				</div>
				<Link
					className='mx-auto grid h-[3.25rem] w-[3.25rem] animate-bounce cursor-pointer place-items-center rounded-full bg-[#EEEEEE] text-black sm:h-16 sm:w-16'
					to='home'
					href='home'
					aria-label='back to top button'
					smooth
					duration={200}>
					<FaArrowUp size={20} />
				</Link>
			</section>
		</ActiveElementContainer>
	);
};
export default Contact;
