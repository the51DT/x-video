<template>
  <div class="phone-container">
    <div class="phone">
      <div class="navigation">
        <navigation></navigation>
      </div>
      <componentPopup type="full">
        <div class="subscriptions-wrap">
        </div>
      </componentPopup>
    </div>
  </div>
</template>

<script setup>
import navigation from '@/layouts/components/Navigation.vue'
import componentPopup from '@/layouts/components/componentPopup.vue'
import '@/assets/scss/shots.scss'
import { ref } from 'vue'
</script>
