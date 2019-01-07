/**
 * 栈的数组实现
 */

export class Stack {
  private list: any[]

  constructor() {
    this.list = []
  }

  public get size() {
    return this.list.length
  }

  public push(item: any) {
    this.list.push(item)
  }

  public pop() {
    if (this.list.length === 0) {
      return null
    }
    return this.list.pop()
  }

  public isEmpty(): boolean {
    return this.list.length === 0
  }

  public toString(): string {
    return this.list.toString()
  }
}
