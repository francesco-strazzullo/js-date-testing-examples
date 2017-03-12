import areSecondsElapsedFromNow from './mocking'

let originalNow = Date.now
let originalGetTime = Date.prototype.getTime
let date

/* eslint-disable no-extend-native */
describe('areSecondsElapsedFromNow', () => {
  beforeAll(() => {
    date = new Date()
    Date.now = () => 0
    Date.prototype.getTime = () => 5000
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
    Date.now = originalNow
    Date.prototype.getTime = originalGetTime
  })
})
