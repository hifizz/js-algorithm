import { Node } from './Node'

const stringifyDefault = (value: any) => {
  return `${value}`
}

export type ICompareFunction = (nodeValue: any) => boolean

export class LinkedList {
  public head: Node | null
  public tail: Node | null
  private _length: number

  constructor() {
    this.head = null
    this.tail = null
    this._length = 0
  }

  public get length() {
    return this._length
  }

  /**
   * 向链表末尾添加一个节点
   * @param {any} value 任意值
   * @returns {LinkedList} 当前链表
   */
  public append(value: any): LinkedList {
    this._length++
    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return this
    }

    // 给尾节点的next赋值为newNode
    ;(this.tail as Node).next = newNode
    // 把尾节点设为newNode
    ;(this.tail as Node) = newNode

    return this
  }

  /**
   * 向链表头部添加一个节点
   * @param {any} value 任意值
   * @returns {LinkedList} 当前链表
   */
  public prepend(value: any): LinkedList {
    this._length++

    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    return this
  }

  /**
   * 根据value查找节点上第一个与value相等的节点，返回该节点或者null
   * @param value 查找的值
   * @param compare 查找函数
   * @returns {INode|null} 找到的节点或者null
   */
  public find(value: any, compare?: ICompareFunction): Node | null {
    let currentNode = this.head
    if (compare) {
      while (currentNode !== null && !compare(currentNode.value)) {
        currentNode = currentNode.next
      }
    } else {
      while (currentNode !== null && currentNode.value !== value) {
        currentNode = currentNode.next
      }
    }

    /** currentNode === null 时会跳出while，直接return */
    return currentNode
  }

  /**
   * 在目标value节点之后（默认之后）插入值
   * @param {any} value 插入的值
   * @param {INode | null} targetNode 插入值的目标节点
   * @param {"before"|"after"} direction 插入的位置，
   */
  public insert(
    value: any,
    targetValue: any,
    direction: 'before' | 'after' = 'after'
  ): LinkedList | undefined {
    if (direction === 'after') {
      let currentNode = this.head

      while (currentNode !== null && currentNode.value !== targetValue) {
        currentNode = currentNode.next
      }

      if (currentNode) {
        this._length++
        const newNode = new Node(value, currentNode.next)
        if (currentNode === this.tail) {
          this.tail = newNode
        }
        currentNode.next = newNode
      }
    } else {
      let currentNode = this.head

      if (currentNode) {
        if (targetValue === currentNode.value) {
          this._length++
          const newNode = new Node(value, this.head)
          this.head = newNode
        } else {
          let prevNode = null
          while (currentNode.next !== null) {
            if (currentNode.next.value === targetValue) {
              prevNode = currentNode
              break
            } else {
              currentNode = currentNode.next
            }
          }

          if (prevNode) {
            this._length++
            const newNode = new Node(value, prevNode.next)
            prevNode.next = newNode
          }
        }
      }
    }

    return this
  }

  /**
   * 删除链表上和value相等的节点，当前只支持 === （基础数据结构和引用）
   * 如果链表上有多个与value相等的节点，一律删
   * @param {any} value
   * @returns {INode|null} 返回最后一个被删除的节点，没有则返回null
   */
  public delete(value: any, compare?: ICompareFunction) {
    if (!this.head) {
      return null
    }

    let deletedNode = null
    compare = compare || ((nodeValue: any): boolean => nodeValue === value)

    // 查看head是不是需要删除的node
    while (this.head && compare(this.head.value)) {
      deletedNode = this.head
      this._length--
      this.head = this.head.next
    }

    // 上面确保了this.head不是要删除的节点
    let currentNode = this.head

    while (currentNode !== null && currentNode.next) {
      if (currentNode.next.value === value) {
        deletedNode = currentNode.next
        this._length--
        currentNode.next = currentNode.next.next
      } else {
        currentNode = currentNode.next
      }
    }

    // 检查当前tail是否为需要删除的node，如果是，则将tail指向current
    if ((this.tail as Node).value === value) {
      this.tail = currentNode
    }

    return deletedNode
  }

  /**
   * 删除头结点
   * @returns { Node | null } 被删除的头结点或者null
   */
  public deleteHead(): Node | null {
    let deletedNode = null
    const headNode = this.head

    if (headNode !== null) {
      this._length--
      deletedNode = headNode
      if (this.head === this.tail) {
        this.head = null
        this.tail = null
      } else {
        this.head = headNode.next
      }
    }

    return deletedNode
  }

  /**
   * 删除尾结点
   * @returns { Node | null } 被删除的头结点或者null
   */
  public deleteTail(): Node | null {
    let deletedNode = null

    if (this.head !== null) {
      if (this.head === this.tail) {
        deletedNode = this.head
        this._length--
        this.head = null
        this.tail = null
      } else {
        let currentNode = this.head
        while (currentNode.next !== null) {
          if (currentNode.next.next === null) {
            deletedNode = currentNode.next.next
            this._length--
            currentNode.next = null
          } else {
            currentNode = currentNode.next
          }
        }
        this.tail = currentNode
      }
    }

    return deletedNode
  }

  /**
   * 反转链表
   */
  public reversal(): LinkedList {
    let currentNode = this.head
    let prevNode = null
    let nextNode = null

    while (currentNode) {
      nextNode = currentNode.next
      currentNode.next = prevNode
      prevNode = currentNode
      currentNode = nextNode
    }

    this.tail = this.head
    this.head = prevNode

    return this
  }

  /**
   * 查询链表是否为空
   */
  public isEmpty(): boolean {
    return this.head === null
  }

  /**
   * 将链表转化成数组显示
   */
  public toArray(): any[] {
    const result = []
    let currentNode = this.head

    while (currentNode !== null) {
      result.push(currentNode.value)
      currentNode = currentNode.next
    }

    return result
  }

  public toString(handler: (value: any) => string = stringifyDefault): string {
    return this.toArray()
      .map(value => {
        return handler(value)
      })
      .toString()
  }
}
