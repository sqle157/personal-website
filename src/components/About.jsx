import { useRef } from 'react';
import { useIntersection } from '../hooks/useIntersection';
import { Link } from 'react-scroll';
// Images & Icons
import Avatar from '../assets/avatar.jpeg';

const About = () => {
	// get a reference to the element
	const ref = useRef();
	// pass that element into the custom hook
	const { visible } = useIntersection(ref);

	return (
		<section
			id='about'
			className='md:py-[10rem] py-[7.5rem] w-full px-5 border-b border-b-gray-600'>
			<div
				ref={ref}
				className={`max-w-[1240px] w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-x-8 lg:gap-y-0 ${
					visible ? 'opacity-100' : 'opacity-0'
				} ease-in duration-500`}>
				<div className='lg:col-span-3 w-full order-1 mx-auto lg:m-0 text-center lg:text-start flex items-center gap-5'>
					<span
						className={`block ${
							visible ? 'flex-1' : 'flex-none'
						} h-[1px] bg-gray-600 ease-in duration-700 origin-right`}></span>
					<h2 className='relative border-b-2 border-[#00ADB5] font-bold uppercase inline-block text-3xl md:text-4xl text-[#EEEEEE]'>
						About Me
					</h2>
					<span
						className={`block ${
							visible ? 'flex-1' : 'flex-none'
						} h-[1px] bg-gray-600 ease-in duration-700 origin-right`}></span>
				</div>
				<div className='relative lg:col-span-2 order-3 lg:order-2 text-start mt-5'>
					<p className='text-[#EEEEEE] opacity-75 py-4'>
						My first touch with Front-End Web Development was back in the
						Internship in 2016, before I went into college. However, my passion
						for Front-End Web Development only started back in my last school
						year in 2022 when I enrolled in the Web Development course at the
						university, and I immediately got attached to every aspects of Web
						Development taught in that course.
					</p>
					<p className='text-[#EEEEEE] opacity-75 py-4'>
						Ever since, Front-End Web Development has been a really intriguing
						topic to me, and it always piques my interest and passion when it
						comes to Front-End Web Development subject or just Web Development
						in general.
					</p>
					<p className='text-[#EEEEEE] opacity-75 py-4'>
						Though I am most proficient in building front-end applications using
						HTML, CSS, Javascript, and React, I am a quick learner and can pick
						up new tech stacks as needed.
					</p>
					<p className='text-[#EEEEEE] opacity-75 py-4'>
						I like reading novels, watching Youtube and playing games during my
						free time.
					</p>

					<span
						className={`hidden lg:block absolute w-[1px] -right-3 top-0 ${
							visible ? 'h-[100%]' : 'h-0'
						} bg-gray-600 ease-in duration-700 origin-top delay-150`}></span>

					<div className='flex items-center gap-5 mt-20'>
						<Link
							to='projects'
							smooth
							duration={200}
							className='text-[#EEEEEE] font-semibold inline-block opacity-75  border-b-[#00ADB5] border-b-2 cursor-pointer uppercase'>
							Checkout my projects
						</Link>

						<span
							className={`hidden sm:block ${
								visible ? 'flex-1' : 'flex-none'
							} h-[1px] bg-gray-600 ease-in duration-700 origin-right delay-150`}></span>
					</div>
				</div>

				<div className='lg:col-span-1 lg:order-3 order-2 mx-auto mt-5 lg:mt-0 shadow-md shadow-gray-600 aspect-square w-[300px] lg:w-full rounded-full overflow-hidden self-center'>
					<img src={Avatar} alt='' className='object-cover w-full h-full' />
				</div>
			</div>
		</section>
	);
};
export default About;
