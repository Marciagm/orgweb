<template>
	<div>
		<top-part curIndex=3></top-part>
		
		<div style="background: #fff; height: 1735px;">新闻动态</div>
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