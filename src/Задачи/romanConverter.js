class RomanNumerals {
	static romans = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
	static arabic = [1000, 500, 100, 50, 10, 5, 1];

	static toRoman(num) {
		let odd = num;
		const {romans, arabic} = this;

		return arabic
			.reduce((acc, el) => {
				const quantity = Math.floor(odd / el);
				odd = odd - el * quantity;
				return acc.concat(quantity);
			}, [])
			.reduce((acc, el, i, arr) => {
				if (el < 4) {
					for (let j = 0; j < el; j++) {
						acc = acc.concat(romans[i]);
					}
				} else if (arr[i - 1]) {
					acc = acc.slice(0, -1).concat(romans[i], romans[i - 2]);
				} else {
					acc = acc.concat(romans[i], romans[i - 1]);
				}
				return acc;
			}, '');
	}

	static fromRoman(str) {
		const {romans, arabic} = this;
		return str.split('').reduce((acc, el, i) => {
			const idx = romans.indexOf(el);
			if (str[i - 1] && str[i - 1] === romans[idx + 2]) {
				return acc + arabic[idx] - 2 * arabic[idx + 2];
			}
			if (str[i - 1] && str[i - 1] === romans[idx + 1]) {
				return acc + arabic[idx] - 2 * arabic[idx + 1];
			}
			return acc + arabic[idx];
		}, 0);
	}
}
