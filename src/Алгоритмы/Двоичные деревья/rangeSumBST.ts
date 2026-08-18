import {testResults} from '../../utils';
import {Node} from './Node';

function rangeSumBST(root: Node | null, low: number, high: number): number {
	if (!root) {
		return 0;
	}

	if (root.value < low) {
		return rangeSumBST(root.right, low, high);
	}

	if (root.value > high) {
		return rangeSumBST(root.left, low, high);
	}

	return root.value + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
}

//    4
// 2     6
// [3, 5]

// *** Проверка ***********************************************

const samples = [
	{
		test: [new Node(4, new Node(2), new Node(6)), 3, 5],
		expected: 4,
	},
	{
		// prettier-ignore
		test: [new Node(10, 
				new Node(5,  new Node(3), new Node(7) ), 
				new Node(15, null,        new Node(18))
			), 
			7, 15],
		expected: 32,
	},
];

export function rangeSumBSTTest() {
	testResults(rangeSumBST, samples);
	testResults(rangeSumBST_Iterative, samples);
	testResults(rangeSumBST_preOrder, samples);
}

// *** Итеративная реализация (очередь) ***********************
function rangeSumBST_Iterative(root: Node | null, low: number, high: number): number {
	let sum = 0;
	const queue = [root];
	let head = 0;

	while (head < queue.length) {
		const node = queue[head++];

		if (!node) break;

		if (node.value >= low && node.value <= high) {
			sum += node.value;
		}

		if (node.value > low && node.left) {
			queue.push(node.left);
		}
		if (node.value < high && node.right) {
			queue.push(node.right);
		}
	}
	return sum;
}

// *** Вариант preOrder ***********************
// preOrder: root => left => right
function rangeSumBST_preOrder(root: Node | null, low: number, high: number): number {
	let sum = 0;
	function preOrder(root: Node | null) {
		//base-case
		if (root == null) {
			return;
		}

		//Если значение в заданном диапазоне, то добавляем его к сумме
		if (root.value >= low && root.value <= high) {
			sum += root.value;
		}

		//В левое поддерево имеет смысл идти только, когда нижняя
		//граница меньше значения в текущей вершине
		if (low < root.value) {
			preOrder(root.left);
		}

		//В правое поддерево имеет смысл идти только, когда верхняя
		//граница больше значения в текущей вершине
		if (high > root.value) {
			preOrder(root.right);
		}
	}

	preOrder(root);

	return sum;
}

// *** Теория *************************************************
// https://dev.to/faangmaster/summa-eliemientov-binarnogho-dierieva-poiska-v-diapazonie-znachieniie-3cd9

// *** LeetCode ***********************************************
// https://leetcode.com/problems/range-sum-of-bst/
