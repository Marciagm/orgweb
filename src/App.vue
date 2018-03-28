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
	@import '~base';
</style>