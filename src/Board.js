import { Snake } from "./Snake.js";

export class Board {
    snake;
    fruit;
    score;

    constructor() {
        this.renderBoard()
        this.snake = new Snake()
        this.renderNewFruit()
        this.score = 0;
    }

    moveSnake() {
        if (!this.snake.lost) {
            this.snake.move()
            this.onPixel(this.snake.position)

            if (this.isEatingFruit()) {
                this.score += 1
                this.renderNewFruit()
            }
            else {
                const tail = this.snake.removeTail()
                this.offPixel(tail)
            }
        }
        // display lost message if lost
        else {
            document.getElementById("lost-display").style.display = "block"
        }
    }

    offPixel(tailPosition) {
        let element = document.getElementById("square-" + tailPosition[0].toString() + "-" + tailPosition[1].toString())
        element.style.backgroundColor = "white"
    }

    onPixel(headPosition) {
        let element = document.getElementById("square-" + headPosition[0].toString() + "-" + headPosition[1].toString())
        element.style.backgroundColor = "green"
    }

    isEatingFruit() {
        return this.snake.position[0] == this.fruit[0] && this.snake.position[1] == this.fruit[1]
    }

    renderNewFruit() {
        let positionOccupied = true
        let col;
        let row;
        while (positionOccupied == true) {
            col = Math.floor(Math.random() * 10);
            row = Math.floor(Math.random() * 10);

            positionOccupied = this.snake.isPositionOccupied(Array(row, col))
        }
        this.fruit = Array(row, col)
        const element = document.getElementById("square-" + row.toString() + "-" + col.toString())
        element.style.backgroundColor = "red"
    }

    renderBoard() {
        for (let row = 0; row < 10; row++) {
            let newRow = document.createElement("div")

            newRow.setAttribute("id", "row-" + row.toString())
            newRow.style.height = "50px"
            newRow.style.width = "500px"
            newRow.style.width = "500px"
            newRow.style.display = "flex"

            document.getElementById("board").appendChild(newRow)

            for (let col = 0; col < 10; col++) {
                let currentOffset;


                let newDiv = document.createElement("div")

                newDiv.setAttribute("id", "square-" + row.toString() + "-" + col.toString())
                newDiv.style.height = "50px"
                newDiv.style.width = "50px"

                currentOffset = row * 50;
                newDiv.style.top = currentOffset.toString() + "px"

                // set initial snake
                if (row == 0 && (col == 0 || col == 1 || col == 2)) {
                    newDiv.style.backgroundColor = "green"
                }
                document.getElementById("row-" + row.toString()).appendChild(newDiv)
            }
        }
    }
}