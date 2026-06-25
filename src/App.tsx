import {RippleButtonsList} from './components';
import {fetchAllTest} from './Асинхронность';
import {canJumpTest, expire, isValidTest, mergeIntervalsTest} from './Задачи';

const App = () => {
	// closure(); // Замыкания
	// expire(); // Задача "expire"
	// fetchAllTest(); // массив url
	// canJumpTest();
	// mergeIntervalsTest();
	isValidTest();

	return (
		<>
			<RippleButtonsList /> {/*  Кнопки с ripple-эффектом */}
		</>
	);
};

export default App;
