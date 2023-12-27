<template>
  <div class="navigation-bar">
    <div class="navigation-button">
      <base-button type="home" @click="handlePopupHome"
        ><span>home</span></base-button
      >
    </div>
    <div class="navigation-button">
      <base-button type="shots" @click="handlePopupShots">
        <span>shots</span>
      </base-button>
    </div>
    <div class="navigation-button navigation-button--update">
      <base-button type="plus" @click="handlePopupUpload">
        <span class="a11y">upload</span></base-button
      >
    </div>
    <div class="navigation-button">
      <base-button type="subscriptions" @click="handlePopupSubscriptions"
        ><span>subscriptions</span></base-button
      >
    </div>
    <div class="navigation-button">
      <base-button type="library" @click="handlePopupLibrary"
        ><span>library</span></base-button
      >
    </div>
  </div>
  <!-- <div v-if="uploadModalOpen" class="modal modal-upload">
    <button @click="closeModal">닫기</button>
    <div class="upload">영상 업로드</div>
  </div> -->
  <!-- <componentPopup
    type="full"
    v-if="popupUpload"
    @closePopup="popupupload = false"
    >test1</componentPopup
  > -->
  <componentPopup
    type="full"
    v-if="popupupload"
    @closePopup="popupupload = false"
    >popupupload</componentPopup
  >
  <componentPopup
    type="bottomLayer"
    v-if="popupSubscriptions"
    @closePopup="popupSubscriptions = false"
    >test2</componentPopup
  >
  <componentPopup
    type="full"
    v-if="popupLibrary"
    @closePopup="popupLibrary = false"
    >test3</componentPopup
  >
</template>

<script setup>
import BaseButton from '@/layouts/components/BaseButton.vue'
import componentPopup from '@/layouts/components/componentPopup.vue'
import { ref, defineEmits } from 'vue'

const popupHome = ref(false)
const popupShots = ref(false)
const popupupload = ref(false)
const popupSubscriptions = ref(false)
const popupLibrary = ref(false)

const handlePopupHome = () => {
  popupHome.value = true
}

const handlePopupShots = () => {
  popupShots.value = true
}

const handlePopupUpload = () => {
  popupupload.value = true
}

const handlePopupSubscriptions = () => {
  popupSubscriptions.value = true
}

const handlePopupLibrary = () => {
  popupLibrary.value = true
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
