export default (date, seconds) => {
  const secondsElapsed = (date.getTime() - Date.now()) / 1000
  return secondsElapsed <= seconds
}
