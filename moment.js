import moment from 'moment'

export default (date, seconds) => {
  const difference = moment(date).diff(moment())
  const secondsElapsed = moment.duration(difference).seconds()
  return secondsElapsed <= seconds
}
