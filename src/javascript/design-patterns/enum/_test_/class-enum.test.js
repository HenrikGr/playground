import { Color } from '../class-enums'

describe('Class Enums', () => {

  it('should create list node', () => {

    expect(Color.red.enumKey).toStrictEqual('red')
    expect(Color.red.enumOrdinal).toStrictEqual(0)
    expect(Color.enumKeys).toStrictEqual(['red', 'orange', 'yellow', 'green', 'blue', 'purple'])
    expect(Color.enumValueOf('red')).toStrictEqual(Color.red)

  })

})
