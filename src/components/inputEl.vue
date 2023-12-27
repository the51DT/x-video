<template>
    <div class="input">
        <label :for="randomId" v-if="label">{{ label }}
          <span v-if="required" :class="required">*</span>
        </label>
        <input 
            :type="types"                                        
            :placeholder="placeholder" 
            :title="placeholder" 
            :id="randomId"      
            :ref="refInfo"        
            :value="modelValue"     
            :maxlength="maxlength"
            @input="$emit('update:modelValue', $event.target.value)"    
            @focusout="$emit('update:modelValue', $event.target.value)" 
         >
         <MyBtn                            
            buttonName="삭제"
            iconOnly="true"
            iconName="btn-close-circle"     
            v-if="modelValue"                        
            @click="ClearInput($event)"                                                                      
        >  
        </MyBtn>   
        <div class="guide-text__input--bottom" v-if="guideMsg">                  
            <p class="guide-text">{{ guideMsg }}</p>            
        </div>                
        <div class="guide-text__input--bottom" v-if="errorMsg">                  
            <p class="error-text">{{ errorMsg }}</p>            
        </div>
    </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, onMounted, onBeforeMount, onUnmounted } from 'vue'
const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  guideMsg: { 
    type: String, 
    default: ''
  },
  placeholder: {
    type: String,
    default: '입력하세요'
  },  
  types: {
    type: String,
    default: 'text'
  },
  refInfo: {
    type: String,
    default: ''
  },
  maxlength: {
    type: Number,
    default: ''
  },  
  guideMsg: {
    type: Array,
    default: ''
  },  
  autoComplete: {
    type: Boolean,
    default: ''
  },
  videoList: {
    type: Object,
    default: () => ({})
  },
  errorMsg: {
    type: String,
    default: ''
  },  
  required: {
    type: Boolean,
    default: false
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

// const errorMsgCheck = ref(null)

// const checkValue = (event) => {
//   if (event.target.value === '') {
//     errorMsgCheck.value = true
//   } else {
//     errorMsgCheck.value = false
//   }
// }
const ClearInput = (event) => {  
  emit('update:modelValue')    
}
</script>

<style>
.error-text {color: red;}
</style>