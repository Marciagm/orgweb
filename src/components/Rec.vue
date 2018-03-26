<template>
	<div class="rec-con">
		<div class="rec-con-title">
			<ul class="title-info">
				<li>大规模机器学习--{{ recData.name }}</li>
				<li>大规模机器学习</li>
			</ul>
		</div>
		<div class="rec-con-info">
			<div class="rec-detail">
				<div class="rec-detail-first">简历请发：hr@ebrain.ai</div>
				<div class="rec-detail-second">工作地点：北京</div>
				<div class="rec-detail-third">
					<div class="rec-info-label">工作职责</div>
					<ul class="rec-info-task">
						<li>- 从事前沿大规模机器学习算法的研究；从事前沿大规模机器学习算法的研究；从事前沿大规模机器学习算法的研究；从事前沿大规模机器学习算法的研究；从事前沿大规模机器学习算法的研究；</li>
						<li>- 从事前沿大规模机器学习算法的研究；</li>
						<li>- 从事前沿大规模机器学习算法的研究；</li>
					</ul>
				</div>
				<div class="rec-detail-fourth">
					<div class="rec-info-label">工作职责</div>
					<ul class="rec-info-task">
						<li>- 从事前沿大规模机器学习算法的研究；</li>
						<li>- 从事前沿大规模机器学习算法的研究；</li>
						<li>- 从事前沿大规模机器学习算法的研究；</li>
						<li>- 从事前沿大规模机器学习算法的研究；</li>
						<li>- 从事前沿大规模机器学习算法的研究；</li>
						<li>- 从事前沿大规模机器学习算法的研究；</li>
					</ul>
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
		mounted () {
			console.log('dddd:     ' + this.recData);

		}
	}
</script>
<style lang="scss">
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











