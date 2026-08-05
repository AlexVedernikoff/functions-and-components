import {useCallback, useRef, useEffect, useState} from 'react';

export const PleaseReviewMeRev = () => {
	const [items, setItems] = useState([{id: 1}]);
	const triggerClicked = useRef(false);
	const countRef = useRef(items.length);

	useEffect(() => {
		countRef.current = items.length;
	}, [items.length]);

	useEffect(() => {
		let interval: ReturnType<typeof setInterval> | undefined;
		if (triggerClicked.current) {
			interval = setInterval(() => console.log(countRef.current), 1000);
		}
		return () => clearInterval(interval);
	}, [triggerClicked.current]);

	const onHandleClick = useCallback(() => {
		if (!triggerClicked.current) triggerClicked.current = true;
		setItems(items => [...items, {id: items.length + 1}]);
	}, [triggerClicked.current]);

	return (
		<>
			Current count: {items.length}
			<ul style={{display: 'flex', gap: '24px'}}>
				{items.map(({id}) => (
					<li key={id}>{id}</li>
				))}
			</ul>
			<button onClick={onHandleClick}>add one</button>
		</>
	);
};

// 1. useLayoutEffect и useCallback вынести в импорты в верхнюю часть модуля (React.useLayoutEffect).
// 2. <React.Fragment> можно заменить на <></>
// 3. Callback внутри document.addEventListener вынести в отдельную функцию (иначе нельзя будет выполнить подписку)
// 4. Выполнить отписку от onHandleClick в return в useLayoutEffect.
// 5. Добавить массив зависимостей в useLayoutEffect.
// 6. Добавить массив зависимостей в useCallback
// import React from 'react';

export const PleaseReviewMeRev02 = () => {
	const [items, setItems] = useState([{id: 1}]);
	const countRef = useRef(items.length);

	useEffect(() => {
		countRef.current = items.length;
	}, [items.length]);

	useEffect(() => {
		let interval: ReturnType<typeof setInterval> | undefined;
		const clickHandler = () => {
			if (!interval) {
				interval = setInterval(() => console.log(countRef.current), 1000);
			}
		};
		document.addEventListener('click', clickHandler);

		return () => {
			document.removeEventListener('click', clickHandler);
			clearInterval(interval);
		};
	}, []);

	const onHandleClick = useCallback(() => setItems(items => [...items, {id: items.length + 1}]), []);

	return (
		<>
			Current count: {items.length}
			<ul style={{display: 'flex', gap: '24px'}}>
				{items.map(({id}) => (
					<li key={id}>{id}</li>
				))}
			</ul>
			<button onClick={onHandleClick}>add one</button>
		</>
	);
};

export const PleaseReviewMeRev03 = () => {
	const [items, setItems] = useState([{id: 1}]);
	const buttonRef = useRef<HTMLButtonElement | null>(null);
	const countRef = useRef(items.length);

	useEffect(() => {
		countRef.current = items.length;
	}, [items.length]);

	useEffect(() => {
		let interval: ReturnType<typeof setInterval> | undefined;
		const buttonEl = buttonRef.current;
		const clickHandler = () => {
			if (!interval) {
				interval = setInterval(() => console.log(countRef.current), 1000);
			}
		};
		buttonEl?.addEventListener('click', clickHandler);

		return () => {
			buttonEl?.removeEventListener('click', clickHandler);
			clearInterval(interval);
		};
	}, [buttonRef, countRef]);

	const onHandleClick = useCallback(() => setItems(items => [...items, {id: items.length + 1}]), []);

	return (
		<>
			Current count: {items.length}
			<ul style={{display: 'flex', gap: '24px'}}>
				{items.map(({id}) => (
					<li key={id}>{id}</li>
				))}
			</ul>
			<button ref={buttonRef} onClick={onHandleClick}>
				add one
			</button>
		</>
	);
};
