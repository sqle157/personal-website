import { useRef } from 'react';
import { useIntersection } from '../hooks/useIntersection';
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
				className='border-b border-b-gray-600 bg-[#393E46] py-[7.5rem] px-5 md:py-[10rem]'>
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
							Skills
						</h2>
						<span
							className={`block ${
								visible ? 'flex-1' : 'flex-none'
							} h-[1px] origin-right bg-gray-600 duration-700 ease-in`}></span>
					</div>
					<div className='grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4'>
						{skillsData.map(({ id, image, width, height }) => (
							<div
								key={id}
								className='flex items-center justify-center rounded-lg bg-[#52616B] p-8 shadow-sm shadow-gray-300 duration-300 ease-in hover:scale-105'>
								<img src={image} alt='' width={width} height={height} />
							</div>
						))}
					</div>
				</div>
			</section>
		</ActiveElementContainer>
	);
};
export default Skills;
