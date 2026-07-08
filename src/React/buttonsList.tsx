import {useMemo, useState} from 'react';

export const ButtonsList = () => {
	const [labels, setLabels] = useState<number[]>([]);

	const addButton = () => setLabels(labels => [...labels, getUniqueKey()]);

	const removeButton = (indexToRemove: number) =>
		setLabels(labels => labels.filter((_, index) => index !== indexToRemove));

	const getUniqueKey = () => (labels.length ? Math.max(...labels) + 1 : 0);

	const buttonsList = useMemo(() => {
		return labels.map((key, index) => (
			<button key={key} onClick={() => removeButton(index)}>
				{key}
			</button>
		));
	}, [labels]);

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Typography>Создаём массив из кнопок</Typography>
			<button onClick={addButton}>Добавить кнопку</button>
			<div style={{height: '23px'}}>{buttonsList}</div>
		</div>
	);
};

interface TypographyProps {
	children: string;
}

export const Typography = ({children}: TypographyProps) => {
	return <h1 style={{fontFamily: 'Playfair Display', color: '#0f6c6b'}}>{children}</h1>;
};
