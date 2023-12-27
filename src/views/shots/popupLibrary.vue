<template>
  <div class="phone-container">
    <div class="phone">
      <div class="library-wrap">
        <componentPopup type="full">
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
        </componentPopup>
      </div>
      <div class="navigation">
        <navigation></navigation>
      </div>
    </div>
  </div>
</template>

<script setup>
import navigation from '@/layouts/components/Navigation.vue'
import componentPopup from '@/layouts/components/componentPopup.vue'
import libraryList from '@/layouts/components/libraryList.vue'
import VideoData from '@/layouts/components/videoList.js'
import '@/assets/scss/shots.scss'
import '@/assets/scss/library.scss'
import { ref } from 'vue'

const videoList = ref(VideoData)
</script>
