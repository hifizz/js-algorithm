import { Node } from '../Node'

describe('Linked lise Node class', () => {
  it('should create a list node with value', () => {
    const newNode = new Node(1)
    expect(newNode).toBeInstanceOf(Object)
    expect(newNode.value).toBe(1)
    expect(newNode.next).toBe(null)
  })

  it('shoule create a list node with Object value', () => {
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

  it('should link list nodes', () => {
    const node2 = new Node(2)
    const node1 = new Node(1, node2)

    expect(node1.next).toBe(node2)
    expect(node2.next).toBe(null)
    expect(node1.value).toBe(1)
    expect(node2.value).toBe(2)
  })
})
