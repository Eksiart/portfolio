"use client";
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import heroImage from '../../../public/images/hr.png'

const HeroSection = () => {
	return (
		<section>
			<div className="grid grid-cols-1 sm:grid-cols-12">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-7 place-self-center text-center sm:text-left"
				>
					<h1 className="text-white mb-4 text-5xl sm:text-4xl lg:text-6xl font-extrabold">
						<span>Привет, я </span>
						<br/>
						<div className="h-24 lg:h-32 max-sm:mx-auto 2xl:h-16">
							<TypeAnimation
								sequence={[
									'Дашинимаев Ардан',
									1000,
									'Frontend разработчик',
									1000,
								]}
								wrapper="span"
								speed={25}
								repeat={Infinity}
							/>
						</div>
					</h1>
					<p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci animi eius eligendi eveniet
					</p>
					<div>
						<button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
							Связаться
						</button>
						<button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
							Скачать резюме
						</button>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-5 place-self-center mt-4 lg:mt-0"
				>
					<div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
						<Image
							src={heroImage}
							alt="hero image"
							layout='fill'
							// className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							// width={300}
							// height={300}
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
