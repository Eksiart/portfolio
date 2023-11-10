"use client";
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProjectCard from '@/app/components/ProjectCard';

const projectsData = [
	{
		id: 1,
		title: 'Portfolio Website',
		description: 'React + Next.js + Tailwind, portfolio website',
		image: '/images/projects/port.webp',
		codeUrl: 'https://github.com/Eksiart/portfolio',
		previewUrl: 'https://eksiart.ru',
	},
	{
		id: 2,
		title: 'Marvel API',
		description: 'My first pet project on React, formik and yup',
		image: '/images/projects/marvel.webp',
		codeUrl: 'https://github.com/Eksiart/pet-project-marvel-api',
		previewUrl: 'https://eksiart.github.io/pet-project-marvel-api/',
	},
	{
		id: 3,
		title: 'Posts Infinite Scroll',
		description: 'React with RTK Query, SCSS and FSD. Test task for picasso company',
		image: '/images/projects/picasso.webp',
		codeUrl: 'https://github.com/Eksiart/picasso-test',
		previewUrl: 'https://eksiart.github.io/picasso-test/posts',
	},
	{
		id: 4,
		title: 'Find user, abort second request',
		description: 'React, Vite, Node.js, Express. Test task for 3205 company',
		image: '/images/projects/3205.webp',
		codeUrl: 'https://github.com/Eksiart/320.team-test-task',
		previewUrl: 'https://3205.eksiart.ru/',
	},
	{
		id: 5,
		title: 'Find user',
		description: 'React, Vite, CSS. Test task for globexit company',
		image: '/images/projects/globexit.webp',
		codeUrl: 'https://github.com/Eksiart/globexit-test',
		previewUrl: 'https://globexit.eksiart.ru/',
	},
	{
		id: 5,
		title: 'Product list',
		description: 'React, Vite, Tailwind, RTK, RTK Query. Filters, debounce, pagination',
		image: '/images/projects/products.webp',
		codeUrl: 'https://github.com/Eksiart/react-redux-ts-vite-test',
		previewUrl: 'https://products.eksiart.ru/',
	},
	{
		id: 6,
		title: 'Posts list',
		description: 'TypeScript, React, Vite, RTK. Filters, debounce, pagination, jsonplaceholder',
		image: '/images/projects/posts.webp',
		codeUrl: 'https://github.com/Eksiart/posts-test-react-redux-ts-antd-vite',
		previewUrl: 'https://posts.eksiart.ru/',
	},
]

const cardVariants = {
	initial: { y: 50, opacity: 0, scale: 0.5 },
	animate: { y: 0, opacity: 1, scale: 1 }
};

const ProjectsSection = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<section className="scroll-mt-48 md:scroll-mt-48" id="projects">
			<h2 className="text-center text-4xl font-bold text-white mt-8 mb-8 md:mb-12">
				Мои проекты
			</h2>
			<ul ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
				{projectsData.map((p, index) => (
					<motion.li
						key={p.id}
						variants={cardVariants}
						initial="initial"
						animate={isInView ? "animate" : "initial"}
						transition={{ duration: 0.3, delay: index * 0.4 }}
					>
						<ProjectCard
							key={p.id}
							title={p.title}
							description={p.description}
							imgUrl={p.image}
							codeUrl={p.codeUrl}
							previewUrl={p.previewUrl}
						/>
					</motion.li>
				))}
			</ul>
		</section>
	);
};

export default ProjectsSection;
