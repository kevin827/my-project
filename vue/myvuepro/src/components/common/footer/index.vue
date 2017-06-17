<template>
	<div class="ft">
		<router-link to="home">首页</router-link>
		<router-link to="news">新闻</router-link>
		<router-link to="fenlei">分类</router-link>
		<router-link to="about">关于</router-link>
	</div>
</template>


<script>
    export default {
		 data() {
		    return {

			}
		 }
	}
</script>

<style>
	.ft {
		position: absolute;
		bottom:0;
		left: 0;
		right: 0;
		display: flex;
		text-align:center;
	}

	.ft a {
		flex: 1;
	}

	a {
	  text-decoration: none;
	   color: #575757;
	}
	.high {
		background: #f00;
		color: #fff;

	}

</style>