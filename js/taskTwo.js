'use strict';
let total = 100;
let ordered = 50;
if (total < ordered) {
	alert('На складе недостаточно товаров!');
} else if (total > ordered) {
	alert('Заказ оформлен, с вами свяжется менеджер');
}
