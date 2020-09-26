import Vue from "vue"
import Alert from "./index.vue"
const createAlert = function(component,props){
    const Ctor = Vue.extend(component)
    const comp = new Ctor({'propsData':props})
    comp.$mount()
    document.body.append(comp.$el)
    comp.remove = ()=>{
        document.body.removeChild(comp.$el)
        comp.$destroy()
    }
    return comp
}

export default{
    install(){
        Vue.prototype.$alert = options=>{
            return createAlert(Alert,options)
        }
    }
}
