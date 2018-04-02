<template>
	<div>
		<top-part curIndex=3></top-part>
		<div class="about-us-con">
			<div>
				<div class="about-us-head">公司介绍</div>
				<div class="label-eng">COMPANY INTRODUCTION</div>
				<div class="about-us-desc">智铀科技是致力于打造世界上最先进机器学习平台的人工智能服务公司，拥有世界上最先进的企业级自动化机器学习平台。智铀科技专注于为企业带来全流程，自动化的建模和部署能力，为用户提供从数据预处理，模型训练，模型评估，模型预测到结果分析等一站式服务，从而降低机器学习的门槛，为企业构建人工智能核心。智铀科技还掌握最新的“第四代机器学习”技术能力，可以构建自动化机器学习平台，实现在线智能学习。</div>
				<div class="about-us-foot">
					<span class="about-us-foot-head">企业愿景：</span>
					<span class="about-us-foot-desc">见证AI裂变    让AI成为企业发展新动力    AI驱动 预见未来 才能遇见未来（让AI驱动未来）</span>
				</div>
				<div class="about-us-sep"></div>
			</div>
			<div>
				<div class="about-us-head">团队简介</div>
				<div class="label-eng">TEAM INTRODUCTION</div>
				<div class="about-us-team">
					<img src="../images/about-us.png">
					<div class="about-us-leader">
						<div class="about-us-leader-head">-创始人夏粉</div>
						<ul class="about-us-leader-desc">
							<li>中科院机器学习博士，曾任Baidu高级科学家</li>
							<li>原百度超大规模机器学习团队负责人，CTR团队负责人</li>
							<li>拥有十五年以上机器学习研究和应用经验</li>
							<li>曾在机器学习顶级会议杂志ICML,NIPS等发表多篇文章</li>
						</ul>
					</div>
					<div class="about-us-staff">
						<div class="about-us-team-sep"></div>
						<div style="display: inline-block">
							<div class="about-us-leader-head">-核心成员</div>
							<div class="about-us-staff-desc">			团队核心成员均来自BAT等各大互联网公司，拥有多年算法实战经验
							</div>
						</div>
					</div>
				</div>
				<div class="about-us-sep clear"></div>
			</div>
			<div>
				<div class="about-us-head">联系我们</div>
				<div class="label-eng">CONTACT US</div>
				<div class="about-us-contact">
					<div>
						<div class="about-us-contact-head">邮箱</div>
						<div class="about-us-label">wisutech@ebrain.ai</div>
					</div>
					<div>
						<div class="about-us-contact-sep"></div>
					</div>
					<div>
						<div  class="about-us-contact-head">地址</div>
						<div  class="about-us-label">北京市海淀区鼎好大厦3层智铀科技</div>

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
	.about-us-con {
		text-align: center;
		margin-top: 78px;
	}
	.about-us-con>div {
		width: 920px;
	}
	.about-us-head {
		@extend .label;
		margin-bottom: 11px;
		font-size: 30px;
	}
	.about-us-desc {
		text-indent: 28px;
		text-align: left;
		width: 920px;
		font-size: 14px;
		line-height: 24px;
		letter-spacing: 0px;
		color: #666666;
		margin-top: 58px;
		margin-bottom: 30px;
	}
	.about-us-foot {
		margin-bottom: 100px;
		text-align: left;
	}
	.about-us-sep {
		width: 20px;
		height: 4px;
		background-color: #0b51cf;
		margin-bottom: 98px;
	}
	.about-us-foot-head {
		width: 68px;
		height: 14px;
		font-size: 14px;
		line-height: 24px;
		letter-spacing: 0px;
		color: #333333;
	}
	.about-us-foot-desc {
		height: 16px;
		font-size: 14px;
		line-height: 24px;
		letter-spacing: 0px;
		color: #666666;
	}
	.about-us-team {
		height: 155px;
		margin-top: 48px;
		margin-bottom: 113px;
		text-align: left;
	}
	.about-us-leader {
		display: inline-block;
		vertical-align: top;
		margin-left: 56px;
		margin-top: 11px;
	}
	.about-us-leader-head {
		margin-bottom: 26px;
		height: 17px;
		font-size: 16px;
		line-height: 24px;
		letter-spacing: 0px;
		color: #333333;
	}
	.about-us-leader-desc {
		width: 356px;
		height: 87px;
		font-size: 14px;
		line-height: 24px;
		letter-spacing: 0px;
		color: #666666;
	}
	.about-us-team-sep {
		margin-top: 13px;
		margin-right: 77px;
		display: inline-block;
		vertical-align: top;
		width: 2px;
		height: 130px;
		background-color: #eeeeee;
	}
	.about-us-staff {
		@extend .about-us-leader;
		float: right;
	}
	.about-us-staff-desc {
		width: 234px;
		height: 39px;
		font-size: 14px;
		line-height: 24px;
		letter-spacing: 0px;
		color: #666666;
	}
	.about-us-contact {
		display: flex;
		width: 700px;
		margin-top: 96px;
		margin-bottom: 148px;
	}
	.about-us-contact>div {
		flex: 1;
	}
	.about-us-contact-sep {
		display: inline-block;
		width: 2px;
		height: 60px;
		background-color: #eeeeee;
	}

	.about-us-label {
		height: 15px;
		font-size: 14px;
		letter-spacing: 0px;
		color: #666666;
	}
	.about-us-contact-head {
		@extend .about-us-label;
		font-size: 16px;
		letter-spacing: 1px;
		margin-bottom: 14px;
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