<template>
	<div>
		<h1>用户管理</h1>
		<table border="1" width="500">
			<tr><th>序号</th><th>用户名称</th><th>登录名</th><th>操作</th></tr>
			<tr v-for="(u,index) in users" :key="index">
				<td>{{index}}</td>
				<td>{{u.name}}</td>
				<td>{{u.username}}</td>
				<td><button @click="deleteuser(index,u.id)">删除</button></td></tr>
		</table>
	</div>
</template>

<script>
	export default{
		data:function(){
			return {
				users:[]
			}
		},
		created:function(){
			var that = this;
			this.$http.get("/api/list").then(function(result){
				that.users = result.data
			})
		},
		methods:{
			deleteuser:function(ind,id){
				//this表示当前组件
				var that = this;
				that.$http.delete("/api/user/"+id).then(function(result){
					console.log(result);
					if(result.stateCode==200){
						that.users.splice(ind,1);
					}else{
						alert("删除失败！");
					}
				})
			}
		}
	}
</script>

<style>
</style>
