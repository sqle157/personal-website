// Icons
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

// Global data
// Since this file export jsx element so it has to be .jsx file (vite strict rule)
export const heroData = [
	{
		id: 1,
		title: 'github',
		image: <FaGithub size={20} aria-hidden />,
		href: 'https://github.com/sqle157',
	},
	{
		id: 2,
		title: 'linkedin',
		image: <FaLinkedin size={20} aria-hidden />,
		href: 'https://www.linkedin.com/in/sangle98/',
	},
	{
		id: 3,
		title: 'email',
		image: <AiOutlineMail size={20} aria-hidden />,
		href: 'mailto:sqle157@gmail.com',
	}
];
