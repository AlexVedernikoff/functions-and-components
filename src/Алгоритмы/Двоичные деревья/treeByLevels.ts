import {testResults} from '../../utils';
import {BST, Node, addValues} from './BinarySearchTree';

const tree = new BST();

//              5
//          3        7
//        2   4    6   8

// console.log('tree = ', tree);
const values = [5, 3, 4, 2, 7, 6, 8];
addValues(tree, values);

const treeByLevels = (root: Node) => {
	console.log('*** treeByLevels ***');
	if (!root) return [];

	const result: number[][] = [];
	const queue = [root];
	let head = 0;

	// while (queue.length > 0) {
	while (head < queue.length) {
		console.log('*** while ***');
		// const levelSize = queue.length;
		const levelSize = queue.length - head;
		console.log('  levelSize = ', levelSize);
		const level: number[] = [];

		for (let i = 0; i < levelSize; i++) {
			const node = queue[head++];
			// const node = queue.shift()!;
			console.log('  node = ', node);
			level.push(node.data);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
			console.log('');
		}

		result.push(level);

		console.log('');
	}

	return result;
};

// *** Проверка ***********************************************

const samples = [
	{
		test: [tree.root],
		expected: [[5], [3, 7], [2, 4, 6, 8]],
	},
];

export const treeByLevelsTest = () => {
	testResults(treeByLevels, samples);
};

// *** Алгоритм ***********************************************

// 1. const queue = [root]; Добавляем в очередь корневую вершину
// *** while ***
// levelSize =  1 (В очереди одна корневая вершина Node(5))
// node =  Node {data: 5, left: Node (3), right: Node (7)}
// Пушим в очередь две вершины Node (3) и Node (7)
//
// *** while ***
// levelSize = 2; (В очереди две вершины Node (3) и Node (7))
// Пушим в очередь две дочерние вершины Node (3) и две дочерние вершины Node (7)
//
// *** while ***
// levelSize = 4; (Теперь в очереди 4 вершины)
// и так далее...

// ************************************************************
// 1. Рекурсивная реализация
// Решение: Pre-order traversal Root => Left => Right

// function levelOrder(root: TreeNode | null, i = 0, list: Array<Array<number>> = []) {
//   if (!root) return [];

//   const {val, left, right} = root || {};
//   list[i] ? list[i].push(val) : (list[i] = [val]);

//   left && levelOrder(left, i + 1, list);
//   right && levelOrder(right, i + 1, list);

//   if (i === 0) return list;
// }

// 2. Итеративная реализация

// function levelOrder(root: TreeNode | null): number[][] {
//   if (!root) return [];

//   const list: number[][] = [];
//   const queue = [root];
//   let head = 0;

//   while (head < queue.length) {
//     const levelSize = queue.length - head;
//     const level: number[] = [];

//     for (let i = 0; i < levelSize; i++) {
//       const node = queue[head++];
//       level.push(node.val);
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }

//     list.push(level);
//   }
//   return list;
// };
