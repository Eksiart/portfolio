import ProjectCard from '@/app/components/ProjectCard';

const projectsData = [
	{
		id: 1,
		title: 'Portfolio Website',
		description: 'React + Next.js + Tailwind, portfolio website',
		image: '/images/projects/port.jpg',
		codeUrl: 'https://github.com/Eksiart/portfolio',
		previewUrl: 'https://eksiart.ru',
	},
	{
		id: 2,
		title: 'Marvel API',
		description: 'My first pet project on React, formik and yup',
		image: '/images/projects/marvel.jpg',
		codeUrl: 'https://github.com/Eksiart/pet-project-marvel-api',
		previewUrl: 'https://eksiart.github.io/pet-project-marvel-api/',
	},
	{
		id: 3,
		title: 'Posts Infinite Scroll',
		description: 'React with RTK Query, SCSS and FSD. Test task for picasso company',
		image: '/images/projects/picasso.jpg',
		codeUrl: 'https://github.com/Eksiart/picasso-test',
		previewUrl: 'https://eksiart.github.io/picasso-test/posts',
	},
	{
		id: 3,
		title: 'Find user, abort second request',
		description: 'React, Vite, Node.js, Express. Test task for 3205 company',
		image: '/images/projects/3205.jpg',
		codeUrl: 'https://github.com/Eksiart/320.team-test-task',
		previewUrl: 'https://3205.eksiart.ru/',
	},
	{
		id: 4,
		title: 'Find user',
		description: 'React, Vite, CSS\n Test task for globexit company',
		image: '/images/projects/globexit.jpg',
		codeUrl: 'https://github.com/Eksiart/globexit-test',
		previewUrl: 'https://globexit.eksiart.ru/',
	},
]

const ProjectsSection = () => {
	return (
		<>
			<h2 className="text-center text-4xl font-bold text-white mt-8 mb-8 md:mb-12">
				Мои проекты
			</h2>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
				{projectsData.map(p => (
					<ProjectCard
						key={p.id}
						title={p.title}
						description={p.description}
						imgUrl={p.image}
						codeUrl={p.codeUrl}
						previewUrl={p.previewUrl}
					/>
				))}
			</div>
		</>
	);
};

export default ProjectsSection;
