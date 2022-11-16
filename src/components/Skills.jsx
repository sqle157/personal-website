import { useRef, useEffect } from 'react';
import { useIntersection } from '../hooks/useIntersection';
import { useActiveContext } from '../hooks/useActiveContext';
// Data
import { skillsData } from '../data/skillsData';

const Skills = () => {
	const { dispatch } = useActiveContext();
	// get a reference to the element
	const ref = useRef();
	// pass that element into the custom hook
	const { visible } = useIntersection(ref);

	// set the active element if it's visible
	useEffect(() => {
		if (visible) {
			dispatch({ type: 'SET_ACTIVE', payload: 'skills' });
		}
	}, [visible]);

	return (
		<section
			id='skills'
			className='md:py-[10rem] py-[7.5rem] px-5 border-b border-b-gray-600 bg-[#393E46]'>
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
						Skills
					</h2>
					<span
						className={`block ${
							visible ? 'flex-1' : 'flex-none'
						} h-[1px] bg-gray-600 ease-in duration-700 origin-right`}></span>
				</div>

				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
					{skillsData.map(({ id, image, width, height }) => (
						<div
							key={id}
							className='bg-[#52616B] p-8 flex items-center justify-center rounded-lg shadow-sm shadow-gray-300 hover:scale-105 ease-in duration-300'>
							<img src={image} alt='' width={width} height={height} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default Skills;
