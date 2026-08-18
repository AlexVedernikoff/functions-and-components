import {ButtonsList, InputMask, NestedList, Salary} from './React';
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
import {PleaseReviewMeRev, PleaseReviewMeRev02, PleaseReviewMeRev03} from './React/PleaseReviewMe';
import {rangeSumBSTTest, treeHeightTest} from './Алгоритмы/Двоичные деревья';

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
	rangeSumBSTTest();

	// sumOfSquaresTest();

	// mySomeTest();

	// parseCSVTest();

	// folderTest();

	// permuteTest();

	// array_flat_test();
	// myReverseTest(); // Полифил на Array.reverse()

	// testT();
	// test2();

	// bestBuyerTest(); // Асинхронные покупатели

	// maxSubArrayTest();
	// breadthSearchTest();
	// depthFirstSearchTest();

	// numIslandsTest();

	// BST_Test(); // Бинарное дерево
	// treeHeightTest();
	// pathFinderTest();

	// ***
	// ***

	return (
		<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
			{/* <PleaseReviewMeOrig /> */}
			<PleaseReviewMeRev03 />
			{/* <PleaseReviewMeRev02 /> */}
			{/* <RippleButtonsList />  Кнопки с ripple-эффектом */}
			<ButtonsList /> {/*Задача с кнопками React */}
			<Salary />
			<NestedList />
			{/* <InputMask mask="Q______Q___" /> */}
		</div>
	);
};

export default App;
