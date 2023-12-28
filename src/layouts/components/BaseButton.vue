<template>
  <button
    :class="`base-button base-button--${props.type} ${
      props.isActive ? 'active' : ''
    }`"
    @click="toggle"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
const props = defineProps(['type', 'isActive', 'disabled'])
const emit = defineEmits()

const toggle = () => {
  console.log('Button clicked')
  emit('toggle', !props.active)
  console.log('!props.active::', !props.active)
}
</script>