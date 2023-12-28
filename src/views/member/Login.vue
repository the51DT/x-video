<template>
  <div class="member__wrap">
    <div class="member__wrap--inner">
        <Title 
            :level="2" 
            pageTitle="로그인"
        />
        <div class="member-page__wrap">        
            <div class="member-page__form">
                <p class="title">로그인이 필요한 서비스입니다.</p>
                <form @submit.prevent="submitForm">
                    <ul>
                        <li>
                            <MyInput >
                                <template #input>
                                    <InputEl                                        
                                        v-model="userId"
                                        required                                                
                                        placeholder="아이디를 입력하세요"    
                                        @focusout="Validation"
                                        guideMsg="이메일 아이디를 입력하세요" 
                                        :errorMsg="error.idErrorMsg"                                                                   
                                    />                
                                </template>         
                            </MyInput>                          
                        </li>
                        <li>
                            <MyInput >
                                <template #input>
                                    <InputEl                                        
                                        v-model="password"
                                        required     
                                        types="password"                                          
                                        placeholder="비밀번호를 입력하세요"  
                                        :errorMsg="error.pwErrorMsg"                                                                          
                                    />                
                                </template>         
                            </MyInput>                          
                        </li>                    
                    </ul>                
                    <div class="button__wrap">
                        <MyBtn                            
                            buttonName="로그인"
                            type="submit"
                            color="btn primary"
                            :disabled="!userId || !password"
                            size="medium"                        
                        >  
                        </MyBtn>   
                        <MyBtn                            
                            buttonName="취소"                        
                            color="btn secondary"
                            size="medium"
                            @click="$router.go(-1)" 
                        >  
                        </MyBtn>                    
                    </div>   
                    <div class="help-msg">
                        <router-link to="/Register">
                            회원가입
                        </router-link>
                        <router-link to="#" @click="isAlert(event)">
                            아이디 찾기
                        </router-link>                           
                        <router-link to="#" @click="isAlert(event)">
                            비밀번호 찾기
                        </router-link>                          
                    </div>          
                </form>
            </div>
        </div>     
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
// import vue from "@vitejs/plugin-vue"
import { ref, watch, computed, onMounted, nextTick, defineProps, defineEmits } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from "@/stores/user"
const userStore = useUserStore()
import '@/assets/scss/index.scss'
import {isKor, isPw, isEmail} from "@/utils/check"

const error = ref({
    idErrorMsg: '',
    pwErrorMsg: '' 
  }
)

const userId = ref('')
const password = ref('')

const Validation = async () => { 
    if(isKor(userId.value)) {
        error.value.idErrorMsg = '한글로 된 이메일 주소는 지원하지 않습니다.'        
        userId.value = ''
    } else {
        error.value.idErrorMsg = ''
    }    
}
const submitForm  = async () => {       
    if(!isEmail(userId.value)) {
        error.value.pwErrorMsg = '정확한 이메일 형식을 입력하세요'        
    } else {
        await userStore.signIn(userId.value, password.value)
    }
    
}
const isAlert = (event) => {
    alert('준비중입니다.')
}
</script>

