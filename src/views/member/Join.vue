<template>
  <div class="member__wrap">
    <div class="member__wrap--inner">
        <Title 
            :level="2" 
            pageTitle="회원가입"
        />
        <div class="member-page__wrap">           
            <div class="member-page__form">
                <form @submit.prevent="registration">
                    <ul>
                        <li>
                            <MyInput >
                                <template #input>
                                    <InputEl                                        
                                        v-model="userId"
                                        label="이메일 아이디"
                                        required                   
                                        @focusout="idCheck"
                                        guideMsg="이메일 아이디를 입력하세요"                                                                      
                                        placeholder="이메일 주소를 입력하세요"    
                                        :errorMsg="error.idErrorMsg"                                                                 
                                    />                
                                </template>         
                            </MyInput>                                             
                        </li>
                        <li>
                            <MyInput >
                                <template #input>
                                    <InputEl         
                                        label="비밀번호"                               
                                        v-model="password"
                                        required     
                                        types="password"                                                                           
                                        placeholder="비밀번호를 입력하세요"                                                                                                                     
                                    />                
                                </template>         
                            </MyInput>                          
                        </li>    
                        <li>
                            <MyInput >
                                <template #input>
                                    <InputEl     
                                        label="비밀번호 확인"
                                        v-model="passwordRe"
                                        required     
                                        types="password"  
                                        @focusout="pwcheck"     
                                        :errorMsg="error.pwErrorMsg"                                                                       
                                        placeholder="비밀번호를 다시 한번 입력하세요"                                                                                                                   
                                    />                
                                </template>         
                            </MyInput>                          
                        </li>
                        <li>
                            <MyInput >
                                <template #input>
                                    <InputEl            
                                        label="이름"                            
                                        v-model="Name"
                                        required                                                                              
                                        placeholder="이름을 입력하세요"                                                                      
                                    />                
                                </template>         
                            </MyInput>                          
                        </li>                                                                    
                    </ul>                
                    <div class="button__wrap">
                        <MyBtn                            
                            buttonName="회원가입"
                            type="submit"
                            color="btn primary"                            
                            size="medium"        
                            :disabled="!userId || !password || !passwordRe || !Name"
                        >  
                        </MyBtn>                           
                        <MyBtn                            
                            buttonName="취소"                        
                            color="btn secondary"
                            size="medium"
                            @click="cancelJoinStep" 
                        >  
                        </MyBtn>                    
                    </div>             
                </form>
            </div>        
        </div>
    </div>
  </div>
</template>

<script setup>
import Axios from "axios"
import { ref, watch, computed, onMounted, nextTick, defineProps, defineEmits } from 'vue'
import { storeToRefs } from 'pinia'
import { useUsersStore } from "@/stores/users"
const userStore = useUsersStore()
import {isKor, isPw, isEmail} from "@/views/shortsApp/assets/js/check"

const getMember = JSON.parse(localStorage.getItem('member'))
const MemberList = getMember._value

console.log('회원정보', MemberList)
const userId = ref('')
const password = ref('')
const passwordRe = ref('')
const Name = ref('')

const error = ref({
    idErrorMsg: '',
    pwErrorMsg: '' 
  }
)

const idCheck = async () => {   
    let userIdExists = MemberList.some(member => member.id === userId.value)
    console.log(userIdExists)  
    if(!userId.value) {
        error.value.idErrorMsg = '이메일 주소를 입력하세요.'
    } else if(isKor(userId.value)) {         
        error.value.idErrorMsg = '한글로 된 이메일 주소는 지원하지 않습니다.'
        userId.value = ''    
    } else if(!isEmail(userId.value)) {        
        error.value.idErrorMsg = '정확한 이메일 주소를 입력하세요'
        userId.value = ''
    }else if(!userIdExists) {        
        error.value.idErrorMsg = '사용할 수 없는 이메일 입니다.'
        userId.value = ''
    }else {
        error.value.idErrorMsg = ''
    }  
}
const pwcheck =  async () => { 
    if(!password.value) {        
        error.value.pwErrorMsg = '비밀번호 확인을 입력 해주세요.'
        passwordRe.value = ''
    } else if(password.value === passwordRe.value){
        error.value.pwErrorMsg = '비밀번호 확인을 다시 입력 해주세요.'
        passwordRe.value = ''        
    } else {
        error.value.pwErrorMsg = ''
    } 
}
const registration  = async () => {                
    await userStore.registrations(userId.value, password.value,Name.value)       
}
const cancelJoinStep = () => {

}
</script>
