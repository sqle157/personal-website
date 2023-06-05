import { useRef } from 'react';
import { useIntersection } from '../hooks/useIntersection';
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
				className='w-full border-b border-b-gray-600 px-5 py-[7.5rem] md:py-[10rem]'>
				<div
					ref={ref}
					className={`mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-12 ${
						visible ? 'opacity-100' : 'opacity-0'
					} duration-500 ease-in`}>
					<div
						className={`mx-auto flex w-full items-center gap-5 lg:m-0 ${
							visible
								? 'before:h-[1px] before:flex-1 before:origin-right  before:bg-gray-600 before:duration-700 before:ease-in after:h-[1px] after:flex-1 after:origin-right after:bg-gray-600 after:duration-700 after:ease-in'
								: 'before:flex-none after:flex-none'
						}`}>
						<h2 className='inline-block border-b-2 border-[#00ADB5] text-3xl font-bold uppercase text-[#EEEEEE] md:text-4xl 2xl:text-6xl'>
							Projects
						</h2>
					</div>
					<div className='grid w-full grid-flow-row-dense grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3'>
						{projectsData.map(
							({ id, image, title, description, tags, demo, code }) => (
								<div
									key={id}
									className='group grid auto-rows-[450px] place-content-stretch overflow-hidden rounded-lg bg-[#393E46] shadow-sm shadow-slate-600 sm:auto-rows-[350px]'>
									<div className='col-span-full row-span-full '>
										<picture>
											<source
												media='(max-width: 640px)'
												srcSet={image.mobile}
											/>
											{image.tablet && (
												<source
													media='(max-width: 800px)'
													srcSet={image.tablet}
												/>
											)}
											<LazyLoadImage
												src={image.desktop}
												alt={title}
												width={380}
												height={450}
												className='h-full w-full object-cover'
											/>
										</picture>
									</div>
									<div className='col-span-full row-span-full flex flex-col items-center justify-center bg-[#0a192f]/90 p-3 text-center duration-500 ease-in-out sm:opacity-0 group-focus-within:sm:opacity-100 group-hover:sm:opacity-100'>
										<h3 className='mx-auto border-b-2 border-b-[#00ADB5] py-2 text-xl font-bold uppercase text-[#EEEEEE] 2xl:text-2xl'>
											{title}
										</h3>
										<p className='mt-4 text-sm leading-[1.75] text-[#EEEEEE] 2xl:text-lg'>
											{description}
										</p>
										<div className='mt-6 w-full border-t-2 border-t-[#00ADB5] text-start'>
											<ul
												role='list'
												className='grid w-full grid-cols-3 gap-3 py-4 text-center text-[#EEEEEE]'>
												{tags.map((tag, index) => (
													<li
														key={index}
														role='listitem'
														className='grid place-items-center rounded-lg bg-[#495670] p-1 text-[12px] text-[#00FFF6] shadow-xl 2xl:text-lg'>
														{tag}
													</li>
												))}
											</ul>
											<div className='mt-4 flex justify-end'>
												<a
													href={demo}
													title='open in a new tab'
													aria-label='Demo'
													target='_blank'
													className='mr-8 text-[#00FFF6] shadow-md'>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														className='icon icon-tabler icon-tabler-external-link'
														width='24'
														height='24'
														viewBox='0 0 24 24'
														strokeWidth='2'
														stroke='currentColor'
														fill='none'
														strokeLinecap='round'
														strokeLinejoin='round'
														aria-hidden='true'>
														<path stroke='none' d='M0 0h24v24H0z' fill='none' />
														<path d='M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5' />
														<path d='M10 14l10 -10' />
														<path d='M15 4l5 0l0 5' />
													</svg>
												</a>
												<a
													href={code}
													target='_blank'
													title='open in a new tab'
													aria-label='Github'
													className='text-[#00FFF6] shadow-md'>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														className='icon icon-tabler icon-tabler-brand-github'
														width='24'
														height='24'
														viewBox='0 0 24 24'
														strokeWidth='2'
														stroke='currentColor'
														fill='none'
														strokeLinecap='round'
														strokeLinejoin='round'
														aria-hidden='true'>
														<path stroke='none' d='M0 0h24v24H0z' fill='none' />
														<path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5' />
													</svg>
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
