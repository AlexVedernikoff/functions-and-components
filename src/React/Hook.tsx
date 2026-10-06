import {useCallback, useRef, useState, useEffect} from 'react';

export function useDebounceCallback(callback: (...args: any[]) => any, delay: number) {
	const ref = useRef<ReturnType<typeof setTimeout>>();

	return useCallback(
		(...args: unknown[]) => {
			clearTimeout(ref.current);
			ref.current = setTimeout(() => callback(...args), delay);
		},
		[callback, delay]
	);
}

export function useDebounceValue<T>(value: T, delay: number): T {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		// Устанавливаем таймер для обновления debouncedValue
		const handler = setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		// Если value изменится до срабатывания таймера, сбрасываем его
		return () => {
			clearTimeout(handler);
		};
	}, [value, delay]); // Зависимости: value и delay

	return debouncedValue;
}

export function Hook() {
	return (
		<>
			<HookCallback />
			<HookValue />
		</>
	);
}

function HookCallback() {
	const [text, setText] = useState('');

	const logDebouncedValue = useDebounceCallback((value: string) => {
		console.log(value);
	}, 500);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setText(value);
		logDebouncedValue(value);
	};

	return (
		<div>
			<input type="text" value={text} onChange={handleChange} />
		</div>
	);
}

function HookValue() {
	const [text, setText] = useState('');
	const debouncedText = useDebounceValue(text, 500);

	useEffect(() => {
		console.log(debouncedText);
	}, [debouncedText]);

	return (
		<div>
			<input type="text" value={text} onChange={e => setText(e.target.value)} />
		</div>
	);
}

// hoisting temporary dead zone
// layout trashing
// readable stream
