import {testResults} from '../utils';

function deepCopy<T>(obj: T): T {
	// Если примитив или null – возвращаем как есть
	if (obj === null || typeof obj !== 'object') {
		return obj;
	}

	// Копирование массива
	if (Array.isArray(obj)) {
		return obj.map(item => deepCopy(item)) as unknown as T;
	}

	// Копирование обычного объекта
	const copy = {} as T;
	for (const key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			copy[key as keyof T] = deepCopy(obj[key as keyof T]) as T[keyof T];
		}
	}
	return copy;
}

// *** Проверка ***********************************************

const sourceObject = {prop1: 'value1', prop2: {nestedProp: 'nestedValue'}};

const sourceArray = [1, 'a', [15, 16], {name: 'Ada'}];

const samples = [
	{
		test: [sourceObject],
		expected: {prop1: 'value1', prop2: {nestedProp: 'nestedValue'}},
	},
	{
		test: [sourceArray],
		expected: [1, 'a', [15, 16], {name: 'Ada'}],
	},
];

export function deepCopyTest() {
	testResults(deepCopy, samples);
}

// *** Теория ***
// https://coursme.com/javascript/obekti/lesson/glubokoe_kopirovanie_obyektov
