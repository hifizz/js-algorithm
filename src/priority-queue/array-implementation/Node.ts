export class Node {
  public value: any
  public priority: number

  constructor(value: any, priority: number = 0) {
    this.value = value
    this.priority = priority
  }
}
