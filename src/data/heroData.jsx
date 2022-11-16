// Icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// File
import Resume from '../assets/Sang_Le_Resume.pdf';

// Global data
// Since this file export jsx element so it has to be .jsx file (vite strict rule)
export const heroData = [
	{
		id: 1,
		image: <FaGithub size={20} />,
		href: 'https://github.com/sqle157',
	},
	{
		id: 2,
		image: <FaLinkedin size={20} />,
		href: 'https://www.linkedin.com/in/sangle98/',
	},
	{
		id: 3,
		image: <AiOutlineMail size={20} />,
		href: 'mailto:sqle157@gmail.com',
	},
	{
		id: 4,
		image: <BsFillPersonLinesFill size={20} />,
		href: Resume,
		download: true,
	},
];
