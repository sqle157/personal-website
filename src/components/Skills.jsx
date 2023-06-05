import { useRef } from 'react';
import { useIntersection } from '../hooks/useIntersection';
import { LazyLoadImage } from 'react-lazy-load-image-component';
// Components
import ActiveElementContainer from './ActiveElementContainer/ActiveElementContainer';
// Data
import { skillsData } from '../data/skillsData';

const Skills = () => {
	// get a reference to the element
	const ref = useRef();
	// pass that element into the custom hook
	const { visible } = useIntersection(ref);

	return (
		<ActiveElementContainer visible={visible} active='skills'>
			<section
				id='skills'
				className='border-b border-b-gray-600 bg-[#393E46] px-5 py-[7.5rem] md:py-[10rem]'>
				<div
					ref={ref}
					className={`mx-auto grid w-full max-w-[1600px] grid-cols-1 gap-12 ${
						visible ? 'opacity-100' : 'opacity-0'
					} duration-500 ease-in`}>
					<div
						className={`mx-auto flex w-full items-center gap-5 lg:m-0 ${
							visible
								? 'before:h-[1px] before:flex-1 before:origin-right before:bg-gray-600 before:duration-700 before:ease-in after:h-[1px] after:flex-1 after:origin-right after:bg-gray-600 after:duration-700 after:ease-in'
								: 'before:flex-none after:flex-none'
						}`}>
						<h2 className='inline-block border-b-2 border-[#00ADB5] text-3xl font-bold uppercase text-[#EEEEEE] md:text-4xl 2xl:text-6xl'>
							Skills
						</h2>
					</div>
					<div>
						<ul
							role='list'
							className='grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4'>
							{skillsData.map(({ id, image, title, width, height }) => (
								<li
									key={id}
									role='listitem'
									className='flex items-center justify-center rounded-lg bg-[#EEEEEE] p-8 shadow-sm shadow-gray-300'>
									<LazyLoadImage
										src={image}
										alt={title}
										width={width}
										height={height}
									/>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
		</ActiveElementContainer>
	);
};
export default Skills;
