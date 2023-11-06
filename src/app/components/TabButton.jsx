const TabButton = ({ active, onTabClick, children }) => {

	const buttonClasses = active ? 'text-white border-b' : 'text-[#ADB7BE]'

	return (
		<button onClick={onTabClick}>
			<p className={`mr-3 font-semibold ${buttonClasses}`}>
				{children}
			</p>
		</button>
	);
};

export default TabButton;
