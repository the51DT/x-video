<template>
  <div class="phone-container">
    <div class="phone">
      <div class="screen">
        <div class="update-wrap">
          <div class="update__form">
            <div class="update__form__item">
              <label for="type">Type</label>
              <select
                name=""
                id="type"
                title="영상 종류를 선택하세요"
                @change="selectedOpt"
              >
                <option value="">Upload</option>
                <option value="">Link</option>
              </select>
            </div>
            <!-- type: upload  -->
            <template>
              <div class="update__form__item">
                <label for="uploadFile">upload</label>
                <div class="input-box">
                  <div class="input-box__container">
                    <input
                      id="uploadFile"
                      type="file"
                      placeholder="upload"
                      class="input-box__input-text"
                    />
                  </div>
                  <div
                    class="input-box__container input-box__container--preview"
                  >
                    <span class="input-box__container--preview__text"></span>
                  </div>
                </div>
              </div>
              <updateInputText
                labelTitle="URL"
                labelFor="url"
                placeholder="URL"
                url="test"
                class=""
              />
              <!-- <div class="update__form__item">
                <label for="title">URL</label>
                <div class="input-box">
                  <input
                    type="text"
                    placeholder="URL"
                    id="url"
                    class="input-box__input-text"
                  />
                </div>
              </div> -->
            </template>

            <!-- type: youtube  -->
            <template>
              <div class="update__form__item">
                <label for="title">youtube</label>
                <div class="input-box">
                  <input
                    type="text"
                    placeholder="URL"
                    id="url"
                    class="input-box__input-text"
                  />
                </div>
              </div>
            </template>

            <div class="update__form__item">
              <label for="title">Title</label>
              <div class="input-box">
                <input
                  type="text"
                  placeholder="Title"
                  id="title"
                  class="input-box__input-text"
                />
              </div>
            </div>
            <div class="update__form__item">
              <label for="title">Description</label>
              <div class="input-box">
                <input
                  type="text"
                  placeholder="Description"
                  id="description"
                  class="input-box__input-text"
                />
              </div>
            </div>

            <div class="update__form__btn-wrap">
              <button
                type="butotn"
                class="update__form__button update__form__button--submit"
              >
                <span class="update__form__button__text">Upload</span>
              </button>
              <button
                type="butotn"
                class="update__form__button update__form__button--cancel"
              >
                <span class="update__form__button__text">Cancel</span>
              </button>
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
import updateInputText from '@/layouts/components/updateInputText.vue'
import VideoData from '@/layouts/components/videoList.js'
import '@/assets/scss/index.scss'
import '@/assets/scss/update.scss'
import { ref } from 'vue'

const videoList = ref(VideoData)
const addedList = ref([])

// title  특문x, 2글자 이상
// 첨부 -> pass
</script>
