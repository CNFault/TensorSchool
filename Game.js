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

        requestAnimationFrame(x => this.tick(x))
    }

    tick(timestamp) {
        requestAnimationFrame(x => this.tick(x))

        clearCanvas()
        drawGrid()

        this.player.draw(context)
        this.computer.draw(context)

        // if (this.stage === "preparation") {
        //     this.tickPreparation(timestamp)
        // }

        if (this.stage === "play") {
            this.tickPlay(timestamp)

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

    tickPreparation(timestamp) {
        if (!this.player.isPointUnder(mouse)) {
            return
        }

        const sheepSizes = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1]
        const sheepSize = sheepSizes[this.player.sheeps.length]
        const coordinats = this.player.getCoordinats(mouse)

        const sheep = {
            x: coordinats.x,
            y: coordinats.y,
            direct: mouse.s ? 0 : 1,
            size: sheepSize
        }

        if (!this.player.canStay(sheep)) {
            return
        }

        this.player.drawSheep(context, sheep)

        if (mouse.left && !mouse.pleft) {
            this.player.addSheeps(sheep)

            if (this.player.sheeps.length === 10) {
                this.stage = "play"
            }
        }
    }

    tickPlay(timestamp) {
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