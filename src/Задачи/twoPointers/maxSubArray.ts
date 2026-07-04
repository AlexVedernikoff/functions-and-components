import {testResults} from '../../utils';

// Вернуть максимальную сумму подмассива (алгоритм Кадана)
function maxSubArray(nums: number[]): number {
	let [maxSum, currentSum] = [nums[0], nums[0]];

	for (let i = 1; i < nums.length; i++) {
		currentSum = Math.max(nums[i], currentSum + nums[i]);
		maxSum = Math.max(maxSum, currentSum);
	}

	return maxSum;
}

// Вернуть подмассив, имеющий максимальную сумму
function maxSubArrayA(nums: number[]): number[] {
	let [currentSum, maxSum] = [nums[0], nums[0]];
	let [start, end] = [0, nums.length - 1];

	for (let i = 1; i < nums.length; i++) {
		if (currentSum < 0) {
			currentSum = 0;
			start = i;
		}

		currentSum += nums[i];

		if (currentSum > maxSum) {
			maxSum = currentSum;
			end = i;
		}
	}

	return nums.slice(start, end + 1);
}

// *** Проверка ***********************************************

const samples = [
	{
		test: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]],
		expected: 6,
	},
	{
		test: [[1]],
		expected: 1,
	},
	{
		test: [[5, 4, -1, 7, 8]],
		expected: 23,
	},
	{
		test: [[-2, 1]],
		expected: 1,
	},
];

const samplesA = [
	{
		test: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]],
		expected: [4, -1, 2, 1],
	},
	{
		test: [[1]],
		expected: [1],
	},
	{
		test: [[5, 4, -1, 7, 8]],
		expected: [5, 4, -1, 7, 8],
	},
	{
		test: [[-2, 1]],
		expected: [1],
	},
];

export function maxSubArrayTest() {
	testResults(maxSubArray, samples);
	testResults(maxSubArrayA, samplesA);
}

// https://leetcode.com/problems/maximum-subarray
