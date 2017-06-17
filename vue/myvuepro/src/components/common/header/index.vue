<template>

	<div class="header">
		<h1>{{ title }}</h1>
	</div>

</template>


<script>
	export default {
		data() {
			return {

			}
		},
		props:['title']
	}
</script>


<style scoped>
	h1 {
		font-size: 16px;
		text-align: center;
		background: #00f;
		height: .44rem;
		line-height:.44rem;
		color: #fff;
	}

</style>