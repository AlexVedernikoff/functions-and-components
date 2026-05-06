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
