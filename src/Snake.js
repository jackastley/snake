import { Queue } from "./Queue.js";

export class Snake {
    element;
    direction;
    tmpDirection;
    position;
    lost;

    constructor() {
        this.element = document.getElementById("snake");
        this.direction = "right"
        this.tmpDirection = "right"
        this.position = [0, 2] // start position

        this.positionQueue = new Queue()
        this.positionQueue.enqueue(Array(0, 0))
        this.positionQueue.enqueue(Array(0, 1))
        this.positionQueue.enqueue(Array(0, 2))
    };

    setDirection(direction) {
        this.tmpDirection = direction;
    }

    move() {
        this.direction = this.tmpDirection
        let newPosition = [...this.position]
        switch (this.direction) {
            case "right":
                newPosition[1] += 1
                this.changePosition(newPosition)
                break;
            case "left":
                newPosition[1] -= 1
                this.changePosition(newPosition)
                break;
            case "up":
                newPosition[0] -= 1
                this.changePosition(newPosition)
                break;
            case "down":
                newPosition[0] += 1
                this.changePosition(newPosition)
                break;
        }
    }

    removeTail() {
        return this.positionQueue.dequeue()
    }

    changePosition(newPosition) {
        this.isLost(newPosition)
        this.position = newPosition
        this.positionQueue.enqueue(newPosition)
    }

    isLost(potentialPositon) {
        if (this.isPositionOccupied(potentialPositon)) {
            this.lost = true
        }
        if (potentialPositon[0] == -1 || potentialPositon[0] == 10 || potentialPositon[1] == -1 || potentialPositon[1] == 10) {
            this.lost = true
        }
    }

    isPositionOccupied(position) {
        let isOccupied = false
        this.positionQueue.elements.forEach(vals => {
            if (vals[0] == position[0] && vals[1] == position[1]) {
                isOccupied = true
            }
        })
        return isOccupied
    }

}