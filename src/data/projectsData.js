// Images
import Project0 from '../assets/images/desktop/project-0.webp';
import Project1 from '../assets/images/desktop/project-1.webp';
import Project2 from '../assets/images/desktop/project-2.webp';
import Project3 from '../assets/images/desktop/project-3.webp';
import Project4 from '../assets/images/desktop/project-4.webp';
import Project0Tablet from '../assets/images/tablet/project-0.webp';
import Project2Tablet from '../assets/images/tablet/project-2.webp';
import Project4Tablet from '../assets/images/tablet/project-4.webp';
import Project0Mobile from '../assets/images/mobile/project-0.webp';
import Project1Mobile from '../assets/images/mobile/project-1.webp';
import Project2Mobile from '../assets/images/mobile/project-2.webp';
import Project3Mobile from '../assets/images/mobile/project-3.webp';
import Project4Mobile from '../assets/images/mobile/project-4.webp';

export const projectsData = [
	{
		id: 0,
		image: {
			desktop: Project0,
			tablet: Project0Tablet,
			mobile: Project0Mobile,
		},
		title: 'Kanban Task Management',
		description:
			'Kanban Task Management Web Application, integrated with real-time database.',
		tags: ['Fullstack', 'React', 'Typescript', 'MongoDB', 'Tailwind'],
		demo: 'https://kanban-task-management-production.up.railway.app/',
		code: 'https://github.com/sqle157/kanban-task-management',
	},
	{
		id: 1,
		image: {
			desktop: Project1,
			mobile: Project1Mobile,
		},
		title: 'Note App',
		description:
			'A simple note app implemented with fully functional CRUD operations.',
		tags: ['Fullstack', 'React', 'MongoDB', 'Javascript', 'CSS'],
		demo: 'https://mern-note-app-production.up.railway.app/',
		code: 'https://github.com/sqle157/mern-note-app',
	},
	{
		id: 2,
		image: {
			desktop: Project2,
			tablet: Project2Tablet,
			mobile: Project2Mobile,
		},
		title: 'ECOMMERCE WEBSITE',
		description:
			'An Ecommerce Website for customer to buy their favorite product.',
		tags: ['Fullstack', 'React', 'MongoDB', 'Javascript', 'SASS'],
		demo: 'https://mern-ecommerce-website-production.up.railway.app/',
		code: 'https://github.com/sqle157/mern-ecommerce-website',
	},
	{
		id: 3,
		image: {
			desktop: Project3,
			mobile: Project3Mobile,
		},
		title: 'Rest Country API',
		description:
			'A web app intergating with REST Countries API to pull country data and display it.',
		tags: ['Frontend', 'React', 'API', 'Javascript', 'SASS'],
		demo: 'https://rest-countries-hilxxioke-sqle157.vercel.app/',
		code: 'https://github.com/sqle157/rest-countries-api',
	},
	{
		id: 4,
		image: {
			desktop: Project4,
			tablet: Project4Tablet,
			mobile: Project4Mobile,
		},
		title: 'Designo multi-page website',
		description: 'A Multi Page Website built with diverse layout design.',
		tags: ['Frontend', 'React', 'Javascript', 'CSS'],
		demo: 'https://designo-multi-page-tau.vercel.app/',
		code: 'https://github.com/sqle157/designo-multi-page',
	},
];
