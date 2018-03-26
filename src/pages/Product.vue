<template>
	<div>
		<top-part curIndex=1></top-part>
		<div style="height: 662px; background-color: #f8f9fc; width: 100%;">
		</div>
		<div style="height: 1036px; width: 100%; background: #fff">
			
		</div>
		<div style="height: 634px; width: 100%;background-color: #f8f9fc;"></div>
		<bottom-part></bottom-part>
	</div>
</template>

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