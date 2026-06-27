import {testResults} from '../utils';

function merge(intervals: number[][]): number[][] {
	function isOverlap(basic: number[], compared: number[]) {
		return compared[0] >= basic[0] && compared[0] <= basic[1];
	}

	function mergeIntervals(basic: number[], compared: number[]) {
		return [basic[0], Math.max(basic[1], compared[1])];
	}

	const sorted = intervals.sort(([a], [b]) => a - b);

	return sorted.reduce((acc, current) => {
		const previous = acc.at(-1);
		if (previous && isOverlap(previous, current)) {
			acc.pop();
			acc.push(mergeIntervals(previous, current));
		} else {
			acc.push(current);
		}
		return acc;
	}, [] as number[][]);
}

// *** Проверка ***********************************************

// prettier-ignore
const samples = [
	{
		test: [
			[[1, 3], [2, 6], [8, 10], [15, 18]],
		],
		expected: [[1, 6], [8, 10], [15, 18]]  
	},
	{
		test: [
			[[1,4],[4,5]]
		],
		expected: [[1,5]] 
	},
	{
		test: [
			[[4,7],[1,4]]
		],
		expected: [[1,7]]
	},
	{
		test: [
			[[1,4],[2,3]]
		],
		expected: [[1,4]]
	},
	{
		test: [
			[[1,4],[0,2],[3,5]]
		],
		expected: [[0,5]]
	},
	
];

export function mergeIntervalsTest() {
	testResults(merge, samples);
}

// Решение с предварительной сортировкой.
// Чтобы избежать двойного перебора и сложности 0(n^2), предварительно сортируем массив по возрастанию нижних границ интервалов, затем сравниваем соседние интервалы и сливаем их при необходимости.

// A pre-sorted solution.
// To avoid double-iteration and complexity of 0(n^2), we first sort the array in ascending order of the lower bounds of the intervals, then compare neighboring intervals and merge them if necessary.
