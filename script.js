const CELL_SIZE = 23
const FIELD_SIZE = 30

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')


context.font = "30px Arial";
context.fillText("Hello World", 10, 50);

canvas.width = 1000
canvas.height = 500

const mouse = getMouse(canvas)
const game = new Game

function clearCanvas() {
    canvas.width |= 0
}

function addLegends() {
    const playerName = prompt('Введите имя игрока');
    const computerName = prompt('Дайте имя компьютеру');

    context.font = "30px Arial";
    context.fillText(playerName, 120, 450);
    context.fillText(computerName, 650, 450);
    context.fillText("Морской бой", 330, 100);
}


function drawGrid() {
    context.strokeStyle = 'blue'
    context.lineWidth = 0.5

    for (let i = 0; i < canvas.width / CELL_SIZE; i++) {
        context.beginPath()
        context.moveTo(i * CELL_SIZE, 0)
        context.lineTo(i * CELL_SIZE, canvas.height)
        context.stroke()
    }

    for (let i = 0; i < canvas.height / CELL_SIZE; i++) {
        context.beginPath()
        context.moveTo(0, i * CELL_SIZE)
        context.lineTo(canvas.width, i * CELL_SIZE)
        context.stroke()
    }

    context.lineWidth = 2
    context.strokeStyle = 'red'

    context.beginPath()
    context.moveTo(0, 75)
    context.lineTo(canvas.width, 75)
    context.stroke()
}

function getRandomFrom(array) {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
}