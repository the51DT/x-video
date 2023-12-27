<template>
  <div :class="`navigation-modal ${type}`">
    <!-- 기본 타입 : full / 레이어 팝업 - bottom : bottomLayer  -->
    <div class="navigation-modal__inner" :style="{ 'padding-top': paddingTop }">
      <div class="navigation-modal__container">
        <div class="navigation-modal__content">
          <!-- 팝업 컨텐츠 영역 slot 으로 추가  -->
          <slot></slot>
        </div>
        <!-- <div class="navigation-modal__util">
          // 1
          <button class="navigation-modal__btn-close" @click="closePopup">
            <span class="a11y">close</span>
          </button>

          // 2
          <button class="navigation-modal__btn-close">
            <router-link to="/shots">
              <span class="a11y">close</span>
            </router-link>
          </button> 
        </div> -->
      </div>
    </div>
    <div class="navigation-modal__dim" v-if="!type"></div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['type'])
const emits = defineEmits(['closePopup'])

console.log(props)

const closePopup = () => {
  console.log('closePop')
  emits('closePopup')
}
</script>
<style lang="scss">
$desktop: 'screen and (min-width : 769px)';
.navigation-modal {
  z-index: 10;
  position: fixed;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 100%;
  max-width: 360px;
  max-height: 720px;
  transform: translate(-50%, -50%);
  &.hide {
    display: none;
  }
  &.show {
    display: block;
  }
  &__inner {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  &__container {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 40px 40px 20px;
    background: #fff;
  }
  &__util {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 30px;
    height: 30px;
    border: 1px solid;
  }
  &__dim {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
  &.bottomLayer {
    .navigation-modal {
      &__inner {
        position: absolute;
        left: 0;
        bottom: 0;
        padding-top: 300px;
        box-sizing: border-box;
        z-index: 10;
        @media ($desktop) {
          padding-top: 600px;
        }
      }
    }
  }
}
</style>
