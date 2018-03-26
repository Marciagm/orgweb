<template>
	<div>
		<top-part curIndex=5></top-part>
		<div class="rec">
			<div class="rec-nav">
				<ul>
					<li v-for="(item, index) in recInfo" :style="{marginLeft: marginLeft[index]}">
						<a @click="tab(item, index)" v-if="index == tabIndex" :style="{color: hilightColor}">{{ item.name }}</a>
						<a @click="tab(item, index)" v-else :style="{color: normalColor}">{{ item.name }}</a>
					</li>
				</ul>
			</div>
			<rec-part :recData="recData"></rec-part>
		</div>
		<bottom-part></bottom-part>
	</div>
</template>

<script>
	import TopPart from '@/components/Top'
	import RecPart from '@/components/Rec'
	import BottomPart from '@/components/Bottom'
	
	export default {
		components: {
			TopPart,
			RecPart,
			BottomPart
		},
		data () {
			return {
				tabIndex: 0,
				hilightColor: '#0b51cf',
				normalColor: '#999',
				recData: {
				},
				recInfo: [
					{
						name: '算法',
						title: 'sdfasdfasdfas'
					},
					{
						name: '研发'
					},
					{
						name: '产品'
					},
					{
						name: '其他'
					}
				],
				marginLeft: ['0px']
			}
		},
		methods: {
			tab (item, index) {
				this.tabIndex = index;
				this.recData = this.recInfo[index];
			}
		},
		mounted () {
			this.recData = this.recInfo[0];
		}
	}
</script>
<style lang="scss" scoped>
	.rec {
		background: #f8f9fc;
	}
	.rec-nav {
		width: 790px;
		height: 133px;
	}
	.rec-nav ul {
		padding-top: 63px;
		list-style: none;
	}
	.rec-nav ul li {
		display: inline-block;
		margin-left: 220px;
	}
	.rec-nav ul li a {
		width: 32px;
		font-family: MicrosoftYaHei;
		font-size: 16px;
		line-height: 17px;
		font-weight: normal;
		letter-spacing: 0px;
		color: #999999;
	}
	.rec-con {
		height: 773px;
		width: 100%;
	}
	.rec-con-title {
		width: get-width-ratio(704, 1920);
		display: inline-block;
		background: #fff;
		margin-right: get-width-ratio(34, 1920);
		height: 739px;
	}
	.title-info {
		position: relative; 
		right: 61px; 
		top: 60px; 
		text-align: right;
	}
	.title-info li {
		margin-bottom: 35px;
		height: 17px;
		font-family: MicrosoftYaHei;
		font-size: 16px;
		font-weight: normal;
		letter-spacing: 1px;
		color: #0b51cf
	}
	.rec-con-info {
		width: get-width-ratio(1180, 1920);
		display: inline-block;
		background: #fff;
		height: 739px;
		float: right;
	}
	.rec-detail {
		margin-top: 60px;
		margin-left: 60px;
	}
	.rec-detail-first {
		font-family: MicrosoftYaHei;
		font-size: 16px;
		font-weight: normal;
		letter-spacing: 0px;
		color: #333333;
		margin-bottom: 18px;
	}
	.rec-detail-second {
		font-family: MicrosoftYaHei;
		font-size: 16px;
		font-weight: normal;
		letter-spacing: 0px;
		color: #333333;
		margin-bottom: 40px;
	}
	.rec-info-task {
		list-style: none;
	}
	.rec-info-label {
		height: 17px;
		font-family: MicrosoftYaHei;
		font-size: 16px;
		font-weight: normal;
		margin-bottom: 19px;
		letter-spacing: 0px;
		color: #333333;
	}
	.rec-info-task li {
		font-family: MicrosoftYaHei;
		font-size: 14px;
		font-weight: normal;
		margin-bottom: 18px;
	}
</style>
























