function canJump(nums: number[]): boolean {
	let [maxDistance, ability] = [0, true];

	for (let i = 0; i < nums.length; i++) {
		if (maxDistance < i) {
			ability = false;
			break;
		}
		maxDistance = Math.max(i + nums[i], maxDistance);
	}

	return ability;
}

// *** Проверка ***

const nums = [2, 3, 1, 1, 4];

export function canJumpTest() {
	console.log('canJump() = ', canJump(nums));
}

// https://leetcode.com/problems/jump-game/description/
