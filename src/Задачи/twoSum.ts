function twoSum(nums: number[], target: number): number[] {
	const map = new Map();
	for (let i = 0; i < nums.length; i++) {
		// ключ key равен элементу, который в сумме с nums[i] даст target
		// i = 0; nums[0] = 2; map[2] = undefined; key = 9 - 2 = 7; записываем по ключу 7 значение 0 (индекс текущего элемента "2")
		// i = 1; nums[1] = 7; map[7] = 0; возвращаем 0 и 1 (индекс текущего элемента "7")
		if (map.has(nums[i])) {
			return [map.get(nums[i]), i];
		} else {
			const key = target - nums[i];
			map.set(key, i);
		}
	}
	return [];
}

// Пример:
// Input: (nums = [2, 7, 11, 15]), (target = 9);
// Output: [0, 1];

// Задача на leetcode:
// https://leetcode.com/problems/two-sum/description/
// Статья с пояснением:
// https://sergushenkov.github.io/hash-table-pattern/
