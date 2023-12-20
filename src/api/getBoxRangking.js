import axios from 'axios';
import { ref } from 'vue';

import { dailyData, WeeklyData,ydate7 } from '@/assets/js/common.js';
console.log('ee',WeeklyData,ydate7)

const RankBaseUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice';
const Mykey = 'ff4677c1cc97ed619e2bb12bb03f9be5'

const getMovieRaingking = () => { 

    const DailyRaingKing = ref([]);
    const WeekRaingKing = ref([]);


    const BoxData = async () => { 
        axios
        .all([
            axios.get(`${RankBaseUrl}/searchDailyBoxOfficeList.json?key=${Mykey}&targetDt=${dailyData}`,),
            axios.get(`${RankBaseUrl}/searchWeeklyBoxOfficeList.json?key=${Mykey}&targetDt=${WeeklyData}`,)
            // ${WeeklyData}
        ])
        .then(
            axios.spread((res1,res2) => {
                console.log('1',res1.data);
                console.log('2',res2.data);
                res1.data.boxOfficeResult.dailyBoxOfficeList.forEach(result => {
                    DailyRaingKing.value.push(result);
                });
                res2.data.boxOfficeResult.weeklyBoxOfficeList.forEach(result => {
                    WeekRaingKing.value.push(result);
                });                
            })
        )
        .catch(err => {
            console.log(err.message);
        });
    }
  
    return { BoxData,DailyRaingKing,WeekRaingKing };
}
export default getMovieRaingking;