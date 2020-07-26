import {
  arrayEqual,
  arrayLooseEqual,
  arrayGt,
  arrayLt,
  arrayDeepEqual,
  arrayDeepGt,
  arrayDeepLt
} from '../ArrayComparator'

describe('ArrayComparator', () => {
  it('should compare arrays with scalar values', () => {
    let arrA = ['1', '2', '3', '4', '5']
    let arrB = ['1', '2', '3', '4', '5']
    let arrC = ['1', '2', '1', '0', '0']
    let arrD = [1, 2, 3, '4', '5']

    expect(arrayEqual(arrA)(arrB)).toBe(true)
    expect(arrayEqual(arrA)(arrC)).toBe(false)

    expect(arrayLooseEqual(arrA)(arrD)).toBe(true)
    expect(arrayLooseEqual(arrC)(arrD)).toBe(false)

    expect(arrayGt(arrA)(arrC)).toBe(true)
  })
})
