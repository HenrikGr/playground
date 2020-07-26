import LinkedList from '../LinkedList'
import Comparator from '../../../design-patterns/comparator/Comparator'


describe('LinkedList', () => {

  const arrayValue = ['Henrik', 'Lars', 'Karl']
  const objectValue = { name: 'Henrik', title: 'Engineer'}
  const stringValue = 'ABC'

  it('should create empty linked list', () => {
    const linkedList = new LinkedList()
    expect(linkedList.size()).toBe(0)
    expect(linkedList.get(0)).toBeNull()
  })

  it('should append nodes to linked list', () => {
    const linkedList = new LinkedList()

    // add at the end of the list
    linkedList.append(arrayValue)
    expect(linkedList.size()).toBe(1)
    expect(linkedList.get(0).data).toStrictEqual(arrayValue)
    expect(linkedList.get(0).next).toBeNull()

    linkedList.append(objectValue)
    expect(linkedList.size()).toBe(2)
    expect(linkedList.get(0).data).toStrictEqual(arrayValue)
    expect(linkedList.get(0).next).toBeDefined()
    expect(linkedList.get(1).data).toStrictEqual(objectValue)
    expect(linkedList.get(1).next).toBeNull()

    linkedList.append(stringValue)
    expect(linkedList.size()).toBe(3)
    expect(linkedList.get(0).data).toStrictEqual(arrayValue)
    expect(linkedList.get(0).next).toBeDefined()
    expect(linkedList.get(1).data).toStrictEqual(objectValue)
    expect(linkedList.get(1).next).toBeDefined()
    expect(linkedList.get(2).data).toStrictEqual(stringValue)
    expect(linkedList.get(2).next).toBeNull()
  })

  it('should insert nodes by index to linked list', () => {
    const linkedList = new LinkedList()

    // default index equals to 0
    linkedList.insertAt(stringValue)
    expect(linkedList.size()).toBe(1)
    expect(linkedList.get(0).data).toStrictEqual(stringValue)

    // insert at the head
    linkedList.insertAt(objectValue, 0)
    expect(linkedList.size()).toBe(2)
    expect(linkedList.get(0).data).toStrictEqual(objectValue)
    expect(linkedList.get(1).data).toStrictEqual(stringValue)

    // insert at the end
    linkedList.insertAt(arrayValue, 2)
    expect(linkedList.size()).toBe(3)
    expect(linkedList.get(0).data).toStrictEqual(objectValue)
    expect(linkedList.get(0).next).toBeDefined()
    expect(linkedList.get(1).data).toStrictEqual(stringValue)
    expect(linkedList.get(1).next).toBeDefined()
    expect(linkedList.get(2).data).toStrictEqual(arrayValue)
    expect(linkedList.get(2).next).toBeNull()
  })

  it('should delete node by index from linked list', () => {
    const linkedList = new LinkedList()

    linkedList.append(stringValue)
    linkedList.append(objectValue)
    linkedList.append(arrayValue)

    // remove from the end
    linkedList.removeFrom(2)
    expect(linkedList.size()).toBe(2)
    expect(linkedList.get(0).data).toStrictEqual(stringValue)
    expect(linkedList.get(0).next).toBeDefined()
    expect(linkedList.get(1).data).toStrictEqual(objectValue)
    expect(linkedList.get(1).next).toBeNull()

    // remove from the beginning
    linkedList.removeFrom(0)
    expect(linkedList.size()).toBe(1)
    expect(linkedList.get(0).data).toStrictEqual(objectValue)
    expect(linkedList.get(0).next).toBeNull()

  })

  it('should delete node by value from linked list', () => {
    const linkedList = new LinkedList()

    linkedList.append(stringValue)
    linkedList.append(objectValue)
    linkedList.append(arrayValue)

    // Remove by value
    linkedList.remove(objectValue)
    expect(linkedList.size()).toBe(2)
    expect(linkedList.get(0).data).toStrictEqual(stringValue)
    expect(linkedList.get(0).next).toBeDefined()
    expect(linkedList.get(1).data).toStrictEqual(arrayValue)
    expect(linkedList.get(1).next).toBeNull()

    linkedList.remove(stringValue)
    expect(linkedList.size()).toBe(1)
    expect(linkedList.get(0).data).toStrictEqual(arrayValue)
    expect(linkedList.get(0).next).toBeNull()

  })

  it('should get node by index from linked list', () => {
    const linkedList = new LinkedList()

    linkedList.append(stringValue)
    linkedList.append(objectValue)
    linkedList.append(arrayValue)

    expect(linkedList.size()).toBe(3)
    expect(linkedList.get(0).data).toStrictEqual(stringValue)
    expect(linkedList.get(0).next).toBeDefined()
    expect(linkedList.get(1).data).toStrictEqual(objectValue)
    expect(linkedList.get(1).next).toBeDefined()
    expect(linkedList.get(2).data).toStrictEqual(arrayValue)
    expect(linkedList.get(2).next).toBeNull()
  })

  it('should get data by array destruction from linked list', () => {
    const linkedList = new LinkedList()

    linkedList.append(stringValue)
    linkedList.append(objectValue)
    linkedList.append(arrayValue)

    let arr = [...linkedList]
    expect(arr).toStrictEqual([stringValue, objectValue, arrayValue])

    arr = [...linkedList.values()]
    expect(arr).toStrictEqual([stringValue, objectValue, arrayValue])

  })

  it('should get data by iterator from linked list', () => {
    const linkedList = new LinkedList()

    linkedList.append(stringValue)
    linkedList.append(objectValue)
    linkedList.append(arrayValue)

    let it = linkedList.values()
    let result = it.next()
    expect(result.value).toStrictEqual(stringValue)
    expect(result.done).toBeFalsy()

    result = it.next()
    expect(result.value).toStrictEqual(objectValue)
    expect(result.done).toBeFalsy()

    result = it.next()
    expect(result.value).toStrictEqual(arrayValue)
    expect(result.done).toBeFalsy()

    result = it.next()
    expect(result.value).toBeUndefined()
    expect(result.done).toBeTruthy()

  })


  it('should be possible to store objects in the list and to print them out', () => {
    //const linkedList = new LinkedList()

    //const nodeValue1 = { value: 1, key: 'key1' }
    //const nodeValue2 = { value: 2, key: 'key2' }

    //linkedList.append(nodeValue1).prepend(nodeValue2)

    //const nodeStringifier = value => `${value.key}:${value.value}`

    //expect(linkedList.toString(nodeStringifier)).toBe('key2:2,key1:1')
  })

  it('should find node by value', () => {
    //const linkedList = new LinkedList()

    //expect(linkedList.find({ value: 5 })).toBeNull()

    //linkedList.append(1)
    //expect(linkedList.find({ value: 1 })).toBeDefined()

    //linkedList.append(2).append(3)

    //const node = linkedList.find({ value: 2 })

    //expect(node.value).toBe(2)
    //expect(linkedList.find({ value: 5 })).toBeNull()
  })

  it('should find node by callback', () => {
    //const linkedList = new LinkedList()

    //linkedList
    //  .append({ value: 1, key: 'test1' })
    //  .append({ value: 2, key: 'test2' })
    //  .append({ value: 3, key: 'test3' })

    //const node = linkedList.find({ callback: value => value.key === 'test2' })

    //expect(node).toBeDefined()
    //expect(node.value.value).toBe(2)
    //expect(node.value.key).toBe('test2')
    //expect(linkedList.find({ callback: value => value.key === 'test5' })).toBeNull()
  })

  it('should create linked list from array', () => {
    //const linkedList = new LinkedList()
    //linkedList.fromArray([1, 1, 2, 3, 3, 3, 4, 5])

    //expect(linkedList.toString()).toBe('1,1,2,3,3,3,4,5')
  })

})
