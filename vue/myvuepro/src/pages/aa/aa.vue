<template>
    <div>
        <div>AA组件</div>
        <button @click="say">传递数据</button>
    </div>
</template>
<script>
    import bus from "../../components/common/bus"
    export default{
        data(){
            return{
                msg:"我是AA组件"
            }
        },
        methods:{
            say(){
                bus.$emit('one',this.msg)
            }
        }
    }
</script>
<style scoped>

</style>