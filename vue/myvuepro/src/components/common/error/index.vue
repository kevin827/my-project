<template>

	<div>
		<p>你来到了一个非人类的页面，请快返回去。</p>
		<footer-bottom></footer-bottom>
	</div>

</template>


<script>
import footerBottom from '../footer'
	export default {
		data() {
			return {

			}
		},
		components:{
		  footerBottom
		}
	}
</script>


<style scoped>
	p{
	    height:44px;
	    line-height:44px;
	    color:#fff;
	    background:red;
	}

</style>