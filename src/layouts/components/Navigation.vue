<template>
  <div class="navigation-bar">    
    <!-- nav popup type -->
    <!-- <div class="navigation-button">
      <base-button type="home" @click="handlehome"
        ><span>home</span></base-button
      >
    </div>
    <div class="navigation-button">
      <base-button type="shots" @click="handlePopupShots">
        <span>shots</span>
      </base-button>
    </div>
    <div class="navigation-button navigation-button--update">
      <base-button type="plus" @click="handlePopupUpload">
        <span class="a11y">upload</span></base-button
      >
    </div>
    <div class="navigation-button">
      <base-button type="subscriptions" @click="handleSubscriptions"
        ><span>subscriptions</span></base-button
      >
    </div>
    <div class="navigation-button">
      <base-button type="library" @click="handleLibrary"
        ><span>library</span></base-button
      >
    </div> -->
    <div class="navigation-button">
      <base-button type="home" @click="goHome"> 
          <span>home</span>
      </base-button>
    </div>
    <div class="navigation-button">
      <router-link to="/home">
        <base-button type="shots"> 
          <span>shots</span>
        </base-button>
      </router-link>
    </div>
    <div class="navigation-button navigation-button--update">
      <router-link to="/Update">
        <base-button type="plus"></base-button>
      </router-link>
    </div>
    <div class="navigation-button">
      <router-link to="/Subscriptions">
        <base-button type="subscriptions">
          <span>subscriptions</span>  
        </base-button>
      </router-link>
    </div>
    <div class="navigation-button">      
      <base-button type="library" @click="goLibrary">
        <span>library</span>  
      </base-button>      
    </div>
  </div>
  <!-- nav popup type -->
  <!-- <componentPopup
    type="full"
    v-if="popupupload"
    @closePopup="popupupload = false"
    >popupupload</componentPopup
  >
  <componentPopup
    type="bottomLayer"
    v-if="Subscriptions"
    @closePopup="Subscriptions = false"
    >test2</componentPopup
  >
  <componentPopup
    type="full"
    v-if="Library"
    @closePopup="Library = false"
  >
    <div class="profile">
      <div class="icon-user"></div>
      <div class="user">
        <p class="user-name">Username</p>
        <p class="user-id">@user</p>
        <p class="user-subscribers">12,345 subscribers</p>
      </div>
    </div>
    <div class="library">
      <p class="user-library">최근 시청한 목록</p>
      <div class="library-list">
        <libraryList
          v-for="video in VideoData"
          :key="video.id"
          :video="video"
        />
      </div>
    </div>
  </componentPopup> -->
</template>

<script setup>
import BaseButton from '@/layouts/components/BaseButton.vue'
import componentPopup from '@/layouts/components/componentPopup.vue'
import { ref, defineEmits } from 'vue'

// pinia 
import { storeToRefs } from 'pinia'
import { useUserStore } from "@/stores/user"
import { router } from '../../router'
const userStore = useUserStore()
const userName = ref(userStore.userName)
const emit = defineEmits(['goHome'])
const goHome = () => {
  emit('goHome')
}
// nav popup type
// const home = ref(false)
// const popupShots = ref(false)
// const popupupload = ref(false)
// const Subscriptions = ref(false)
// const Library = ref(false)

// const handlehome = () => {
//   home.value = true
// }

// const handlePopupShots = () => {
//   popupShots.value = true
// }

// const handlePopupUpload = () => {
//   popupupload.value = true
// }

// const handleSubscriptions = () => {
//   Subscriptions.value = true
// }

// const handleLibrary = () => {
//   Library.value = true
// }
const goLibrary = () => {
  if(userStore.isLoggedIn) {
    router.push('/Library')
  } else {
    router.push('/Signup')
  } 
}
</script>