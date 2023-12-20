<template>
  <div class="video-swipe" :ref="videoSwipeRef">
      <swiper v-bind="swiperOptions">
        <swiper-slide v-for="(video, index) in videos" :key="index" class="video">
          <video :src="video.url" controls autoplay></video>
          <div class="video-details">
            <h2>{{ video.title }}</h2>
            <p>{{ video.nickName }} • {{ video.uploadtime }}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';

const props = defineProps(['videos']);
const videoSwipeRef = ref(null);

const swiperOptions = {
  direction: 'vertical',
  loop: true,
};
</script>

<style scoped>
</style>