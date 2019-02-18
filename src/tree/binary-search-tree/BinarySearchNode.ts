import { BinaryTreeNode } from '../BinaryTreeNode'

// 用于遍历树节点的回调函数
// 遍历时，回调函数的参数是每个节点的value传递进去的
export type ITraversalCallback = (value: any) => void

export class BinarySearchNode extends BinaryTreeNode {
  /**
   * 中序遍历
   * 左 - 中 - 右
   * @param node
   * @param callback
   */
  public static traversalInOrder(
    node: BinarySearchNode | null,
    callback: ITraversalCallback
  ): void {
    if (node === null) {
      return
    } else {
      this.traversalInOrder(node.left, callback)
      callback(node.value)
      this.traversalInOrder(node.right, callback)
    }
  }

  /**
   * 先序遍历
   * 中 - 左 - 右
   * @param node
   * @param callback
   */
  public static traversalPreviousOrder(
    node: BinarySearchNode | null,
    callback: ITraversalCallback
  ): void {
    if (node === null) {
      return
    } else {
      callback(node.value)
      this.traversalPreviousOrder(node.left, callback)
      this.traversalPreviousOrder(node.right, callback)
    }
  }

  /**
   * 后序遍历
   * 左 - 右 - 中
   * @param node
   * @param callback
   */
  public static traversalPostOrder(
    node: BinarySearchNode | null,
    callback: ITraversalCallback
  ): void {
    if (node === null) {
      return
    } else {
      this.traversalPostOrder(node.left, callback)
      this.traversalPostOrder(node.right, callback)
      callback(node.value)
    }
  }

  /**
   * 根据value查找value对应的node
   * @param node
   * @param value
   * @returns {BinarySearchNode | null}
   */
  public static find(node: BinarySearchNode | null, value: any): BinarySearchNode | null {
    if (node === null) {
      return null
    } else {
      if (value < node.value) {
        return this.find(node.left, value)
      } else if (value > node.value) {
        return this.find(node.right, value)
      } else {
        return node
      }
    }
  }

  /**
   * 查询是否有value节点
   * @param node { BinarySearchNode | null }
   * @param value { BinarySearchNode | null }
   * @returns {Boolean}
   */
  public static search(node: BinarySearchNode | null, value: any): boolean {
    if (node === null) {
      return false
    } else {
      // value 比节点 value 小，左侧节点
      if (value < node.value) {
        return this.search(node.left, value)
      }

      // value 比节点 value 大，右侧节点
      else if (value > node.value) {
        return this.search(node.right, value)
      }
      // value === 节点 value
      else {
        return true
      }
    }
  }

  /**
   * 向某个节点下插入新的值
   * @param node {BinarySearchNode} 节点
   * @param newNode {BinarySearchNode} 要插入的节点
   * @returns {void}
   */
  public static insertNode(node: BinarySearchNode, newNode: BinarySearchNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        // newNode.parent = node;
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        // newNode.parent = node;
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  /**
   * TODO: 待优化，为了处理好移除根节点（主要是只有一个节点即根节点）的情况，这里采用了返回删除过后的节点树
   *
   * 移除与value相等的节点
   * @param parentNode
   * @param node
   * @param value
   * @returns {BinarySearchNode | null} 被移除节点之后的节点树或者 null
   */
  public static removeNode(node: BinarySearchNode | null, value: any): BinarySearchNode | null {
    if (node === null) {
      return null
    }
    // 有node，且value在左边
    else if (value < node.value) {
      node.left = this.removeNode(node.left, value)
      return node
    }
    // 有node，且value在右边
    else if (value > node.value) {
      node.right = this.removeNode(node.right, value)
      return node
    }
    // 有node，且value等于当前node.value
    else {
      if (node.left === null && node.right === null) {
        node = null
        return null
      }
      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      } else {
        BinarySearchNode.insertNode(node.right, node.left)
        node = node.right
        return node
      }
    }
  }

  /**
   * 查找最小值
   * @param node {BinarySearchNode | null}
   * @returns {null | any} null 则是root为空的情况，否则返回该最小值
   */
  public static findMin(node: BinarySearchNode | null): null | any {
    // 此处主要处理root节点为空的情况
    if (node === null) {
      return null
    } else {
      // 如果有左子节点，则再次调用本函数
      if (node.left) {
        return this.findMin(node.left)
      }
      // 如果没有左子节点，则最小值为当前节点值，直接返回该值
      else {
        return node.value
      }
    }
  }

  /**
   * 查找最大值
   * @param node {BinarySearchNode | null}
   * @returns {null | any} null 则是root为空的情况，否则返回该最大值
   */
  public static findMax(node: BinarySearchNode | null): null | any {
    // 此处主要处理root节点为空的情况
    if (node === null) {
      return null
    } else {
      // 如果有右子节点，则再次调用本函数
      if (node.right) {
        return this.findMax(node.right)
      }
      // 如果没有左子节点，则最小值为当前节点值，直接返回该值
      else {
        return node.value
      }
    }
  }

  constructor(value: any) {
    super(value)
  }
}
