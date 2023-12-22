<template>
  <div class="phone-container">
    <div class="phone">
      <div class="screen">
        <div class="video">
          <test :videos="videoList"></test>
        </div>
      </div>
      <div class="navigation">
          <navigation></navigation>
      </div>
    </div>
  </div>
</template>

<script setup>
import navigation from "@/baejh/components/Navigation.vue";
import swipe from "@/baejh/components/Swipe.vue";
import test from "@/baejh/components/test.vue";
import VideoData from "@/baejh/components/videoList.js";
import '@/assets/scss/baejh.scss';
import { ref } from 'vue';

const videoList = ref(VideoData)

</script>
