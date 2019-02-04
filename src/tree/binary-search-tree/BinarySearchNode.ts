import { BinaryTreeNode } from '../BinaryTreeNode'
import { BinarySearchTree } from '.'

// 用于遍历树节点的回调函数
// 遍历时，回调函数的参数是每个节点的value传递进去的
export type ITraversalCallback = (value: any) => void

export class BinarySearchNode extends BinaryTreeNode {
  /**
   * 中序遍历
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
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  /**
   * TODO: 待优化
   *
   * 移除与value相等的节点
   * @param parentNode
   * @param node
   * @param value
   * @returns {BinarySearchNode | null} 被移除的节点或者 null
   */
  public static removeNode(
    parentNode: BinarySearchNode | null,
    node: BinarySearchNode | null,
    value: any,
    instance: BinarySearchTree // 主要为了解决 root 节点被移除的问题
  ): BinarySearchNode | null {
    if (node === null) {
      return null
    } else {
      if (value < node.value) {
        return this.removeNode(node, node.left, value, instance)
      } else if (value > node.value) {
        return this.removeNode(node, node.right, value, instance)
      } else {
        let deleteNode = null
        if (parentNode === null) {
          deleteNode = node
          if (!node.right) {
            instance.root = node.left
          } else if (!node.left) {
            instance.root = node.right
          } else if (!node.left && !node.right) {
            instance.root = null
          } else {
            BinarySearchNode.insertNode(node.right, node.left)
            instance.root = node.right
          }
          // this.root = null;
        } else if (node.value < parentNode.value) {
          if (!node.right) {
            parentNode.left = node.left
          } else if (!node.left) {
            parentNode.left = node.right
          } else if (!node.left && !node.right) {
            parentNode.left = null
          } else {
            parentNode.left = node.right
            BinarySearchNode.insertNode(node.right, node.left)
          }
        } else if (node.value > parentNode.value) {
          if (!node.right) {
            parentNode.right = node.left
          } else if (!node.left) {
            parentNode.right = node.right
          } else if (!node.left && !node.right) {
            parentNode.right = null
          } else {
            parentNode.right = node.right
            BinarySearchNode.insertNode(node.right, node.left)
          }
        } else {
          return null
        }
        return deleteNode || node
      }
    }
  }

  constructor(value: any) {
    super(value)
  }
}
