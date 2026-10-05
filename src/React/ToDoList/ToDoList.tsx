import {ChangeEvent, useMemo, useState} from 'react';
import {Typography} from '../buttonsList';
import classes from './ToDoList.module.scss';
import cl from 'classnames';

interface Task {
	id: number;
	label: string;
	done: boolean;
}

export const ToDoList = () => {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [inputState, seInputState] = useState('');

	const {strikethrough, buttonRemove, list, listItem} = classes;

	const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		seInputState(event.target.value);
	};

	const onAddTodo = () => {
		if (!inputState) return;
		const {id: lastId} = tasks.at(-1) || {};
		setTasks(prev => [...prev, {id: (lastId || 0) + 1, label: inputState, done: false}]);
		seInputState('');
	};

	const onToggleComplete = (id: number) => {
		setTasks(prev => prev.map(task => (task.id === id ? {...task, done: !task.done} : task)));
	};

	const onRemoveTodo = (id: number) => {
		setTasks(prev => prev.filter(task => task.id !== id));
	};

	const taskList = useMemo(() => {
		return (
			<ul className={list}>
				{tasks.map(({id, label, done}) => {
					const labelClassName = cl({[strikethrough]: done});
					return (
						<li key={id} className={listItem}>
							<input type="checkbox" onChange={() => onToggleComplete(id)} />
							<span className={labelClassName}>{label}</span>
							<button className={buttonRemove} onClick={() => onRemoveTodo(id)}>
								X
							</button>
						</li>
					);
				})}
			</ul>
		);
	}, [tasks]);
	return (
		<>
			<Typography>ToDoList</Typography>
			<div>
				<input placeholder="введите название..." onChange={onInputChange} onSubmit={onAddTodo} value={inputState} />
				<button onClick={onAddTodo}>Add Todo</button>
			</div>

			{taskList}
		</>
	);
};
