/**
 * 점검 로직이 필요할 경우 이곳에 정리
 */
import envs from '@/envs'

export function isMobile() {
  const mobileArr = [
    'iPhone',
    'iPod',
    'BlackBerry',
    'Android',
    'Windows CE',
    'LG',
    'MOT',
    'SAMSUNG',
    'SonyEricsson'
  ]

  for (let txt in mobileArr) {
    if (navigator.userAgent.match(mobileArr[txt]) != null) {
      return true
    }
  }

  return false
}

export function getAgentType() {
  const agentTypes = ['Electron', 'Cordova', 'Android', 'iOS', 'Windows', 'OSX']

  let checkedTypes = []

  for (let idx in agentTypes) {
    if (navigator.userAgent.match(agentTypes[idx]) != null) {
      checkedTypes.push(agentTypes[idx])
    }
  }

  if (checkedTypes.includes('Electron')) return 'Electron'
  if (checkedTypes.includes('Cordova')) return 'HybridWeb'
  if (checkedTypes.includes('Android') || checkedTypes.includes('iOS')) {
    return 'MobileWeb'
  }

  return 'PCWeb'
}

export function isUseAPI() {
  // local 개발 환경 flag
  let isLocal = process.env.NODE_ENV !== 'production'

  if (envs.framework.onlyMockup) return false

  return !isLocal || envs.framework.useRestfulMockup
}

// 빈 값 체크
export function isEmpty(value) {
  let result = false
  if (typeof value === 'number') {
    if (value === 0) {
      return true
    }
  } else if (typeof value === 'string') {
    if (value === '' || value.length === 0) {
      return true
    }
  } else if (typeof value === 'object') {
    if (Array.isArray(value)) {
      if (value.length === 0) {
        return true
      }
    } else {
      if (Object.keys(value).length === 0) {
        return true
      }
    }
  }
  return result
}

// 아이디 검사를 위한 정규식
// 4-12자의 영문 대소문자 숫자 로만 입력 가능
export function isUserId(userId) {
  const regId = /^[a-zA-Z0-9]{4,12}$/

  if (regId.test(userId)) {
    return true
  }

  return false
}

// 비밀번호 검사를 위한 정규식
// 영문, 숫자 조합 10자리 이상, 영문, 숫자, 특수문자 조합 8자리 이상
export function isPw(pw) {
  const regEn = /[a-z]/g
  const regNum = /[0-9]/g
  const regCh = /[~!@#$%<>^&*()]/g

  // 영문, 숫자 조합 10자리 이상
  if (regEn.test(pw) && regNum.test(pw) && pw.length >= 10) {
    return true
  }

  // 영문, 숫자, 특수문자 조합 8자리 이상
  if (regEn.test(pw) && regNum.test(pw) && regCh.test(pw) && pw.length >= 8) {
    return true
  }

  return false
}

// email 검사를 위한 정규식
export function isEmail(email) {
  const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i

  if (regEmail.test(email)) {
    return true
  }

  return false
}

// 휴대폰번호 검사를 위한 정규식
export function isPhoneNumber(phoneNumber) {
  const regPhoneNumber = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})([0-9]{3,4})([0-9]{4})$/

  if (regPhoneNumber.test(phoneNumber)) {
    return true
  }

  return false
}

// url 검사를 위한 정규식
export function isUrl(urlAdd) {
  const regUrl = /^(https?):\/\/([0-9a-zA-Z|-]+\.)+[a-zA-Z]{2,6}(|:[0-9]+)?(\/\S*)?/

  if (regUrl.test(urlAdd)) {
    return true
  }

  return false
}

// 사업자 등록번호 유효성 검사
export function checkBizRegNum(bizRegNum) {
  const checkID = [1, 3, 7, 1, 3, 7, 1, 3, 5, 1]
  let chkSum = 0
  let c2
  let remander
  bizRegNum = bizRegNum.replace(/-/gi, '')

  for (let i = 0; i <= 7; i++) chkSum += checkID[i] * bizRegNum.charAt(i)
  c2 = '0' + checkID[8] * bizRegNum.charAt(8)
  c2 = c2.substring(c2.length - 2, c2.length)
  chkSum += Math.floor(c2.charAt(0)) + Math.floor(c2.charAt(1))
  remander = (10 - (chkSum % 10)) % 10

  if (Math.floor(bizRegNum.charAt(9)) === remander) return true
  return false
}

export function ignoreChar($event, types) {
  let str = $event.target.value
  for (let type of types) {
    switch (type) {
      case 'WHITESPACE':
        str = str.replace(/\s/g, '')
        break
      case 'KOR':
        str = str.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, '')
        break
      case 'ENG':
        str = str.replace(/[A-Z]/gi, '')
        break
      case 'NUM':
        str = str.replace(/[0-9]/g, '')
        break
    }
  }
  return str
}

export function uniqValue(a) {
  let seen = {}
  return a.filter(function(item) {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true)
  })
}

// 휴대폰번호만 검사를 위한 정규식
export function isOnlyPhoneNumber(phoneNumber) {
  const regPhoneNumber = /^(01[016789]{1})([0-9]{4})([0-9]{4})$/

  return regPhoneNumber.test(phoneNumber)
}
