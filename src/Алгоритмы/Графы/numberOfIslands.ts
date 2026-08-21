import {testResults} from '../../utils';

function numIslands(grid: string[][]): number {
	const visited = grid.map((_, __, row) => new Array(row.length).fill(false));

	const getNeighbors = (grid: string[][], [r, c]: [number, number]): [number, number][] => {
		const distances = [
			[-1, 0],
			[0, 1],
			[1, 0],
			[0, -1],
		];
		return distances.reduce((list, [r_dist, c_dist]) => {
			const neighbour = (grid[r + r_dist] || [])[c + c_dist];
			if (neighbour === '1') list.push([r + r_dist, c + c_dist]);
			return list;
		}, [] as [number, number][]);
	};

	function dfs([r, c]: [number, number]) {
		if ((visited[r] || [])[c]) return; // Уже посещена, выходим
		visited[r][c] = true; // Помечаем как посещённую

		//   Рекурсивно посещаем всех непосещённых соседей
		for (const neighbor of getNeighbors(grid, [r, c])) {
			dfs(neighbor);
		}
	}

	let counter = 0;

	for (let r = 0; r < grid.length; r++) {
		for (let c = 0; c < grid[r].length; c++) {
			if (grid[r][c] === '1' && !visited[r][c]) {
				counter++;
				dfs([r, c]);
			}
		}
	}

	return counter;
}

// *** Проверка ***********************************************

const samples = [
	{
		test: [
			[
				// y
				['1', '1', '1', '1', '0'],
				['1', '1', '0', '1', '0'],
				['1', '1', '0', '0', '0'], // x
				['0', '0', '0', '0', '0'],
			],
		],
		expected: 1,
	},
	{
		test: [
			[
				['1', '1', '0', '0', '0'],
				['1', '1', '0', '0', '0'],
				['0', '0', '1', '0', '0'],
				['0', '0', '0', '1', '1'],
			],
		],
		expected: 3,
	},
];

export function numIslandsTest() {
	testResults(numIslands, samples);
}
