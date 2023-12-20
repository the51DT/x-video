import axios from 'axios';
import { ref } from 'vue';

import { todayData,hh,calcTime,calcHuos,todayPrint,getTodayLabel } from '@/assets/js/weather/getData.js';
import   weatherDescKo   from '@/assets/js/weather/weaTherKo';

const RankBaseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const Mykey = '13b55b2bf5bf4b64df063ddbfe1f3c5c'
let citis1 = 'Seoul'
let citis2 = 'Busan'
let citis3 = 'Incheon'
let citis4 = 'Daegu'
let citis5 = 'Gwangju'
let citis6 = 'Daejeon'
let citis7 = 'Ulsan'
let citis8 = 'Gyeonggi-do'
let citis9 = 'Gangwon-do'
let citis10 = 'Chungcheongbuk-do'
let citis11 = 'Chungcheongnam-do'
let citis12 = 'Jeollabuk-do'
let citis13 = 'Jeollanam-do'
let citis14 = 'Gyeongsangbuk-do'
let citis15 = 'Gyeongsangnam-do'
let citis16 = 'Jeju'
let citis17 = 'Sejong'

let baseImgUrl = 'http://openweathermap.org/img/w/'

export function getWeatherKorea() {
    const WeatherList = ref([])
       axios
        .all([
            axios.get(`${RankBaseUrl}${citis1}&APPID=${Mykey}&units=metric`), 
            axios.get(`${RankBaseUrl}${citis2}&APPID=${Mykey}&units=metric`),
            axios.get(`${RankBaseUrl}${citis3}&APPID=${Mykey}&units=metric`),
            axios.get(`${RankBaseUrl}${citis4}&APPID=${Mykey}&units=metric`),
            axios.get(`${RankBaseUrl}${citis5}&APPID=${Mykey}&units=metric`),
            axios.get(`${RankBaseUrl}${citis5}&APPID=${Mykey}&units=metric`),
            axios.get(`${RankBaseUrl}${citis6}&APPID=${Mykey}&units=metric`),
            axios.get(`${RankBaseUrl}${citis7}&APPID=${Mykey}&units=metric`),
            axios.get(`${RankBaseUrl}${citis8}&APPID=${Mykey}&units=metric`),
            axios.get(`${RankBaseUrl}${citis9}&APPID=${Mykey}&units=metric`),
            axios.get(`${RankBaseUrl}${citis10}&APPID=${Mykey}&units=metric`),
            axios.get(`${RankBaseUrl}${citis11}&APPID=${Mykey}&units=metric`),
            axios.get(`${RankBaseUrl}${citis12}&APPID=${Mykey}&units=metric`),
            axios.get(`${RankBaseUrl}${citis13}&APPID=${Mykey}&units=metric`),
            axios.get(`${RankBaseUrl}${citis14}&APPID=${Mykey}&units=metric`),
            axios.get(`${RankBaseUrl}${citis15}&APPID=${Mykey}&units=metric`),
            axios.get(`${RankBaseUrl}${citis16}&APPID=${Mykey}&units=metric`),
            axios.get(`${RankBaseUrl}${citis17}&APPID=${Mykey}&units=metric`)
        ])        
        .then(
            axios.spread((res1, res2, res3, res4, res5, res6, res7, res8, res9, res10, res11, res12, res13, res14, res15, res16, res17) => {
                WeatherList.value = [
                    {
                        'area': '서울',
                        'data': res1.data.main.temp + '°C',
                        'id': 'KR-11'
                    },
                    {
                        'area': '부산',
                        'data': res2.data.main.temp + '°C',
                        'id': 'KR-26'
                    },
                    {
                        'area': '인천',
                        'data': res3.data.main.temp + '°C',
                        'id': 'KR-28'
                    },
                    {
                        'area': '대구',
                        'data': res4.data.main.temp + '°C',
                        'id': 'KR-27'
                    },
                    {
                        'area': '광주',
                        'data': res5.data.main.temp + '°C',
                        'id': 'KR-29'
                    },
                    {
                        'area': '대전',
                        'data': res6.data.main.temp + '°C',
                        'id': 'KR-30'
                    },
                    {
                        'area': '울산',
                        'data': res7.data.main.temp + '°C',
                        'id': 'KR-31'
                    },
                    {
                        'area': '경기',
                        'data': res8.data.main.temp + '°C',
                        'id': 'KR-41'
                    },
                    {
                        'area': '강원',
                        'data': res9.data.main.temp + '°C',
                        'id': 'KR-42'
                    },
                    {
                        'area': '충청북도',
                        'data': res10.data.main.temp + '°C',
                        'id': 'KR-43'
                    },
                    {
                        'area': '충청남도',
                        'data': res11.data.main.temp + '°C',
                        'id': 'KR-44'
                    },
                    {
                        'area': '전라북도',
                        'data': res12.data.main.temp + '°C',
                        'id': 'KR-45'
                    },
                    {
                        'area': '전라남도',
                        'data': res13.data.main.temp + '°C',
                        'id': 'KR-46'
                    },
                    {
                        'area': '경상북도',
                        'data': res14.data.main.temp + '°C',
                        'id': 'KR-47'
                    },
                    {
                        'area': '경상남도',
                        'data': res15.data.main.temp + '°C',
                        'id': 'KR-48'
                    },
                    {
                        'area': '제주',
                        'data': res16.data.main.temp + '°C',
                        'id': 'KR-49'
                    },
                    {
                        'area': '세종',
                        'data': res17.data.main.temp + '°C',
                        'id': 'KR-50'
                    }
                ]                     
               console.log(WeatherList._rawValue)
            })
        )
        .catch(err => {
            console.log(err.message);
        }) 
    return { WeatherList }
}    