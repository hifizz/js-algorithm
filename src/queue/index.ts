/**
 * 数组版本的队列
 */

export class Queue {
  private list: any[] = []

  constructor() {
    this.list = []
  }

  get length() {
    return this.list.length
  }

  public isEmpty() {
    return this.list.length === 0
  }

  public enqueue(item: any) {
    this.list.push(item)
  }

  public dequeue() {
    if (this.list.length === 0) {
      return null
    }
    return this.list.shift()
  }

  /**
   * 查看首个节点
   */
  public peek() {
    return this.list.length > 0 ? this.list[0] : null
  }

  public toString() {
    return this.list.toString()
  }
}
