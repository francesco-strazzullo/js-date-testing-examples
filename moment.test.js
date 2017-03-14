import areSecondsElapsedFromNow from './moment'
import { fn } from 'moment'

let originalDuration = fn.diff
let date

describe('areSecondsElapsedFromNow - moment', () => {
  beforeAll(() => {
    fn.diff = () => 5000
  })

  it('should return false if less seconds than the second parameter are passed', () => {
    expect(areSecondsElapsedFromNow(date, 4)).toBe(false)
  })

  it('should return true if more seconds than the second parameter are passed', () => {
    expect(areSecondsElapsedFromNow(date, 6)).toBe(true)
  })

  it('should return true if the same seconds as the second parameter are passed', () => {
    expect(areSecondsElapsedFromNow(date, 5)).toBe(true)
  })

  afterAll(() => {
    fn.diff = originalDuration
  })
})
