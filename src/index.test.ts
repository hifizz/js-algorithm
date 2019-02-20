import * as magicBox from './index'

describe('Lib export', () => {
  it('should export function list as expect', () => {
    expect(magicBox.DoublyLinkedList).toBeDefined()
    expect(magicBox.LinkedList).toBeDefined()
    expect(magicBox.Queue).toBeDefined()
    expect(magicBox.Stack).toBeDefined()
    expect(magicBox.HashTable).toBeDefined()
    expect(magicBox.BinarySearchTree).toBeDefined()
  })
})
