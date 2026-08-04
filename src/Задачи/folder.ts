function folder(list: string[]): void {
	const log = (el: string, elIndex: number) => {
		const prefix = !elIndex ? '-' : '';
		console.log(`${prefix}${'--'.repeat(elIndex)}${el}`);
	};

	list
		.sort((a, b) => a.localeCompare(b))
		.map(path => path.split('/'))
		.map((paths, pathIndex, pathsList) =>
			paths.map((el, elIndex) => {
				if (!pathsList[pathIndex - 1] || pathsList[pathIndex - 1][elIndex] !== el) {
					log(el, elIndex);
				}
			})
		);
}

// Работает за O(n·m) времени и O(n·m) памяти (n – число путей, m – средняя длина).

const list = [
	'tmp/error.log',
	'root/html/css/style.css',
	'root/html/file/a.html',
	'root/html/file/b.html',
	'root/html/image/logo.ipg',
	'root/html/script/bundle.js',
];

export const folderTest = () => {
	folder(list);
};

/** Задание: вывести в консоль список файловых путей в формате:  */
// -root
// --html
// ----css
// ------style.css
// ----file
// ------a.html
// ------b.html
// ----image
// ------logo.ipg
// ----script
// ------bundle.js
// -tmp
// --error.log

/** Суть решения:
 * получаем отсортированный массив путей.
 * И выводим файл в консоль только, если в предыдущем пути
 * pathsList[pathIndex - 1][elIndex] !== el
 * элемент не равен текущему.
 */
// [
// 	['root', 'html', 'css', 'style.css'],
// 	['root', 'html', 'file', 'a.html'],
// 	['root', 'html', 'file', 'b.html'],
// 	['root', 'html', 'image', 'logo.ipg'],
// 	['root', 'html', 'script', 'bundle.js'],
// 	['tmp', 'error.log'],
// ];

function folderOld(list: string[]): void {
	const modified = list
		.sort((a, b) => a.localeCompare(b))
		.map(path => path.split('/'))
		.map((paths, pathIndex, pathsList) =>
			paths.map((el, elIndex) =>
				pathsList[pathIndex - 1] && pathsList[pathIndex - 1][elIndex] === el ? '--' : elIndex ? el : `-${el}`
			)
		);

	console.log('modified = ', modified);
	console.log('');

	const printResult = (path: string[]) =>
		path.forEach((el, index) => {
			if (el !== '--') console.log(`${'--'.repeat(index)}${el}`);
		});

	modified.forEach(list => printResult(list));
}
