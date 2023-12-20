<template>
  <div class="slide-info">
    <div class="slide-info__inner">
      <div class="slide-info__text-box">
        <span class="slide-info__text slide-info__text--title">{{
          title
        }}</span>
      </div>
      <div class="slide-info__util-box">
        <span class="slide-info__text slide-info__text--author">{{
          author
        }}</span>
        <span class="slide-info__text slide-info__text--date">{{ date }}</span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  author: {
    type: String,
    default: '',
  },
  date: {
    type: String,
    default: '',
  },
})
</script>
<style lang="scss">
.container {
  &--slide {
    .slide-info {
      position: absolute;
      left: 0;
      bottom: 0;
      // background: rgba(0, 0, 0, 0.3);
      box-sizing: border-box;
      width: 100%;

      &__inner {
        padding: 20px 10px 50px;
      }
      &__util-box {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        column-gap: 10px;

        .slide-info__text + .slide-info__text {
          &:before {
            display: inline-block;
            content: '';
            clear: both;
            margin-right: 10px;
            width: 1px;
            height: 10px;
            background: #fff;
          }
        }
      }
      &__text {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #fff;
        font-size: 15px;
      }
    }
  }
}
</style>
