import LinkedListNode from '../LinkedListNode'

describe('LinkedListNode', () => {

  it('should create list node', () => {
    const nodeValue = { name: 'Henrik', key: 'test' }
    const node = new LinkedListNode(nodeValue)

    expect(node.data).toStrictEqual(nodeValue)
    expect(node.next).toBeNull()
  })

  it('should convert node to string', () => {
    const node1 = new LinkedListNode(1)
    expect(node1.toValue()).toBe('1')
  })

  it('should convert node to string with custom callback', () => {
    const nodeValue = { name: 'Henrik', title: 'Engineer' }
    const node = new LinkedListNode(nodeValue)
    const toStringCallback = data => `name: ${data.name}, title: ${data.title}`
    expect(node.toValue(toStringCallback)).toBe('name: Henrik, title: Engineer')
  })

  it('should convert node to object with custom callback', () => {
    const nodeValue = { name: 'Henrik', title: 'Engineer' }
    const node = new LinkedListNode(nodeValue)
    const toObjectCallback = data => data
    expect(node.toValue(toObjectCallback)).toStrictEqual(nodeValue)
  })



})
