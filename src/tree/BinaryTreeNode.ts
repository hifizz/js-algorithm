/**
 * 二叉树指针
 */
export type IBinaryTreeNodePointer = BinaryTreeNode | null

/**
 * 二叉树节点
 */
export class BinaryTreeNode {
  /** 本节点的值 */
  public value: any
  /** 本节点的左子节点 */
  public left: IBinaryTreeNodePointer
  /** 本节点的右子节点 */
  public right: IBinaryTreeNodePointer
  // /** 指向本节点的父节点，在某些操作中奇效，例如移除root节点的时候 */
  // public parent: IBinaryTreeNodePointer

  constructor(
    value: any,
    left: IBinaryTreeNodePointer = null,
    right: IBinaryTreeNodePointer = null
    // parent: IBinaryTreeNodePointer = null
  ) {
    this.value = value
    this.left = left
    this.right = right
    // this.parent = parent
  }
}
