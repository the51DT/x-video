<template>
  
  <div class="video-list">
    <div class="video">
      <img
        class="thumbnail"
        :src="video.thumbnail"
        alt="Video Thumbnail"
      />
      <video
        class="video-player"
        :src="video.url"
        autoplay
        muted
        loop
      ></video>
      <div class="video-details">
        <h2>{{ video.title }}</h2>
        <p>{{ video.nickName }} &nbsp; • &nbsp; {{ video.statistics.play_count }} 회</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps(['video']);
</script>