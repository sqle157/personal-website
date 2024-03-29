// Images
import Project0 from '../assets/images/desktop/project-0.webp';
import Project1 from '../assets/images/desktop/project-1.webp';
import Project2 from '../assets/images/desktop/project-2.webp';
import Project3 from '../assets/images/desktop/project-3.webp';
import Project4 from '../assets/images/desktop/project-4.webp';
import Project5 from '../assets/images/desktop/project-5.webp';
import Project0Tablet from '../assets/images/tablet/project-0.webp';
import Project1Tablet from '../assets/images/tablet/project-1.webp';
import Project3Tablet from '../assets/images/tablet/project-3.webp';
import Project5Tablet from '../assets/images/tablet/project-5.webp';
import Project0Mobile from '../assets/images/mobile/project-0.webp';
import Project1Mobile from '../assets/images/mobile/project-1.webp';
import Project2Mobile from '../assets/images/mobile/project-2.webp';
import Project3Mobile from '../assets/images/mobile/project-3.webp';
import Project4Mobile from '../assets/images/mobile/project-4.webp';
import Project5Mobile from '../assets/images/mobile/project-5.webp';

export const projectsData = [
	{
		id: 0,
		image: {
			desktop: Project0,
			tablet: Project0Tablet,
			mobile: Project0Mobile,
		},
		title: 'Bac Ha Vet Website',
		description:
			'A freelance project website built for a agricultural products import and export joint stock company with Next.js 13 App Router and Headless CMS platform Sanity',
		tags: [
			'Freelance',
			'Next.js',
			'Sanity.io',
			'Typescript',
			'Tailwind',
			'SSR',
			'API',
		],
		demo: 'https://bachavet.vn/',
	},
	{
		id: 4,
		image: {
			desktop: Project4,
			mobile: Project4Mobile,
		},
		title: 'Wa Sushi Restaurant',
		description:
			'A freelance project website built for a sushi restaurant in Munich with WordPress and SEO optimized.',
		tags: ['Frontend', 'WordPress', 'JavaScript', 'PHP', 'SASS', 'SEO', 'CDN'],
		demo: 'https://wa-sushi.de/',
	},
	{
		id: 1,
		image: {
			desktop: Project1,
			tablet: Project1Tablet,
			mobile: Project1Mobile,
		},
		title: 'Kanban Task Management',
		description:
			'Kanban Task Management Web Application, integrated with real-time database.',
		tags: ['Fullstack', 'React', 'Typescript', 'MongoDB', 'Tailwind', 'API'],
		demo: 'https://kanban-task-management-production.up.railway.app/',
		code: 'https://github.com/sqle157/kanban-task-management',
	},
	{
		id: 2,
		image: {
			desktop: Project2,
			mobile: Project2Mobile,
		},
		title: 'Note App',
		description:
			'A simple note app implemented with fully functional CRUD operations.',
		tags: ['Fullstack', 'React', 'MongoDB', 'Javascript', 'CSS', 'API'],
		demo: 'https://mern-note-app-production.up.railway.app/',
		code: 'https://github.com/sqle157/mern-note-app',
	},
	{
		id: 3,
		image: {
			desktop: Project3,
			tablet: Project3Tablet,
			mobile: Project3Mobile,
		},
		title: 'ECOMMERCE WEBSITE',
		description:
			'An Ecommerce Website for customer to buy their favorite product.',
		tags: ['Fullstack', 'React', 'MongoDB', 'Javascript', 'SASS', 'API'],
		demo: 'https://mern-ecommerce-website-production.up.railway.app/',
		code: 'https://github.com/sqle157/mern-ecommerce-website',
	},
	{
		id: 5,
		image: {
			desktop: Project5,
			tablet: Project5Tablet,
			mobile: Project5Mobile,
		},
		title: 'Designo multi-page website',
		description: 'A Multi Page Website built with diverse layout design.',
		tags: ['Frontend', 'React', 'Javascript', 'CSS'],
		demo: 'https://designo-multi-page-tau.vercel.app/',
		code: 'https://github.com/sqle157/designo-multi-page',
	},
];
