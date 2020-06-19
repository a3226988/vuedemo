<template>
	<div id="main">
		<top></top>
		<left></left>
		<right></right>
	</div>
</template>

<script>
	import top from './main/top.vue'
	import left from './main/left.vue'
	import right from './main/right.vue'
	
	export default {
		components:{
			top,left,right
		}
	}
</script>

<style>
</style>
