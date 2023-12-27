<template>
  <div class="update__form__item">
    <label for="title">{{ props.title }}</label>
    <div class="input-box">
      <input
        type="text"
        placeholder="`${d}`"
        id="url"
        class="input-box__input-text"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps, defineEmits } from 'vue'
const props = defineProps(['title', 'labelFor', 'placeholder', 'url', 'class'])
</script>
