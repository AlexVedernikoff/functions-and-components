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
