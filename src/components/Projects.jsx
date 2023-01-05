import { useRef } from 'react';
import { useIntersection } from '../hooks/useIntersection';
// Components
import ActiveElementContainer from './ActiveElementContainer/ActiveElementContainer';
// Data
import { projectsData } from '../data/projectsData';

const Projects = () => {
	// get a reference to the element
	const ref = useRef();
	// pass that element into the custom hook
	const { visible } = useIntersection(ref);

	return (
		<ActiveElementContainer visible={visible} active='projects'>
			<section
				id='projects'
				className='w-full border-b border-b-gray-600 py-[7.5rem] px-5 md:py-[10rem]'>
				<div
					ref={ref}
					className={`mx-auto grid w-full max-w-[1240px] grid-cols-1 gap-12 ${
						visible ? 'opacity-100' : 'opacity-0'
					} duration-500 ease-in`}>
					<div className='mx-auto flex w-full items-center gap-5 lg:m-0'>
						<span
							className={`block ${
								visible ? 'flex-1' : 'flex-none'
							} h-[1px] origin-right bg-gray-600 duration-700 ease-in`}></span>
						<h2 className='inline-block border-b-2 border-[#00ADB5] text-3xl font-bold uppercase text-[#EEEEEE] md:text-4xl'>
							Projects
						</h2>
						<span
							className={`block ${
								visible ? 'flex-1' : 'flex-none'
							} h-[1px] origin-right bg-gray-600 duration-700 ease-in`}></span>
					</div>
					<div className='grid w-full grid-cols-1 gap-10 md:grid-cols-2'>
						{projectsData.map(
							({ id, image, title, description, tags, demo, code }) => (
								<div
									key={id}
									className='overflow-hidden rounded-lg bg-[#393E46] shadow-sm shadow-gray-300'>
									<div className='h-[300px]'>
										<img
											src={image}
											alt={title}
											className='h-full w-full object-cover'
										/>
									</div>
									<div className='flex h-[calc(100%-300px)] flex-col items-center justify-center p-3 text-center'>
										<h3 className='border-b-2 border-b-[#00ADB5] py-2 text-2xl font-bold uppercase text-[#eeeeee]'>
											{title}
										</h3>
										<p className='pt-4 leading-[1.75]  text-[#eeeeee] opacity-75'>
											{description}
										</p>
										<div className='mt-auto py-4'>
											<div className='flex flex-wrap justify-center gap-5 py-4 '>
												{tags.map((tag, index) => (
													<span
														key={index}
														className='block rounded-sm bg-[#eeeeee] p-1 text-sm text-[#000]'>
														{tag}
													</span>
												))}
											</div>
											<div className='py-4'>
												<a
													href={demo}
													target='_blank'
													className='mr-8 bg-[#11999E] px-4 py-2 uppercase text-[#eeeeee] hover:bg-[#30E3CA] focus:bg-[#30E3CA] focus:outline-none'>
													Demo
												</a>
												<a
													href={code}
													target='_blank'
													className='bg-[#11999E] px-4 py-2 uppercase text-[#eeeeee] hover:bg-[#30E3CA] focus:bg-[#30E3CA] focus:outline-none'>
													Code
												</a>
											</div>
										</div>
									</div>
								</div>
							)
						)}
					</div>
				</div>
			</section>
		</ActiveElementContainer>
	);
};
export default Projects;
