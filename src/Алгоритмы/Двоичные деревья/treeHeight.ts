import {testResults} from '../../utils';
import {BST, Node, addValues} from './BinarySearchTree';

const treeHeight = (tree: Node | null): number => {
	if (!tree) return 0;
	const left = treeHeight(tree.left);
	const right = treeHeight(tree.right);
	return Math.max(left, right) + 1;
};

// *** Проверка ***********************************************

const tree = new BST();

//              5
//          3        7
//        2   4    6   8

const values = [5, 3, 4, 2, 7, 6, 8];

console.log('tree = ', tree);
addValues(tree, values);

const samples = [
	{
		test: [tree.root],
		expected: 3,
	},
];

export const treeHeightTest = () => {
	testResults(treeHeight, samples);
};

// *** Вариант 2 ***********************************************

function maxDepth(root: Node | null): number {
	if (!root) return 0;
	let currentMax = 0;
	const traverse = (root: Node, depth: number = 1) => {
		root.left && traverse(root.left, depth + 1);
		root.right && traverse(root.right, depth + 1);

		currentMax = Math.max(depth, currentMax);
	};
	traverse(root);

	return currentMax;
}

// *** Вариант 3 ***********************************************

{
	function maxDepth(root: Node | null): number {
		if (!root) return 0;

		let depth = 0;
		const queue = [root];
		let head = 0;

		while (head < queue.length) {
			depth++;
			const levelSize = queue.length - head;

			for (let i = 0; i < levelSize; i++) {
				const node = queue[head++];
				if (node.left) queue.push(node.left);
				if (node.right) queue.push(node.right);
			}
		}
		return depth;
	}
}

// *** Теория *************************************************
// https://youtu.be/7fZvpcdA-tA

// Задача на leetcode:
// https://leetcode.com/problems/maximum-depth-of-binary-tree/
