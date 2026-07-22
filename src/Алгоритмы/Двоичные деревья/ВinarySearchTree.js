class Node {
	constructor(data, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}
}

class BST {
	constructor() {
		this.root = null;
	}

	add(data) {
		const node = new Node(data);

		if (this.root === null) {
			this.root = node;
		} else {
			// @param {Object} current Current node
			const searchNode = function (current) {
				if (data < current.data) {
					if (current.left === null) {
						current.left = node;
						return;
					} else {
						return searchNode(current.left);
					}
				} else if (data > current.data) {
					if (current.right === null) {
						current.right = node;
						return;
					} else {
						return searchNode(current.right);
					}
				} else {
					return null;
				}
			};
			return searchNode(this.root);
		}
	}

	// *** DFS => inOrder ***

	inOrderTraversalCb(callback) {
		this._inOrderCb(this.root, callback);
	}

	_inOrderCb(node, callback) {
		if (node !== null) {
			this._inOrderCb(node.left, callback);
			callback(node.data);
			this._inOrderCb(node.right, callback);
		}
	}

	inOrderTraversalAr() {
		return this._inorderAr(this.root);
	}

	_inorderAr(node) {
		if (!node) return [];
		return [...this._inorderAr(node.left), node.data, ...this._inorderAr(node.right)];
	}

	// *** DFS => preOrder: Root -> Left -> Right (useful for copying tree) ***

	preOrderTraversal(callback) {
		this._preOrder(this.root, callback);
	}

	_preOrder(node, callback) {
		if (node !== null) {
			callback(node.data);
			this._preOrder(node.left, callback);
			this._preOrder(node.right, callback);
		}
	}
}

// *** Проверка ***********************************************

const values = [10, 8, 16, 6, 2, 14];

//        10
//      /    \
//     8      16
//    /     /
//   6     14
// 2
export function BST_Test() {
	const tree = new BST();

	values.forEach(value => tree.add(value));

	const treeNodesList = tree.inOrderTraversalAr();

	console.log('tree: ', tree);
	console.log('*** Обходим дерево в DFS inorder порядке  ***');
	console.log('treeNodesList: ', treeNodesList);
	tree.inOrderTraversalCb(console.log);
	console.log('*** Обходим дерево в DFS preOrder порядке  ***');
	tree.preOrderTraversal(console.log);
}

// *** Теория *************************************************

// Вставка add(data) узла в бинарное дерево рекурсивная:
// https://dev.to/alexandrshy/data-structures-binary-search-tree-in-javascript-3om9
