import { useRef } from 'react';
import { useIntersection } from '../hooks/useIntersection';
import { Link } from 'react-scroll';
// Components
import ActiveElementContainer from './ActiveElementContainer/ActiveElementContainer';
// Images & Icons
import Avatar from '../assets/avatar.jpeg';

const About = () => {
	// get a reference to the element
	const ref = useRef();
	// pass that element into the custom hook
	const { visible } = useIntersection(ref);

	return (
		<ActiveElementContainer visible={visible} active='about'>
			<section
				id='about'
				className='w-full border-b border-b-gray-600 py-[7.5rem] px-5 md:py-[10rem]'>
				<div
					ref={ref}
					className={`mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-3 lg:gap-y-0 ${
						visible ? 'opacity-100' : 'opacity-0'
					} duration-500 ease-in`}>
					<div className='order-1 mx-auto flex w-full items-center gap-5 text-center lg:col-span-3 lg:m-0 lg:text-start'>
						<span
							className={`block ${
								visible ? 'flex-1' : 'flex-none'
							} h-[1px] origin-right bg-gray-600 duration-700 ease-in`}></span>
						<h2 className='relative inline-block border-b-2 border-[#00ADB5] text-3xl font-bold uppercase text-[#EEEEEE] md:text-4xl'>
							About Me
						</h2>
						<span
							className={`block ${
								visible ? 'flex-1' : 'flex-none'
							} h-[1px] origin-right bg-gray-600 duration-700 ease-in`}></span>
					</div>
					<div className='relative order-3 mt-5 text-start lg:order-2 lg:col-span-2'>
						<p className='py-4 text-[#EEEEEE] opacity-75'>
							My first touch with Front-End Web Development was back in the
							Internship in 2016, before I went into college. However, my
							passion for Front-End Web Development only started back in my last
							school year in 2022 when I enrolled in the Web Development course
							at the university, and I immediately got attached to every aspects
							of Web Development taught in that course.
						</p>
						<p className='py-4 text-[#EEEEEE] opacity-75'>
							Ever since, Front-End Web Development has been a really intriguing
							topic to me, and it always piques my interest and passion when it
							comes to Front-End Web Development subject or just Web Development
							in general.
						</p>
						<p className='py-4 text-[#EEEEEE] opacity-75'>
							Though I am most proficient in building front-end applications
							using HTML, CSS, Javascript, and React, I am a quick learner and
							can pick up new tech stacks as needed.
						</p>
						<p className='py-4 text-[#EEEEEE] opacity-75'>
							I like reading novels, watching Youtube and playing games during
							my free time.
						</p>
						<span
							className={`absolute -right-3 top-0 hidden w-[1px] lg:block ${
								visible ? 'h-[100%]' : 'h-0'
							} origin-top bg-gray-600 delay-150 duration-700 ease-in`}></span>
						<div className='mt-20 flex items-center gap-5'>
							<Link
								to='projects'
								smooth
								duration={200}
								className='inline-block cursor-pointer border-b-2 border-b-[#00ADB5]  font-semibold uppercase text-[#EEEEEE] opacity-75'>
								Checkout my projects
							</Link>
							<span
								className={`${
									visible ? 'flex-1' : 'flex-none'
								} h-[1px] origin-right bg-gray-600 delay-150 duration-700 ease-in`}></span>
						</div>
					</div>
					<div className='order-2 mx-auto mt-5 aspect-square w-[300px] self-center overflow-hidden rounded-full shadow-md shadow-gray-600 lg:order-3 lg:col-span-1 lg:mt-0 lg:w-full'>
						<img src={Avatar} alt='' className='h-full w-full object-cover' />
					</div>
				</div>
			</section>
		</ActiveElementContainer>
	);
};
export default About;
