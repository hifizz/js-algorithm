// 目前value使用number类型作为测试，后续支持JS所有数据类型

import { BinarySearchNode, ITraversalCallback } from './BinarySearchNode'

export class BinarySearchTree {
  /** 二叉树的根节点 */
  public root: BinarySearchNode | null

  constructor(value?: any) {
    this.root = value ? new BinarySearchNode(value) : null
  }

  /**
   * 向二叉树插入值
   * @param value {any} 需要插入的值
   * @returns {void}
   */
  public insert(value: any) {
    const newNode = new BinarySearchNode(value)
    if (this.root === null) {
      this.root = newNode
    } else {
      BinarySearchNode.insertNode(this.root, newNode)
    }
  }

  /**
   * 查询树是否有对应的值
   * @param value {any}
   * @returns {boolean}
   */
  public has(value: any): boolean {
    return this.root ? BinarySearchNode.search(this.root, value) : false
  }

  /**
   * 从二叉树上移除指定value
   * @param value {any} 需要移除的值
   */
  public remove(value: any) {
    return BinarySearchNode.removeNode(null, this.root, value, this)
  }

  /**
   * 中序遍历
   * @param callback {ITraversalCallback} 用户自定义的处理函数
   */
  public traversalInOrder(callback: ITraversalCallback) {
    BinarySearchNode.traversalInOrder(this.root, callback)
  }

  /**
   * 前序遍历
   * @param callback {ITraversalCallback} 用户自定义的处理函数
   */
  public traversalPreviousOrder(callback: ITraversalCallback) {
    BinarySearchNode.traversalPreviousOrder(this.root, callback)
  }

  /**
   * 后序遍历
   * @param callback {ITraversalCallback} 用户自定义的处理函数
   */
  public traversalPostOrder(callback: ITraversalCallback) {
    BinarySearchNode.traversalPostOrder(this.root, callback)
  }

  /**
   * 查找最小值
   */
  public findMin() {
    return BinarySearchNode.findMin(this.root)
  }

  /**
   * 查找最大值
   */
  public findMax() {
    return BinarySearchNode.findMax(this.root)
  }

  /**
   * 二叉树的string表示
   */
  public toString() {
    const result: any[] = []
    this.traversalPreviousOrder((value: any) => {
      result.push(value)
    })
    return result.toString()
  }
}
