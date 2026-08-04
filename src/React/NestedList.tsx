import {useState} from 'react';
import {Typography} from './buttonsList';

export const menu: Menu = [
	{
		title: 'Item 1',
		children: [
			{
				title: 'Item 1.1',
				children: [
					{
						title: 'Item 1.1.1',
					},
				],
			},
			{
				title: 'Item 1.2',
			},
		],
	},
	{
		title: 'Item 2',
		children: [
			{
				title: 'Item 2.1',
			},
		],
	},
];

type Menu = {
	title: string;
	children?: Menu;
}[];

interface MenuProps {
	items: Menu;
}

export function Menu({items}: MenuProps) {
	const [showChildren, setShowChildren] = useState<Record<string, boolean>>({});

	const onHandleClick = (title: string) => {
		setShowChildren(prev => ({...prev, [title]: !prev[title]}));
	};

	return (
		<ul>
			{items.map(({title, children}) => (
				<li key={title}>
					{title}{' '}
					{children && (
						<button style={{width: '24px'}} onClick={() => onHandleClick(title)}>
							{showChildren[title] ? '-' : '+'}
						</button>
					)}
					{Array.isArray(children) && showChildren[title] && <Menu items={children} />}
				</li>
			))}
		</ul>
	);
}

// *** Проверка ***********************************************

export const NestedList = () => {
	return (
		<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
			<Typography>Рендеринг вложенного списка</Typography>
			<div style={{width: '300px'}}>
				<Menu items={menu} />
			</div>
		</div>
	);
};
