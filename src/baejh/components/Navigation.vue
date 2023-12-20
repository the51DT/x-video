<template>
  <div class="navigation-bar">
    <base-button type="home"></base-button>
    <base-button type="shots"></base-button>
    <base-button type="plus" @click="uploadopenModal()"></base-button>
    <base-button type="subscriptions" @click="mypageopenModal()"></base-button>
    <base-button type="library" @click="mypageopenModal()"></base-button>
  </div>
  <!-- 모달창 -->
  <div v-if="uploadModalOpen" class="modal modal-upload">
    <button @click="closeModal">닫기</button>
      <!-- 업로드 -->
      <div class="upload">
        영상 업로드
      </div>
  </div>
  <div v-if="mypageModalOpen" class="modal modal-mypage">
    <button @click="closeModal">닫기</button>
      <!-- 마이페이지 -->
      <div class="mypage">
        마이페이지
      </div>
  </div>
</template>

<script setup>
import BaseButton from "@/baejh/components/BaseButton.vue";
import { ref } from 'vue';

const uploadModalOpen = ref(false);
const mypageModalOpen = ref(false);

const uploadopenModal = () => {
  uploadModalOpen.value = true;
  mypageModalOpen.value = false;
};

const mypageopenModal = () => {
  mypageModalOpen.value = true;
  uploadModalOpen.value = false;
};

const closeModal = () => {
  uploadModalOpen.value = false;
  mypageModalOpen.value = false;
};
</script>

<style scoped>
</style>