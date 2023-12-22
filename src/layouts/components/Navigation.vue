<template>
  <div class="navigation-bar">
    <div class="navigation-button">
      <base-button type="home"><span>home</span></base-button>
    </div>
    <div class="navigation-button">
      <base-button type="shots">
        <span>shots</span>
      </base-button>
    </div>
    <div class="navigation-button navigation-button--update">
      <!-- <base-button type="plus" @click="uploadopenModal()"
        ></base-button
      > -->
      <router-link to="/popupUpdate" class="base-button base-button--plus"
        ><span class="a11y">update</span></router-link
      >
    </div>
    <div class="navigation-button">
      <!-- <base-button type="subscriptions"><span>subscriptions</span></base-button> -->
      <router-link
        to="/popupSubscriptions"
        class="base-button base-button--subscriptions"
        ><span>subscriptions</span></router-link
      >
    </div>
    <div class="navigation-button">
      <!-- <base-button type="library"><span>library</span></base-button> -->
      <router-link to="/popupLibrary" class="base-button base-button--library"
        ><span>library</span></router-link
      >
    </div>
  </div>
  <!-- 모달창 -->
  <div v-if="uploadModalOpen" class="modal modal-upload">
    <button @click="closeModal">닫기</button>
    <!-- 업로드 -->
    <div class="upload">영상 업로드</div>
  </div>
</template>

<script setup>
import BaseButton from '@/layouts/components/BaseButton.vue'
import { ref } from 'vue'

const uploadModalOpen = ref(false)
const mypageModalOpen = ref(false)

const uploadopenModal = () => {
  uploadModalOpen.value = true
  mypageModalOpen.value = false
}

const closeModal = () => {
  uploadModalOpen.value = false
  mypageModalOpen.value = false
}
</script>

<style lang="scss">
.base-button--shots:before {
  /* 숏츠 버튼 */
  display: block;
  content: '';
  clear: both;
  margin: 0 auto;
  width: 30px;
  height: 26px;
  background: url(@/assets/icon/shots.svg) center / contain no-repeat;
  vertical-align: middle;
  /* padding: 14px; */
}
.base-button--plus:before {
  /* 더보기 버튼 */
  display: block;
  content: '';
  clear: both;
  margin: 0 auto;
  width: 42px;
  height: 42px;
  background: url(@/assets/icon/plus.svg) center / contain no-repeat;
  vertical-align: middle;
  /* padding: 29px; */
}
.base-button--subscriptions:before {
  /* 구독 버튼 */
  display: block;
  content: '';
  clear: both;
  margin: 0 auto;
  width: 28px;
  height: 28px;
  background: url(@/assets/icon/subscriptions.svg) center / contain no-repeat;
  vertical-align: middle;
}
.base-button--library:before {
  /* 라이브러리 버튼 */
  display: block;
  content: '';
  clear: both;
  margin: 0 auto;
  width: 28px;
  height: 28px;

  background: url(@/assets/icon/library.svg) center / contain no-repeat;
  vertical-align: middle;
}
</style>
