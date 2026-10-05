// *** Задача 1 ***********************************************
var a = {
	firstName: 'Bill',
	lastName: 'Ivanov',
	sayName: function () {
		console.log(this.firstName);
	},
	sayLastName: () => {
		console.log(this.lastName);
	},
};

a.sayName(); // Bill

var b = a.sayName;

b(); // undefined

a.sayName.bind({firstName: 'Boris'})(); // Boris

// bind возвращает новую функцию и не меняет this предыдущей!
a.sayName(); //  Bill
a.sayLastName(); // undefined

// Повторный bind не меняет уже привязанный this!
a.sayName.bind({firstName: 'Boris'}).bind({firstName: 'Tom'})(); // Boris
// this стрелочной функции изменить невозможно!
a.sayLastName.bind({lastName: 'Petrov'})(); // undefined

// Bill
// undefined
// Boris
// Bill
// undefined
// Boris
// undefined

// ************************************************************
// *** Задача 2 ***********************************************

console.log('start'); //
setTimeout(() => console.log('timeout'), 0); //
new Promise((resolve, reject) => {
	console.log('promise constructor'); //
	reject();
})
	.then(() => console.log('promise')) //
	.catch(() => console.log('promise1')) //
	.catch(() => console.log('promise2')) //
	.then(() => console.log('promise3')) //
	.then(() => console.log('promise4')); //
console.log('final'); //

// синхронный код: 'start' 'promise constructor' 'final'
// микрозадачи: 'promise1' 'promise3' 'promise4'
// макрозаачи: 'timeout'

// 'start'
// 'promise constructor'
// 'final'
// 'promise1'
// 'promise3'
// 'promise4'
// 'timeout'

// ************************************************************
// *** Задача 3 ***********************************************
function print() {
	console.log(1);
}

async function foo() {
	// код до первого await выполняется синхронно!
	console.log(2);

	// print внутри await выполняется синхронно!
	await print();

	console.log(3);
}

console.log(4);

foo();

console.log(5);

// 4 2 1 5 3

// ************************************************************
// *** Задача 4 ***********************************************
console.log('start');

// код создания промиса выполняется синхронно!
const promise1 = new Promise((resolve, reject) => {
	console.log(1);
	// resolve(2);
	reject(2); // resolve() и reject() не прерывают выполнение промиса!
	console.log(3);
});

promise1
	.then(res => {
		console.log(res);
	})
	.catch(err => {
		console.log(err);
	});

console.log('end');

// start 1 3 end 2

// *** Задача 5 ***********************************************
{
	console.log('Начало');
	const promise1 = Promise.resolve().then(() => {
		console.log('Промис 1');
		const timer2 = setTimeout(() => {
			console.log('Таймер 2');
		}, 0);
	});
	const timer1 = setTimeout(() => {
		console.log('Таймер 1');
		const promise2 = Promise.resolve().then(() => {
			console.log('Промис 2');
		});
	}, 0);
	console.log('Конец');
}

// 'Начало'
// 'Конец'
// 'Промис 1'
// 'Таймер 1'
// 'Промис 2'
// 'Таймер 2'

// https://thecode.media/event-loop-v-javascript/?ysclid=mtwy9iqa3917167835#id-8
// **********************************************************
