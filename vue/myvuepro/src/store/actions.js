/**
 * Created by lenovo on 2017/5/2.
 */
export default{
    sub(context,payload){
    console.log("我是actions");
    context.commit('GO',payload)
}
}