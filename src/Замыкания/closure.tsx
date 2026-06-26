export const closure = () => {
	var value = 2;

	// функция showValue() запоминает значение var value = 2 в том лексическом окружении, в котором она была создана.
	function showValue() {
		console.log(`showValue ${value}`);
	}

	function wrapper() {
		var value = 3;
		console.log(`wrapper ${value}`);
		showValue(); // Поэтому при вызове она будет использовать var value = 2.
	}

	wrapper();
};

// ************************************************************
// *** Замыкание самый простой пример *************************

function counter() {
	let i = 0;
	return function () {
		return i++;
	};
}

const count1 = counter();
const count2 = counter();

console.log('Счётчик 1');
for (let i = 0; i < 4; i++) {
	console.log(count1());
}
console.log('\nСчётчик 2');
for (let i = 0; i < 4; i++) {
	console.log(count2());
}

// Альтернативный вариант
// function counter() {
//   let count = 0;
//   return (() => count++)
// }

// https://replit.com/@ChernayaLuna/Zamykaniie-samyi-prostoi-primier
