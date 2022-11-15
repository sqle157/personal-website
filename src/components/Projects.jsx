import { useRef } from 'react';
import { useIntersection } from '../hooks/useIntersection';
// Data
import { projectsData } from '../data/projectsData';

const Projects = () => {
	// get a reference to the element
	const ref = useRef();
	// pass that element into the custom hook
	const { visible } = useIntersection(ref);

	return (
		<section
			id='projects'
			className='md:py-[10rem] py-[7.5rem] w-full px-5 border-b border-b-gray-600'>
			<div
				ref={ref}
				className={`max-w-[1240px] w-full mx-auto grid grid-cols-1 gap-12 ${
					visible ? 'opacity-100' : 'opacity-0'
				} ease-in duration-500`}>
				<div className='mx-auto lg:m-0 flex items-center gap-5 w-full'>
					<span
						className={`block ${
							visible ? 'flex-1' : 'flex-none'
						} h-[1px] bg-gray-600 ease-in duration-700 origin-right`}></span>
					<h2 className='border-b-2 border-[#00ADB5] font-bold uppercase inline-block text-3xl md:text-4xl text-[#EEEEEE]'>
						Projects
					</h2>
					<span
						className={`block ${
							visible ? 'flex-1' : 'flex-none'
						} h-[1px] bg-gray-600 ease-in duration-700 origin-right`}></span>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-full'>
					{projectsData.map(({ id, image, title, description, tags }) => (
						<div
							key={id}
							className='bg-[#393E46] rounded-lg overflow-hidden shadow-sm shadow-gray-300'>
							<div className='h-[300px]'>
								<img
									src={image}
									alt='Project 1'
									className='object-cover w-full h-full'
								/>
							</div>

							<div className='p-3 text-center h-[calc(100%-300px)] flex flex-col justify-center items-center'>
								<h3 className='text-2xl uppercase text-[#eeeeee] py-2 font-bold border-b-2 border-b-[#00ADB5]'>
									{title}
								</h3>
								<p className='text-[#eeeeee] opacity-75  pt-4 leading-[1.75]'>
									{description}
								</p>

								<div className='py-4 mt-auto'>
									<div className='flex flex-wrap justify-center gap-5 py-4 '>
										{tags.map((tag, index) => (
											<span
												key={index}
												className='text-[#000] block text-sm p-1 bg-[#eeeeee] rounded-sm'>
												{tag}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default Projects;
