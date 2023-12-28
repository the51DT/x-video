import axios from 'axios'
import { defineStore } from 'pinia'
import { getShort } from '@/api/getData'
const { MemberList, VideoList } = getShort()

// 비디오 로컬 저장
const memberData = JSON.stringify(MemberList)
window.localStorage.setItem('xMember', memberData)
// 회원 로컬 저장
const videoData = JSON.stringify(VideoList)
window.localStorage.setItem('xVideo', videoData)

const getMember = JSON.parse(localStorage.getItem('xMember'))
const getVideo = JSON.parse(localStorage.getItem('xVideo'))

const xMemberList = getMember._value
console.log('11', xMemberList)

import { router } from '../router'

export const useUserStore = defineStore('auth', {
    state: () => ({
        userId: localStorage.getItem('userId'),
        userName: localStorage.getItem('userName'),        
        userId: null,
        userName: null,
        userUploaded: null,
        userLiked: null,
        userSubscribed: null,
        isLogin: false,
        returnUrl: null
    }),
    getters: {
        isLoggedIn: (state) => {
          return state.userId != null;
        },
    },
    actions: {
        signIn: async function(userId, password) {                       
            const user = xMemberList.find(user => user.userId === userId && user.password === password);
            if (user) {
                this.userId = user.userId;
                this.userName = user.name;      
                const token = Math.random().toString(36).substring(2)
                localStorage.setItem("access_token", token)       
                localStorage.setItem("access_id", userId) 
                localStorage.setItem('userId', user.userId); // 로컬 스토리지에 userId 저장
                localStorage.setItem('userName', user.name); // 로컬 스토리지에 userName 저장
                this.getUserInfo()            
                alert('로그인 성공 했습니다.')
                router.push("/home")
            } else {
                alert('회원 정보가 없습니다.')  
            }
        },
        getUserInfo() {            
            let token = localStorage.getItem("access_token")
            let userId = localStorage.getItem("access_id") 
            let nickName = localStorage.getItem("userName") 
            let config = {
                headers: {
                  "access-token": token,
                }
            }            
            if(token !== null && userId !== null && nickName !== null) {                
                console.log(userId)
            }
        },        
        registrations: async function(userId, password, Name) {
            let newUser = {
                "userId": userId,
                "password": password,
                "Name": Name
            };
            console.log('전달완료', newUser)
            getMember._value.push(newUser)
            localStorage.setItem('xMember', JSON.stringify(getMember));
            console.log('insert', MemberList)
        },
        logOut: function() {
            this.userId = null
            this.userName = null
            localStorage.removeItem("access_token")       
            localStorage.removeItem("access_id") 
            localStorage.removeItem('userId')
            localStorage.removeItem('userName')
            alert('로그아웃 성공');
        }
    },
})
