<template>
    <div>
        <div>BB组件</div>
        <p>{{str}}</p>
    </div>
</template>
<script>
    import bus from "../../components/common/bus"
    export default{
        data(){
            return{
                str:"我是BB组件"
            }
        },
        created(){
            bus.$on("one",(arg)=>{
                this.str=arg
            })
        }
    }
</script>
<style scoped>

</style>