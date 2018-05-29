let captions = document.getElementsByClassName("caption");
let logos = document.getElementsByClassName("resLogo");
let descriptions = document.getElementsByClassName("description");

document.getElementById('getData').onclick = function (e) {
	var elements = document.forms[0];

	let obj = {
		building: elements.building.value,
		operation: elements.operation.value,
		area: elements.area.value,
		city: elements.city.value,
		floor1: elements.floor1.value,
		floor2: elements.floor2.value,
		floor3: elements.floor3.value,
		floor4: elements.floor4.value,
		areaSize1: elements['area-size1'].value,
		areaSize2: elements['area-size2'].value,
		numberOfRoom1: elements['numberOfRoom1'].value,
		numberOfRoom2: elements['numberOfRoom2'].value
	}

	var xhr = (window.XMLHttpRequest)? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
		   alert("OK");
		}
	};

	xhr.open("POST", 'путь к php файлу', true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	xhr.send(JSON.parse(obj));

	e.preventDefault();
}

/*let elements = JSON.stringify([
	{
		"URL": "https://www.olx.ua/obyavlenie/srochno-sobstvennik-sdan-1-k-kv-ul-perspektivnaya-11-m-n-sadovyy-IDl9aQe.html#65b8e63905;promoted",
		"headline": "СРОЧНО! СОБСТВЕННИК! СДАН!1 к.кв ул Перспективная, 11 м-н Садовый ",
		"typeSell": "Бизнес ",
		"price": "453 026 грн.",
		"lessPrice": "Без комиссии ",
		"buildingType": "Квартира ",
		"houseType": "На этапе строительства ",
		"floorNumber": "3 ",
		"floorCount": "9 ",
		"commonSquare": "43 м² ",
		"kitchenSquare": "9 м² ",
		"wallType": "Монолитный ",
		"roomCount": "1 ",
		"layout": "-",
		"tuilet": "Смежный ",
		"heating": "Индивидуальное газовое ",
		"repear": "Под чистовую отделку ",
		"furniture": "Нет ",
		"devices": "Без бытовой техники ",
		"multimedia": "Без мультимедиа ",
		"comfort": "Видеонаблюдение Балкон лоджия Лифт Гостевой паркинг Парковочное место Хоз. помещение ",
		"communication": "Асфальтированная дорога Центральная канализация Электричество Вывоз отходов Газ Центральный водопровод ",
		"infrastructure": "Отделение банка банкомат Аптека Детский сад Рынок Парк зелёная зона Детская площадка Отделение почты Ресторан кафе ",
		"landshaft": "Парк ",
		"notation": "-",
		"lengthsToCity": "-",
		"landSquare": "-",
		"cadastralNumber": "-",
		"outHeatingWall": "-",
		"roofType": "-",
		"builtYear": "-",
		"description": " Собственник! Срочно! Кроме стоимости квартиры больше никаких расходов! Микрорайон Садовый ул.Перспективная д. 11, 1 подьезд 39 этажного дома 42,57 м2. высота потолка 2,8м. В этой квартире большой балкон через кухню и комнату - 7кв.м. балкон и окна выходят во двор! Шикарная видовая квартира! В стоимость квартиры входит индивидуальное отопление, с двухконтурным итальянским настенным котлом-колонкой батареи биметалл в каждой комнате чистовая бетонная стяжка подготовленная под линолеум, ковролин или ламинат отшпаклеванные стартовой гипсовой смесью стены под маяк полностью укомплектованная система электроснабжения, с готовыми выводами под розетки и выключатели установленные счетчики воды, газа и электроэнергии установленные металлопластиковые окна WDS с 2-х камерным стеклопакетом и 5-ти камерным профилем установленные качественные входные противопожарные металлические двери с декоративным дизайном. Срочно. Показ квартиры в любой день. Переуступка. ",
		"photo": "https://img01-olxua.akamaized.net/img-olxua/341310584_1_644x461_srochno-sobstvennik-sdan1-kkv-ul-perspektivnaya-11-m-n-sadovyy-poltava_rev003.jpg",
		"rating": "19732"
	},
	{
		"URL": "https://www.olx.ua/obyavlenie/srochno-sobstvennik-prodam-1-komn-kv-3-etazh-v-tsentre-ul-pushkina-141-IDztqB8.html#65b8e63905;promoted",
		"headline": "СРОЧНО! СОБСТВЕННИК! Продам 1 комн. кв 3 этаж в Центре ул. Пушкина 141 ",
		"typeSell": "Бизнес ",
		"price": "14 000 грн.",
		"lessPrice": "Без комиссии ",
		"buildingType": "Квартира ",
		"houseType": "На этапе строительства ",
		"floorNumber": "3 ",
		"floorCount": "10 ",
		"commonSquare": "47 м² ",
		"kitchenSquare": "15 м² ",
		"wallType": "Газоблок ",
		"roomCount": "1 ",
		"layout": "Раздельная ",
		"tuilet": "Смежный ",
		"heating": "Индивидуальное газовое ",
		"repear": "Под чистовую отделку ",
		"furniture": "Нет ",
		"devices": "Без бытовой техники ",
		"multimedia": "Кабельное цифровое ТВ ",
		"comfort": "Балкон лоджия Лифт Гостевой паркинг Парковочное место ",
		"communication": "Асфальтированная дорога Центральная канализация Электричество Вывоз отходов Газ Центральный водопровод ",
		"infrastructure": "Центр города Аптека Детский сад Рынок Парк зелёная зона Ресторан кафе Школа ",
		"landshaft": "Парк ",
		"notation": "-",
		"lengthsToCity": "-",
		"landSquare": "-",
		"cadastralNumber": "-",
		"outHeatingWall": "-",
		"roofType": "-",
		"builtYear": "-",
		"description": " Срочно! Собственник! Кроме стоимости квартиры больше никаких расходов! Продам Однокомнатную квартиру ул. Пушкина, дом 141, 3 этаж, общая площадь 47,08м2, жилая 15,27м2, кухня 15,00 м2, коридор 7,25м2 Строк сдачи 4 квартал 2018 Дом находится в уютной и комфортабельной части Центра города с хорошо продуманной инфраструктурой. Вы имеете возможность заказать планировку квартир с учетом Ваших пожеланий и подобрать самый удобный вариант. В стоимость квартиры входит итальянский двухконтурный газовый котел-колонка батареи биметалл счетчики газовые, электрические и холодной воды готовые выводы под розетки и включатели пол - чистовая стяжка под линолеум, ламинат или ковролин стены - стартовая гипсовая штукатурка подготовленнач под обои входные двери - металические противопожарные с декором окна энергосберегающие WDS с подоконником 5-ти камерный профиль, 2-х камерный стеклопакет Переуступка. У меня есть еще несколько квартир детали можно уточнить по телефону. ",
		"photo": "https://img01-olxua.akamaized.net/img-olxua/640083558_2_644x461_srochno-sobstvennik-prodam-1-komn-kv-3-etazh-v-tsentre-ul-pushkina-141-fotografii.jpg",
		"rating": "1061"
	},
	{
		"URL": "https://www.olx.ua/obyavlenie/zdam-1-komnatnuyu-kvartiru-na-frunze-hozyain-IDA2qFy.html#65b8e63905",
		"headline": "Здам 1 комнатную квартиру на фрунзе хозяин ",
		"typeSell": "Частного лица ",
		"price": "4 000 грн.",
		"lessPrice": "-",
		"buildingType": "Квартира ",
		"houseType": "Хрущевка ",
		"floorNumber": "3 ",
		"floorCount": "9 ",
		"commonSquare": "33 м² ",
		"kitchenSquare": "5 м² ",
		"wallType": "Панельный ",
		"roomCount": "1 ",
		"layout": "-",
		"tuilet": "Раздельный ",
		"heating": "Централизованное ",
		"repear": "Косметический ремонт ",
		"furniture": "Да ",
		"devices": "Стиральная машина Холодильник Плита Пылесос ",
		"multimedia": "Кабельное цифровое ТВ Телевизор ",
		"comfort": "Балкон лоджия Ванна Лифт ",
		"communication": "Асфальтированная дорога Центральная канализация Электричество Вывоз отходов Газ Центральный водопровод ",
		"infrastructure": "Аптека Детский сад Рынок Детская площадка Магазин ",
		"landshaft": "-",
		"notation": "-",
		"lengthsToCity": "-",
		"landSquare": "-",
		"cadastralNumber": "-",
		"outHeatingWall": "-",
		"roofType": "-",
		"builtYear": "-",
		"description": " очень уютна квартира после ремонта с мебелью для порядочых лодей ком.услуги. Посредникам не беспокоить! ",
		"photo": "https://img01-olxua.akamaized.net/img-olxua/651657228_1_644x461_zdam-1-komnatnuyu-kvartiru-na-frunze-hozyain-poltava.jpg",
		"rating": "28"
	}]);

elements = JSON.parse(elements);

let c = 0;

for (let el of captions) {
	el.textContent = elements[c++].headline;
}

c = 0;

for (let el of logos) {
	let img = document.createElement("img");
	img.src = elements[c++].photo;
	el.innerHTML = "";
	el.appendChild(img);
}

c = 0;

for (let el of descriptions) {
	el.textContent = elements[c++].description;
}*/