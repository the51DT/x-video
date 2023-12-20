<template>
  <div>
    <base-button type="like" :is-active="isLiked" @toggle="handleToggle"></base-button>
    <base-button type="comments"></base-button>
    <base-button type="share"></base-button>
  </div>
</template>

<script setup>
import BaseButton from "@/baejh/components/BaseButton.vue";
import { ref } from 'vue';

const isLiked = ref(false);
const isDisabled = ref(false);

const handleToggle = (isActive) => {
  isLiked.value = isActive;
};
</script>

<style scoped>
  div {
    background-color: gray;
    padding: 10px;
    display: flex;
    gap: 10px;
  }
</style>