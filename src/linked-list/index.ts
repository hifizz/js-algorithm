import {Node} from './Node'

export class LinkedList {
  public head: Node | null
  public tail: Node | null

  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * 向链表末尾添加一个节点
   * @param {any} value 任意值
   * @returns {LinkedList} 当前链表
   */
  public append(value: any): LinkedList {
    const newNode = new Node(value);

    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    // 给尾节点的next赋值为newNode
    (this.tail as Node).next = newNode;
    // 把尾节点设为newNode
    (this.tail as Node) = newNode;

    return this;
  }

  /**
   * 向链表头部添加一个节点
   * @param {any} value 任意值
   * @returns {LinkedList} 当前链表
   */
  public prepend(value: any): LinkedList {
    const newNode = new Node(value);

    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
    }

    return this;
  }

  /**
   * 根据value查找节点上第一个与value相等的节点，返回该节点或者null
   * @param value 查找的值
   * @returns {INode|null} 找到的节点或者null
   */
  public find(value: any): Node | null {
    let currentNode = this.head;
    while(currentNode !== null && currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    /** currentNode === null 时会跳出while，直接return */
    return currentNode;
  }


  // TODO: 未完成
  public findPrevious(targetNode: Node) {
    // 假设targetNode === this.head 则没有前置节点
    if(this.head !== null && this.head === targetNode) {
      return null
    }

    let prevNode = null
    let currentNode = this.head;

    if(currentNode !== null) {
      while(currentNode.next !== null) {
        if(currentNode.next === targetNode) {
          prevNode = currentNode
        }
        else {
          currentNode = currentNode.next
        }
      }
    }

    return prevNode
  }

  /**
   * TODO: 重新思考这个方法的实现
   * 在目标value节点之后（默认之后）插入值
   * @param {any} value 插入的值
   * @param {INode | null} targetNode 插入值的目标节点
   * @param {"before"|"after"} position 插入的位置，
   */
  insert(value: any, targetNode: Node | null, position: "before" | "after" = "after"): LinkedList | undefined {
    if(!value || !targetNode) {
      return;
    }

    if(position === "after") {
      const newNode = new Node(value, targetNode.next);
      targetNode.next = newNode;
      if (targetNode === this.tail) {
        this.tail = newNode;
      }
    }
    else {
      if(this.head) {
        if(targetNode === this.head) {
          const newNode = new Node(value, this.head.next);
          this.head = newNode;
        }
        else {
          const prevNode = this.findPrevious(targetNode);
          if(prevNode) {
            prevNode.next = new Node(value, prevNode.next);
          }
        }
      }
    }

    return this;
  }

  /**
   * 删除链表上和value相等的节点，当前只支持 === （基础数据结构和引用）
   * 如果链表上有多个与value相等的节点，一律删
   * @param {any} value
   * @returns {INode|null} 返回最后一个被删除的节点，没有则返回null
   */
  delete(value: any) {

    if(!this.head) {
      return null
    }

    let deletedNode = null;

    // 查看head是不是需要删除的node
    while(this.head && this.head.value === value) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    // 上面确保了this.head不是要删除的节点
    let currentNode = this.head;

    while (currentNode !== null && currentNode.next) {
      if (currentNode.next.value === value) {
        deletedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
      }
      else {
        currentNode = currentNode.next;
      }
    }

    // 检查当前tail是否为需要删除的node，如果是，则将tail指向current
    if((this.tail as Node).value === value) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  /**
   * 删除头结点
   * @returns { Node | null } 被删除的头结点或者null
   */
  public deleteHead(): Node | null {
    let deletedNode = null;
    const headNode = this.head;

    if(headNode !== null) {
      deletedNode = headNode
      if(headNode === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = headNode.next ? headNode.next : null;
      }
    }

    return deletedNode;
  }

  /**
   * 删除尾结点
   * @returns { Node | null } 被删除的头结点或者null
   */
  public deleteTail(): Node | null {
    let deletedNode = null;

    if(this.head !== null) {
      if(this.head === this.tail) {
        deletedNode = this.head;
        this.head = null;
        this.tail = null;
      }
      else {
        let currentNode = this.head;
        while(currentNode.next !== null) {
          if(currentNode.next.next === null) {
            deletedNode = currentNode.next.next
            currentNode.next = null;
          }
          else {
            currentNode = currentNode.next;
          }
        }
        this.tail = currentNode;
      }
    }

    return deletedNode;
  }

  /**
   * 查询链表是否为空
   */
  isEmpty(): boolean {
    return this.head === null;
  }

  public toArray(): any[] {
    let result = [];
    let currentNode = this.head;

    while(currentNode !== null) {
      result.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return result;
  }

  public toString(handler: (value: any) => string = (value) => {return `${value}`}): string {
    return this.toArray().map((value) => {
      return handler(value);
    }).toString();
  }
}
