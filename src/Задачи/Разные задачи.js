/**
 * Необходимо написать функцию, которая разделит каждую строку
 * в массиве `words` по строке `separator`.
 * Необходимо вернуть массив получившихся после разделения строк,
 * исключая пустые строки
 */
export const splitWordsBySeparator = (words, separator) =>
	words
		.map(list => list.split(separator))
		.flat()
		.filter(Boolean);

// https://coderun.yandex.ru/selections/frontend-interview-2026/problems/split-words-by-separator/analyses/7803

/**
 * Реализуйте функцию, которая принимает на вход два объекта Promise
 * с типом `number` и возвращает Promise с их суммой
 */
export const addTwoPromises = async function (promise1, promise2) {
	const list = await Promise.allSettled([...arguments]);
	return list.reduce((acc, {value, reason}) => acc + (value ?? reason), 0);
};
// https://coderun.yandex.ru/selections/frontend-interview-2026/problems/promise-sum/analyses/7811
