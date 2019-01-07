import { Stack } from '../index'

describe('Stack', () => {
  let stack: Stack

  beforeEach(() => {
    stack = new Stack()
  })

  it('should create a empty Stack', () => {
    const stack: Stack = new Stack()
    expect(stack).toBeDefined()
    expect(stack).toBeInstanceOf(Stack)
    expect(stack.toString()).toBe('')
  })

  it('shoule push value', () => {
    /** */
    stack.push(1)
    expect(stack.toString()).toBe('1')
    stack.push(1)
    expect(stack.toString()).toBe('1,1')
  })

  it('shoule pop value', () => {
    stack.push(1)
    expect(stack.toString()).toBe('1')
    stack.pop()
    expect(stack.toString()).toBe('')
  })

  it('shoule push/pop value in LIFO order', () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.toString()).toBe('1,2,3')
    expect(stack.pop()).toBe(3)
    expect(stack.toString()).toBe('1,2')
    expect(stack.pop()).toBe(2)
    expect(stack.toString()).toBe('1')
    expect(stack.pop()).toBe(1)
    expect(stack.toString()).toBe('')
  })

  it('shoule return isEmpty', () => {
    expect(stack.isEmpty()).toBeTruthy()
    stack.push(1)
    expect(stack.isEmpty()).toBeFalsy()
    stack.push(2)
    expect(stack.isEmpty()).toBeFalsy()
    stack.pop()
    stack.pop()
    expect(stack.isEmpty()).toBeTruthy()
  })

  it('shoule set size correctly', () => {
    expect(stack.size).toBe(0)
    stack.push(1)
    expect(stack.size).toBe(1)
    stack.push(1)
    expect(stack.size).toBe(2)
    stack.pop()
    stack.pop()
    expect(stack.size).toBe(0)
  })

  it('shoule return null when list is empty', () => {
    expect(stack.isEmpty()).toBeTruthy()
    expect(stack.pop()).toBe(null)
  })
})
