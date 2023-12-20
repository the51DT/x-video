<template>
  <div class="main-guide">
    <h1>작업 안내</h1>
    <h2>URL</h2>
    <button @click="$router.push('/main')">최봄</button>

    <h2>기본 설치 사양</h2>
    <div class="description">
      <p>git clone https://github.com/honghao30/the51-style.git</p>
      <p>Vue3.3.4, vuetify : 3.4.0, element-plus: 2.4.1, swiper: 6.4.6</p>
      <p>cd 폴더</p>
      <p>npm install</p>
      <p>
        여러버전의 node 가 필요하기에 nvm 필요할수 있음<br />
        nvm -v # nvm 설치되었는지 버전 확인 <br />
        nvm list available # 사용가능한 node 버전 확인<br />
        nvm list # 설치된 모든 node 버전 확인<br />
        nvm install 16.15.1 # 특정 node 버전 설치<br />
        nvm use 16.15.1 # 특정 node 버전 사용<br />
        node -v ​
      </p>
    </div>
    <h2>라이브러리</h2>
    <div class="description">
      <p>레이아웃은 vuetify, element-plus를 활용하셔도 됩니다.</p>
    </div>
    <h2>라우터</h2>
    <div class="description">
      <p>페이지 생성시, 라우터 추가 필수</p>
    </div>
    <h2>프로젝트 설명</h2>
    <div class="description">
      <p>X-VIDEO 쇼츠 플랫폼</p>
      <p>
        디자인 참고는 틱톡 혹은 유튜브중 원하는대로 참조.<br />
        아이콘 https://www.svgrepo.com/svg/457336/play<br />
        영상 상하 스와이핑,<br />
        좋아요! 즐겨찾기 버튼 및 기능<br />
        클릭시 영상 멈춤, 다시 클릭시 영상 재생<br />
        스와이핑 후 돌아올시 멈추었던 시점부터 재생<br />
        더블 클릭시 하트(좋아요)<br />
        공유하기 기능(레이어까지)<br />
        즐겨찾기 영상만 따로 모아보기<br />
        재생 완료 시 자동 스와이핑
      </p>
    </div>
    <h2>사전 작업...</h2>
    <div class="description">
      <p>
        <strong>swiper : </strong><br />
        swiper를 활용해 다양한 슬라이드 구현
      </p>
      <p>swiper change 이벤트 활용</p>
    </div>
    <div class="description">
      <p>
        <strong>컴포넌트 만들기 </strong><br />
        자주 사용할 컴포넌트를 플러그인으로 등록
      </p>
    </div>
    <div class="description">
      <p>
        <strong>버튼 컴포넌트: </strong><br />
        버튼 태그에 props로 크기, 색상,아이콘,버튼명을 전달하고 클릭 이벤트등을
        부모 컴포넌트에 emit을 해야 한다.
      </p>
      <p>좋아요, 즐겨찾기 버튼 구현</p>
    </div>
    <div class="description">
      <p>
        <strong>모달창 : </strong><br />
        버튼 클릭시 모달창 호출/배경 딤처리, 윈도우 스크롤 막기 등 기능 구현,
      </p>
      <p>모달창의 제목등은 props로 전달한다.</p>
      <p>Teleport, slot등을 활용해볼수 있다.</p>
    </div>

    <div class="description">
      <p>
        <strong>input: </strong><br />
        input 을 컴포넌트로 구현 한다.
      </p>
      <p>input 컴포넌트는 text,password 타입을 정할수 있어야 한다.</p>
      <p>로그인, 회원가입을 구현한다.</p>
      <p>v-model등 활용,</p>
    </div>

    <div class="description">
      <p>
        <strong>API 활용 : </strong><br />
        영화 예고편 api를 활용해 영상 불러오기
      </p>
    </div>

    <h2>참고사항</h2>
    <h2>버전별 차이점</h2>
    <div class="description">
      <p>아래 블로그 링크 참고</p>
      <p>https://engineer-mole.tistory.com/419</p>
      <p>https://mine-it-record.tistory.com/640</p>
    </div>
    <div class="description">
      created() {<br />
      // this.userInfo.userId =<br />
      // DOM이 만들어 지기 전 실행 되는 곳<br />
      // Data를 사전에 준비할 경우 사용된다.<br />
      },<br /><br />
      mounted() {<br />
      // DOM에 해당 .vue가 들어가게 되면 실행 되는 곳<br />
      // onload 상태와 동일하다. DOM 이후에 조작할 경우 이곳에서 수행<br />
      this.getCorpInfo()<br />
      },<br /><br />
      computed: {<br />
      // 값이 자주 변경됨에 따라, 관련되어 데이터 혹은 view가 바뀌어야 할 경우
      사용<br />
      // method를 바로 연결하면 tic 단위로 계속 실행되기 때문에, 값이 변경할
      때만 수행되고,<br />
      // cache로 남는 computed를 활용하는 것이 성능에 좋음<br />
      // authReqListFlag() {<br />
      // return this.authReqListCheck<br />
      // },<br />
      // reqListFlag() {<br />
      // return this.reqListCheck<br />
      // }<br />
      },​
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
</script>

<style lang="scss" scoped>
.main-guide {
  width: 100%;
  max-width: 1020px;
  margin: 0 auto;
  padding: 50px 0;
  h1 {
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    line-height: 30px;
  }
  h2 {
    font-size: 16px;
    font-weight: 500;
    margin: 20px 0 10px;
  }
  .description {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    & + .description {
      margin-top: 10px;
    }
  }
}
</style>
