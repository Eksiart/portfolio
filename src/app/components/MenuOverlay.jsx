import NavLink from '@/app/components/NavLink';

const MenuOverlay = ({ links }) => {
	return (
		<ul className="flex flex-col py-4 items-center">
			{links.map(e =>
				<li key={e.path}>
					<NavLink title={e.title} href={e.path} />
				</li>
			)}
		</ul>
	);
};

export default MenuOverlay;
