/**
 * Created by lenovo on 2017/5/2.
 */
    import * as types from "./mutations-type"
export default{
    [types.GO](state,payload){
    state.user=payload
}
}