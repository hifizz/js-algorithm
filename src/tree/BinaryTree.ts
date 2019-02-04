import { BinaryTreeNode } from './BinaryTreeNode'

export class BinaryTree {
  public root: BinaryTreeNode | null

  constructor(value: any) {
    this.root = value ? new BinaryTreeNode(value) : null
  }
}
