export function getTodayDate() {
  let weekdays = ['일', '월', '화', '수', '목', '금', '토']
  let today = new Date()
  let year = today.getFullYear()
  let month = today.getMonth() + 1
  let day = today.getDate()
  let hours = today.getHours()
  let minutes = today.getMinutes()
  let dayOfWeek = weekdays[today.getDay()]
  month = month < 10 ? '0' + month : month
  day = day < 10 ? '0' + day : day
  let timeOfDay = hours < 12 ? '오전' : '오후'
  hours = hours % 12 || 12
  minutes = minutes < 10 ? '0' + minutes : minutes

  let TodayDateFull = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes} 분 ${timeOfDay} (${dayOfWeek})`
  let TodayData = `${month}월 ${day}일 ${dayOfWeek}요일`
  let currentTime = `${timeOfDay} ${hours}:${minutes}`

  return [ TodayDateFull, TodayData, currentTime ]
}
