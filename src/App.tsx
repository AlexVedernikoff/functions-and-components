import {closure} from './Замыкания';
import {RippleButtonsList} from './components';

const App = () => {
	closure(); //Замыкания
	return <RippleButtonsList />; // Кнопки с ripple-эффектом
};

export default App;
