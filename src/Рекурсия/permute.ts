function permute(nums: number[]): number[][] {
	const result: number[][] = [];
	const n = nums.length;

	const backtrack = (start: number): void => {
		if (start === n) {
			// Сохраняем копию текущего состояния
			result.push([...nums]);
			return;
		}
		for (let i = start; i < n; i++) {
			// Меняем местами элементы на позициях start и i
			[nums[start], nums[i]] = [nums[i], nums[start]];
			// Рекурсивно генерируем перестановки для следующей позиции
			backtrack(start + 1);
			// Возвращаем обмен обратно (откатываем)
			[nums[start], nums[i]] = [nums[i], nums[start]];
		}
	};

	backtrack(0);
	return result;
}

// Альтернативный вариант (неоптимальный по памяти)
function permuteSet(nums: number[]): number[][] {
	const initialSet = new Set(nums);
	const result: number[][] = [];

	const create = (set: Set<number>, acc: number[] = []) => {
		if (set.size === 1) {
			acc.push(...set);
			result.push(acc);
			return;
		}
		for (let item of set) {
			const newAcc = [...acc, item];
			const newSet = new Set(set);
			newSet.delete(item);
			create(newSet, newAcc);
		}
	};

	create(initialSet);
	return result;
}

// Задача LeetCode
