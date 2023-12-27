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
      <componentPopup type="full" id="Update">
        <p>test Update</p>
      </componentPopup>
    </div>
  </div>
</template>

<script setup>
import navigation from '@/layouts/components/Navigation.vue'
import swipe from '@/layouts/components/Swipe.vue'
import componentPopup from '@/layouts/components/componentPopup.vue'
import VideoData from '@/layouts/components/videoList.js'
import '@/assets/scss/index.scss'
import { ref } from 'vue'

const videoList = ref(VideoData)
</script>
