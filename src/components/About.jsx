import { useRef } from 'react';
import { useIntersection } from '../hooks/useIntersection';
import { Link } from 'react-scroll';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// Components
import ActiveElementContainer from './ActiveElementContainer/ActiveElementContainer';
// Images & Icons
import Avatar from '../assets/images/desktop/avatar-desktop.webp';
import AvatarMobile from '../assets/images/mobile/avatar-mobile.webp';

const About = () => {
	// get a reference to the element
	const ref = useRef();
	// pass that element into the custom hook
	const { visible } = useIntersection(ref);

	return (
		<ActiveElementContainer visible={visible} active='about'>
			<section id='about' className='w-full py-[7.5rem] px-5 md:py-[10rem]'>
				<div
					ref={ref}
					className={`mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-x-8 gap-y-6 lg:grid-cols-3 lg:gap-y-0 ${
						visible ? 'opacity-100' : 'opacity-0'
					} duration-500 ease-in`}>
					<div
						className={`order-1 mx-auto flex w-full items-center gap-5 text-center lg:col-span-3 lg:m-0 lg:text-start ${
							visible
								? 'before:h-[1px] before:flex-1 before:origin-right before:bg-gray-600 before:duration-700 before:ease-in after:h-[1px] after:flex-1 after:origin-right after:bg-gray-600 after:duration-700 after:ease-in'
								: 'before:flex-none after:flex-none'
						}`}>
						<h2 className='relative inline-block border-b-2 border-[#00ADB5] text-3xl font-bold uppercase text-[#EEEEEE] md:text-4xl'>
							About Me
						</h2>
					</div>
					<div
						className={`relative order-3 mt-5 text-start after:absolute after:-right-3 after:top-0 after:hidden after:w-[1px] lg:col-span-2 after:lg:order-2 after:lg:block ${
							visible ? 'after:h-[100%]' : 'after:h-0'
						} after:origin-top after:bg-gray-600 after:delay-150 after:duration-700 after:ease-in`}>
						<p className='py-4 text-[#EEEEEE]'>
							My first touch with Front-End Web Development was back in the
							Internship in 2016, before I went into college. However, my
							passion for Front-End Web Development only started back in my last
							school year in 2022 when I enrolled in the Web Development course
							at the university, and I immediately got attached to every aspects
							of Web Development taught in that course.
						</p>
						<p className='py-4 text-[#EEEEEE]'>
							Ever since, Front-End Web Development has been a really intriguing
							topic to me, and it always piques my interest and passion when it
							comes to Front-End Web Development subject or just Web Development
							in general.
						</p>
						<p className='py-4 text-[#EEEEEE]'>
							Though I am most proficient in building front-end applications
							using HTML, CSS, Javascript, and React, I am a quick learner and
							can pick up new tech stacks as needed.
						</p>
						<p className='py-4 text-[#EEEEEE]'>
							I like reading novels, watching Youtube and playing games during
							my free time.
						</p>
						<div
							className={`mt-20 flex items-center gap-5 ${
								visible ? 'after:flex-1' : 'after:flex-none'
							} after:h-[1px] after:origin-right after:bg-gray-600 after:delay-150 after:duration-700 after:ease-in`}>
							<Link
								to='projects'
								href='projects'
								smooth
								duration={200}
								className='inline-block cursor-pointer border-b-2 border-b-[#00ADB5] font-semibold uppercase text-[#EEEEEE]'>
								Checkout my projects
							</Link>
						</div>
					</div>
					<div className='order-2 mx-auto mt-5 aspect-square w-[300px] self-center overflow-hidden rounded-full shadow-md shadow-gray-600 lg:order-3 lg:col-span-1 lg:mt-0 lg:w-full'>
						<picture>
							<source
								media='(max-width: 1024px)'
								srcSet={AvatarMobile}
								type='image/webp'
							/>
							<LazyLoadImage
								src={Avatar}
								alt='Sang Le Avatar'
								className='h-full w-full object-cover'
							/>
						</picture>
					</div>
				</div>
			</section>
		</ActiveElementContainer>
	);
};
export default About;
