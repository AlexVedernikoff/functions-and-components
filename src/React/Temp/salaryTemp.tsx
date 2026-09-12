import {ChangeEvent, useMemo, useState} from 'react';
import {Typography} from '../buttonsList';

const employees = [
	{name: 'A', salary: 30, position: 'junior'},
	{name: 'B', salary: 10, position: 'student'},
	{name: 'C', salary: 40, position: 'junior'},
	{name: 'D', salary: 50, position: 'middle'},
	{name: 'E', salary: 100, position: 'senior'},
	{name: 'F', salary: 100, position: 'senior'},
	{name: 'G', salary: 50, position: 'middle'},
	{name: 'H', salary: 100, position: 'senior'},
];

export const SalaryTemp = () => {
	const [rating, setRating] = useState<number | null>(null);

	const onInputChange = (event: ChangeEvent<HTMLInputElement>) => setRating(Number(event.target.value) || null);

	const salaryRating = useMemo(
		() => [...new Set(employees.map(({salary}) => salary))].sort((a, b) => b - a),
		[employees]
	);

	const filteredEmployees = useMemo(
		() => (rating ? employees.filter(({salary}) => salary === salaryRating[rating - 1]) : employees),
		[rating, salaryRating]
	);

	const employeesList = useMemo(
		() => (
			<ul>
				{filteredEmployees.map(({name, salary, position}) => (
					<li key={name}>{`${name} ${salary} ${position}`}</li>
				))}
			</ul>
		),
		[filteredEmployees]
	);

	return (
		<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
			<Typography>SalaryTemp</Typography>
			<input onChange={onInputChange} />
			<p>рейтинг зарплаты = {rating}</p>
			{employeesList}
		</div>
	);
};
