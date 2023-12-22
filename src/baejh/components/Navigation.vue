<template>
  <div class="navigation-bar">
    <div class="navigation-button">
      <base-button type="home" to="/home"> <span>home</span></base-button>
    </div>
    <div class="navigation-button">
      <base-button type="shots" text="shots" to="/shots">
        <span>shots</span>
      </base-button>
    </div>
    <div class="navigation-button navigation-button--update">
      <base-button type="plus" @click="uploadopenModal()"
        ><span class="a11y">update</span></base-button
      >
    </div>
    <div class="navigation-button">
      <base-button type="subscriptions" text="" to="/home"
        ><span>subscriptions</span></base-button
      >
    </div>
    <div class="navigation-button">
      <base-button type="library" text="" to="/home">
        <span>library</span></base-button
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
import BaseButton from '@/baejh/components/BaseButton.vue'
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

<style scoped></style>
