<template>
	<div class="solution">
		<top-part curIndex=2></top-part>
		<div class="solution-con">
			<div class="solution-con-part">
				<img class="solution-con-img" src="../images/solution-1.png">
				<div class="solution-con-text float-right">
					<div class="solution-con-head">智能大脑解决方案</div>
					<div class="solution-con-sep"></div>
					<div class="solution-con-desc">
						大数据时代，智铀科技以最先进的机器学习解决方案，帮助银行深入挖掘数据潜在的价值洞察客户需求，促进银行决策从“经验驱动”向“数据驱动”转化，基于数据信息为客户提供差异化、个性化的产品和服务，提高精准营销能力，实现业务运营最优化，从而最终打造并保持商业银行的核心竞争力。
					</div>
				</div>
			</div>
			<div class="solution-con-part">
				<div class="solution-con-text float-left">
					<div class="solution-con-head">企业销售预测</div>
					<div class="solution-con-sep"></div>
					<div class="solution-con-desc">
						Ebrain自动处理各种时间序列数据，简化销售预测，企业可以提前了解客户需求，更有效地管理生产和供应，做好业务准备，实现利润最大化
					</div>
				</div>
				<img class="solution-con-img clear" src="../images/solution-2.png">
			</div>
			<div class="solution-con-part">
				<img class="solution-con-img" src="../images/solution-3.png">
				<div class="solution-con-text float-right">
					<div class="solution-con-head">营销和个性化推荐</div>
					<div class="solution-con-sep"></div>
					<div class="solution-con-desc">
						Ebrain轻松的帮助企业分析每一个客户的个性化需求，实现精准的产品营销与投放，从而提升营销效率与业务收入。
					</div>
				</div>
			</div>
			<div class="solution-con-part">
				<div class="solution-con-text float-left">
					<div class="solution-con-head">银行风险管理</div>
					<div class="solution-con-sep"></div>
					<div class="solution-con-desc">
						银行开展预测建模是增加收入和保持竞争力的关键。但大数据环境下，建模效率低更新速度慢，阻碍了银行风险管理水平的进一步提升。Ebrain自动化机器学习平台使现有业务团队能够快速分析解决问题，构建更加灵活的风险管理模型，保持Fintech时代的核心竞争力。
					</div>				
				</div>
				<img class="solution-con-img clear" src="../images/solution-4.png">
			</div>
			<div class="solution-con-part">
				<img class="solution-con-img" src="../images/solution-5.png">
				<div class="solution-con-text float-right">
					<div class="solution-con-head">互联网金融</div>
					<div class="solution-con-sep"></div>
					<div class="solution-con-desc">
						Ebrian整合世界领先的数据科学经验知识和最佳实践，提供无与伦比的自动化水平和易用性、可解释性，有效整合市场人员，业务产品人员，金融分析师和其他专业人员，使银行或金融科技公司能够在最短的时间内建立和部署高度精确的机器学习模型。
					</div>
				</div>
			</div>
		</div>
		<bottom-part></bottom-part>
	</div>
</template>
<style lang="scss">
	.float-right {
		float: right;
	}
	.float-left {
		float: left;
	}
	.solution {
		background: #fff;
	}
	.solution-con-part {
		clear: both;
		height: 327px;
		text-align: left;
		vertical-align: middle;
	}
	.solution-con {
		margin-top: 60px;
		width: 1200px;
		margin-bottom: 57px;
	}
	.solution-con-text {
		display: inline-block;
		width: 600px;
		height: 327px;
		text-align: center;
		vertical-align: 50%;
	}
	.solution-con-head {
		height: 25px;
		font-family: MicrosoftYaHei;
		font-size: 24px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 0px;
		letter-spacing: 2px;
		color: #0b51cf;
		margin-top: 72px;

	}
	.solution-con-sep {
		width: 20px;
		height: 3px;
		background-color: #999999;
		margin-bottom: 23px;
		margin-top: 23px;
	}
	.solution-con-desc {
		text-align: left;
		width: 483px;
		height: 111px;
		font-family: MicrosoftYaHei;
		font-size: 14px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 24px;
		letter-spacing: 0px;
		color: #666666;
	}
	.solution-con-img {
		width: 600px;
		height: 327px;
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