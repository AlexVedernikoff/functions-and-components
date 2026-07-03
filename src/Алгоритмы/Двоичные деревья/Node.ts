export class Node {
	public value: number;
	public left: Node | null;
	public right: Node | null;
	constructor(value: number) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}
