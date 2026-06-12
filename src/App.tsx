import {RippleButtonsList} from './components';
import {fetchAllTest} from './Асинхронность';
import {canJumpTest, expire, mergeIntervalsTest} from './Задачи';

const App = () => {
	// closure(); // Замыкания
	// expire(); // Задача "expire"
	fetchAllTest(); // массив url
	// canJumpTest();
	// mergeIntervalsTest();
	// ***
	// ***
	return (
		<>
			<RippleButtonsList /> {/*  Кнопки с ripple-эффектом */}
		</>
	);
};

export default App;
