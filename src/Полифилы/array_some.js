import {testResults} from '../utils';

Array.prototype.mySome = function (cb) {
	for (let i = 0; i < this.length; i++) {
		if (cb(this[i], i, this)) {
			return true;
		}
	}
	return false;
};

// *** Проверка ***********************************************

// [2, 5, 8, 1, 4].some((element) => element > 10); --------> false
// [12, 5, 8, 1, 4].some((element) => element > 10); --------> true

const samples = [
	{
		test: [[2, 5, 8, 1, 4]],
		expected: [2, 5, 8, 1, 4].some(element => element > 10), // false
	},
	{
		test: [[12, 5, 8, 1, 4]],
		expected: [12, 5, 8, 1, 4].some(element => element > 10), // true
	},
];

export function mySomeTest() {
	testResults(arr => arr.mySome(element => element > 10), samples);
}
