import Title from "@/components/PageTitle.vue"
import MyBtn from "@/components/Mybtn.vue"
import MyInput from "@/components/input.vue"
import VSelect from "@/components/Select.vue"
import InputEl from "@/components/inputEl.vue"

export default {
  install(app) {
    app.component('Title', Title)     
    app.component('MyBtn', MyBtn)    
    app.component('VSelect', VSelect) 
    app.component('MyInput', MyInput) 
    app.component('InputEl', InputEl)   
  }
}