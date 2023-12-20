import axios from 'axios';
import { ref } from 'vue';

import { todayData,hh,calcTime,calcHuos,todayPrint,getTodayLabel } from '@/assets/js/weather/getData.js';
import   weatherDescKo   from '@/assets/js/weather/weaTherKo';

const RankBaseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const Mykey = '13b55b2bf5bf4b64df063ddbfe1f3c5c'
let citis = 'Seoul'
let baseImgUrl = 'http://openweathermap.org/img/w/'

export function getWeathers() {

        const todayWeather = ref('')
        const todaytemp = ref('')
        const todaywind = ref('')
        const todayhumidity = ref('')
        const sunriseTimeIs = ref('')
        const sunsetTimeIs = ref('')
        const WeatherIcon = ref('')
   

        let citis = 'Seoul'    
        axios
        .get(`${RankBaseUrl}${citis}&APPID=${Mykey}&units=metric`,)
        .then(res => {            
            console.log(res.data)  
            todayWeather.value = weatherDescKo[res.data.weather[0].id]
            todaytemp.value = res.data.main.temp 
            todaywind.value = res.data.wind.speed
            todayhumidity.value = res.data.main.humidity
            WeatherIcon.value =  baseImgUrl + res.data.weather[0].icon + '.png'
            sunriseTimeIs.value = calcTime(res.data.sys.sunrise)
            sunsetTimeIs.value = calcTime(res.data.sys.sunset)

        })
        .catch(err => {
            console.log(err.message);
        }) 
    return { todayWeather, todaytemp, todaywind, todayhumidity, sunriseTimeIs,sunsetTimeIs,WeatherIcon}
}    