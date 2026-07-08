import {ButtonsList, Salary} from './React';
import {RippleButtonsList} from './components';
import {binarySearchRecursiveTest, breadthSearchTest} from './Алгоритмы';
import {bestBuyerTest, fetchAllTest, fetchWithAutoRetryTest} from './Асинхронность';
import {canJumpTest, expire, isValidTest, maxSubArrayTest, mergeIntervalsTest, optionalChainingTest} from './Задачи';
import {array_flat_test} from './Полифилы';
import {flattenArrayTest} from './Рекурсия';
import {depthFirstSearchTest, fetchFlightsTest} from './Алгоритмы/Графы';

const App = () => {
	// closure(); // Замыкания
	// expire(); // Задача "expire"
	// fetchAllTest(); // массив url
	// canJumpTest();
	// mergeIntervalsTest();
	// isValidTest();
	// optionalChainingTest();
	// fetchWithAutoRetryTest();
	fetchFlightsTest(); // Поиск пути в ширину между вершинами графа (авиабилеты)
	// binarySearchRecursiveTest(); // Бинарный поиск в отсортированном массиве
	// flattenArrayTest();

	// array_flat_test();

	// testT();
	// test2();

	// bestBuyerTest(); // Асинхронные покупатели

	// maxSubArrayTest();
	// breadthSearchTest();
	// depthFirstSearchTest();

	// ***

	// ***

	return (
		<>
			{/* <RippleButtonsList />  Кнопки с ripple-эффектом */}
			<ButtonsList /> {/*Задача с кнопками React */}
			<Salary />
		</>
	);
};

export default App;
