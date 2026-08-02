const container = document.getElementById('image-container');
const button = document.getElementById('image-loading-button');

container.classList.add('image-container');

button.addEventListener('click', () => {
	// Очищаем контейнер
	container.innerHTML = '';

	// Создаём плейсхолдер (изначально зелёный)
	const placeholder = document.createElement('div');
	placeholder.className = 'placeholder placeholder-green';
	placeholder.textContent = 'Загрузка...';
	container.appendChild(placeholder);

	const img = document.createElement('img');
	img.className = 'hidden';
	container.appendChild(img);

	img.onload = () => {
		// Прячем плейсхолдер, показываем картинку
		placeholder.classList.add('hidden');
		img.classList.remove('hidden');
	};

	img.onerror = () => {
		// Меняем цвет и текст у того же плейсхолдера
		placeholder.className = 'placeholder placeholder-red';
		placeholder.textContent = 'Ошибка загрузки';
		// Картинку можно скрыть или удалить
		img.classList.add('hidden');
	};

	// Запускаем загрузку
	img.src = 'https://i.pinimg.com/736x/33/db/88/33db883d2a4363d43756813405f5f37f.jpg';
});
