export const areSecondsElapsedFromNowFactory = now => {
  return (date, seconds) => {
    const secondsElapsed = (date.getTime() - now()) / 1000
    return secondsElapsed <= seconds
  }
}

export const areSecondsElapsedFromNow = areSecondsElapsedFromNowFactory(Date.now)
