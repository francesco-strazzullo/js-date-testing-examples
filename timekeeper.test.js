import areSecondsElapsedFromNow from './mocking'
import timekeeper from 'timekeeper'

let date

describe('areSecondsElapsedFromNow - timekeeper', () => {
  beforeAll(() => {
    timekeeper.freeze(new Date(0))
    date = {
      getTime: () => 5000
    }
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
    timekeeper.freeze(new Date(0))
  })
})
