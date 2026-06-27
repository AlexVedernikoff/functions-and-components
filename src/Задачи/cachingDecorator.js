export function memoize(fn) {
	const cache = new Map();
	return function (...args) {
		const hashKey = JSON.stringify(args);
		if (cache.has(hashKey)) {
			return cache.get(hashKey);
		} else {
			const result = fn.call(this, ...args);
			cache.set(hashKey, result);
			return result;
		}
	};
}
