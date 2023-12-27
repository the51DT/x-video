<template>
  <div class="page-title__wrap"
    :class="alignType"
  >
    <component :is="getHeadingTag(level)" :class="`page-title${level}`">
      {{ pageTitle }}
      <template  v-if="num !== ''">
        <span class="num">({{ num }})</span>
      </template>      
      <template  v-if="progress !== ''">
        <span class="flag-progress">{{ progress }}</span>
      </template>
    </component>
    <template  v-if="noTicText !== ''">
      <span class="notice-text">* {{ noTicText }}</span>
    </template>
    <template  v-if="link !== ''">
      <Nuxt-link class="btn-more" to="" >더보기</Nuxt-link>
    </template>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue'

  const props = defineProps({
    pageTitle: String,
    level: Number,
    progress: {
      type: String,
      default: ''
    },
    num : {
      type: Number,
      default: ''
    },
    align: String,
    noTicText: {
      type: String,
      default: ''
    },
    link:  {
      type: String,
      default: ''
    },
    alignType: {
      type: String,
      default: ''
    }
  })
  const getHeadingTag = (level) => {
  switch (level) {
      case 2:
        return 'h2'
      case 3:
        return 'h3'
      case 4:
        return 'h4'
      case 4:
        return 'h5'
      case 5:
        return 'h6'
      default:
        return 'h6'
    }
  }
</script>
