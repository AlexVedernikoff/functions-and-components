import {RippleButtonsList} from './components';
import {fetchAllTest} from './Асинхронность';
import {canJumpTest, expire} from './Задачи';

const App = () => {
	// closure(); // Замыкания
	// expire(); // Задача "expire"
	// fetchAllTest(); // массив url
	canJumpTest();
	// ***
	// ***
	return (
		<>
			<RippleButtonsList /> {/*  Кнопки с ripple-эффектом */}
		</>
	);
};

export default App;
