import axios from 'axios';
import { ref } from 'vue';

export function getShort() {    
    const xMemberList = ref([])
    const xVideoList = ref([])
    axios
    .get('./db.json',)
    .then(res => {                    
        xMemberList.value = res.data.users
        xVideoList.value = res.data.posts
        console.log('회원정보', xMemberList)  
        const memberData = JSON.stringify(xMemberList)
        window.localStorage.setItem('xMember', memberData)        
        console.log('로컬',JSON.parse(localStorage.getItem('xMember')))
    })
    .catch(err => {
        console.log(err.message);
    }) 
    return { xMemberList }
}
