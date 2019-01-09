import { Node } from '../Node'

describe('Doubly linked list Node', () => {
  it('should create an node with value', () => {
    const node = new Node(1)
    expect(node).toBeDefined()
    expect(node).toBeInstanceOf(Node)
    expect(node.value).toBe(1)
    expect(node.next).toBe(null)
    expect(node.prev).toBe(null)
  })

  it('should create node with any value', () => {
    const objectValue = { value: 1, text: 'object' }
    const arrayValue = [1, 2, 3, 4]
    const functionValue = () => {
      /** do nothing */
    }

    const valueList = [objectValue, arrayValue, functionValue]

    valueList.forEach(value => {
      const newNode = new Node(value)
      expect(newNode.value).toEqual(value)
    })
  })

  it('should link nodes togather', () => {
    const first = new Node(1)
    const second = new Node(2, first)
    const three = new Node(3, second, first)

    expect(first).toBeDefined()
    expect(first.next).toBe(null)
    expect(first.prev).toBe(null)
    expect(first.value).toBe(1)

    expect(second).toBeDefined()
    expect(second.next).toBe(null)
    expect(second.prev).toBe(first)
    expect(second.value).toBe(2)

    expect(three).toBeDefined()
    expect(three.next).toBe(first)
    expect(three.prev).toBe(second)
    expect(three.value).toBe(3)
  })
})
