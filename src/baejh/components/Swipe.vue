<template>
  <div class="video-swipe" :ref="videoSwipeRef">
      <swiper v-bind="swiperOptions" ref="swiperRef">
        <swiper-slide v-for="(video, index) in videos" :key="index" class="video">
          <video :src="video.url" loop muted controls autoplay="autoplay"></video>
          <!-- <button @click="toggleVideo">{{ isPlaying ? '일시정지' : '재생' }}</button> -->
          <div class="video-details">
            <h2>{{ video.title }}</h2>
            <p>{{ video.nickName }} &nbsp; • &nbsp; {{ video.uploadtime }}</p>
          </div>
          <div class="button-bar statistics">
            <div>
              <base-button type="like" :class="{ active: isActive }" :is-active="video.active" @toggle="handleToggle(video)"></base-button>
              <span>{{ video.statistics.like_count }}</span>
            </div>
            <div>
              <base-button type="comments" @click="commentopenModal(video)"></base-button>
              <span>{{ video.statistics.comment_count }}</span>
            </div>
            <div>
              <base-button type="share" @click="shareopenModal(video)"></base-button>
              <span>{{ video.statistics.share_count }}</span>
            </div>
          </div>
          <!-- 모달창 -->
          <div v-if="commentModalOpen" class="modal modal-comment">
            <button @click="closeModal">닫기</button>
              <!-- 댓글 -->
              <div class="comments">
                <div v-for="(comment, commentIndex) in video.comments" :key="commentIndex" class="comment">
                  <p class="comment-user">{{ comment.nickName }} &nbsp; • &nbsp; {{ comment.writeTime }}</p>
                  <p>{{ comment.user_comment }}</p>
                </div>
              </div>
          </div>
          <div v-if="shareModalOpen" class="modal modal-share">
            <button @click="closeModal">닫기</button>
              <!-- 공유 -->
              <div class="share">
                공유
              </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

</template>

<script setup>
import BaseButton from "@/baejh/components/BaseButton.vue";
import { defineProps, ref, onMounted } from 'vue';
import SwiperCore, { Mousewheel } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';

SwiperCore.use([Mousewheel]);

const props = defineProps(['videos']);
const videoSwipeRef = ref(null);
const swiperRef = ref(null);
const isActive = ref(false);
const commentModalOpen = ref(false);
const shareModalOpen = ref(false);
const myVideo = ref(null);
const isPlaying = ref(false);

onMounted(() => {
  const swiperInstance = swiperRef.value.swiper;
  if (swiperInstance) {
    swiperInstance.on('slideChange', () => {
      console.log('Slide changed!');
    });
  }
});

const handleToggle = (video) => {
  isActive.value = !isActive.value;
  video.statistics.like_count++ 
};

const toggleVideo = () => {
  const video = myVideo.value;
  if (video) {
    // console.log('toggleVideo called:', isActive);
    if (isPlaying.value) {
      video.pause();
    } else {
      video.play();
    }
    isPlaying.value = !isPlaying.value;
  }
};

const commentopenModal = (video) => {
  commentModalOpen.value = true;
  shareModalOpen.value = false;
};

const shareopenModal = (video) => {
  shareModalOpen.value = true;
  commentModalOpen.value = false;
};

const closeModal = () => {
  commentModalOpen.value = false;
  shareModalOpen.value = false;
};

const swiperOptions = {
  direction: 'vertical',
  loop: true,
  mousewheel: true,
};
</script>

<style scoped>
</style>