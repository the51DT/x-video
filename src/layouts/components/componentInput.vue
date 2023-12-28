<template>
  <div class="update__form__item">
    <label :for="labelForId" class="input-label">{{ labelTitle }}</label>
    <div v-if="inputType == 'text'" class="input-box">
      <input
        v-model="props.vModel"
        :type="vModel"
        :placeholder="placeholder"
        :id="labelForId"
        class="input-box__input-text"
        @change="$emit('update:modelValue', $event.target.value)"
      />
    </div>
    <div v-if="inputType == 'select'" class="input-box">
      <select
        :name="name"
        :id="labelForId"
        title="영상 종류를 선택하세요"
        class="input-box__input-select"
        @change="$emit('update:modelValue', $event.target.value)"
      >
        <!-- <option disabled selected value="">please select file type</option>
        <option value="Upload">Upload</option>
        <option value="Link">Link</option> -->
        <option disabled value="">please select file type</option>
        <option v-for="item in props.options" :key="item" :value="item.value">
          {{ item.title }}
        </option>
      </select>
    </div>
    <div v-if="inputType == 'file'" class="input-box">
      <div class="input-box__container">
        <input
          :id="uploadFile"
          :type="inputType"
          :placeholder="upload"
          class="input-box__input-text"
          @change="uploadFile"
        />
      </div>
      <!-- <div
        class="input-box__container input-box__container--preview"
      >
        <span class="input-box__container--preview__text"></span>
      </div> -->
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps({
  vModel: {
    type: String,
    default: '',
  },
  inputType: {
    type: String,
    default: '',
  },
  labelTitle: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  labelForId: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  url: {
    type: String,
    default: '',
  },
  options: {
    type: String,
    default: '',
  },
  value: {
    type: String,
    default: '',
  },
  class: {
    type: String,
    default: '',
  },
  hasError: {
    type: String,
    default: '',
  },
})

let emit = defineEmits(['update:modelValue'])

const selectChange = (event) => {
  console.log(event.target.value)
}
console.log('props', props.options)
</script>
