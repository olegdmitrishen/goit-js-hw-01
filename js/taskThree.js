'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('Введите пароль');

if (message === null) {
	alert('Отменено пользователем!');
} else if (message === ADMIN_PASSWORD) {
	alert('Добро пожаловать!');
} else {
	alert('Доступ запрещён, неверный пароль!');
}

alert(message);
