'use strict';

let delivery = prompt('В какую страну оформить доставку товара?');
let deliveryCase = delivery.toLowerCase();
const countryChina = 'Китай';
const countryChili = 'Чили';
const countryAustralia = 'Австралия';
const countryIndia = 'Индия';
const countryJamaica = 'Ямайка';

const shippingCostChina = 100;
const shippingCostChili = 250;
const shippingCostAustralia = 170;
const shippingCostIndia = 80;
const shippingCostJamaica = 120;

switch (deliveryCase) {
	case 'китай':
		alert(`Доставка в ${countryChina} будет стоить ${shippingCostChina} кредитов.`);
		break;
	case 'чили':
		alert(`Доставка в ${countryChili} будет стоить ${shippingCostChili} кредитов.`);
		break;
	case 'австралия':
		alert(`Доставка в ${countryAustralia} будет стоить ${shippingCostAustralia} кредитов.`);
		break;
	case 'индия':
		alert(`Доставка в ${countryIndia} будет стоить ${shippingCostIndia} кредитов.`);
		break;
	case 'ямайка':
		alert(`Доставка в ${countryJamaica} будет стоить ${shippingCostJamaica} кредитов.`);
		break;
	default:
		alert('В Вашей стране доставка не доступна');
}
