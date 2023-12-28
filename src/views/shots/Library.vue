<template>
  <div class="phone-container">
    <div class="phone">
      <div class="screen">
        <div class="library-wrap">
            <div class="profile">
              <div class="icon-user"></div>
              <div class="user">
                <p class="user-name">{{ userName ? userName : '' }}</p>
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
        </div>
      </div>
      <div class="navigation">
        <navigation></navigation>
      </div>
    </div>
  </div>
</template>

<script setup>
import navigation from '@/layouts/components/Navigation.vue'
import libraryList from '@/layouts/components/libraryList.vue'
import VideoData from '@/layouts/components/videoList.js'
import '@/assets/scss/index.scss'
import { ref } from 'vue'

const videoList = ref(VideoData)

// 로그인 체크
import { storeToRefs } from 'pinia'
import { useUserStore } from "@/stores/user"
const userStore = useUserStore()
const userName = ref(userStore.userName)
console.log('유저', userName)

</script>
