// OptionalChaining

import {testResults} from '../utils';

// Напишите функцию, которая принимает первым параметром объект, вторым - массив из цепочки свойств, по которому нужно пройти, чтобы получить значение.
// Если какое-то из свойств не найдено - функция возвращает undefined.

// Пример:

// optionalChaining(obj, ["a", "b", "c", "d"]) // Привет
// optionalChaining(obj, ["a", "b", "c", "d", "e"]) // undefined
// optionalChaining(obj, ["a", "c", "d"]) // undefined
// optionalChaining(obj, ["b", "d", "a"]) // undefined

type Nested = {
	[key: string]: Nested | string;
};

const obj: Nested = {
	a: {
		b: {
			c: {
				d: 'Привет!',
			},
		},
	},
};

const optionalChaining = (obj: Nested, arr: string[]): Nested | string | undefined => {
	const [property, ...shifted] = arr;

	if (!obj[property]) {
		return undefined;
	} else if (!shifted.length) {
		return obj[property];
	} else {
		return optionalChaining(obj[property] as Nested, shifted);
	}
};

const optionalChaining02 = (obj: Nested, arr: string[]) =>
	arr.length
		? arr.reduce(
				(acc: Nested | string | undefined, property) =>
					typeof acc === 'object' && acc !== null ? acc[property] : undefined,
				obj
		  )
		: undefined;

// *** Проверка ***********************************************

const samples = [
	{
		test: [obj, ['a', 'b', 'c', 'd']],
		expected: 'Привет!',
	},
	{
		test: [obj, ['a', 'b', 'c', 'd', 'e']],
		expected: undefined,
	},
	{
		test: [obj, ['a', 'c', 'd']],
		expected: undefined,
	},
	{
		test: [obj, ['b', 'd', 'a']],
		expected: undefined,
	},
];

export function optionalChainingTest() {
	testResults(optionalChaining, samples);
	testResults(optionalChaining02, samples);
}

// https://platform.kata.academy/user/courses/21/1/3/5
