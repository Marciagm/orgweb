<template>
    <div>
    	<el-container>
    		<el-main>Main</el-main>
    	</el-container>
    </div>
</template>
<script>
	import ElContainer from 'element-ui/packages/container'
	export default {
		name: 'main'
	}
</script>

<style lang="scss">
	.el-main {
	    background-color: pink;
	    color: #333;
	    text-align: center;
	    line-height: 400px;
	 }
</style>