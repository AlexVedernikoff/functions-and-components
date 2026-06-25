import {testResults} from '../utils';

function isValid(str: string) {
	const stack: string[] = [];

	const map = new Map([
		['(', ')'],
		['[', ']'],
		['{', '}'],
	]);

	for (let bracket of str) {
		if (map.has(bracket)) {
			stack.push(bracket);
		} else if (map.get(stack.at(-1) as string) === bracket) {
			stack.pop();
		} else {
			return false;
		}
	}

	return !stack.length;
}

const samples = [
	{
		test: ['()[]{}'],
		expected: true,
	},
	{
		test: ['()[{}]'],
		expected: true,
	},
	{
		test: [')([}{]'],
		expected: false,
	},
	{
		test: ['[](}('],
		expected: false,
	},
];

export function isValidTest() {
	testResults(isValid, samples);
}
