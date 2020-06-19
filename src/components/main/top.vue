<template>
	<div id="top">
		<h1>正道的光！！！</h1>
		<p class="font-weight-bold text-white">欢迎您：{{name}}</p>
	</div>
</template>

<script>
	export default{
		data:function(){
			return {
				name:sessionStorage.getItem("loginuser")
			}
		}
	}
</script>

<style>
	#top{
		background-image: url(../../assets/banner.jpg);
		height: 350px;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
	}
	#top h1{
		text-align: center;
		line-height: 350px;
	}
	#top p{
		position: absolute;
		left: 5px;
		bottom: 0px;
	}
</style>
