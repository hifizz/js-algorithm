import { Node } from './Node'

export class PriorityQueue {
  private list: any[]

  constructor() {
    this.list = []
  }

  /**
   * 入队
   * @param item
   * @param priority
   */
  public enqueue(item: any, priority: number = 0) {
    const newNode = new Node(item, priority)
    if (this.isEmpty()) {
      this.list.push(newNode)
    } else {
      for (let i = 0; i < this.list.length; i++) {
        let added = false
        const item = this.list[i]
        if (newNode.priority < item.priority) {
          this.list.splice(i, 1, newNode)
          added = true
        }
        if (added) {
          this.list.push(newNode)
        }
      }
    }
  }

  public dequeue() {
    return this.list.unshift
  }

  /**
   * 当前队列是否为空空
   */
  public isEmpty(): boolean {
    return this.list.length > 0
  }
}
