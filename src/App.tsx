import {ButtonsList} from './React';
import {RippleButtonsList} from './components';
import {findPathTest} from './test';
import {binarySearchRecursiveTest, breadthSearchTest} from './Алгоритмы';
import {fetchAllTest, fetchWithAutoRetryTest} from './Асинхронность';
import {canJumpTest, expire, isValidTest, maxSubArrayTest, mergeIntervalsTest, optionalChainingTest} from './Задачи';
import {array_flat_test} from './Полифилы';
import {flattenArrayTest} from './Рекурсия';
import {depthFirstSearchTest} from './Алгоритмы/Графы';

const App = () => {
	// closure(); // Замыкания
	// expire(); // Задача "expire"
	// fetchAllTest(); // массив url
	// canJumpTest();
	// mergeIntervalsTest();
	// isValidTest();
	// optionalChainingTest();
	// fetchWithAutoRetryTest();
	// findPathTest();
	// binarySearchRecursiveTest();
	// flattenArrayTest();

	// array_flat_test();

	// testT();

	maxSubArrayTest();

	// breadthSearchTest();
	// depthFirstSearchTest();

	// ***

	// ***

	return (
		<>
			{/* <RippleButtonsList />  Кнопки с ripple-эффектом */}
			{/* <ButtonsList />  Задача с кнопками React */}
		</>
	);
};

export default App;
