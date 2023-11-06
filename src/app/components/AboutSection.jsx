"use client";
import Image from 'next/image';
import { useState, useTransition } from 'react';
import TabButton from '@/app/components/TabButton';

const aboutImage = '/images/about-im.jpg';

const TAB_DATA = [
	{
		title: "Навыки",
		id: "skills",
		content: (
			<ul className="list-disc pl-2 columns-2">
				<li>Jest</li>
				<li>Tailwind</li>
				<li>CSS</li>
				<li>SCSS</li>
				<li>Git</li>
				<li>Node.js</li>
				<li>Express</li>
				<li>Redis</li>
				<li>MySQL</li>
				<li>MongoDB</li>
			</ul>
		)
	},
	{
		title: "Образование",
		id: "education",
		content: (
			<ul className="list-disc pl-2">
				<li>Иркутский государственный университет (ИМИТ)</li>
				<li>Курс Udemy, JavaScript + React (Иван Петриченко)</li>
				<li>Курс Ulbi TV, Продвинутый Frontend в production на React</li>
			</ul>
		)
	},
	{
		title: "Опыт",
		id: "experience",
		content: (
			<ul className="list-disc pl-2">
				<li><b>KODASK game</b>, Node.js backend-разработчик</li>
				<li><b>Terran</b>, Fullstack-разработчик React, Node.js</li>
				<li><b>Международная Ассоциация Культурного Туризма</b>, Fullstack-разработчик React, Node.js</li>
			</ul>
		)
	},
]

const AboutSection = () => {
	const [tab, setTab] = useState("skills");
	const [isPending, startTransition] = useTransition();

	const handleTabChange = (id) => {
		startTransition(() => {
			setTab(id);
		});
	};

	return (
		<section className="text-white">
			<div className="md:grid md:grid-cols-2 gap-16 items-center py-8 px-4 xl:gap-16 sm:pt-16 xl:px-16">
				<div className="h-full">
					<Image
						className="rounded-xl"
						src={aboutImage}
						width={500}
						height={500}
						alt="about image"
					/>
				</div>
				<div className="mt-8 md:mt-0 h-full">
					<h2 className="text-4xl font-bold mb-4">Обо мне</h2>
					<p className="text-base lg:text-lg text-left">
						Я frontend разработчик, задача которого создавать интерактивные и адаптивные веб-приложения. Имею опыт работы с такими технологиями и библиотеками как: JavaScript, TypeScript, React, Redux, а такжие различные ORM. Я люблю изучать новые технологии и стараюсь постоянно улучшать свои профильные навыки.
					</p>
					<div className="flex flex-row mt-8">
						<TabButton
							onTabClick={() => handleTabChange("skills")}
							active={tab === "skills"}
						>
							Навыки
						</TabButton>
						<TabButton
							onTabClick={() => handleTabChange("education")}
							active={tab === "education"}
						>
							Образование
						</TabButton>
						<TabButton
							onTabClick={() => handleTabChange("experience")}
							active={tab === "experience"}
						>
							Опыт
						</TabButton>
					</div>
					<div className="mt-8 h-44">
						{TAB_DATA.find(t => t.id === tab).content}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
