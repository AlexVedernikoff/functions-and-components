// *** Самый простой вариант. Если последний вызов функции произошёл до истечения таймера, то он будет проигнорирован.
function throttle(callback, delay) {
	let isWaiting = false;
	return function (...args) {
		if (isWaiting) return;

		callback.apply(this, args);
		isWaiting = true;

		setTimeout(() => (isWaiting = false), delay);
	};
}

// *** Продвинутый вариант, с учётом последнего вызова.
function throttleLastCall(callback, delay) {
	let isWaiting = false;
	let savedArgs = null;
	let savedThis = null;

	return function wrapper(...args) {
		if (isWaiting) {
			savedArgs = args;
			savedThis = this;
			return;
		}

		callback.apply(this, args);
		isWaiting = true;

		setTimeout(() => {
			isWaiting = false;
			if (savedArgs) {
				wrapper.apply(savedThis, savedArgs);
				savedArgs = null;
				savedThis = null;
			}
		}, delay);
	};
}

// *** Теория *************************************************
// Елена Литвинова:
// https://www.youtube.com/watch?v=7o5sRSBlKwo
