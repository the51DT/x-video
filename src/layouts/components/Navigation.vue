<template>
  <div class="navigation-bar">
    <!-- nav popup type -->
    <!-- <div class="navigation-button">
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
    </div> -->
    <div class="navigation-button">
      <base-button type="home" to="/home"> <span>home</span></base-button>
    </div>
    <div class="navigation-button">
      <base-button type="shots" to="/shots"> <span>shots</span></base-button>
    </div>
    <div class="navigation-button navigation-button--update">
      <router-link to="/popupUpdate" class="base-button base-button--plus"
        ><span class="a11y">update</span></router-link
      >
    </div>
    <div class="navigation-button">
      <router-link
        to="/popupSubscriptions"
        class="base-button base-button--subscriptions"
        ><span>subscriptions</span></router-link
      >
    </div>
    <div class="navigation-button">
      <router-link to="/popupLibrary" class="base-button base-button--library"
        ><span>library</span></router-link
      >
    </div>
  </div>
  <!-- nav popup type -->
  <!-- <componentPopup
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
  >
    <div class="profile">
      <div class="icon-user"></div>
      <div class="user">
        <p class="user-name">Username</p>
        <p class="user-id">@user</p>
        <p class="user-subscribers">12,345 subscribers</p>
      </div>
    </div>
    <div class="library">
      <p class="user-library">최근 시청한 목록</p>
      <div class="library-list">
        <libraryList
          v-for="video in VideoData"
          :key="video.id"
          :video="video"
        />
      </div>
    </div>
  </componentPopup> -->
</template>

<script setup>
import BaseButton from '@/layouts/components/BaseButton.vue'
import componentPopup from '@/layouts/components/componentPopup.vue'
import { ref, defineEmits } from 'vue'

// nav popup type
// const popupHome = ref(false)
// const popupShots = ref(false)
// const popupupload = ref(false)
// const popupSubscriptions = ref(false)
// const popupLibrary = ref(false)

// const handlePopupHome = () => {
//   popupHome.value = true
// }

// const handlePopupShots = () => {
//   popupShots.value = true
// }

// const handlePopupUpload = () => {
//   popupupload.value = true
// }

// const handlePopupSubscriptions = () => {
//   popupSubscriptions.value = true
// }

// const handlePopupLibrary = () => {
//   popupLibrary.value = true
// }
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
