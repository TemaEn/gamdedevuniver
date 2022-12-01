// проверка на телефон/пк, если телефон, к бади добавляется класс тач, если пк - класс пк.
const isMobile = {
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	any: function () {
		return (
			isMobile.iOS());
	}
};

if (isMobile.any()) {
	document.body.classList.add('_iOS');
};