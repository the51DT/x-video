<template>
  <div class="phone-container">
    <div class="phone">
      <div class="screen">
        <div class="video">
          <swipe :videos="videoList"></swipe>
        </div>
      </div>
      <div class="navigation">
        <navigation />
      </div>
      <div v-if="popupOpen" class="popup">
        <div class="popup-detail">
          <p class="content">
            보다 더 원활한 서비스를 위하여<br />X-VIDEO는 쿠키를 사용합니다
          </p>
          <button class="button-close" @click="closeModal">허용</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import navigation from '@/layouts/components/Navigation.vue'
import swipe from '@/layouts/components/Swipe.vue'
import VideoData from '@/layouts/components/videoList.js'
import '@/assets/scss/shots.scss'
import { ref } from 'vue'

const popupOpen = ref(true)
const videoList = ref(VideoData)
// const popupUpdate = ref(false)
// const popupSubscriptions = ref(false)
// const popupLibrary = ref(false)
const { emit } = defineEmits()

const closeModal = () => {
  popupOpen.value = false
  console.log('shots.vue')
}
</script>
