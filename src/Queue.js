export class Queue {
    constructor() {
      this.elements =[]
    }
    enqueue(element) {
      this.elements.push(element)
    }
    dequeue() {
      return this.elements.shift()
    }
  }