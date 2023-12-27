import axios from 'axios';
import { ref } from 'vue';

export function getShort() {    
    const MemberList = ref([])
    const VideoList = ref([])
    axios
    .get('./db.json',)
    .then(res => {                    
        MemberList.value = res.data.users
        VideoList.value = res.data.posts
        console.log('회원정보', MemberList)  
        
    })
    .catch(err => {
        console.log(err.message);
    }) 
    return { MemberList, VideoList }
}
