export {};

// *** Utility types ******************************************

type Partial<T> = {
	[P in keyof T]?: T[P]; // для Required  -?, для Readonly  readonly [P in keyof T]: T[P];
};

type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer P ? P : never;

// *** Задача 1 ***********************************************

/**  Задача TypeScript
Напиши тип PartialExcept, 
который будет принимать тип и делать в нём все поля необязательными, 
кроме тех, что переданы вторым аргументом в дженерик:
*/

type PartialExcept<T, K extends keyof T> = Pick<T, K> & Partial<Omit<T, K>>;

interface Product {
	id: number;
	name: string;
	price: number;
	description: string;
	tags: string[];
	dimensions: {
		width: number;
		height: number;
		depth: number;
	};
}

type PartialProduct = PartialExcept<Product, 'id' | 'name' | 'price'>;

/*
type PartialProduct = {
  id: number
  name: string
  price: number
  description?: string
  tags?: string[]
  dimensions?: {
    width: number
    height: number
    depth: number
  }
}
*/

// ************************************************************
