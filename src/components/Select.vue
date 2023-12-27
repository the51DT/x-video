<template>
  <div class="select__wrap">
    <label :for="randomId" v-if="label">{{ label }}</label>
    <div class="select">        
        <select :title="placeholder"  @change="$emit('update:modelValue', $event.target.value)"  >
          <option v-for="option in options" :key="option">{{ option.title }}</option>
        </select>
    </div>
    <div class="guide-text__input--bottom" v-if="errorMsg">                  
        <p class="error-text">{{ errorMsg }}</p>            
    </div>    
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, onBeforeMount, onUnmounted } from 'vue'
const props = defineProps({
label: {
  type: String,
  default: ''
},
placeholder: {
  type: String,
  default: '선택하세요'
},  
guideMsg: {
  type: Array,
  default: ''
},  
errorMsg: {
  type: String,
  default: ''
},  
options: {
  type: Array,
  default: '선택하세요'
},
modelValue: String,
disabled: {
  type: Boolean,
  default: false
}
})

let emit = defineEmits(['update:modelValue'])

const randomId = ref('')

const randomNumber = () => {
let N = 1000000;
let M = 1;
let tt = Math.random()*N;
return Math.floor(tt)+M;
}
randomId.value = randomNumber()
</script>

<style lang="scss">
.select {
  select {
    height: 100%;
    padding: 0px 40px 0px 16px;
  }
}
.error-text {color: red;}
</style>