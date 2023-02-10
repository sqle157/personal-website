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
					<div
						className={`mx-auto flex w-full items-center gap-5 lg:m-0 ${
							visible
								? 'before:h-[1px] before:flex-1 before:origin-right  before:bg-gray-600 before:duration-700 before:ease-in after:h-[1px] after:flex-1 after:origin-right after:bg-gray-600 after:duration-700 after:ease-in'
								: 'before:flex-none after:flex-none'
						}`}>
						<h2 className='inline-block border-b-2 border-[#00ADB5] text-2xl font-bold uppercase text-[#EEEEEE] sm:text-3xl md:text-4xl'>
							Get In Touch
						</h2>
					</div>

					<p className='mx-auto max-w-[700px] text-center text-base text-[#eeeeee] opacity-75 sm:text-xl'>
						My inbox is always open. Whether you have a question or just want to
						say hi, I'll try my best to get back to you!{' '}
					</p>

					<div className='mx-auto grid w-full max-w-[750px] grid-cols-1 border-y-2 border-y-gray-600 md:grid-cols-2'>
						<div className='group'>
							<a
								href='https://github.com/sqle157'
								target='_blank'
								aria-label='Open github page in new tab'
								className='flex items-center gap-3 py-6 text-white duration-300 ease-in focus-within:outline-gray-600 group-focus-within:scale-105 group-hover:scale-105'>
								<FaGithub size={32} aria-hidden />
								github.com/sqle157
							</a>
						</div>
						<div className='group'>
							<a
								href='https://www.linkedin.com/in/sangle98/'
								target='_blank'
								aria-label='Open linkedin page in new tab'
								className='text-md e flex items-center gap-3 py-6 text-white duration-300 ease-in focus:outline-gray-600 group-focus-within:scale-105 group-hover:scale-105 md:ml-auto md:justify-end'>
								<FaLinkedin size={32} aria-hidden />
								linkedin.com/in/sangle98/
							</a>
						</div>
						<div className='group'>
							<a
								href='mailto:sqle157@gmail.com'
								target='_blank'
								aria-label='Open email page in new tab'
								className='text-md flex items-center gap-3 py-6 text-white duration-300 ease-in focus:outline-gray-600 group-focus-within:scale-105 group-hover:scale-105'>
								<AiOutlineMail size={32} aria-hidden />
								sqle157@gmail.com
							</a>
						</div>
					</div>
				</div>
				<Link
					className='mx-auto grid h-[3.25rem] w-[3.25rem] animate-bounce cursor-pointer place-items-center rounded-full bg-[#EEEEEE] text-black sm:h-16 sm:w-16'
					to='home'
					href='#top'
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
