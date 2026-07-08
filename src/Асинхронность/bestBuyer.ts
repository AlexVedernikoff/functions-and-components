type Buyer = {
	price: number;
	accepts: () => Promise<boolean>;
};

export async function bestBuyer(buyers: Buyer[]) {
	const sortedBuyers = buyers.map((buyer, index) => ({...buyer, index})).sort((A, B) => B.price - A.price);

	const promises = sortedBuyers.map(({accepts}) => accepts());

	const prices = Array.from(new Set(sortedBuyers.map(({price}) => price)));

	const map = new Map<number, {index: number; value: undefined | boolean}>(
		sortedBuyers.map(buyer => [buyer.price, {index: buyer.index, value: undefined}])
	);

	return new Promise(resolve => {
		if (promises.length === 0) resolve(-1); // Handle empty array case

		promises.forEach((promise, index) => {
			promise.then(value => {
				const currentBuyer = sortedBuyers[index];
				const currentAgreement = map.get(currentBuyer.price); // Есть ли уже положительный ответ от какого-нибудь пользователя с ценой price?

				if (!currentAgreement?.value) {
					// Если value === false или undefined, перезаписываем по этой цене согласившегося пользователя.
					map.set(currentBuyer.price, {index: currentBuyer.index, value});
				}

				let allFalse = true;
				for (let i = 0; i < prices.length; i++) {
					const agreement = map.get(prices[i]);

					if (agreement?.value !== false) allFalse = false;
					if (agreement?.value === undefined) break;
					if (agreement?.value) resolve(agreement.index);
				}

				if (allFalse) resolve(-1);
			});
		});
	});
}

const samples = [
	{
		test: [
			[
				{
					price: 10,
					accepts: () => new Promise(resolve => setTimeout(() => resolve(false), 10)),
				},
				{
					price: 1,
					accepts: () => new Promise(resolve => setTimeout(() => resolve(true), 20)),
				},
				{
					price: 5,
					accepts: () => new Promise(resolve => setTimeout(() => resolve(true), 30)),
				},
			],
		],
		expected: 5,
	},
	{
		test: [
			[
				{
					price: 10,
					accepts: () => new Promise(resolve => setTimeout(() => resolve(false), 30)),
				},
				{
					price: 4,
					accepts: () => new Promise(resolve => setTimeout(() => resolve(true), 10)),
				},
				{
					price: 1,
					accepts: () => new Promise(resolve => setTimeout(() => resolve(true), 5)),
				},
			],
		],
		expected: 5,
	},
	{
		test: [
			[
				{
					price: 1,
					accepts: () => new Promise(resolve => setTimeout(() => resolve(false), 30)),
				},
				{
					price: 2,
					accepts: () => new Promise(resolve => setTimeout(() => resolve(false), 20)),
				},
			],
		],
		expected: -1,
	},
	{
		test: [
			[
				{price: 7, accepts: () => new Promise(resolve => setTimeout(() => resolve(false), 200))},
				{price: 9, accepts: () => new Promise(resolve => setTimeout(() => resolve(false), 150))},
				{price: 6, accepts: () => new Promise(resolve => setTimeout(() => resolve(false), 200))},
				{price: 7, accepts: () => new Promise(resolve => setTimeout(() => resolve(false), 100))},
				{price: 3, accepts: () => new Promise(resolve => setTimeout(() => resolve(true), 150))},
				{price: 3, accepts: () => new Promise(resolve => setTimeout(() => resolve(true), 100))},
			],
		],
		expected: -1,
	},
];

export function bestBuyerTest() {
	bestBuyer(samples[1].test[0] as Buyer[]).then(result => console.log('Решение задачи = ', result));
}
