import {testResults} from '../utils';

// *** Полифил Array.reverse() ***

Array.prototype.swap = function (a, b) {
	[this[a], this[b]] = [this[b], this[a]];
};

// это мутирующий метод, поэтому изменяем this!
Array.prototype.myReverse = function () {
	for (let i = 0; i < this.length / 2; i++) {
		this.swap(i, this.length - 1 - i);
	}

	return this;
};

// *** Проверка ***********************************************

const arr = ['a', 'b', 'c', 4, 5, 6, {name: 'Ada'}];

const samples = [
	{
		test: [[...arr]],
		expected: [...arr].reverse(),
	},
];

export function myReverseTest() {
	testResults(arr => arr.myReverse(), samples);
}
