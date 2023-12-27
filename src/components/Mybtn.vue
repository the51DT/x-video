<template>
  <button
    type="button"    
    :class="[iconOnly ? 'btn-' + iconName : [types, color, size, 'btn-' + iconName, iconDirection]]"
    :disabled="disabled"    
  >
    <slot name="svg-icon"></slot>
    <!-- // slot 으로 svg 아이콘 -->
    <i
      v-if="iconName !== ''"
      :class="iconName"    
    >
      <img v-if="svgIcon" :src="`/images/icon/${svgIcon}.svg`" :alt="buttonName" />
      <span v-if="iconOnly" class="irtext">{{ buttonName }}</span>
    </i>
    <template v-if="!iconOnly">
      {{ buttonName }}
    </template>    
    <template v-if="Counter !== ''">
      <div class="counter">
        {{ Counter }}
      </div>      
    </template>    
  </button>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  buttonName: {
    type: String,
    default: '버튼명 미지정'
  },
  types: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  },  
  size: {
    type: String,
    default: ''
  },
  Counter: {
    type: Number,
    default: ''
  },    
  iconName: {
    type: String,
    default: ''
  },
  iconOnly: {
    type: Boolean,
    default: false
  },
  iconDirection: {
    type: String,
    default: ''
  },
  svgIcon: {
    type: String,
    default: ''
  }
})
</script>