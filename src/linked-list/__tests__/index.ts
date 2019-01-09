import { LinkedList } from '../index'
import { Node } from '../Node'

describe('LinkedList class', () => {
  let linkedList: LinkedList

  beforeEach(() => {
    linkedList = new LinkedList()
  })

  it('should create a LinkedList instance', () => {
    const linkedList = new LinkedList()

    expect(linkedList).toBeInstanceOf(Object)
    expect(linkedList.head).toBe(null)
    expect(linkedList.tail).toBe(null)
    expect(linkedList.length).toBe(0)
  })

  describe('Method append()', () => {
    it('should append a node to linkedlist', () => {
      expect(linkedList.length).toBe(0)
      linkedList.append(1)
      expect(linkedList.length).toBe(1)

      expect(linkedList.head).toBeDefined()
      expect(linkedList.head).toBeInstanceOf(Node)
      expect(linkedList.tail).toBeDefined()
      expect(linkedList.tail).toBeInstanceOf(Node)

      expect((linkedList.head as Node).value).toBe(1)
      expect((linkedList.head as Node).next).toBe(null)
      expect((linkedList.tail as Node).value).toBe(1)
      expect((linkedList.tail as Node).next).toBe(null)

      expect(linkedList.head).toBe(linkedList.tail)
    })

    it('should be a chain method', () => {
      linkedList
        .append(1)
        .append(2)
        .append(3)
      expect(linkedList.head).toBeDefined()
      expect(linkedList.tail).toBeDefined()
      expect((linkedList.head as Node).value).toBe(1)
      expect((linkedList.tail as Node).value).toBe(3)
      expect(linkedList.length).toBe(3)
    })

    it('should append 2 values be linked', () => {
      linkedList.append(1).append(2)

      expect((linkedList.head as Node).value).toBe(1)
      expect(((linkedList.head as Node).next as Node).value).toBe(2)

      expect((linkedList.head as Node).value).toBe(1)
      expect((linkedList.tail as Node).value).toBe(2)

      linkedList.append(3)
      expect((linkedList.head as Node).value).toBe(1)
      expect((linkedList.tail as Node).value).toBe(3)
    })
  })

  describe('helper functions', () => {
    it('Method toString()', () => {
      expect(linkedList.toString()).toBe('')

      linkedList.append(1)
      expect(linkedList.toString()).toBe('1')

      linkedList.append(2).append(3)
      expect(linkedList.toString()).toBe('1,2,3')

      const stringHandler = (value: any) => value
      expect(linkedList.toString(stringHandler)).toBe('1,2,3')
    })

    it('Method toArray()', () => {
      expect(linkedList.toArray()).toEqual([])

      linkedList.append(1)
      expect(linkedList.toArray()).toEqual([1])

      linkedList.append(2).append(3)
      expect(linkedList.toArray()).toEqual([1, 2, 3])
    })
  })

  describe('Method prepend()', () => {
    it('should prepend a node to list head', () => {
      linkedList.append(1)
      linkedList.prepend(2)

      expect(linkedList.toString()).toBe('2,1')
      expect(linkedList.length).toBe(2)
    })

    it('should handle head & tail correctly', () => {
      linkedList
        .prepend(4)
        .prepend(3)
        .prepend(2)
        .prepend(1)
        .append(5)
      expect(linkedList.toString()).toBe('1,2,3,4,5')
      expect((linkedList.head as Node).value).toBe(1)
      expect((linkedList.tail as Node).value).toBe(5)
      expect(linkedList.length).toBe(5)
    })
  })

  describe('Method find()', () => {
    it('should have find method', () => {
      expect(linkedList).toHaveProperty('find')
      expect(linkedList.find).toBeInstanceOf(Function)
    })

    it('should return null if not found', () => {
      linkedList
        .append(1)
        .append(2)
        .append(3)
        .append(4)
        .append(5)

      const findNode = linkedList.find(6)
      expect(findNode).toBe(null)
    })

    it('should return the first node if found the value', () => {
      linkedList
        .append(5)
        .append(4)
        .append(1)
        .append(2)
        .append(3)

      const findNode = linkedList.find(1)
      expect((findNode as Node).value).toBe(1)
      expect((findNode as Node).next).toBeDefined()
      expect(((findNode as Node).next as Node).value).toBe(2)

      linkedList.append(1)
      const findNode2 = linkedList.find(1)
      expect((findNode2 as Node).value).toBe(1)
      expect((findNode2 as Node).next).toBeDefined()
      expect(((findNode2 as Node).next as Node).value).toBe(2)
    })
  })

  describe('Method delete()', () => {
    it('should have delete method', () => {
      expect(linkedList).toHaveProperty('delete')
      expect(linkedList.delete).toBeInstanceOf(Function)
    })

    it('should return null if the list is empty()', () => {
      expect(linkedList.delete(1)).toBe(null)
      expect(linkedList.length).toBe(0)
    })

    it('should delete nothing if not found value', () => {
      linkedList
        .append(1)
        .append(2)
        .append(3)

      const deletedNode = linkedList.delete(6)
      expect(deletedNode).toBe(null)
      expect(linkedList.length).toBe(3)
      expect((linkedList.head as Node).value).toBe(1)
      expect(((linkedList.head as Node).next as Node).value).toBe(2)
      expect((linkedList.tail as Node).value).toBe(3)
      expect((linkedList.tail as Node).next).toBe(null)
    })

    it('should delete value from list', () => {
      linkedList
        .append(1)
        .append(2)
        .append(3)

      const deletedNode = linkedList.delete(3)
      expect((deletedNode as Node).value).toBe(3)
      expect(linkedList.length).toBe(2)
      expect((linkedList.head as Node).value).toBe(1)
      expect(((linkedList.head as Node).next as Node).value).toBe(2)
      expect((linkedList.tail as Node).value).toBe(2)
      expect((linkedList.tail as Node).next).toBe(null)

      linkedList.append(3)

      const deletedNode2 = linkedList.delete(1)
      expect(linkedList.length).toBe(2)
      expect((deletedNode2 as Node).value).toBe(1)
      expect((linkedList.head as Node).value).toBe(2)
      expect((linkedList.tail as Node).value).toBe(3)

      linkedList.delete(1)
      linkedList.delete(2)
      linkedList.delete(3)

      expect(linkedList.head).toBe(null)
      expect(linkedList.tail).toBe(null)
      expect(linkedList.length).toBe(0)
    })
  })

  describe('Method deleteHead()', () => {
    it('should delete head node and handle head & tail correctly', () => {
      linkedList
        .append(1)
        .append(2)
        .append(3)
        .append(4)
        .append(5)
      expect((linkedList.deleteHead() as Node).value).toBe(1)
      expect(linkedList.toString()).toBe('2,3,4,5')
      expect(linkedList.length).toBe(4)
      expect((linkedList.head as Node).value).toBe(2)
      expect((linkedList.tail as Node).value).toBe(5)
    })

    it('should set head & tail correctly when list have only one node', () => {
      linkedList.append(1).deleteHead()

      expect(linkedList.head).toBe(null)
      expect(linkedList.tail).toBe(null)
    })

    it('should return null if the list is empty()', () => {
      expect(linkedList.deleteHead()).toBe(null)
    })
  })

  describe('Method deleteTail()', () => {
    it('should delete tail node and handle head & tail correctly', () => {
      linkedList.append(1).deleteTail()
      expect(linkedList.toString()).toBe('')
      expect(linkedList.length).toBe(0)
      expect(linkedList.head).toBe(null)
      expect(linkedList.tail).toBe(null)

      linkedList
        .append(1)
        .append(2)
        .append(3)
        .append(4)
        .append(5)
      linkedList.deleteTail()
      expect(linkedList.length).toBe(4)
      expect(linkedList.toString()).toBe('1,2,3,4')
      expect((linkedList.head as Node).value).toBe(1)
      expect((linkedList.tail as Node).value).toBe(4)
    })

    it('should return null when list is empty', () => {
      expect(linkedList.deleteTail()).toBe(null)
      expect(linkedList.length).toBe(0)
    })
  })

  describe('Method isEmpty()', () => {
    it('should return boolean', () => {
      const isEmptyFunc = jest.fn(() => {
        return linkedList.isEmpty()
      })

      isEmptyFunc()
      expect(isEmptyFunc).toHaveReturned()
      expect(isEmptyFunc.mock.results[0]).toBeTruthy()

      linkedList.append(1)

      isEmptyFunc()
      expect(isEmptyFunc).toHaveReturned()
      expect(isEmptyFunc.mock.results[2]).toBeFalsy()
    })
  })

  describe('Method insert()', () => {
    it('should insert value after specified value by default', () => {
      linkedList
        .append(1)
        .append(2)
        .append(1)
        .append(3)
      linkedList.insert(5, 1)

      expect(linkedList.toString()).toBe('1,5,2,1,3')
      expect(linkedList.length).toBe(5)
      expect((linkedList.head as Node).value).toBe(1)
      expect((linkedList.tail as Node).value).toBe(3)
    })

    it('should insert value after by default', () => {
      linkedList
        .append(1)
        .append(2)
        .append(1)
        .append(3)
      linkedList.insert(5, 3)

      expect(linkedList.length).toBe(5)
      expect(linkedList.toString()).toBe('1,2,1,3,5')
      expect((linkedList.head as Node).value).toBe(1)
      expect((linkedList.tail as Node).value).toBe(5)
    })

    it("should insert value before specified value if transmit 'before'", () => {
      linkedList
        .append(1)
        .append(2)
        .append(1)
        .append(3)
      linkedList.insert(5, 1, 'before')

      expect(linkedList.length).toBe(5)
      expect(linkedList.toString()).toBe('5,1,2,1,3')
      expect((linkedList.head as Node).value).toBe(5)
      expect((linkedList.tail as Node).value).toBe(3)
    })

    it('should insert value before the tail', () => {
      linkedList
        .append(1)
        .append(2)
        .append(1)
        .append(3)
      linkedList.insert(5, 3, 'before')

      expect(linkedList.length).toBe(5)
      expect(linkedList.toString()).toBe('1,2,1,5,3')
      expect((linkedList.head as Node).value).toBe(1)
      expect((linkedList.tail as Node).value).toBe(3)
    })

    it('should do nothing shen targetValue not in the list', () => {
      linkedList
        .append(1)
        .append(2)
        .append(3)
      linkedList.insert(5, 4, 'before')

      expect(linkedList.length).toBe(3)
      expect(linkedList.toString()).toBe('1,2,3')
    })

    it('should do nothing when list empty', () => {
      linkedList.insert(5, 3)
      expect(linkedList.toString()).toBe('')
      expect(linkedList.head).toBe(null)
      expect(linkedList.tail).toBe(null)
      expect(linkedList.length).toBe(0)

      linkedList.insert(5, 3, 'before')
      expect(linkedList.toString()).toBe('')
      expect(linkedList.head).toBe(null)
      expect(linkedList.tail).toBe(null)
      expect(linkedList.length).toBe(0)
    })
  })

  describe('Method reversal()', () => {
    it('should reversal list', () => {
      linkedList
        .append(1)
        .append(2)
        .append(3)
      const reversaledList = linkedList.reversal()
      expect(reversaledList).toBeDefined()
      expect(reversaledList).toBeInstanceOf(LinkedList)
      expect(linkedList.length).toBe(3)
      expect(reversaledList.toString()).toBe('3,2,1')
      expect((reversaledList.head as Node).value).toBe(3)
      expect((reversaledList.tail as Node).value).toBe(1)
    })

    it('should do nothing when list is empty', () => {
      const reversaledList = linkedList.reversal()
      expect(reversaledList).toBeDefined()
      expect(reversaledList).toBeInstanceOf(LinkedList)
      expect(reversaledList.toString()).toBe('')
      expect(reversaledList.head).toBe(null)
      expect(reversaledList.tail).toBe(null)
      expect(linkedList.length).toBe(0)
    })
  })
})
