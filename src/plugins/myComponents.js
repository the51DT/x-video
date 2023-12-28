import Title from "@/components/PageTitle.vue"
import MyBtn from "@/components/Mybtn.vue"
import MyInput from "@/components/input.vue"
import VSelect from "@/components/Select.vue"
import InputEl from "@/components/inputEl.vue"
import Loading from "@/components/LoadingDot.vue"

export default {
  install(app) {
    app.component('Title', Title)     
    app.component('MyBtn', MyBtn)    
    app.component('VSelect', VSelect) 
    app.component('MyInput', MyInput) 
    app.component('InputEl', InputEl)   
    app.component('Loading', Loading)   
  }
}