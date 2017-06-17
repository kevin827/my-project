<template>
	<div>
	    <header-top title="关于"></header-top>
		<div class="main">
			<p>关于内容</p>
			<a-com></a-com>
			<b-com></b-com>
		</div>

		<footer-bottom></footer-bottom>


	</div>
</template>


<script>
   import headerTop from '../../components/common/header'
   import footerBottom from '../../components/common/footer'
   import aCom from '../aa/aa'
   import bCom from '../bb/bb'
   export default {
   	    data() {
			return {

			}
		},
	    components:{
			headerTop,
			footerBottom,
			aCom,
			bCom
		}
   }
</script>


<style scoped>

</style>