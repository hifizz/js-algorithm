import { DoublyLinkedList } from '../index'
import { Node } from '../Node'

describe('DoublyLinkedList', () => {
  let doublyLinkedList: DoublyLinkedList

  beforeEach(() => {
    doublyLinkedList = new DoublyLinkedList()
  })

  it('should create an empty list', () => {
    const doublyLinkedList = new DoublyLinkedList()
    expect(doublyLinkedList).toBeDefined()
    expect(doublyLinkedList).toBeInstanceOf(DoublyLinkedList)
  })

  describe('Method append()', () => {
    it('should append node to the list', () => {
      doublyLinkedList.append(1)
      expect(doublyLinkedList.toString()).toBe('1')
      expect(doublyLinkedList.size).toBe(1)

      /** 这是一个hack方法，绕过TS检查 */
      const instance: any = doublyLinkedList
      expect(instance._length).toBe(1)
      expect(instance.head).toBe(instance.tail)
      expect(instance.head.value).toBe(1)
      expect(instance.head.next).toBe(null)
      expect(instance.head.prev).toBe(null)
      expect(instance.tail.value).toBe(1)
      expect(instance.tail.next).toBe(null)
      expect(instance.tail.prev).toBe(null)
    })

    it('should append node in preset order', () => {
      doublyLinkedList
        .append(1)
        .append(2)
        .append(3)
      const instance: any = doublyLinkedList

      expect(doublyLinkedList.toString()).toBe('1,2,3')
      expect(doublyLinkedList.size).toBe(3)

      expect(instance.head.value).toBe(1)
      expect(instance.head.prev).toBeNull()
      expect(instance.head.next.value).toBe(2)
      expect(instance.head.next.prev).toBe(instance.head)
      expect(instance.head.next.next).toBe(instance.tail)
      expect(instance.tail.value).toBe(3)
      expect(instance.tail.next).toBe(null)
      expect(instance.tail.prev.value).toBe(2)
    })

    it('should be a chain-called method', () => {
      expect(doublyLinkedList.append(1)).toBe(doublyLinkedList)
      doublyLinkedList
        .append(2)
        .append(3)
        .append(4)
      expect(doublyLinkedList.toString()).toBe('1,2,3,4')
    })
  })

  describe('Method prepend()', () => {
    it('should prepend node to the front of the list', () => {
      doublyLinkedList.prepend(1)
      expect(doublyLinkedList.toString()).toBe('1')
      expect(doublyLinkedList.size).toBe(1)

      /** 这是一个hack方法，绕过TS检查 */
      const instance: any = doublyLinkedList
      expect(instance._length).toBe(1)
      expect(instance.head).toBe(instance.tail)
      expect(instance.head.value).toBe(1)
      expect(instance.head.next).toBe(null)
      expect(instance.tail.value).toBe(1)
      expect(instance.tail.next).toBe(null)

      doublyLinkedList.prepend(2).prepend(3)
      expect(doublyLinkedList.toString()).toBe('3,2,1')
      expect(doublyLinkedList.size).toBe(3)
    })

    it('should be a chain-called method', () => {
      expect(doublyLinkedList.prepend(1)).toBe(doublyLinkedList)
      doublyLinkedList
        .prepend(2)
        .prepend(3)
        .prepend(4)
      expect(doublyLinkedList.toString()).toBe('4,3,2,1')
    })
  })

  describe('Method find()', () => {
    let doublyLinkedList: DoublyLinkedList

    beforeEach(() => {
      doublyLinkedList = new DoublyLinkedList()
      doublyLinkedList
        .append(1)
        .append(2)
        .append(3)
        .append('stackfizz')
    })

    it('should return index when find value', () => {
      expect(doublyLinkedList.find(1)).toBe(0)
      expect(doublyLinkedList.find(3)).toBe(2)
      expect(doublyLinkedList.find('stackfizz')).toBe(3)
    })

    it('should return -1 when not found or list is empty', () => {
      expect(doublyLinkedList.find(9)).toBe(-1)
      const list = new DoublyLinkedList()
      expect(list.find(9)).toBe(-1)
    })
  })

  describe('Method remove()', () => {
    let doublyLinkedList: DoublyLinkedList

    beforeEach(() => {
      doublyLinkedList = new DoublyLinkedList()
      doublyLinkedList
        .append(1)
        .append(2)
        .append(3)
        .append('stackfizz')
    })

    it('should remove target by index', () => {
      doublyLinkedList.remove(2)
      expect(doublyLinkedList.toString()).toBe('1,2,stackfizz')
      const list: any = doublyLinkedList
      expect(list.head.value).toBe(1)
      expect(list.head.prev).toBeNull()
      expect(list.tail.value).toBe('stackfizz')
      expect(list.tail.prev.value).toBe(2)
      expect(list.tail.prev.next).toBe(list.tail)
      expect(list.tail.prev.prev).toBe(list.head)
    })

    it('should remove head without error', () => {
      const deletedNode = doublyLinkedList.remove(0)
      expect(deletedNode).toBeDefined()
      expect((deletedNode as Node).value).toBe(1)
      expect(doublyLinkedList.toString()).toBe('2,3,stackfizz')
      expect(doublyLinkedList.size).toBe(3)
    })

    it('should remove tail without error', () => {
      const deletedNode = doublyLinkedList.remove(3)
      expect(deletedNode).toBeDefined()
      expect((deletedNode as Node).value).toBe('stackfizz')
      expect(doublyLinkedList.toString()).toBe('1,2,3')
      expect(doublyLinkedList.size).toBe(3)
    })
  })

  describe('Method removeHead()', () => {
    it('should return null and do nothing if lsit empty', () => {
      expect(doublyLinkedList.removeHead()).toBeNull()
      expect(doublyLinkedList.toString()).toBe('')
    })

    it('should handle head & tail correctly when list size is 1', () => {
      doublyLinkedList.append(1)
      expect((doublyLinkedList.remove(0) as Node).value).toBe(1)

      const list: any = doublyLinkedList

      expect(list.size).toBe(0)
      expect(list.head).toBeNull()
      expect(list.tail).toBeNull()
    })

    it('should remove head from the front of list', () => {
      doublyLinkedList
        .append(1)
        .append(2)
        .append(3)
      doublyLinkedList.remove(1)

      expect(doublyLinkedList.toString()).toBe('1,3')

      const list: any = doublyLinkedList
      expect(list.head.value).toBe(1)
      expect(list.head.prev).toBeNull()
      expect(list.tail.value).toBe(3)
      expect(list.tail.prev.value).toBe(1)
      expect(list.tail.prev.next).toBe(list.tail)
      expect(list.tail.prev).toBe(list.head)
    })

    it('should return null when idnex invalid', () => {
      expect(doublyLinkedList.remove(-1)).toBe(null)
      expect(doublyLinkedList.remove(100)).toBe(null)
    })
  })

  describe('Method removeTail()', () => {
    it('should do nothing if lsit empty', () => {
      expect(doublyLinkedList.removeTail()).toBeNull()
      expect(doublyLinkedList.toString()).toBe('')
    })

    it('should remove tail', () => {
      doublyLinkedList.append(1)
      expect((doublyLinkedList.removeTail() as Node).value).toBe(1)
      expect(doublyLinkedList.toString()).toBe('')

      const list: any = doublyLinkedList
      expect(list.size).toBe(0)
      expect(list.head).toBeNull()
      expect(list.tail).toBeNull()

      doublyLinkedList
        .append(1)
        .append(2)
        .append(3)
        .append(4)
      doublyLinkedList.removeTail()
      expect(doublyLinkedList.toString()).toBe('1,2,3')

      expect(list.size).toBe(3)
      expect(list.head.value).toBe(1)
      expect(list.head.next.value).toBe(2)
      expect(list.tail.value).toBe(3)
    })
  })

  // describe("Method insertAfter()", () => {
  //   it("should ", () => {})
  // })

  // describe("Method insertBefore()", () => {
  //   it("should ", () => {})
  // })

  describe('Method isEmpty() and Property size', () => {
    let doublyLinkedList = new DoublyLinkedList()

    it('should return isEmpty correctly', () => {
      const list: any = doublyLinkedList

      expect(doublyLinkedList.isEmpty()).toBeTruthy()

      doublyLinkedList.append(1)
      expect(doublyLinkedList.isEmpty()).toBeFalsy()
      expect(list._length).toBe(1)
      expect(doublyLinkedList.size).toBe(1)

      doublyLinkedList.prepend(2)
      expect(doublyLinkedList.isEmpty()).toBeFalsy()
      expect(list._length).toBe(2)
      expect(doublyLinkedList.size).toBe(2)

      doublyLinkedList.remove(0)
      expect(doublyLinkedList.isEmpty()).toBeFalsy()
      expect(list._length).toBe(1)
      expect(doublyLinkedList.size).toBe(1)

      doublyLinkedList.remove(0)
      expect(doublyLinkedList.isEmpty()).toBeTruthy()
      expect(list._length).toBe(0)
      expect(doublyLinkedList.size).toBe(0)
    })
  })

  describe('Method getHead()', () => {
    it('should return head node', () => {
      doublyLinkedList
        .append(1)
        .append(2)
        .append(3)
        .append(4)
      const list: any = doublyLinkedList
      expect(doublyLinkedList.getHead()).toBe(list.head)
    })

    it('should return null if list empty', () => {
      expect(doublyLinkedList.getHead()).toBeNull()
    })
  })

  describe('Method getTail()', () => {
    it('should return tail node', () => {
      doublyLinkedList
        .append(1)
        .append(2)
        .append(3)
        .append(4)
      const list: any = doublyLinkedList
      expect(doublyLinkedList.getTail()).toBe(list.tail)
    })

    it('should return null if list empty', () => {
      expect(doublyLinkedList.getTail()).toBeNull()
    })
  })

  describe('Method toArray()', () => {
    it('should ', () => {
      expect(doublyLinkedList.toString()).toBe('')

      doublyLinkedList.append(1)
      expect(doublyLinkedList.toString()).toBe('1')

      doublyLinkedList.append(2).append(3)
      expect(doublyLinkedList.toString()).toBe('1,2,3')

      const stringHandler = (value: any) => value
      expect(doublyLinkedList.toString(stringHandler)).toBe('1,2,3')
    })
  })

  describe('Method toString()', () => {
    it('should ', () => {
      expect(doublyLinkedList.toArray()).toEqual([])

      doublyLinkedList.append(1)
      expect(doublyLinkedList.toArray()).toEqual([1])

      doublyLinkedList.append(2).append(3)
      expect(doublyLinkedList.toArray()).toEqual([1, 2, 3])
    })
  })
})
