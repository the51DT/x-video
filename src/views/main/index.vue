<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="0"
    navigation
    :pagination="{ clickable: false }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>
      <img src="@/assets/images/main/main02.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/images/main/main01.jpg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/images/main/main03.jpg" alt="">
    </swiper-slide>     
  </swiper>
</template>

<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
  };
</script>

<style>

</style>
