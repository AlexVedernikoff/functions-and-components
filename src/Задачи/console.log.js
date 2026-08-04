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
