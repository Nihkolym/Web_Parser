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
		   let elements = JSON.stringify();

			elements = JSON.parse(xhr.responseText);

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
			}
		}
	};

	xhr.open("POST", 'путь к php файлу', true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	xhr.send(JSON.stringify(obj));

	e.preventDefault();
}
