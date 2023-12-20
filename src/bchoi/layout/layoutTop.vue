<template>
  <div class="container container--top">
    <div class="btn-wrap">
      <div class="btn-wrap__btn btn-wrap__btn--icon"></div>
      <div class="btn-wrap__btn btn-wrap__btn--icon">
        <btnComponent
          btnType="icon"
          btnName="setting"
          :isActive="false"
          @click="emit('toggleMenu')"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import btnComponent from '@/bchoi/layout/btnComponent.vue'
import popupComponent from '@/bchoi/layout/popup.vue'
</script>
<style lang="scss">
$desktop: 'min-width : 769px';
@media ($desktop) {
}
.container {
  &--top {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 750px;
    z-index: 10;
    .btn-wrap {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      gap: 10px;
      &__btn {
        &--icon {
          .btn {
            &:before {
              display: block;
              content: '';
              clear: both;
              width: 35px;
              height: 35px;
              @media ($desktop) {
                width: 50px;
                height: 50px;
              }
            }
          }
          &--setting {
            &::before {
              background: url('/src/assets/images/icon/btn-icon-setting.svg')
                center / contain no-repeat;
            }
          }
        }
      }
    }
  }
}
</style>
