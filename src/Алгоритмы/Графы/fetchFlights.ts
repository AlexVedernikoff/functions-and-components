import {deepEqual} from '../../Рекурсия';

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

// *** Проверка ***********************************************

const samples = [
	{
		test: ['A', 'N', fetchFlights] as [string, string, Function],
		expected: ['A', 'B', 'N'],
	},
	{
		test: ['A', 'F', fetchFlights] as [string, string, Function],
		expected: ['A', 'D', 'F'],
	},
];

export async function fetchFlightsTest() {
	testAsyncResults(findPath, samples);
}

export const testAsyncResults = async (fn: Function, samples: Array<{test: Array<any>; expected: any}>) => {
	console.log(`Проверяем функцию %c${fn.name}`, 'color: purple');

	const results = await Promise.all(
		samples.map(async ({test, expected}) => {
			let result;
			try {
				// Вызываем асинхронную функцию и ждём результат
				result = await fn(...test);
			} catch (error) {
				// Если функция выбросила ошибку (или промис зареджектился),
				// сохраняем её как результат, чтобы сравнение провалилось
				result = error;
			}

			// Логируем вызов и результат
			console.log(`${fn.name}(`, ...test, `) = `, result);
			console.log('expected = ', expected);

			return {
				args: test,
				expected,
				result,
				passed: deepEqual(result, expected),
			};
		})
	);

	// Выводим таблицу результатов
	console.table(results);

	// Итоговое сообщение
	const allPassed = results.every(({passed}) => passed);
	if (allPassed) {
		console.log(`%cУспешно!\n`, 'color: green');
	} else {
		console.log('%cТест не пройдён ((\n', 'color: tomato');
	}

	// Возвращаем результаты на случай, если нужно их использовать дальше
	return results;
};
