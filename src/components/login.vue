<template>
	<div id="login" class="text-center">
		<img alt="Vue logo" src="../assets/logo.png">
		<p class="text-left">用户名：<input v-model="username" class="form-control" /></p>
		<p class="text-left">密码：<input v-model="password" class="form-control" @keyup.enter="login" /></p>
		<p><button class="btn btn-success" @click="login">登陆</button></p>
	</div>
</template>

<script>
	
	export default {
		data:function(){
			return {
				username:'',
				password:''
			}
		},
		methods:{
			login:function(){
				var that = this;
				this.$http.post("/api/login",{username:this.username,password:this.password}).then(function(result){
					if(result.stateCode==200){
						//保存当前登陆用户的信息
						//sessionStorage:可以在当前浏览器范围内保存信息，当浏览器关闭后数据清空
						//localStorage: 与cookie类似可以保存得更久
						sessionStorage.setItem("loginuser",result.data.name)
						that.$router.push("/main")
					}else{
						console.log("登陆失败！");
					}
					
				});
				/* if(this.username=="admin"&&this.password=="123"){
					alert("登陆成功！");
					this.$router.push("/main")
				}else{
					alert("登陆失败！");
				} */
			}
		}
	}
</script>

<style>
	#login{
		width:300px;
		height: 100px;
		margin: 0px auto;
	}
</style>
