import {testResults} from '../utils';

function binarySearchRecursive<T>(arr: Array<T>, target: T, start = 0, end = arr.length - 1): number {
	if (start > end) return -1;

	const mid = Math.floor((start + end) / 2);

	if (arr[mid] === target) return mid;

	return arr[mid] < target
		? binarySearchRecursive(arr, target, mid + 1, end)
		: binarySearchRecursive(arr, target, start, mid - 1);
}

function binarySearchIterative<T>(arr: Array<T>, target: T) {
	let start = 0;
	let end = arr.length - 1;

	while (start <= end) {
		const mid = Math.floor((start + end) / 2);

		if (arr[mid] === target) {
			return mid; // Return the index
		} else if (arr[mid] < target) {
			start = mid + 1; // Search right half
		} else {
			end = mid - 1; // Search left half
		}
	}

	return -1; // Target not found
}

const samples = [
	{
		test: [[1, 5, 14, 18, 22, 25, 40, 41], 22],
		expected: 4,
	},
	{
		test: [[], 16],
		expected: -1,
	},
	{
		test: [[1, 5, 14, 18, 22, 25, 40, 41], 0],
		expected: -1,
	},
	{
		test: [[1, 5, 14, 18, 22, 25, 40, 41], 44],
		expected: -1,
	},
	{
		test: [[1, 5, 14, 18, 22, 25, 40, 41], 41],
		expected: 7,
	},
];

export function binarySearchRecursiveTest() {
	testResults(binarySearchRecursive, samples);
	testResults(binarySearchIterative, samples);
}
