<template>
	<div>
		<top-part curIndex=2></top-part>
		<div style="background: #fff; height: 1752px;"></div>
		解决方案
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