import {deepEqual} from '../Рекурсия';

export const testResults = (fn: Function, samples: Array<{test: Array<any>; expected: any}>) => {
	console.log(`Проверяем функцию %c${fn.name}`, 'color: purple');
	const results = samples.map(({test, expected}) => {
		const result = fn(...test);
		console.log(`${fn.name}(`, ...test, `) = `, result);
		console.log('expected = ', expected);
		return {
			args: test,
			expected,
			result,
			passed: deepEqual(result, expected),
		};
	});
	console.table(results);
	results.every(({passed}) => passed)
		? console.log(`%cУспешно!\n`, 'color: green')
		: console.log('%cТест не пройдён ((\n', 'color: tomato');
};
