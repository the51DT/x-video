<template>
  <div class="phone-container">
    <div class="phone">
      <div class="navigation">
        <navigation></navigation>
      </div>
      <componentPopup type="full">
        <div class="library-wrap">
          <div class="profile">
            <div class="icon-user">user icon</div>
            <div class="user">
              <p class="user-name">Username</p>
              <p class="user-subscribers">420 thousand subscribers</p>
              <p class="user-subscribers"></p>
            </div>
          </div>
          <div class="video-list"></div>
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
