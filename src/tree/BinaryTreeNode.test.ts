import { BinaryTreeNode } from './BinaryTreeNode'

describe('BinaryTreeNode', () => {
  it('should create an node with passed value', () => {
    const btn = new BinaryTreeNode(9)
    expect(btn.value).toBe(9)
    expect(btn.left).toBe(null)
    expect(btn.right).toBe(null)
  })

  it('should create an node with passed left node & right node', () => {
    const leftNode = new BinaryTreeNode(6)
    const rightNode = new BinaryTreeNode(12)
    const rootNode = new BinaryTreeNode(9, leftNode, rightNode)
    expect(rootNode.left).toBe(leftNode)
    expect(rootNode.right).toBe(rightNode)
  })
})
