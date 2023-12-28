<template>
  <div class="phone-container">
    <div class="phone">
      <div class="screen">
        <div class="update-wrap">
          <Title :level="2" pageTitle="UPDATE" />
          <p class="page-desc">컨텐츠를 추가할 수 있습니다.</p>
          <div class="update__form">
            <componentInput
              v-model="vSelected"
              inputType="select"
              labelTitle="Type"
              labelForId="type"
              placeholder="Type"
              name="type"
              :options="addedSelectOptions"
              @update:modelValue="changeSelect"
            />
            <template
              v-if="vSelected == 'upload'"
              :class="vSelected == 'upload' ? 'show' : 'hide'"
            >
              <!-- type: upload template -->
              <componentInput
                v-model="vupload"
                inputType="file"
                labelTitle="Upload"
                labelForId="upload"
                placeholder="upload"
                name="upload"
              />
            </template>

            <!-- type: youtube template -->
            <template
              v-if="vSelected == 'link'"
              :class="vSelected == 'link' ? 'show' : 'hide'"
            >
              <!--youtube  -->
              <componentInput
                v-model="vtext"
                inputType="text"
                labelTitle="YOUTUBE"
                labelForId="youtube"
                placeholder="URL을 입력하세요"
                name="youtube"
              />
            </template>

            <!-- Title -->
            <componentInput
              v-model="vTitle"
              inputType="text"
              labelTitle="Title"
              labelForId="title"
              placeholder="제목을 입력하세요"
              name="title"
              @update:modelValue="changeTitle"
            />
            <!-- Description -->
            <componentInput
              v-model="vDescription"
              inputType="text"
              labelTitle="Description"
              labelForId="description"
              placeholder="설명을 입력하세요"
              name="description"
              @update:modelValue="changeDescription"
            />

            <div class="update__form__btn-wrap">
              <button
                type="butotn"
                class="update__form__button update__form__button--submit"
                @click="saveData"
              >
                <span class="update__form__button__text">저장</span>
              </button>

              <router-link
                to="/"
                class="update__form__button update__form__button--cancel"
              >
                <span class="update__form__button__text">취소</span>
                <!-- <button
                  type="butotn"
                  class="update__form__button update__form__button--cancel"
                >
                  <span class="update__form__button__text">Cancel</span>
                </button> -->
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="navigation">
        <navigation></navigation>
      </div>
      <!-- <componentPopup type="full" id="Update">
        <p>test Update</p>
      </componentPopup> -->
    </div>
  </div>
</template>

<script setup>
import navigation from '@/layouts/components/Navigation.vue'
import Title from '@/components/PageTitle.vue'
import componentInput from '@/layouts/components/componentInput.vue'
import VideoData from '@/layouts/components/videoList.js'
import '@/assets/scss/index.scss'
// import '@/assets/scss/update.scss'
import { ref } from 'vue'

const vSelected = ref('link')
const vTitle = ref()
const vDescription = ref()
const videoList = ref(VideoData)
const addedSelectOptions = ref([
  {
    title: 'Link',
    value: 'link',
  },
  {
    title: 'Upload',
    value: 'upload',
  },
])
const changeSelect = () => {
  console.log('changeSelect', event.target.value, vSelected.value)
}

const changeTitle = () => {
  console.log('changeTitle', event.target.value, vTitle.value)
}

const changeDescription = () => {
  console.log('changeDescription', event.target.value, vDescription.value)
}
// title  특문x, 2글자 이상
// 첨부 -> pass
</script>
