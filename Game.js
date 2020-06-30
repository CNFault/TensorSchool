class Game {
    constructor() {
        this.stage = "play"
        this.playerOrder = true

        this.player = new Topology({
            offsetX: 60,
            offsetY: 90
        })

        this.computer = new Topology({
            offsetX: 600,
            offsetY: 100,
            secret: true
        })

        this.computer.randoming()
        this.player.randoming()

        requestAnimationFrame(x => this.tick(x))
    }

    tick() {
        requestAnimationFrame(x => this.tick(x))

        clearCanvas()
        drawGrid()


        this.player.draw(context)
        this.computer.draw(context)

        if (this.stage === "play") {
            this.tickPlay()

            if (this.computer.isEnd()) {
                this.stage = 'end'
                alert('Поздаравляю с победой!')
            }

            else if (this.player.isEnd()) {
                this.stage = 'end'
                alert('Увы, попробуй еще раз.')
            }
        }

        mouse.pleft = mouse.left
    }

    tickPlay() {

        if (this.playerOrder) {
            if (!this.computer.isPointUnder(mouse)) {
                return
            }

            const point = this.computer.getCoordinats(mouse)

            if (mouse.left && !mouse.pleft) {
                this.computer.addChecks(point)
                this.computer.update()

                if (!this.computer.isSheepUnderPoint(point)) {
                    this.playerOrder = false
                }
            }
        }

        else {
            const point = getRandomFrom(this.player.getUnknownFields())

            this.player.addChecks(point)
            this.player.update()

            if (!this.player.isSheepUnderPoint(point)) {
                this.playerOrder = true
            }
        }
    }
}