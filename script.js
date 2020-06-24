const area = document.querySelector('.game_area');
const boxes = document.getElementsByClassName('box');
const gameResultArea = document.querySelector('.game_result_area');
const imageX = '<img class="imageX" src="img/1.png">';
const imageO = '<img class="imageO" src="img/2.jpg">';

let count = 0;
let array = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];


for (let i = 0; i < 9; i++) {
	const createDivBox = document.createElement("div");
	createDivBox.className = 'box';
	area.appendChild(createDivBox);
}

// gameResultArea.innerHTML = `Ходят крестики`;


area.addEventListener('click', function (event) {
	if (count % 2 == 0) {
		event.target.innerHTML = imageX;
		// gameResultArea.innerHTML = `Ваш ход`;

	} //else {
	// 	event.target.innerHTML = imageO;
	// 	gameResultArea.innerHTML = `Ходят крестики`;
	// }

	count = count + 2;
	checkStatus();
	botTurn();
})

function checkStatus() {
	for (i = 0; i < array.length; i++) {
		if (boxes[array[i][0]].innerHTML == imageX && boxes[array[i][1]].innerHTML == imageX && boxes[array[i][2]].innerHTML == imageX) {
			gameResultArea.innerHTML = `Игра №_. Победили крестики`;

			// location.reload();
			//заблокировать пустые ячейки
		} else if (boxes[array[i][0]].innerHTML == imageO && boxes[array[i][1]].innerHTML == imageO && boxes[array[i][2]].innerHTML == imageO) {
			gameResultArea.innerHTML = `Игра №_. Победили нолики`;

			// location.reload();
			//заблокировать пустые ячейки
		}
	}
}

function botTurn() {
	let randomCellX = Math.floor(Math.random() * 3);
	let randomCellY = Math.floor(Math.random() * 3);

	while (boxes[array[randomCellX][randomCellY]].innerHTML == imageO || boxes[array[randomCellX][randomCellY]].innerHTML == imageX) {
		randomCellX = Math.floor(Math.random() * 3);
		randomCellY = Math.floor(Math.random() * 3);
	}

	boxes[array[randomCellX][randomCellY]].innerHTML = imageO;

	// randomCellX = null;
	// randomCellY = null;
}

//выводить историю и сохранять ее до обновления страницы, вести счет до пяти побед, смена очередности хода после каждой игры