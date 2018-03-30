<template>
	<div class="app">
		<transition ame="fade" mode="out-in">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</transition>
		<bottom-part></bottom-part>
	</div>
</template>

<script>
	import BottomPart from '@/components/Bottom'

	export default {
		name: 'app',
		components: {
			BottomPart
		},
		data () {
			return {
			}
		},
		mounted () {
			//console.log(this.curIndex.i);
		}
	}
</script>

<style lang="scss">
	@import '~base';
</style>