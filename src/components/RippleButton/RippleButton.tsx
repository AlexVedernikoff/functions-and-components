import React, {useState, useRef, MouseEvent} from 'react';
import './RippleButton.css';

// Тип для отдельного ripple-эффекта
interface Ripple {
	id: number;
	x: number;
	y: number;
	size: number;
}

// Тип для пропсов компонента
interface RippleButtonProps {
	children: React.ReactNode;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	className?: string;
	disabled?: boolean;
	rippleColor?: string;
	// Позволяем передавать любые другие атрибуты кнопки (type, style и т.д.)
	[key: string]: any;
}

const RippleButton: React.FC<RippleButtonProps> = ({
	children,
	onClick,
	className = '',
	disabled = false,
	rippleColor = 'rgba(255, 255, 255, 0.7)',
	...props
}) => {
	const [ripples, setRipples] = useState<Ripple[]>([]);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const createRipple = (event: MouseEvent<HTMLButtonElement>): void => {
		if (disabled || !buttonRef.current) return;

		const button = buttonRef.current;
		const rect = button.getBoundingClientRect();

		const size = Math.max(rect.width, rect.height);
		const x = event.clientX - rect.left - size / 2;
		const y = event.clientY - rect.top - size / 2;

		const newRipple: Ripple = {
			id: Date.now(),
			x,
			y,
			size,
		};

		setRipples(prevRipples => [...prevRipples, newRipple]);

		// Удаляем ripple через 600 мс
		setTimeout(() => {
			setRipples(currentRipples => currentRipples.filter(ripple => ripple.id !== newRipple.id));
		}, 600);
	};

	const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
		createRipple(event);
		onClick?.(event);
	};

	return (
		<button
			ref={buttonRef}
			className={`ripple-button ${className} ${disabled ? 'disabled' : ''}`}
			onClick={handleClick}
			disabled={disabled}
			{...props}
		>
			{children}
			<span className="ripple-container">
				{ripples.map(ripple => (
					<span
						key={ripple.id}
						className="ripple"
						style={{
							width: ripple.size + 'px',
							height: ripple.size + 'px',
							left: ripple.x + 'px',
							top: ripple.y + 'px',
							backgroundColor: rippleColor,
						}}
					/>
				))}
			</span>
		</button>
	);
};

export default RippleButton;
