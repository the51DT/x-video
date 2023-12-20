<template>
  <img
    v-if="type === 'img'"
    :class="`mySwiper__type-${type}`"
    :src="src"
    :alt="title"
    :key="title"
    :ref="`${mediaRef}`"
  />
  <iframe
    v-if="type === 'iframe'"
    :class="`mySwiper__type-${type}`"
    width="100%"
    height="100%"
    :src="`https://www.youtube.com/embed/${src}?autoplay=1`"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    :ref="`${mediaRef}`"
  />
  <video
    v-if="type === 'video'"
    autoplay
    muted
    loop="loop"
    x-webkit-airplay="true"
    webkit-playsinline="true"
    playsinline="true"
    x5-video-player-type="h5"
    x5-video-player-fullscreen="true"
    :class="`mySwiper__type-${type}`"
    :mediaControl="`${mediaControl}`"
    :ref="`${mediaRef}`"
  >
    <source :src="src" type="video/webm" />
  </video>
  <!-- 
      1. 영상 재생/정지 버튼 (video, iframe)
      2. 슬라이드 스크롤시 버튼 비노출 처리
    -->
  <div
    :class="`btn-wrap btn-wrap--media ${
      mediaControl ? 'btn-wrap--media--active' : ''
    }`"
  >
    <div class="btn-wrap__btn btn-wrap__btn--icon">
      <btnComponent
        btnType="icon"
        :btnName="`${mediaControl == true ? 'play' : 'stop'}`"
        :mediaControl="mediaControl"
        @click="$emit('toggleMedia')"
      />
    </div>
    <!-- <div class="btn-wrap__btn btn-wrap__btn--icon">
      <btnComponent
        btnType="icon"
        btnName="pause"
        :mediaControl="mediaControl"
        @click="mediaControl(mediaControl)"
      />
    </div> -->
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
import btnComponent from '@/bchoi/layout/btnComponent.vue'

// const toggleMedia = () => {
//   console.log('child')
//   const video = props.mediaRef.value

//   if (video) {
//     if (props.mediaControl) {
//       video.play()
//     } else {
//       video.pause()
//     }
//   }
// }

const props = defineProps({
  type: {
    type: String,
    default: '',
  },
  src: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  mediaControl: {
    type: Boolean,
    default: '',
  },
  mediaRef: {
    type: String,
    default: '',
  },
})

// const toggleMedia = () => {
//   const video = videoRef.value
//   console.log(video)
//   if (video) {
//     if (props.mediaControl) {
//       video.play()
//     } else {
//       video.pause()
//     }
//   }
// }
</script>
<style lang="scss">
.container {
  &--slide {
    .mySwiper {
      height: 100%;
      &__type-img {
        width: 100%;
        height: 100%;
      }
      &__type-iframe {
        width: 100%;
      }
      &__type-video {
        width: 100%;
        height: 100vh;
        object-fit: fill;
      }
    }
  }
}
</style>
