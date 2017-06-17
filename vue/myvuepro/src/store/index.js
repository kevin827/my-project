/**
 * Created by lenovo on 2017/5/2.
 */
import Vuex from "vuex"
import Vue from "vue"
import state from "./state"
import mutations from "./mutations"
import actions from "./actions"
import cart from "./modules/cart"
Vue.use(Vuex)
export default new Vuex.Store({
    state,
    mutations,
    actions,
    modules:{
        cart
    }
})