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
		title: 'github',
		image: <FaGithub size={20} aria-hidden />,
		href: 'https://github.com/sqle157',
		download: false,
	},
	{
		id: 2,
		title: 'linkedin',
		image: <FaLinkedin size={20} aria-hidden />,
		href: 'https://www.linkedin.com/in/sangle98/',
		download: false,
	},
	{
		id: 3,
		title: 'email',
		image: <AiOutlineMail size={20} aria-hidden />,
		href: 'mailto:sqle157@gmail.com',
		download: false,
	},
	{
		id: 4,
		title: 'resume',
		image: <BsFillPersonLinesFill size={20} aria-hidden />,
		href: '../assets/Sang_Le_Resume.pdf',
		download: true,
	},
];
