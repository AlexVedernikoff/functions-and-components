// *** Метод Array.reduce() ***
// Начальное значение для аккумулятора можно не указывать явно. В таком случае на первой итерации аккумулятор будет равен значению первого элемента в массиве, а обход массива начнётся со второго элемента:
// Теория: https://doka.guide/js/array-reduce/

const sum = (arr: number[]) => arr.reduce((acc, val) => acc + val);
console.log('сумма чисел массива = ', sum([1, 2, 3])); // Ответ: 6

// ************************************************************ //
// Отфильтровать массив, оставив в нём только уникальные элементы
const arr = [1, 4, 5, 'a', 1, 5, 'a', 'a', 2, 4, 5];
const uniqueArr = Array.from(new Set(arr)); // способ 1
const uniqueArrAlt = [...new Set(arr)]; // способ 2

// *** Конвертировать массив из объектов в Map ***

const arr1 = [
	{key: 'name', value: 'bobby hadz'},
	{key: 'country', value: 'Chile'},
];

const map = new Map(arr1.map(obj => [obj.key, obj.value]));
// Теория: https://stackoverflow.com/questions/75290595/convert-array-to-map-typescript
// https://bobbyhadz.com/blog/javascript-convert-array-of-objects-to-map#convert-an-array-of-objects-to-a-map-in-javascript
