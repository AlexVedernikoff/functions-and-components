import {testResults} from '../utils';

type MultiDimensionalArray = (number | MultiDimensionalArray)[];

Array.prototype.myFlat = function (depth?: number): MultiDimensionalArray {
	function flat(arr: MultiDimensionalArray, depth: number = 1): MultiDimensionalArray {
		if (depth === 0) return arr;

		const result = [];

		for (let el of arr) {
			Array.isArray(el) ? result.push(...flat(el as MultiDimensionalArray, depth - 1)) : result.push(el);
		}

		return result;
	}
	// .flat() немутирующий метод, поэтому делаем копию [...this]
	return flat([...this], depth);
};

// *** Проверка ***********************************************

const arrTwoLvl = [1, 2, [2], [4, 5], 6, 8, 7];
const arrMulLvl = [1, 2, [2], [4, [5, 6, [[8]]], 7]];

const samples = [
	{
		test: [arrTwoLvl, undefined],
		expected: [...arrTwoLvl].flat(),
	},
	{
		test: [arrMulLvl, 1],
		expected: [...arrMulLvl].flat(1),
	},
	{
		test: [arrMulLvl, 2],
		expected: [...arrMulLvl].flat(2),
	},
	{
		test: [arrMulLvl, Infinity],
		expected: [...arrMulLvl].flat(Infinity),
	},
	{
		test: [[], Infinity],
		expected: [].flat(Infinity),
	},
];

export function myFlatTest() {
	testResults((arr: MultiDimensionalArray, depth: number) => arr.myFlat(depth), samples);
}
