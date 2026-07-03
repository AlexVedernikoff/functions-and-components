import { useMemo, useState } from 'react';

export const ButtonsList = () => {
	const [labels, setLabels] = useState<number[]>([]);

	const addButton = () => setLabels((labels) => [...labels, getUniqueKey()]);

	const removeButton = (indexToRemove: number) =>
		setLabels((labels) => labels.filter((_, index) => index !== indexToRemove));

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
			<h1>Создаём массив из кнопок</h1>
			<button onClick={addButton}>Добавить кнопку</button>
			<div style={{ height: '23px' }}>{buttonsList}</div>
		</div>
	);
};
