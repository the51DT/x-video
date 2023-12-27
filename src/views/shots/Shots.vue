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
            보다 더 원활한 서비스를 위하여<br />X-VIDEO는 로컬 스토리지를
            사용합니다
          </p>
          <button class="button-close" @click="allowAuth">허용</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import
import axios from 'axios'
import navigation from '@/layouts/components/Navigation.vue'
import swipe from '@/layouts/components/Swipe.vue'
import VideoData from '@/layouts/components/videoList.js'
import '@/assets/scss/shots.scss'
import { ref, watch, computed, onMounted, nextTick } from 'vue'
import { router } from '../../router'
import { getShort } from '@/api/getData'

const videoList = ref(VideoData)
const popupOpen = ref()
const { emit } = defineEmits()
const { MemberList, VideoList } = getShort()

onMounted(() => {
  const getMember = JSON.parse(localStorage.getItem('xMember'))
  const getVideo = JSON.parse(localStorage.getItem('xVideo'))
  if (!getMember && !getVideo) {
    popupOpen.value = ref(true)
  }
})
// function
const allowAuth = () => {
  // 비디오 로컬 저장
  const videoData = JSON.stringify(VideoList)
  window.localStorage.setItem('xMember', videoData)
  // 회원 로컬 저장
  const memberData = JSON.stringify(MemberList)
  window.localStorage.setItem('xVideo', memberData)
  popupOpen.value = false
}
</script>
