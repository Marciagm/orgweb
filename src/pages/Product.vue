<template>
	<div>
		<top-part curIndex=1></top-part>
		<div class="pro-flow"">

		</div>
		<div style="height: 1036px; width: 100%; background: #fff">
			
		</div>
		<div style="height: 634px; width: 100%;background-color: #f8f9fc;"></div>
		<bottom-part></bottom-part>
	</div>
</template>
<style lang="scss">
	.pro-flow {
	}
</style>
<script>
	import TopPart from '@/components/Top'
	import BottomPart from '@/components/Bottom'

	export default {
		components: {
			TopPart,
			BottomPart
		}
	}
</script>