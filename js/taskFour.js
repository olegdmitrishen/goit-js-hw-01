'use strict';

const credits = 23580;
let pricePerDroid = 3000;
let amountDroids = prompt('Укажите количество дроидов которое Вы желаете приобрести?');
let message;

if (amountDroids === null) {
	console.log('Отменено пользователем!');
} else if (isNaN(amountDroids)) {
	message = 'Нужно ввести число больше нуля!';
} else if (amountDroids > 0) {
	amountDroids = Number(amountDroids);
	const totalPrice = amountDroids * pricePerDroid;
	const result = credits - totalPrice;
	message = totalPrice <= credits ? `Вы купили ${amountDroids} дроидов, на счету осталось ${result} кредитов.` : 'Недостаточно средств на счету!';
}
console.log(message);
