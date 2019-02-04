import { BinarySearchNode } from '../BinarySearchNode'

describe('BinarySearchNode', () => {
  describe('constructor', () => {
    it('should create new Node with passed value', () => {
      const newNode = new BinarySearchNode(9)
      expect(newNode).toBeDefined()
    })
  })

  describe('find()', () => {})

  describe('traversal list', () => {
    let result: any[] = []
    const traversalCallback = (value: any) => {
      result.push(value)
    }

    beforeEach(() => {
      result = []
    })

    describe('traversalInOrder()', () => {})

    describe('traversalPreviousOrder()', () => {})

    describe('traversalPostOrder()', () => {})
  })

  describe('search()', () => {})

  describe('insertNode()', () => {})

  describe('removeNode()', () => {})
})
