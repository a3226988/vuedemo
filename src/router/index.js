//用于编写路由相关的代码
import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../components/main.vue'
import login from '../components/login.vue'
Vue.use(VueRouter)

var router = new VueRouter({
	mode:"history",
	routes:[
		{path:"/",redirect:"/login"},
		{path:"/main",component:main,
			children:[
				{path:"",component:()=>import("../components/main/default.vue")}
				,{path:"user",component:()=>import("../components/user/user.vue")}
				,{path:"emp",component:()=>import("../components/employee/emp.vue")}
			]
		},
		{path:"/login",component:login},
		{path:"/logout",redirect:"/login"}
	]
});

router.beforeEach(function(to,from,next){
	console.log(to.path)
	if(to.path.indexOf("login")!=-1){
		if(sessionStorage.getItem("loginuser")){
			next("/main")
		}else{
			next()
		}
	}else{
		next()
	}
})


export default router