import { areSecondsElapsedFromNowFactory } from './dependencyInjection'

const now = () => 0
const dummyDate = {
  getTime: () => 5000
}

const areSecondsElapsedFromNow = areSecondsElapsedFromNowFactory(now)

describe('areSecondsElapsedFromNow - dependency injection', () => {
  it('should return false if less seconds than the second parameter are passed', () => {
    expect(areSecondsElapsedFromNow(dummyDate, 4)).toBe(false)
  })

  it('should return true if more seconds than the second parameter are passed', () => {
    expect(areSecondsElapsedFromNow(dummyDate, 6)).toBe(true)
  })

  it('should return true if the same seconds as the second parameter are passed', () => {
    expect(areSecondsElapsedFromNow(dummyDate, 5)).toBe(true)
  })
})
