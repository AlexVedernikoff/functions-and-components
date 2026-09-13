import {testResults} from '../utils';

// *** Функция, которая возвращает плоский массив из многомерного ***

function flattenArray(arr) {
	return arr.reduce((acc, el) => {
		if (!Array.isArray(el)) {
			return acc.concat(el);
		} else {
			return acc.concat(flattenArray(el));
		}
	}, []);
}

/*************************************************************/

const samples = [
	{
		test: [[[1], [[2, [3, ['a', ['b'], 'c']]]], [[[4]]], 5]],
		expected: [1, 2, 3, 'a', 'b', 'c', 4, 5],
	},
	{
		test: [[[[[1], [[2, [3, {name: 'Ada'}, ['a', ['b'], 'c']]]], [[[4]]], 5]]]],
		expected: [1, 2, 3, {name: 'Ada'}, 'a', 'b', 'c', 4, 5],
	},
	{
		test: [[]],
		expected: [],
	},
];

export const flattenArrayTest = () => {
	testResults(flattenArray, samples);
};

// *** Задача на Replit: ***
// https://replit.com/@ChernayaLuna/flatten-Array#index.js
