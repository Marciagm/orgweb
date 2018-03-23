<template>
	<div>
		<top-part curIndex=0></top-part>
		<div class="news">
			news: {{news}}
		</div>

		<div class="second">
		</div>

		<div class="news">
		</div>

		<div class="second">
		</div>

		<div class="news">
		</div>

		<div class="second">
		</div>

		<bottom-part></bottom-part>
	</div>
</template>

<script>
	import TopPart from '@/components/Top'
	import BottomPart from '@/components/Bottom'
	import axios from 'axios'
	console.log(TopPart);
	export default {
		components: {
			TopPart,
			BottomPart
		},
		data () {
			return {
				news: 'hhh'
			}
		},
		mounted () {
			/*axios.get('/news').then((data) => {
				console.log(`data: ${data}`);
				this.news = data.data.content;
			})*/
		}
	}
</script>

<style scoped lang="scss">
	.part {
		width: 100%;
		height: 500px;
		margin-bottom: 20px;
	}
	.news {
		@extend .part;
		background: #fde5e9;
	}
	.second {
		@extend .part;
		background: #c8cfec;
	}
</style>