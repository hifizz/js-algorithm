import { Node } from './Node'

export class DoublyLinkedList {
  /** internal length */
  private _length: number

  /** internal list head */
  private head: Node | null

  /** internal list head */
  private tail: Node | null

  constructor() {
    this._length = 0
    this.head = null
    this.tail = null
  }

  public get size(): number {
    return this._length
  }

  public getHead() {
    return this.head
  }

  public getTail() {
    return this.tail
  }

  public isEmpty() {
    return this._length === 0
  }

  /**
   * 向链表末尾添加值
   * @param value 任意值
   * @returns {DoublyLinkedList} this 当前实例
   */
  public append(value: any): DoublyLinkedList {
    this._length++

    if (!this.head) {
      const newNode = new Node(value)
      this.head = this.tail = newNode
      return this
    }

    const newNode = new Node(value, this.tail)
    ;(this.tail as Node).next = newNode
    this.tail = newNode

    return this
  }

  public prepend(value: any): DoublyLinkedList {
    this._length++

    if (!this.head) {
      this.head = this.tail = new Node(value)
      return this
    }

    this.head = new Node(value, null, this.head)

    return this
  }

  /**
   * 通过index移除节点
   * @param index 需要移除的节点的index
   */
  public remove(index: number): Node | null {
    if (!this.head || index < 0 || index >= this._length) {
      return null
    }

    let cursor = 0
    let deletedNode = null
    let currNode: Node | null = this.head

    const maxCursor = this._length - 1
    while (currNode) {
      if (cursor === index) {
        deletedNode = currNode

        if (cursor === 0) {
          this.removeHead()
        } else if (cursor === maxCursor) {
          this.removeTail()
        } else {
          let prevNode = currNode.prev
          let nextNode = currNode.next
          ;(prevNode as Node).next = nextNode
          ;(nextNode as Node).prev = prevNode
          this._length--
        }
        break
      }

      currNode = currNode.next
      cursor++
    }

    return deletedNode
  }

  /**
   * 移除head
   */
  public removeHead(): Node | null {
    let deletedNode = null

    if (this.head) {
      deletedNode = this.head
      this._length--
      if (!this.head.next) {
        this.head = this.tail = null
      } else {
        this.head.next.prev = null
        this.head = this.head.next
      }
    }

    return deletedNode
  }
  /**
   * 移除tail
   */
  public removeTail(): Node | null {
    if (!this.head) {
      return null
    }

    let deletedNode = null
    let currNode = this.head
    let prevNode = null

    while (currNode.next) {
      prevNode = currNode
      currNode = currNode.next
    }

    deletedNode = this.tail
    this._length--

    if (prevNode) {
      prevNode.next = null
      this.tail = prevNode
    } else {
      this.head = this.tail = null
    }

    return deletedNode
  }

  /**
   * 查找给定值的index
   * @param value 查找的值
   * @returns {number} value 对应的 index，未找到则为 -1
   */
  public find(value: any): number {
    let index = 0
    let findTarget = -1
    let currNode = this.head

    while (currNode) {
      if (currNode.value === value) {
        findTarget = index
        break
      } else {
        if (currNode.next) {
          currNode = currNode.next
        } else {
          break
        }
      }
      index++
    }

    return findTarget
  }

  public insertAfter(value: any, index: number): void {
    if (!this.head) {
      return
    }

    let currNode: Node | null = this.head
    let cursor = 0
    // let prevNode: Node | null = null

    while (currNode) {
      if (index === cursor) {
        const newNode: Node = new Node(value, currNode, currNode.next)
        currNode.next = newNode
        this._length++
        if (newNode.next === null) {
          this.tail = newNode
        } else {
          newNode.next.prev = newNode
        }
        break
      } else {
        currNode = currNode.next
        cursor++
      }
    }
  }

  /**
   * 在目标索引之前插入 node
   * @param value 要插入的值
   * @param {number} index [0 ~ size-1] 插入目标的索引值
   */
  public insertBefore(value: any, index: number): void {
    if (!this.head || index < 0 || index >= this._length) {
      return
    }

    let currNode: Node | null = this.head
    let cursor = 0
    let prevNode: Node | null = null

    while (currNode) {
      if (index === cursor) {
        if (!prevNode) {
          const newNode: Node = new Node(value, prevNode, this.head)
          this.head.prev = newNode
          this.head = newNode
        } else {
          const newNode: Node = new Node(value, prevNode, currNode)
          currNode.prev = newNode
          prevNode.next = newNode
        }
        this._length++
        break
      }
      prevNode = currNode
      currNode = currNode.next
      cursor++
    }
  }

  public toArray(): any[] {
    let result = []
    let currentNode = this.head

    while (currentNode !== null) {
      result.push(currentNode.value)
      currentNode = currentNode.next
    }

    return result
  }

  public toString(
    handler: (value: any) => string = (value: any) => {
      return `${value}`
    }
  ): string {
    return this.toArray()
      .map(value => {
        return handler(value)
      })
      .toString()
  }

  /**
   * TODO
   */
  // public [Symbol.iterator]: () => {  }
}
