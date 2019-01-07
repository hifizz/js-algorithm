/**
 * 数组版本的队列
 */

export class Queue {
  private list: any[] = [];

  constructor() {
    this.list = [];
  }

  get length() {
    return this.list.length;
  }

  isEmpty() {
    return this.list.length === 0;
  }

  enqueue(item: any) {
    this.list.push(item);
  }

  dequeue() {
    if(this.list.length === 0) {
      return null;
    }
    return this.list.shift();
  }

  /**
   * 查看首个节点
   */
  peek() {
    return this.list.length > 0 ? this.list[0] : null;
  }

  toString() {
    return this.list.toString();
  }
}
