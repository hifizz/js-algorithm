type INodePointer = Node | null

export class Node {
  public prev: Node | null
  public next: Node | null
  public value: any

  constructor(value: any, prev: Node | null = null, next: Node | null = null) {
    this.value = value
    this.prev = prev
    this.next = next
  }
}
