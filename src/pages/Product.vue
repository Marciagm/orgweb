<template>
	<div class="pro">
		<top-part curIndex=1></top-part>
		<div class="pro-flow">
			<div class="pro-flow-con">
				<div class="label">产品工作流程</div>
				<div class="label-eng">PROCESS OF PRODUCT WORKING</div>
				<div class="pro-flow-detail">
					<div>
						<div class="pro-flow-box">
							<img src="../images/process-data.png">
						</div>
						<div class="pro-item-label">上传数据</div>
					</div>
					<div class="pro-flow-arrow">
						<img src="../images/flow-arrow.png">
					</div>
					<div>
						<div class="pro-flow-box">
							<img src="../images/process-process.png">
						</div>
						<div class="pro-item-label">选择业务目标</div>
					</div>
					<div class="pro-flow-arrow">
						<img src="../images/flow-arrow.png">
					</div>
					<div>
						<div class="pro-flow-box">
							<img src="../images/process-run.png">
						</div>
						<div class="pro-item-label">一键构建模型</div>
					</div>
					<div class="pro-flow-arrow">
						<img src="../images/flow-arrow.png">
					</div>
					<div>
						<div class="pro-flow-box">
							<img src="../images/process-model.png">
						</div>
						<div class="pro-item-label">开启预测</div>
					</div>
				</div>
			</div>
		</div>
		<div class="pro-merit">
			<div class="pro-merit-con">
				<div class="label">产品优点</div>
				<div class="label-eng">APRODUCT ADVANTAGES</div>
				<div class="pro-merit-lists">
					<div class="pro-merit-lists-left">
						<div>
							<img src="../images/advantages-operation.png">
						</div>
						<div class="pro-merits-head">易操作</div>
						<div class="pro-merit-desc">只需提供数据，一键操作实现模型训练，最大化提升数据科学家和分析人员的工作效率</div>
					</div>
					<div class="pro-merit-lists-center">
						<div>
							<img src="../images/advantages-performance.png">
						</div>
						<div class="pro-merits-head">高性能</div>
						<div class="pro-merit-desc">支持大规模分布式机器学习集群，以快速探索、构建高精度机器学习模型，大幅缩短建模工作周期</div>
					</div>
					<div class="pro-merit-lists-right">
						<div>
							<img src="../images/advantages-visualization.png">
						</div>
						<div class="pro-merits-head">可视化、可解释</div>
						<div class="pro-merit-desc">支持多样化解释工具，用户可清晰了解模型逻辑，数据科学家和业务人员轻松读懂预测结果</div>
					</div>
				</div>
				<div class="pro-merit-lists">
					<div class="pro-merit-lists-left">
						<div>
							<img src="../images/advantages-Integration-services.png">
						</div>
						<div class="pro-merits-head">集成服务</div>
						<div class="pro-merit-desc">标准化的服务接口，客户或服务商可以方便的将自动化机器学习能力无缝嵌入应用系统，开发垂直和水平AI解决方案，实现场景智能化</div>
					</div>
					<div class="pro-merit-lists-center">
						<div>
							<img src="../images/advantages-Rapid-deployment.png">
						</div>
						<div class="pro-merits-head">快速部署</div>
						<div class="pro-merit-desc">支持一键部署预测模型，轻松实现业务对接，而无需开发代码和基础框架，几分钟内就可以实现业务价值。</div>
					</div>
					<div class="pro-merit-lists-right">
						<div>
							<img src="../images/advantages-model.png">
						</div>
						<div class="pro-merits-head">高质量模型</div>
						<div class="pro-merit-desc">自动完成数据预处理、转化和调参工作，对特定数据集和预测目标进行模型自动优化。 </div>
					</div>
				</div>
			</div>
		</div>
		<div class="pro-industry">
			<div class="pro-industry-con">
				<div class="label">合作行业</div>
				<div class="label-eng">COOPERATION INDUSTRY</div>
				<div class="pro-industry-lists">
					<div class="pro-industry-lists-item">
						<img src="../images/cooperation-bank.png" class="pro-industry-img">
						<div class="pro-item-label">银行</div>
					</div>
					<div class="pro-industry-lists-item">
						<img src="../images/cooperation-Internet.png" class="pro-industry-img">
						<div class="pro-item-label">互联网金融</div>
					</div>
					<div class="pro-industry-lists-item">
						<img src="../images/cooperation-advertising.png" class="pro-industry-img">
						<div class="pro-item-label">广告</div>
					</div>
					<div class="pro-industry-lists-item">
						<img src="../images/cooperation-retail.png" class="pro-industry-img">
						<div class="pro-item-label">零售</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss">
	.box-style {
		box-sizing: border-box;
	}
	.label {
		font-size: 30px;
		letter-spacing: 3px;
		color: #333333;
	}
	.label-eng {
		font-size: 16px;
		letter-spacing: 1px;
		color: #999;
	}
	.pro {
		text-align: center;
	}
	.pro-item-label {
		@extend .label;
		font-size: 20px;
	}
	.pro-flow {
		background: #f8f9fc;
		height: 662px;    
	}
	.pro-flow-arrow {
		box-sizing: border-box;
		padding-top: 92px;
		width: 20px;
		height: 196px;
		display: inline-block;
	}
	.pro-flow-con {
		box-sizing: border-box;
		width: 1200px;
		padding-top: 119px;
		height: 662px;
	}
	.pro-flow-detail {
		margin-top: 79px;
	}
	.pro-flow-detail>div {
		display: inline-block;
		vertical-align: top;
	}
	.pro-flow-box {
		box-sizing: border-box;
		width: 270px;
		height: 196px;
		background-color: #ffffff;
		border: solid 1px #cccccc;
		padding: 59px 103px;
		margin-bottom: 29px;
	}
	.pro-merit {  
		height: 1035px; 
		background-color: #fff;
	}
	.pro-merit-lists {
		margin-top: 93px;
		width: 1050px;
	}
	.pro-merit-lists-left {
		float: left;
	}
	.pro-merit-lists-center {
		margin-left: 80px;
		margin-right: 80px;
	}
	.pro-merit-lists-right {
		float: right;
	}
	.pro-merit-lists>div {
		width: 292px;
		display: inline-block;
	}
	.pro-merits-head {
		@extend .label;
		font-size: 20px;
		margin-top: 40px;
		margin-bottom: 19px;
	}
	.pro-merit-desc {
		width: 292px;
		@extend .label-eng;
		font-size: 14px;
		color: #666;
	}
	.pro-merit-con {
		width: 1200px;
		box-sizing: border-box;
		padding-top: 119px;
	}
	.pro-industry {
		box-sizing: border-box;
		padding-top: 119px;
		height: 634px;
		background-color: #f8f9fc;
	}
	.pro-industry-img {
		height: 179px;
		margin-bottom: 20px;
	}
	.pro-industry-con {
		width: 1200px;
	}
	.pro-industry-lists {
		display: flex;
		margin-top: 79px;
	}
	.pro-industry-lists-item {
		flex: 1;
	}
</style>
<script>
	import TopPart from '@/components/Top'

	export default {
		components: {
			TopPart
		}
	}
</script>