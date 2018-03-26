<template>
	<div class="app">
		<transition ame="fade" mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>

	export default {
		name: 'app',
		components: {
		},
		mounted () {
		}
	}
</script>

<style lang="scss">
	* {
		margin: 0 auto;
		padding: 0;
	}
	.app {
		width: 100%;
	}
</style>