import { motion } from 'framer-motion';

const tabVariants = {
	default: { width: 0 },
	active: { width: "calc(100% - 0.75rem)" }
};

const TabButton = ({ active, onTabClick, children }) => {

	const buttonClasses = active ? 'text-white' : 'text-[#ADB7BE]'

	return (
		<button onClick={onTabClick}>
			<p className={`mr-3 font-semibold ${buttonClasses}`}>
				{children}
			</p>
			<motion.div
				animate={active ? "active" : "default"}
				variants={tabVariants}
				className="h-1 bg-white mt-2 mr-3"
			></motion.div>
		</button>
	);
};

export default TabButton;
