/**
 * Функция, которая запрашивает данные с помощью fetcher
 * и повторяет запрос в случае ошибки. Запросы повторяются
 * до тех пор, пока не будет получен успешный ответ
 * или пока не будут исчерпаны все попытки.
 *
 * @param {function} fetcher - функция, которая возвращает Promise
 * @param {number} count - максимальное количество попыток
 */
export async function fetchWithAutoRetry(fetcher, count) {
	try {
		return await fetcher();
	} catch (err) {
		if (count) return fetchWithAutoRetry(fetcher, count - 1);
		else throw err;
	}
}

/**
 * Создаёт мок функции fetcher,
 * который по порядку возвращает
 * ответы из массива responses
 */
const createFetcherMock = responses => {
	let counter = 0;
	let isLoading = false;

	return async () => {
		if (isLoading) {
			throw new Error('429 Too Many Requests');
		}

		const response = responses[counter % responses.length];
		isLoading = true;

		await new Promise(resolve => setTimeout(resolve, 10 * Math.random()));

		isLoading = false;
		counter++;

		return response.error ? Promise.reject(response.error) : Promise.resolve(response.data);
	};
};

const fetcher = () =>
	createFetcherMock([
		{error: '504 Gateway Timeout'},
		{error: '503 Service Unavailable'},
		{error: '502 Bad Gateway'},
		{error: '500 Internal Server Error'},
		{data: 'Hello, world!'},
		{data: 'Yandex'},
	]);

export const fetchWithAutoRetryTest = () => {
	fetchWithAutoRetry(fetcher(), 5)
		.then(data => console.log('Success:', data))
		.catch(error => console.error('Error:', error));
	fetchWithAutoRetry(fetcher(), 3)
		.then(data => console.log('Success:', data))
		.catch(error => console.error('Error:', error));
};

// https://coderun.yandex.ru/selections/frontend-interview-2026/problems/fetch-with-retry/analyses/7790
