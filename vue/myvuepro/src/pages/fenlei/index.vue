<template>
	<div>
	    <header-top title="分类"></header-top>
		<div class="main">
			<p>分类内容</p>
			<ul>
				<li v-for="(value,index) in list">
					<p>书名：{{value.name}}</p>
					<p>价钱：{{value.price}}</p>
				</li>
			</ul>
		</div>

		<footer-bottom></footer-bottom>


	</div>
</template>


<script>
   import headerTop from '../../components/common/header'
   import footerBottom from '../../components/common/footer'
   export default {
   	    data() {
      return {
        list:""
      }
		},
		created(){
			this.$http.get("../../../static/data/data.json")
			.then(function(data){
			console.log(data)
				let shuju=data.body;
				if(data.status==200 && shuju.flag==1){
					this.list=shuju.info
				}
			},function(err){
				this.$router.push('error')
			})
		},
	    components:{
			headerTop,
			footerBottom
		}
   }
</script>


<style scoped>
	
</style>