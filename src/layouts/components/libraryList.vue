<template>
  
  <div class="video-list">
    <div class="video" @mouseover="playVideo" @mouseout="pauseVideo">
      <img
        class="thumbnail"
        :src="video.thumbnail"
        alt="Video Thumbnail"
      />
      <video
        class="video-player"
        v-if="video.playing"
        :src="video.url"
        autoplay
        @ended="pauseVideo"
      ></video>
      <div class="video-details">
        <h2>{{ video.title }}</h2>
        <p>{{ video.nickName }} &nbsp; • &nbsp; {{ video.statistics.play_count }} 회</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps(['video']);

const playVideo = () => {
  props.video.playing = true;
};

const pauseVideo = () => {
  props.video.playing = false;
};
</script>