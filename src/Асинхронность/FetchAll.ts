// *** fetchAll ***
// Напишите асинхронную функцию fetchAll, которая принимает в себя массив urls
// Для каждого url из этого массива должен выполняться GET запрос с помощью fetch API
// Функция должна вернуть массив ответов на эти запросы в том же порядке, в котором были заданы urls

const links = [
	'https://jsonplaceholder.typicode.com/posts/1',
	'https://jsonplaceholder.typicode.com/posts/2',
	// 'https://jERRORsonplaceholder.typicode.com/posts/2',
	'https://jsonplaceholder.typicode.com/posts/3',
];

async function fetchAll<T>(urls: string[]): Promise<T[]> {
	const responses = await Promise.all(urls.map(url => fetch(url)));
	return Promise.all(responses.map(res => res.json() as Promise<T>));
}

// *** Проверка ***
export const fetchAllTest = () => {
	console.log('*** fetchAll ***');

	fetchAll(links)
		.then(results => console.log('results = ', results))
		.catch(error => console.log('Во время выполнения запроса произошла ошибка: ', error));
};
