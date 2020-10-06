// import Vue from "vue"
// import ActionSheet from "./index.vue"
// const createActionSheet =(component,props)=>{
//     const Ctor = Vue.extend(component)
//     const comp = new Ctor({'propsData':props})
//     comp.$mount()
//     document.body.append(comp.$el)
//     comp.remove = ()=>{
//         document.body.removeChild(comp.$el)
//         comp.$destroy()
//     }
//     return comp
// }
// export default{
//     install(){
//         Vue.prototype.$actionSheet = options =>{
//             return createActionSheet(ActionSheet,options)
//         }
//     }
// }

import Vue from "vue"
import ActionSheet from "./index.vue"

export default{
    install(){
        Vue.component("v-action-sheet",ActionSheet)
    }
}


