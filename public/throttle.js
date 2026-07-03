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

// **************************************************************
// *** Проверка 1 ***********************************************
const f = throttleLastCall(console.log, 1000);

// f(1);
// f(2);
// setTimeout(() => f(3), 100);
// setTimeout(() => f(4), 500);
// setTimeout(() => f(5), 900);

// *** Проверка 2 ***********************************************

function throttleYandex(callback, delay, ctx) {
	let isWaiting = false;
	let savedArgs = null;
	// let savedThis = null;

	return function wrapper(...args) {
		if (isWaiting) {
			savedArgs = args;
			// savedThis = this;
			return;
		}

		callback.apply(ctx, args);
		isWaiting = true;

		setTimeout(() => {
			isWaiting = false;
			if (savedArgs) {
				wrapper.apply(ctx, savedArgs);
				savedArgs = null;
				// savedThis = null;
			}
		}, delay);
	};
}

function test() {
	const start = Date.now();

	function log(text) {
		const msPassed = Date.now() - start;
		console.log(`${msPassed}: ${this.name} logged ${text}`);
	}

	const throttled = throttleYandex(log, 100, {name: 'me'});

	setTimeout(() => throttled('m'), 0);
	setTimeout(() => throttled('mo'), 22);
	setTimeout(() => throttled('mos'), 33);
	setTimeout(() => throttled('mosc'), 150);
	setTimeout(() => throttled('moscow'), 400);
	// 0ms: me logged m
	// 100ms: me logged mos
	// 200ms: me logged mosc
	// 400ms: me logged moscow
}

test();
