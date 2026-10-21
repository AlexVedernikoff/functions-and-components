import {testResults} from '../../utils';

function breadthSearch(graph, start, end) {
	console.log('*** breadthSearch ***');
	const queue = [{node: start, path: [start]}];
	const visited = new Set();

	while (queue.length > 0) {
		console.log('queue = ', {...queue});
		console.log('visited = ', {...visited});
		const {node, path} = queue.shift();

		if (visited[node]) continue; // Если эту вершину мы уже посещали, пропускаем итерацию цикла.
		visited[node] = true; // Добавляем вершину в посещённые.
		if (node === end) return path; // Если вершина равна конечной, то путь найден.

		// console.log('node, path = ', node, ' ', path);
		// console.log('');

		console.log('neighbours = ', graph[node]);

		for (const neighbour of graph[node]) {
			if (!visited[neighbour]) {
				queue.push({node: neighbour, path: [...path, neighbour]});
			}
		}
	}

	return null;
}

const samples = [
	{
		test: [
			{
				A: ['B', 'C'],
				B: ['A', 'D'],
				C: ['A', 'D', 'E'],
				D: ['C', 'E'],
				E: ['F'],
			},
			'A',
			'F',
		],
		expected: ['A', 'C', 'E', 'F'],
	},
];

export function breadthSearchTest() {
	testResults(breadthSearch, samples);
}
