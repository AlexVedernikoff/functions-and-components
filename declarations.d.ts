declare interface Array<T> {
	findUnique(): T[];
	findUniqueVer20(): T[];
	mySort(callback?: any): T[];
	myFlat(depth?: number): T[];
}

declare module '*.module.scss' {
	const classes: {[key: string]: string};
	export default classes;
}
