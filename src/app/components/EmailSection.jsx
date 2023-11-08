"use client";
import GitHubIcon from '../../../public/images/github-icon.svg'
import HHIcon from '../../../public/images/hh-icon.svg'
import TelegramIcon from '../../../public/images/telegram-logo.svg'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const EmailSection = () => {
	const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const data = {
			email: e.target.email.value,
			subject: e.target.subject.value,
			message: e.target.message.value,
		}
		const endpoint = "/api/send";
		const options = {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		};
		const res = await fetch(endpoint, options);
		const resData = await res.json();
		if (res.status === 200) {
			console.log('Message sent.')
			setIsEmailSubmitted(true);
		};
	};

	return (
		<section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
			<div>
				<h5 className="text-xl font-bold text-white my-2">Обратная связь</h5>
				<p className="text-[#ADB7BE] mb-4 msx-w-md">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam cupiditate eveniet iure laboriosam maxime minus optio perferendis repellat suscipit.
				</p>
				<div className="socials flex flex-row gap-2">
					<Link href="https://github.com/Eksiart">
						<Image src={GitHubIcon} alt="GitHub Icon"/>
					</Link>
					<Link href="https://t.me/artshuter">
						<Image src={TelegramIcon} alt="Telegram Icon"/>
					</Link>
					<Link href="https://ulan-ude.hh.ru/resume/3880d31fff07dcc5df0039ed1f765954433054">
						<Image src={HHIcon} alt="HeadHunter Icon"/>
					</Link>
				</div>
			</div>
			<div>
				<form className="flex flex-col" onSubmit={handleSubmit}>
					<div className="mb-6">
						<label
							htmlFor="email"
							className="text-white block text-sm font-medium mb-2"
						>
							Ваша электронная почта:
						</label>
						<input
							id="email"
							type="email"
							name="email"
							required
							className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
							placeholder="example@site.com"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="subject"
							className="text-white block text-sm font-medium mb-2"
						>
							Тема сообщения:
						</label>
						<input
							id="subject"
							type="text"
							name="subject"
							required
							className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
							placeholder="Заголовок"
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="message"
							className="text-white block text-sm font-medium mb-2"
						>
							Сообщение:
						</label>
						<textarea
							id="message"
							name="message"
							className="bg-[#18191E] border border-[#33353F] place-[#9CA2A9] ext-gray-100 text-sm rounded-lg block w-full p-2.5 text-white"
							placeholder="Введите ваше сообщение"
						/>
					</div>
					<button
						type="submit"
						className="bg-white hover:bg-slate-200 text-black font-medium py-2.5 px-5 rounded-lg w-full"
					>
						Отправить
					</button>
					{
						isEmailSubmitted && (
							<p className="text-green-500 text-sm mt-2">
								Ваша письмо успешно отправлено
							</p>
						)
					}
				</form>
			</div>
		</section>
	);
};

export default EmailSection;
