import {RippleButtonsList} from './components';
import {findPathTest} from './test';
import {binarySearchRecursiveTest} from './Алгоритмы';
import {fetchAllTest, fetchWithAutoRetryTest} from './Асинхронность';
import {canJumpTest, expire, isValidTest, mergeIntervalsTest, optionalChainingTest} from './Задачи';

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
	binarySearchRecursiveTest();

	// ***
	// ***

	return (
		<>
			<RippleButtonsList /> {/*  Кнопки с ripple-эффектом */}
		</>
	);
};

export default App;
