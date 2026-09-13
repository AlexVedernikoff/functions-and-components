import {testResults} from '../utils';

export const EnjoyPro = () => {
	// 1. Что будет в массиве foo?
	// Ответ: [1, 2, 3, 4, 5]
	var foo = [1, 2, 3, 4];
	var bar = foo;
	bar.push(5);

	console.log('*** Задача 1 ***');
	console.log('foo = ', foo, '\n\n');

	// 2. Что будет выведено в консоль?
	// В JavaScript значение undefined равняется только самому себе
	// при использовании оператора строгого (тройного) равенства (===).
	// А также undefined == null возвращает true
	console.log('*** Задача 2 ***');
	console.log('undefined == 0', undefined == 0); // false
	console.log('undefined === 0', undefined === 0); // false
	console.log('undefined >= 0', undefined >= 0); // false
	console.log('null >= 0', null >= 0); // true
	console.log('false == 0', false == 0, '\n\n'); // true

	// 3.
	console.log('*** Задача 3 *** \n\n');
	// ***
	console.log('script start');
	setTimeout(function () {
		console.log('setTimeout');
	}, 0);

	Promise.resolve()
		.then(function () {
			console.log('promise1');
		})
		.then(function () {
			console.log('promise2');
		});
	console.log('script end');
	// ***

	// Синхронный код: 'script start'  'script end'
	// Микрозадачи: 'promise1', 'promise2'
	// Макрозадачи: 'setTimeout'
	// 'script start'
	// 'script end'
	// 'promise1'
	// 'promise2'
	// 'setTimeout'

	// 4.
	function Dog(name) {
		this.name = name;
	}
	// Ошибка: bark надо добавить в prototype!
	// Dog.bark = function () {
	// 	console.log(this.name + ' says woof');
	// };
	Dog.prototype.bark = function () {
		console.log(this.name + ' says woof');
	};
	let fido = new Dog('fido');
	fido.bark();

	// **********************************************************
	// 5. Как сделать глубокую копию объекта?
	// 1). JSON.parse(JSON.stringify(obj)) недостатки: ключи, содержащие функции и равные undefined будут проигнорированы.
	// 2). cloneDeep() из библиотеки lodash
	// 3). нативная функция structuredClone() появилась в 2022 году.
	// 4). написать собственную рекурсивную функцию.

	// js как сделать поверхностную копию объекта?
	// 1. const shallowCopy = { ...original }; использование spread-оператора.
	// 2. const shallowCopy = Object.assign({}, original);
	// 3. цикл for...in

	// 6. Являются ли строки анаграммами?

	const samples = [
		{
			test: [['dog', 'dgo']],
			expected: true,
		},
		{
			test: [['dog', 'dfo']],
			expected: false,
		},
		{
			test: [['doog', 'ddog']],
			expected: false,
		},
	];

	function isAnagram(strings) {
		const cache = str => [...str].sort().join('');
		const sample = cache(strings[0]);
		return strings.slice(1).every(str => cache(str) === sample);
	}

	testResults(isAnagram, samples);

	// 7. Вернуть плоский массив из многомерного
	{
		const samples = [
			{
				test: [[1, [1, 2, [3, 4]], [2, 4]]],
				expected: [1, 1, 2, 3, 4, 2, 4],
			},
		];

		const flattenArray = arr =>
			arr.reduce((flatten, el) => (Array.isArray(el) ? flatten.concat(flattenArray(el)) : flatten.concat(el)), []);

		testResults(flattenArray, samples);
	}

	return null;
};
