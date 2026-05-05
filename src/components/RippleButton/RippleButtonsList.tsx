import RippleButton from './RippleButton';

export const RippleButtonsList = () => {
	const handleClick = () => {
		console.log('Button clicked!');
	};

	return (
		<div style={{padding: '40px', display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
			<RippleButton onClick={handleClick}>Нажми меня</RippleButton>

			<RippleButton onClick={handleClick} rippleColor="rgba(255, 0, 0, 0.4)" style={{background: '#ff4757'}}>
				Красный ripple
			</RippleButton>

			<RippleButton onClick={handleClick} disabled>
				Отключенная
			</RippleButton>

			<RippleButton onClick={handleClick} className="custom-button" rippleColor="rgba(0, 255, 0, 0.3)">
				Зеленый эффект
			</RippleButton>
		</div>
	);
};
