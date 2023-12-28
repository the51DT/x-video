<template>
  <div class="wrap">    
    <router-view></router-view>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()    
</script>