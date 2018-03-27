<template>
	<div class="rec-con">
		<div class="rec-con-title">
			<ul class="title-info">
				<li v-for="(item, index) in recData.items" @mouseover="hover(index)">
					<span v-if="index == recData.curIndex" style="color: #0b51cf">{{ item.title }}</span>
					<span v-else>{{ item.title }}</span>
				</li>
			</ul>
		</div>
		<div class="rec-con-info">
			<div class="rec-detail" v-for="(item, index) in recData.items">
				<div v-if="index == recData.curIndex">
					<div class="rec-label">简历请发：hr@ebrain.ai</div>
					<div class="rec-label">工作地点：北京</div>
					<div class="rec-detail-third">
						<div class="rec-info-label">工作职责</div>
						<ul class="rec-lists">
							<li v-for="slot in item.task">-{{ slot }}</li>
						</ul>
					</div>
					<div class="rec-detail-fourth">
						<div class="rec-info-label">职位要求</div>
						<ul class="rec-lists">
							<li v-for="slot in item.require"> -{{ slot }}</li>
						</ul>
					</div>
				</div>
			</div>
		</div> 
	</div>
</template>
<script>
	export default  {
		name: 'rec',
		props: {
			recData: {
				type: Object,
				required: true
			}
		},
		methods: {
			hover (index) {
				this.recData.curIndex = index;
			}
		}
	}
</script>
<style lang="scss">
	@import "~base";
	@function get-width-ratio ($width, $large-width) {
		@return $width / $large-width * 100%;
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
		color: #999;
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
		margin-right: 60px;
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
	}
	.rec-label {
		@extend .label;
		font-size: 16px;
		letter-spacing: 0;
		margin-bottom: 18px;
	}
	.rec-info-label {
		@extend .rec-label;
		margin-top: 40px;
		margin-bottom: 18px;	
	}
	.rec-lists li {
		font-family: MicrosoftYaHei;
		font-size: 14px;
		line-height: 18px;
		font-weight: normal;
		margin-bottom: 18px;
		color: #666;
	}
</style>











