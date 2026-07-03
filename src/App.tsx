import {ButtonsList} from './React';
import {RippleButtonsList} from './components';
import {findPathTest} from './test';
import {binarySearchRecursiveTest, breadthSearchTest} from './Алгоритмы';
import {fetchAllTest, fetchWithAutoRetryTest} from './Асинхронность';
import {canJumpTest, expire, isValidTest, mergeIntervalsTest, optionalChainingTest} from './Задачи';
import {array_flat_test} from './Полифилы';
import {flattenArrayTest} from './Рекурсия';

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
	// breadthSearchTest();
	// array_flat_test();

	// ***
	// ***

	return (
		<>
			<RippleButtonsList /> {/*  Кнопки с ripple-эффектом */}
			<ButtonsList /> {/*  Задача с кнопками React */}
		</>
	);
};

export default App;
