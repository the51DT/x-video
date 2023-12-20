
const CHOSEONG = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']

export function getChoseong(str) {
  str = str.replace(/\s/g, '')
  let code = ''
  let result = ''
  for (let i = 0; i < str.length; i++) {
    code = str.charCodeAt(i) - 44032
    if (code > -1 && code < 11172) {
      result += CHOSEONG[Math.floor(code / 588)]
    } else {
      result += str.charAt(i)
    }
  }
  return result
}

/**
 * 연속 초성 모음을 리턴한다.
 * @param {string} str
 * ex) 일ㅇㅅㅅ오육ㅊㅍ구s십 ==> [ㅇㅅㅅ, ㅊㅍ]
 */
export function consecutiveChoseong(str) {
  let letter = ''
  let result = []
  for (let i = 0; i < str.length; i++) {
    if (isChoseongOnly(str.charAt(i))) {
      letter += str.charAt(i)
    } else {
      if (letter !== '') {
        result.push(letter)
        letter = ''
      }
    }
  }
  if (letter !== '') {
    result.push(letter)
  }
  return result
}

/**
 * 초성이외의 연속글자 모음을 리턴한다.
 * @param {string} str
 * ex) 일ㅇㅅㅅ오육ㅊㅍ구s1십 ==> [일, 오육, 구s1십]
 */
export function consecutiveLetter(str) {
  let letter = ''
  let result = []
  for (let i = 0; i < str.length; i++) {
    if (isChoseongOnly(str.charAt(i))) {
      if (letter !== '') {
        result.push(letter)
        letter = ''
      }
    } else {
      // 입력된 문자가 특수문자이면 escape 처리
      let specRegex = /[~!@#$%^&*()[\]_.+|<>?:{}]/
      if (specRegex.test(str.charAt(i))) letter += '\\' + str.charAt(i)
      else letter += str.charAt(i)
    }
  }
  if (letter !== '') {
    result.push(letter)
  }
  return result
}

export function isChoseongOnly(str) {
  return str.match(/^[ㄱ-ㅎ]+$/)
}

export function hasChoseong(str) {
  return str.match(/[ㄱ-ㅎ]/)
}

/**
 * 원문에서 like 검색을 한다
 * @param {string} str : 원문
 * @param {array} like : 초성 검색어
 */
export function searchLike(str, like) {
  let regex = ''
  like.forEach(s => { regex += s + '.*' })
  return str.replace(/\s/g, '').match(new RegExp(regex, 'i'))
}
