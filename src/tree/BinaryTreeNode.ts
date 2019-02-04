export type IChildBinaryTreeNode = BinaryTreeNode | null

export class BinaryTreeNode {
  public value: any
  public left: IChildBinaryTreeNode
  public right: IChildBinaryTreeNode

  constructor(value: any, left: IChildBinaryTreeNode = null, right: IChildBinaryTreeNode = null) {
    this.value = value
    this.left = left
    this.right = right
  }
}
