import {deepEqual} from '../Рекурсия';

Array.prototype.myFlat = function (depth = 1) {
	let result = [...this]; // .flat() немутирующий метод, поэтому делаем копию [...this]
	for (let d = 0; d < depth; d++) {
		let multiDimension = false;
		result = result.reduce((acc, current) => {
			if (Array.isArray(current)) multiDimension = true;
			return acc.concat(current);
		}, []);
		if (!multiDimension) break;
	}
	return result;
};

// *** Проверка ***********************************************

const arrTwoLvl = [1, 2, [2], [4, 5], 6, 8, 7];
const arrMulLvl = [1, 2, [2], [4, [5, 6, [[8]]], 7]];

const samples = [
	{
		test: [arrTwoLvl, undefined],
	},
	{
		test: [arrMulLvl, 1],
	},
	{
		test: [arrMulLvl, 2],
	},
	{
		test: [arrMulLvl, Infinity],
	},
	{
		test: [[], Infinity],
	},
];

export function array_flat_test() {
	samples.every(({test}) => {
		const [arr, depth] = test;
		const [myFlatResult, flatResult] = [arr.myFlat(depth), arr.flat(depth)];

		console.log(arr, `.myFlat(`, depth, `) = `, myFlatResult);
		console.log(arr, `.flat(`, depth, `) = `, flatResult);
		console.log(deepEqual(myFlatResult, flatResult));
		console.log('');

		return deepEqual(myFlatResult, flatResult);
	})
		? console.log(`%cУспешно!\n`, 'color: green')
		: console.log('%cТест не пройдён ((\n', 'color: tomato');
}
