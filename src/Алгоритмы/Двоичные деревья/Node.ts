export class Node {
	public value: number;
	public left: Node | null;
	public right: Node | null;
	constructor(value: number, left: Node | null = null, right: Node | null = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}
}

// prettier-ignore
const tree = new Node(5, 
		new Node(3, new Node(2), new Node(4)), 
		new Node(7, new Node(6), new Node(8))
	);

console.log('tree = ', tree);

//              5
//          3        7
//        2   4    6   8
