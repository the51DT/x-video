<template>
  <div class="phone-container">
    <div class="phone">
      <div class="screen">
        <div class="video">
          <swipe :videos="videoList"></swipe>
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
import swipe from '@/layouts/components/Swipe.vue'
import VideoData from '@/layouts/components/videoList.js'
import '@/assets/scss/shots.scss'
import { ref } from 'vue'

const videoList = ref(VideoData)
</script>
