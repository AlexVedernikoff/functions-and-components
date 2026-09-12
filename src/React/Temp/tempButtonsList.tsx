import {useMemo, useState} from 'react';
import {Typography} from '../buttonsList';

export const TempButtonsList = () => {
	const [labels, setLabels] = useState<number[]>([]);

	const addButton = () => setLabels(labels => [...labels, createUniqueId(labels)]);

	const removeButton = (removeLabel: number) => setLabels(labels => labels.filter(label => label !== removeLabel));

	const createUniqueId = (labels: number[]) => (labels.length ? labels.at(-1)! + 1 : 1);

	const buttonsList = useMemo(
		() =>
			labels.map(label => (
				<button key={String(label)} onClick={() => removeButton(label)}>
					{label}
				</button>
			)),
		[labels]
	);

	return (
		<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
			<Typography>TempButtonsList</Typography>
			<button onClick={addButton}>Add button</button>
			<div style={{height: '23px'}}>{buttonsList}</div>
		</div>
	);
};
