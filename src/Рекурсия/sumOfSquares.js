const reduce = (callback, initial, arr) => {
	if (arr.length === 0) {
		return initial;
	}

	const [first, ...rest] = arr;

	return callback(first, reduce(callback, initial, rest));
};

// Менять можно только sumOfSquares
const sumOfSquares = arr => {
	return reduce((first, acc) => Math.pow(first, 2) + acc, 0, arr);
};

export const sumOfSquaresTest = () => {
	const result = sumOfSquares([1, 2, 3]);
	console.log(result); // 14
};
