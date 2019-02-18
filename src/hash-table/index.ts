import { LinkedList } from '../linked-list'

/**
 * 默认的表格大小为32
 * hash表大小可以根据使用者的需要进行传值定制
 */
const defaultTableSize = 32

export interface IHashTableKeys {
  [key: string]: any
}

export class HashTable {
  public buckets: LinkedList[]
  public keys: IHashTableKeys

  constructor(tableSize = defaultTableSize) {
    this.buckets = Array(tableSize)
      .fill(null)
      .map(() => new LinkedList())
    this.keys = {}
  }

  /**
   * 散列函数，采用除法散列
   * @param key {string} 需要散列的函数
   * @returns {number}
   */
  public hash(key: string): number {
    const hash = Array.from(key).reduce((accumulator: number, character: string): number => {
      return (accumulator += character.charCodeAt(0))
    }, 0)

    // 目前这里通过除法散列或者对应的位置
    return hash % this.buckets.length
  }

  /**
   * 设置散列值和value
   * @param key {string}
   * @param value {any}
   * @returns {void}
   */
  public set(key: string, value: any) {
    const keyHash = this.hash(key)
    this.keys[key] = keyHash
    const bucketLinkedList = this.buckets[keyHash]
    const node = bucketLinkedList.find(key, (nodeValue: any) => {
      return nodeValue.key === key
    })

    if (!node) {
      bucketLinkedList.append({ key, value })
    } else {
      node.value.value = value
    }
  }

  /**
   * 获取对应的值
   * @param key {string}
   */
  public get(key: string): any | undefined {
    const bucketLinkedList = this.buckets[this.hash(key)]
    const node = bucketLinkedList.find(key, (nodeValue: any) => {
      return nodeValue.key === key
    })

    return node ? node.value.value : undefined
  }

  /**
   * 删除指定的值
   * @param key 需要删除的值
   */
  public delete(key: string): any | null {
    const keyHash = this.hash(key)
    delete this.keys[key]
    const bucketLinkedList = this.buckets[keyHash]
    const deleteNode = bucketLinkedList.delete(key, (nodeValue: any) => {
      return nodeValue.key === key
    })

    return deleteNode ? deleteNode.value.value : null
  }

  /**
   * 查询是否有key及其value存在
   * @param key {string}
   * @returns {boolean}
   *
   * @tips 这里是借用了this.keys这个映射来快速的返回key是否在hash-table里面
   */
  public has(key: string): boolean {
    return this.keys.hasOwnProperty(key)
  }

  /**
   * 返回 keys 的映射表
   * @returns {string[]}
   */
  public getKeys(): string[] {
    return Object.keys(this.keys)
  }
}
