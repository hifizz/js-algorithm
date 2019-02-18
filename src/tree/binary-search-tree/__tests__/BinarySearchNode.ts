import { BinarySearchNode } from '../BinarySearchNode'
import { BinarySearchTree } from '..'

describe('BinarySearchNode', () => {
  const rootNode = new BinarySearchNode(9)

  describe('constructor', () => {
    it('should create new Node with passed value', () => {
      const newNode = new BinarySearchNode(9)
      expect(newNode).toBeDefined()
      expect(newNode.value).toBe(9)
      expect(newNode.left).toBeNull()
      expect(newNode.right).toBeNull()
    })
  })

  describe('insertNode()', () => {
    it('should insert a new node to the target node', () => {
      const newNode = new BinarySearchNode(7)
      BinarySearchNode.insertNode(rootNode, newNode)
      expect(rootNode.left).toBe(newNode)
      expect(rootNode.right).toBeNull()

      BinarySearchNode.insertNode(rootNode, new BinarySearchNode(8))
      // @ts-ignore
      expect(rootNode.left.right.value).toBe(8)

      BinarySearchNode.insertNode(rootNode, new BinarySearchNode(5))
      // @ts-ignore
      expect(rootNode.left.left.value).toBe(5)

      const newNode11 = new BinarySearchNode(11)
      BinarySearchNode.insertNode(rootNode, newNode11)
      expect(rootNode.right).toBe(newNode11)
    })
  })

  describe('search()', () => {
    it('should find the value and return boolean', () => {
      expect(BinarySearchNode.search(rootNode, 8)).toBe(true)
      expect(BinarySearchNode.search(rootNode, 9)).toBe(true)
      expect(BinarySearchNode.search(rootNode, 7)).toBe(true)
      expect(BinarySearchNode.search(rootNode, 100)).toBe(false)
    })

    it('should return false when rootNode is null', () => {
      expect(BinarySearchNode.search(null, 8)).toBe(false)
    })
  })

  describe('find()', () => {
    it('should return the value node', () => {
      expect(BinarySearchNode.find(rootNode, 8)).toBeInstanceOf(BinarySearchNode)
    })

    it('should return null when not found value', () => {
      expect(BinarySearchNode.find(rootNode, 1000)).toBe(null)
    })
  })

  describe('traversal list', () => {
    let result: any[] = []
    const traversalCallback = (value: any) => {
      result.push(value)
    }
    beforeEach(() => {
      result = []
    })

    /** 中序遍历 左 - 中 - 右 */
    it('traversalInOrder(): should traversal in order', () => {
      BinarySearchNode.traversalInOrder(rootNode, traversalCallback)
      expect(result.toString()).toEqual('5,7,8,9,11')
    })

    /** 先序遍历 中 - 左 - 右 */
    it('traversalPreviousOrder(): should traversal previous order', () => {
      BinarySearchNode.traversalPreviousOrder(rootNode, traversalCallback)
      expect(result.toString()).toEqual('9,7,5,8,11')
    })

    /** 后序遍历 左 - 右 - 中 */
    it('traversalPostOrder()', () => {
      BinarySearchNode.traversalPostOrder(rootNode, traversalCallback)
      expect(result.toString()).toEqual('5,8,7,11,9')
    })
  })

  describe('findMin()', () => {
    it('should return the min value', () => {
      expect(BinarySearchNode.findMin(rootNode)).toBe(5)
    })

    it('should return null when the rootNode is null', () => {
      expect(BinarySearchNode.findMin(null)).toBeNull()
    })
  })

  describe('findMax()', () => {
    it('should return the max value', () => {
      expect(BinarySearchNode.findMax(rootNode)).toBe(11)
    })

    it('should return null when the rootNode is null', () => {
      expect(BinarySearchNode.findMax(null)).toBeNull()
    })
  })

  describe('removeNode()', () => {
    // const rootNode = new BinarySearchNode(18);
    // BinarySearchNode.insertNode(rootNode, new BinarySearchNode(10))

    it('should remove value node', () => {
      BinarySearchNode.removeNode(rootNode, 7)
      expect(BinarySearchNode.search(rootNode, 7)).toBe(false)
    })

    it('should remove root node', () => {
      const rootNode = new BinarySearchNode(9)
      expect(BinarySearchNode.removeNode(rootNode, 9)).toBeNull()
    })

    it('should remove right node', () => {
      BinarySearchNode.insertNode(rootNode, new BinarySearchNode(18))
      const node = BinarySearchNode.removeNode(rootNode, 18)
      // @ts-ignore
      expect(BinarySearchNode.search(node, 18)).toBeFalsy()
      BinarySearchNode.insertNode(rootNode, new BinarySearchNode(18))
      expect(BinarySearchNode.search(rootNode, 18)).toBe(true)
    })

    it('should remove node just right node', () => {
      const node = BinarySearchNode.removeNode(rootNode, 11)
      // @ts-ignore
      expect(BinarySearchNode.search(node, 11)).toBeFalsy()
      // @ts-ignore
      expect(rootNode.right.value).toBe(18)
    })

    it('should remove node = null', () => {
      expect(BinarySearchNode.removeNode(null, 0)).toBe(null)
    })
  })
})
