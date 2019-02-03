import { HashTable } from '../index'
import { LinkedList } from '../../linked-list'

describe('Hash table', () => {
  let hashTable: HashTable

  const testValue = { key: 'a', value: 'test' }

  beforeAll(() => {
    hashTable = new HashTable()
  })

  describe('constructor', () => {
    it('should create a new hash table with passed table size', () => {
      const hashTable = new HashTable()
      expect(hashTable.buckets.length).toBe(32)
      expect(Object.keys(hashTable.keys)).toEqual([])
      const hashTable1 = new HashTable(100)
      expect(hashTable1.buckets.length).toBe(100)
      expect(Object.keys(hashTable.keys)).toEqual([])
    })
  })

  describe('hash()', () => {
    it('should return a hash number', () => {
      const hashNumber = hashTable.hash('a')
      expect(hashNumber).toBe(1)
    })
  })

  describe('set()', () => {
    it('should set value with key', () => {
      const result = hashTable.set('a', testValue)
      expect(result).toBe(undefined)
      expect(Object.keys(hashTable.keys)).toEqual(['a'])
      expect(hashTable.buckets[1]).toBeInstanceOf(LinkedList)
      expect((hashTable.buckets[1].head as any).value.value).toBe(testValue)
    })

    it('should cover the old value if set same key', () => {
      const aValue = { key: 'b', value: 'test value b' }
      const bValue = { key: 'b', value: 'test value a' }
      hashTable.set('b', aValue)
      hashTable.set('b', bValue)
      expect(hashTable.keys.hasOwnProperty('b')).toBe(true)
      expect(hashTable.keys.b).toBe(2)
    })
  })

  describe('get()', () => {
    it('should return the value with key', () => {
      expect(hashTable.get('a')).toBe(testValue)
      expect(Object.keys(hashTable.keys)).toEqual(['a', 'b'])
      expect(hashTable.buckets[1]).toBeInstanceOf(LinkedList)
      expect((hashTable.buckets[1].head as any).value.value).toEqual(testValue)
    })

    it('should return undefined if not found the value', () => {
      expect(hashTable.get('aaa')).toBe(undefined)
    })
  })

  describe('has()', () => {
    it('should return boolean', () => {
      expect(hashTable.has('a')).toBeTruthy()
    })

    it('should return false if have not key', () => {
      expect(hashTable.has('aaa')).toBeFalsy()
    })
  })

  describe('getKeys()', () => {
    it('should return keys Array', () => {
      expect(hashTable.getKeys()).toEqual(['a', 'b'])
    })
  })

  describe('delete()', () => {
    it('should delete the key and value', () => {
      const deleteValue = hashTable.delete('a')
      expect(deleteValue).toBeDefined()
      expect(deleteValue).toBe(testValue)
      expect(Object.keys(hashTable.keys)).toEqual(['b'])
      expect(hashTable.buckets[1].isEmpty()).toBe(true)
    })

    it('should return undefined if not found the value', () => {
      expect(hashTable.delete('aaa')).toBe(null)
    })
  })
})
