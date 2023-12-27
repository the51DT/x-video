
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

  // url 검사를 위한 정규식
  export function isUrl(urlAdd) {
    const regUrl = /^(https?):\/\/([0-9a-zA-Z|-]+\.)+[a-zA-Z]{2,6}(|:[0-9]+)?(\/\S*)?/
  
    if (regUrl.test(urlAdd)) {
      return true
    }
  
    return false
  }

  // 한글 체크
  export function isKor(value) {
    let checkKor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    if (checkKor.test(value)) {
      return true
    }  
    return false 
  }
  // 특수문자 체크
  export function chSp(value) {
    const regCh = /[~!@#$%<>^&*()]/g;
    if (regCh.test(value)) {
      return true
    }  
    return false 
  }

  // 유틸 
  export function randomId() {
    let N = 1000000;
    let M = 1;
    let tt = Math.random()*N;
    return Math.floor(tt)+M;
  }