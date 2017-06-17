<template>
    <div>
         <header-top title="首页"></header-top>
        		<div class="main">
        		    <h1>主体标题</h1>
        			  <p>首页内容</p>
        		</div>

        <footer-bottom></footer-bottom>
    </div>
</template>

<script>
    import headerTop from '../../components/common/header'
    import footerBottom from '../../components/common/footer'
    export default{
        data(){
            return{

            }
        },
        components:{
            headerTop,
            footerBottom
        }
    }
</script>

<style scoped>

</style>
