<template>
	<div>
    <router-view></router-view>
		<!--<button @click="say">获取数据</button>
		<button @click="setV">设置数据</button>
		<p>用户名：<span>{{name}}</span></p>
		<p>年龄：<span>{{age}}</span></p>
		<p>地址：<span>{{address}}</span></p>-->
	</div>

</template>


<script>
	export default {
		data() {
			return {
				name:"",
				age:"",
				address:"",
				Gname:""
			}

		},
		methods:{
			say(){
				this.name=this.$store.state.user.name
				this.age=this.$store.state.user.age
				this.address=this.$store.state.user.address
				this.Gname=this.$store.state.cart.goods.name
			},
			setV(){
				var obj={
					"name":"李四",
					"age":20,
					"address":"北京海淀"
				}
				this.$store.commit("GO",obj)
				this.$store.dispatch("sub",obj)
			}
		}
	}

</script>


<style>

</style>
