import { BinarySearchTree } from '../index'
import { BinarySearchNode } from '../BinarySearchNode'

describe('BinarySearchTree', () => {
  let binarySearchTree: BinarySearchTree

  beforeAll(() => {
    binarySearchTree = new BinarySearchTree()
  })

  describe('constructor', () => {
    it('should create an empty BinarySearchTree without root', () => {
      const binarySearchTree = new BinarySearchTree()
      expect(binarySearchTree).toBeDefined()
      expect(binarySearchTree.root).toBeNull()
    })

    it('should create an empty BinarySearchTree', () => {
      const binarySearchTree = new BinarySearchTree(9)
      expect(binarySearchTree).toBeDefined()
      expect(binarySearchTree.root).toBeInstanceOf(BinarySearchNode)
      expect((binarySearchTree.root as BinarySearchNode).value).toBe(9)
    })
  })

  describe('insert()', () => {
    it('should insert a new Node to the empty tree', () => {
      binarySearchTree.insert(9)
    })
    it('should insert a new Node', () => {
      binarySearchTree.insert(8)
      expect(binarySearchTree.toString()).toEqual('9,8')
      binarySearchTree.insert(7)
      expect(binarySearchTree.toString()).toEqual('9,8,7')
      binarySearchTree.insert(1)
      expect(binarySearchTree.toString()).toEqual('9,8,7,1')
      binarySearchTree.insert(5)
      expect(binarySearchTree.toString()).toEqual('9,8,7,1,5')
    })
  })

  describe('has()', () => {
    it('should return true or false ', () => {
      expect(binarySearchTree.has(9)).toBe(true)
      expect(binarySearchTree.has(8)).toBe(true)
      expect(binarySearchTree.has(7)).toBe(true)
      expect(binarySearchTree.has(1)).toBe(true)
      expect(binarySearchTree.has(5)).toBe(true)
      expect(binarySearchTree.has(10)).toBe(false)
      expect(binarySearchTree.has(11)).toBe(false)
    })

    it('should return false when tree is empty', () => {
      const binarySearchTreeEmpty = new BinarySearchTree()
      expect(binarySearchTreeEmpty.has(9)).toBe(false)
    })
  })

  describe('traversal by order', () => {
    let result: any[] = []
    const traversalCallback = (value: any) => {
      result.push(value)
    }
    beforeEach(() => {
      result = []
    })
    // 中序遍历
    it('should traversal tree in order', () => {
      binarySearchTree.traversalInOrder(traversalCallback)
      expect(result.toString()).toBe('1,5,7,8,9')
    })
    // 前序序遍历
    it('should traversal tree previous order', () => {
      binarySearchTree.traversalPreviousOrder(traversalCallback)
      expect(result.toString()).toBe('9,8,7,1,5')
    })
    // 后序遍历
    it('should traversal tree post order', () => {
      binarySearchTree.traversalPostOrder(traversalCallback)
      expect(result.toString()).toBe('5,1,7,8,9')
    })
  })

  describe('findMin()', () => {
    it('should find the min value of the tree', () => {
      expect(binarySearchTree.findMin()).toBe(1)
    })
  })

  describe('findMax()', () => {
    it('should find the Max value of the tree', () => {
      expect(binarySearchTree.findMax()).toBe(9)
    })
  })

  describe('remove()', () => {
    it('should remove value', () => {
      binarySearchTree.remove(5)
      expect(binarySearchTree.toString()).toBe('9,8,7,1')
      binarySearchTree.insert(5)
      expect(binarySearchTree.toString()).toBe('9,8,7,1,5')
    })

    it('should remove a node without error', () => {
      binarySearchTree.remove(7)
      expect(binarySearchTree.toString()).toBe('9,8,1,5')
    })

    it('should remove root without error', () => {
      binarySearchTree.insert(7)
      expect(binarySearchTree.toString()).toBe('9,8,1,5,7')
      binarySearchTree.remove(9)
      expect(binarySearchTree.toString()).toBe('8,1,5,7')
    })

    it('should remove root node correctly', () => {
      const bst = new BinarySearchTree()
      bst.insert(9)
      bst.remove(9)
      expect(bst.root).toBeNull()
      bst.insert(8)
      expect((bst.root as BinarySearchNode).value).toBe(8)
    })
  })
})
