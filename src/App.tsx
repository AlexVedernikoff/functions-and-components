import {ButtonsList, NestedList, Salary, PleaseReviewMeRev, TempButtonsList, SalaryTemp} from './React';
import {RippleButtonsList} from './components';
import {binarySearchRecursiveTest, breadthSearchTest, BST_Test, treeByLevelsTest} from './Алгоритмы';
import {bestBuyerTest, fetchAllTest, fetchWithAutoRetryTest} from './Асинхронность';
import {
	canJumpTest,
	expire,
	folderTest,
	isValidTest,
	maxSubArrayTest,
	mergeIntervalsTest,
	optionalChainingTest,
	parseCSVTest,
} from './Задачи';
import {array_flat_test, myReverseTest, mySomeTest} from './Полифилы';
import {deepCopyTest, flattenArrayTest, permuteTest, sumOfSquaresTest} from './Рекурсия';
import {depthFirstSearchTest, fetchFlightsTest, numIslandsTest, pathFinderTest} from './Алгоритмы/Графы';
import {rangeSumBSTTest, treeHeightTest} from './Алгоритмы/Двоичные деревья';
import {EnjoyPro} from './Собеседования';
import {myFlatTest} from './Полифилы/array_flat()_recursive';

const App = () => {
	// closure(); // Замыкания
	// expire(); // Задача "expire"
	// fetchAllTest(); // массив url
	// canJumpTest();
	// mergeIntervalsTest();
	// isValidTest();
	// optionalChainingTest();
	// fetchWithAutoRetryTest();
	// fetchFlightsTest(); // Поиск пути в ширину между вершинами графа (авиабилеты)
	// binarySearchRecursiveTest(); // Бинарный поиск в отсортированном массиве

	// *** Рекурсия ***
	// deepCopyTest();
	// flattenArrayTest();

	// *** Бинарные деревья ***
	// treeByLevelsTest();
	// rangeSumBSTTest();
	// treeHeightTest();

	// *** Обход графа ***
	// numIslandsTest();

	// sumOfSquaresTest();

	// mySomeTest();

	// parseCSVTest();

	// folderTest();

	// permuteTest();

	// array_flat_test();
	// myReverseTest(); // Полифил на Array.reverse()
	myFlatTest();

	// testT();
	// test2();

	// bestBuyerTest(); // Асинхронные покупатели

	// maxSubArrayTest();
	// breadthSearchTest();
	// depthFirstSearchTest();

	// BST_Test(); // Бинарное дерево

	// pathFinderTest();

	// ***

	// ***

	// array_flat_test_123();

	return (
		<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
			{/* *** Собеседования ***  */}
			{/* <EnjoyPro /> */}
			<SalaryTemp />
			{/* <TempButtonsList /> */}
			<PleaseReviewMeRev />
			{/* <RippleButtonsList />  Кнопки с ripple-эффектом */}
			<ButtonsList /> {/*Задача с кнопками React */}
			<Salary />
			<NestedList />
		</div>
	);
};

export default App;
