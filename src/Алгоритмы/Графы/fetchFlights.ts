/**
 * Для тестирования можно пользоваться моком функции fetchFlights
 *
 */
const FLIGHTS = {
	A: ['B', 'D'],
	B: ['C', 'N', 'Z'],
	D: ['E', 'F'],
	F: ['S'],
} as Record<string, string[]>;

const fetchFlights = (from: Keys) => Promise.resolve(FLIGHTS[from]);
type Keys = keyof typeof FLIGHTS;
type fetch = typeof fetchFlights;

const reconstructPath = (parent: Map<string, string>, to: string) => {
	const path = [];
	let node = to;
	while (node !== null) {
		path.push(node);
		node = parent.get(node)!;
	}
	return path.reverse();
};

export async function findPath(from: Keys, to: string, fetchFlights: fetch) {
	let head = 0;
	const queue = [from]; // Помещаем стартовую точку в очередь.
	const visited = new Set<string>();
	const parent = new Map(); // stores parent of each node
	parent.set(from, null);

	while (head < queue.length) {
		// Альтернативный вариант:
		// const currentNode = queue.shift() as string; // Достаём вершины всегда из начала очереди shift() !
		const currentNode = queue[head++];
		if (visited.has(currentNode)) continue; // Если эту вершину мы уже посещали, пропускаем итерацию цикла.
		visited.add(currentNode); // Добавляем вершину в посещённые

		const neighbours = (await fetchFlights(currentNode)) || []; // Получаем список соседних узлов

		for (const neighbour of neighbours) {
			if (!visited.has(neighbour)) {
				parent.set(neighbour, currentNode);

				if (neighbour === to) {
					return reconstructPath(parent, to);
				}

				queue.push(neighbour);
			}
		}
	}

	return [];
}

export async function fetchFlightsTest() {
	// const path = await findPath('A', 'N', fetchFlights);
	const path = await findPath('A', 'F', fetchFlights);
	console.log('Путь = ', path);
}
