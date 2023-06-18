import { Board } from "./src/Board.js"

const board = new Board()

//listen for key press
document.addEventListener("keydown", event => {
    switch (event.key) {
        case "ArrowDown":
            if (board.snake.direction != "up") {
                board.snake.setDirection("down");
            }
            break;
        case "ArrowUp":
            if (board.snake.direction != "down") {
                board.snake.setDirection("up");
            }
            break;
        case "ArrowLeft":
            if (board.snake.direction != "right") {
                board.snake.setDirection("left");
            }
            break;
        case "ArrowRight":
            if (board.snake.direction != "left") {
                board.snake.setDirection("right");
            }
            break;
    }
})


setInterval(() => {
    board.moveSnake()
    document.getElementById("score").innerHTML = board.score
},
    200
)