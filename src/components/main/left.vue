<template>
	<div id="left">
		<router-link to="/main/user" tag="li">用户管理</router-link>
		<router-link to="/main/emp" tag="li">员工管理</router-link>
		<li @click="logout">退出</li>
	</div>
</template>

<script>
	export default{
		methods:{
			logout:function(){
				sessionStorage.removeItem("loginuser");
				this.$router.push("/login")
			}
		}
	}
</script>

<style>
	#left{
		width:20%;
		float: left;
	}
	#left li{
		list-style:  none;
		height: 40px;
		text-align: center;
		line-height: 40px;
		border-bottom: 1px solid #0062CC;
	}
</style>
