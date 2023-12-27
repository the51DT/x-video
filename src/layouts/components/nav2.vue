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
      <router-link to="/popupUpdate" @click="uploadopenModal()">
        <base-button type="plus"></base-button>
        <!-- <span class="a11y">update</span> -->
      </router-link>
    </div>
    <div class="navigation-button">
      <!-- <router-link to="/popupSubscriptions"> -->
        <base-button type="subscriptions" @click="subscriptionsOpenModal()">
          <span>subscriptions</span>
        </base-button>
      <!-- </router-link> -->
    </div>
    <div class="navigation-button">
      <!-- <router-link to="/popupLibrary"> -->
        <base-button type="library" @click="libraryOpenModal()">
          <span>library</span>
        </base-button>
      <!-- </router-link> -->
    </div>
  </div>
  <!-- 모달창 -->
  <div v-if="uploadModalOpen" class="modal modal-upload">
    <button @click="closeModal">닫기</button>
    <!-- 업로드 -->
    <div class="upload">
      <popupUpdate />
    </div>
  </div>
  <div v-if="subscriptionsModalOpen" class="modal modal-subscriptions">
    <div class="subscriptions">
      <button @click="closeModal">닫기</button>
      <popupSubscriptions/>
    </div>
  </div>
  <div v-if="libraryModalOpen" class="modal modal-library">
    <button @click="closeModal">닫기</button>
    <div class="library">
      <popupLibrary />
    </div>
  </div>
</template>

<script setup>
import BaseButton from '@/layouts/components/BaseButton.vue'
import popupUpdate from '@/views/shots/popupUpdate.vue'
import popupSubscriptions from '@/views/shots/popupSubscriptions.vue'
import popupLibrary from '@/views/shots/popupLibrary.vue'
import { ref } from 'vue'
import { RouterLink } from 'vue-router';

const uploadModalOpen = ref(false)
const subscriptionsModalOpen = ref(false)
const libraryModalOpen = ref(false)

const uploadopenModal = () => {
  uploadModalOpen.value = true
  subscriptionsModalOpen.value = false
  libraryModalOpen.value = false
}
const subscriptionsOpenModal = () => {
  uploadModalOpen.value = false
  subscriptionsModalOpen.value = true
  libraryModalOpen.value = false
}
const libraryOpenModal = () => {
  uploadModalOpen.value = false
  subscriptionsModalOpen.value = false
  libraryModalOpen.value = true
}

const closeModal = () => {
  uploadModalOpen.value = false
  subscriptionsModalOpen.value = false
  libraryModalOpen.value = false
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
