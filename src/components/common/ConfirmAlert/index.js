import Vue from "vue"
import ConfirmAlert from "./index.vue"
const createConfirmAlert = (component,props)=>{
    const Ctor = Vue.extend(component)
    const comp = new Ctor({'propsData':props})
    comp.$mount()
    document.body.appendChild(comp.$el)
    comp.remove = ()=>{
        document.body.removeChild(comp.$el)
        comp.$destroy()
    }
    return comp
}

export default{
    install(){
        Vue.prototype.$confirmAlert = title=>{
            return createConfirmAlert(ConfirmAlert,{'title':title}).confirm()
        }
    }
}