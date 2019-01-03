import {LinkedList} from "../index"
import {Node} from "../Node"

describe("LinkedList class", () => {
  let linkedList: LinkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  })

  it("should create a LinkedList instance", () => {
    const linkedList = new LinkedList();

    expect(linkedList).toBeInstanceOf(Object)
    expect(linkedList.head).toBe(null)
    expect(linkedList.tail).toBe(null)
  })

  describe("Method append()", () => {
    it("should be a chain method", () => {
      linkedList.append(1).append(2).append(3);
      expect(linkedList.head).toBeDefined();
      expect(linkedList.tail).toBeDefined();
      expect((linkedList.head as Node).value).toBe(1);
      expect((linkedList.tail as Node).value).toBe(3);
    })

    it("should append a node to linkedlist", () => {
      linkedList.append(1);

      expect(linkedList.head).toBeDefined();
      expect(linkedList.head).toBeInstanceOf(Node);
      expect(linkedList.tail).toBeDefined();
      expect(linkedList.tail).toBeInstanceOf(Node);

      expect((linkedList.head as Node).value).toBe(1);
      expect((linkedList.head as Node).next).toBe(null);
      expect((linkedList.tail as Node).value).toBe(1);
      expect((linkedList.tail as Node).next).toBe(null);

      expect(linkedList.head).toBe(linkedList.tail);
    })

    it("should append 2 values be linked", () => {
      linkedList.append(1).append(2);

      expect((linkedList.head as Node).value).toBe(1)
      expect(((linkedList.head as Node).next as Node).value).toBe(2)

      expect((linkedList.head as Node).value).toBe(1);
      expect((linkedList.tail as Node).value).toBe(2);

      linkedList.append(3);
      expect((linkedList.head as Node).value).toBe(1);
      expect((linkedList.tail as Node).value).toBe(3);
    })
  })

  describe("Method find()", () => {
    it("should have find method", () => {
      expect(linkedList).toHaveProperty("find")
      expect(linkedList.find).toBeInstanceOf(Function)
    })

    it("should return null if not found", () => {
      linkedList.append(1).append(2).append(3).append(4).append(5)

      const findNode = linkedList.find(6)
      expect(findNode).toBe(null);
    })

    it("should return the first node if found the value", () => {
      linkedList.append(5).append(4).append(1).append(2).append(3);

      const findNode = linkedList.find(1)
      expect((findNode as Node).value).toBe(1);
      expect((findNode as Node).next).toBeDefined();
      expect(((findNode as Node).next as Node).value).toBe(2);

      linkedList.append(1);
      const findNode2 = linkedList.find(1)
      expect((findNode2 as Node).value).toBe(1);
      expect((findNode2 as Node).next).toBeDefined();
      expect(((findNode2 as Node).next as Node).value).toBe(2);
    })
  })

  describe("Method delete()", () => {
    it("should have delete method", () => {
      expect(linkedList).toHaveProperty("delete")
      expect(linkedList.delete).toBeInstanceOf(Function)
    })

    it("should delete nothing if not found value", () => {
      linkedList.append(1).append(2).append(3)

      const deletedNode = linkedList.delete(6)
      expect(deletedNode).toBe(null);
      expect((linkedList.head as Node).value).toBe(1);
      expect(((linkedList.head as Node).next as Node).value).toBe(2);
      expect((linkedList.tail as Node).value).toBe(3);
      expect((linkedList.tail as Node).next).toBe(null);
    })

    it("should delete value from list", () => {
      linkedList.append(1).append(2).append(3)

      const deletedNode = linkedList.delete(3)
      expect((deletedNode as Node).value).toBe(3);
      expect((linkedList.head as Node).value).toBe(1);
      expect(((linkedList.head as Node).next as Node).value).toBe(2);
      expect((linkedList.tail as Node).value).toBe(2);
      expect((linkedList.tail as Node).next).toBe(null);

      linkedList.append(3)

      const deletedNode2 = linkedList.delete(1)
      expect((deletedNode2 as Node).value).toBe(1);
      expect((linkedList.head as Node).value).toBe(2);
      expect((linkedList.tail as Node).value).toBe(3);

      linkedList.delete(1)
      linkedList.delete(2)
      linkedList.delete(3)

      expect(linkedList.head).toBe(null);
      expect(linkedList.tail).toBe(null);
    })
  })

  describe("Method isEmpty()", () => {
    it("should return boolean", () => {
      const isEmptyFunc = jest.fn(() => {
        return linkedList.isEmpty();
      })

      isEmptyFunc();
      expect(isEmptyFunc).toHaveReturned()
      expect(isEmptyFunc.mock.results[0]).toBeTruthy()

      linkedList.append(1)

      isEmptyFunc();
      expect(isEmptyFunc).toHaveReturned()
      expect(isEmptyFunc.mock.results[2]).toBeFalsy()
    })
  })

  // TODO: 当前查找一个值是通过比较值来实现的，这对于查找值的前置节点带来不便
  // 如果查找的值正是head节点，那么它没有前置节点
  // 查找的值不在链表上的时候，也没有前置节点
  describe("Method findPrevious()", () => {
    it("should return previous node before of value", () => {
      // linkedList.append(1).append(2).append(3);
      // const prevNode = linkedList.findPrevious(3);

      // expect(prevNode).toBeDefined();
      // expect((prevNode as Node).value).toBe(2);
    })
  })

})
