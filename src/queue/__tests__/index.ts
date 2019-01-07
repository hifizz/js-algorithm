import { Queue } from '../index'

describe("Queue", () => {
  it("should create an empty queue", () => {
    const queue = new Queue();
    expect(queue).not.toBeNull();
    expect(queue.length).toBe(0);
  })

  it("should enqueue data to queue", () => {
    const queue = new Queue()
    queue.enqueue(1)
    queue.enqueue(2)
    expect(queue.toString()).toBe('1,2')
  })

  it("should have length for queue correctly", () => {
    const queue = new Queue();
    expect(queue.length).toBe(0);
    queue.enqueue(1)
    queue.enqueue(2)
    expect(queue.length).toBe(2);
  })

  it("should dequeue from queue in FIFO order", () => {
    const queue = new Queue()
    queue.enqueue(1)
    queue.enqueue(2)

    expect(queue.dequeue()).toBe(1);
    expect(queue.length).toBe(1)
    expect(queue.toString()).toBe('2')

    expect(queue.dequeue()).toBe(2);
    expect(queue.length).toBe(0)
    expect(queue.toString()).toBe('')
  })

  it("should enqueue/dequeue any data to/from queue", () => {
    const queue = new Queue()

    const valueTest = [
      {a: "test", b: 123},
      [],
      () => {/** */}
    ]

    valueTest.forEach((item) => {
      queue.enqueue(item)
    })

    expect(queue.length).toBe(valueTest.length)
    expect(queue.toString()).toEqual(valueTest.toString())

    valueTest.forEach((item) => {
      queue.dequeue()
    })

    expect(queue.length).toBe(0)
    expect(queue.toString()).toEqual('')
  })

  it("should return isEmpty for queue", () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBeTruthy();
    queue.enqueue(1)
    queue.enqueue(2)
    expect(queue.isEmpty()).toBeFalsy()
  })

  it("should return length for queue correctly", () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBeTruthy();
    queue.enqueue(1)
    queue.enqueue(2)
    expect(queue.isEmpty()).toBeFalsy()
  })

  it("should peek item from queue", () => {
    const queue = new Queue();

    expect(queue.peek()).toBe(null);

    queue.enqueue(1)
    queue.enqueue(2)

    expect(queue.peek()).toBe(1);
    expect(queue.peek()).toBe(1);

    queue.dequeue()

    expect(queue.peek()).toBe(2);

    queue.dequeue()

    expect(queue.peek()).toBe(null);
    expect(queue.peek()).toBe(null);
  })
})
