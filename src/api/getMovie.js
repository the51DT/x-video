import axios from 'axios';
import { ref } from 'vue';

const MovieBaseUrl = 'https://api.themoviedb.org/3/movie/';
const MovieKey = 'd2bb40d5b45665c9a72ed5938162a943'


const getMovie = () => { 
    
    const nowPlayingList = ref([]);
    
    const nowPlaying= async () => {
        axios
        .get(`${MovieBaseUrl}now_playing?api_key=${MovieKey}&language=ko-KR&append_to_response=images,videos`,)
        .then(res => {        
            console.log(res.data); 
            res.data.results.forEach(result => {
                nowPlayingList.value.push(result);
            });    
            console.log(res.data); 

        })
        .catch(err => {
            console.log(err.message);
        });
             
    }
    return { nowPlayingList,nowPlaying};
}
export default getMovie;
