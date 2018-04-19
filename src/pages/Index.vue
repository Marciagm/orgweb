<template>
	<div>
		<top-part curIndex=0></top-part>
		<div class="index-pre">
			<div class="index-pre-con">
				<div class="index-pre-left">
					<div>自动化机器学习</div>
					<div>帮助企业实现智能化驱动</div>
				</div>
				<div class="index-pre-sep"></div>
				<div class="index-pre-right">
					整合世界领先的数据科学的经验和最佳实践，自动化数据科学的各个环节，大幅提升数据科学家工作效率，让普通技术和业务人员也可以直接使用，用极短的时间构建和部署高度精确机器学习模型。使用自动化机器学习可以让企业在各个领域发现和实践AI机会，实现智能化转型。
				</div>
			</div>    
		</div>
		<div class="first">
			<div class="first-con">
				<img src="../images/product-mac.png" class="first-img">
				<div class="first-desc">
					<div>
						<span class="first-label">产品特点</span>
						<span class="first-label-eng">PRODUCT CHARACTERISTIC</span>
					</div>
					<div class="first-desc-detail">Ebrain自动化机器学习平台，使用“第四代机器学习”技术，基于大规模分布式计算能力，用户只需一键操作即可自动化完成特征工程和模型选择及参数优化，大幅提升数据处理速度加快数据科学应用进程。</div>
					<button @click="goProduct">了解详情</button>
				</div>
			</div>
		</div>
		<div class="third" style="padding-top: 20px; height: 500px;">
			<div class="third-con">
				<div class="third-con-left">
					<div class="third-con-head" style="margin-top: 58px;">
						<span class="first-label-eng">JUST ONE CLICK</span>
						<span class="first-label" style="margin-left: 20px; margin-right: 0;">一键完成模型训练</span>
					</div>
					<div class="third-con-desc">
						提高产能，将耗时且重复的工作交给机器来完成，更加关注业务，可以在有限的时间内找到更好的方案，没有机器学习经验的用户也可以建立高精度预测模型，在企业内部各个环节发现和实践AI驱动，提高智能化水平。
					</div>
				</div>
				<img class="third-con-img" src="../images/user-can-mac.png">
			</div>
		</div>
		<div class="second">
			<div class="second-head">
				<span class="second-label">我们能做到</span>
				<div class="first-label-eng">WHAT WE CAN DO</div>
			</div>
			<div class="second-con">
				<div v-for="(item, index) in dataIndexs" @mouseover="hover(item, index)" @mouseout="out(item, index)">
					<div class="second-con-head">
						<img :src="item.hover ? item.himg : item.img">
					</div>
					<div class="second-con-sep"></div>
					<div class="second-con-sub">{{ item.title }}</div>
					<!-- <div class="second-con-desc">{{ item.desc }}</div> -->
				</div>
			</div>
		</div>
		<div class="fourth">
			<div class="fourth-con">
				<img src="../images/founder.png">
				<div  class="fourth-con-right">
					<span class="fourth-label">团队创始人</span>
					<span class="fourth-label-eng" style="margin-left: 15px;">FOUNDER OF THE TEAM</span>
					<div class="fourth-con-sub">——创始人夏粉</div>
					<ul class="fourth-con-desc">
						<li>中科院机器学习博士，曾任百度高级科学家</li>
						<li>原百度超大规模机器学习团队负责人，CTR团队负责人</li>
						<li>拥有十五年以上机器学习研究和应用经验</li>
						<li>曾在机器学习顶级会议杂志ICML,NIPS等发表多篇文章</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="third">
			<div class="third-con">
				<div class="third-con-left">
					<div class="third-con-head">
						<span class="first-label-eng">APPLICATION FIELD</span>
						<span class="first-label" style="margin-left: 20px; margin-right: 0;">应用领域</span>
					</div>
					<div class="third-con-desc">智能时代下，各行业发展速度加快，洞察行业趋势，预测企业市场、客户、管理、服务等领域的变化，提前采取行动，有针对性的优化资源配置，可以帮助企业在行业竞争中保持领先优势。智铀科技应用最新的机器学习技术，帮助企业发现AI机会，最大化转化数据价值，助力企业预见未来。
					</div>
					<button @click="goSolution">查看更多</button>
				</div>
				<img class="third-con-img" src="../images/solution-mac.png">
			</div>
		</div>
	</div>
</template>

<script>
	import TopPart from '@/components/Top'

	export default {
		name: 'index',
		id: 'index',
		components: {
			TopPart
		},
		data () {
			return {
				dataIndexs: [
					{
						img: require('../images/1-blue.png'),
						himg: require('../images/1-white.png'),
						title: '缩减建模时间',
						hover: false,
						desc: '为企业减少95%的生产时间'
					},
					{
						img: require('../images/2-blue.png'),
						himg: require('../images/2-white.png'),
						title: '缩减工程成本',
						hover: false,
						desc: '为企业减少85%的工程成本'
					},
					{
						img: require('../images/3-blue.png'),
						himg: require('../images/3-white.png'),
						title: '减少运营成本',
						hover: false,
						desc: '为企业减少70%的运营成本'
					},
					{
						img: require('../images/4-blue.png'),
						himg: require('../images/4-white.png'),
						title: '提高生产率',
						hover: false,
						desc: '为企业提高10倍多的生产率'
					}
				]
			}
		},
		mounted () {
		},
		methods: {
			goProduct () {
				this.$router.push('/product');
			},
			goSolution () {
				this.$router.push('/field');
			},
			hover (item, index) {
				item.hover = true;
			},
			out (item, index) {
				item.hover = false;
			}
		}
	}
</script>

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
	.part {
		text-align: center;
	}
	.index-pre {
		box-sizing: border-box;
		padding-top: 100px;
		height: 287px;
		background-color: #f8f9fc;
		text-align: left;
	}
	.index-pre-con {
		width: 1200px;
	}
	.index-pre-left {
		vertical-align: top;
		margin-left: 100px; 
		display: inline-block;
		height: 76px;
		font-size: 30px;
		line-height: 45px;
		letter-spacing: 0px;
		color: #333333;
	}
	.index-pre-sep {
		display: inline-block;
		vertical-align: top;
		margin-top: 18px;
		width: 1px;
		height: 40px;
		margin-left: 110px;
		margin-right: 120px;
		background-color: #cccccc;
	}
	.index-pre-right {
		vertical-align: top;
		width: 517px;
		display: inline-block;
		width: 517px;
		height: 86px;
		font-size: 14px;
		line-height: 24px;
		letter-spacing: 0px;
		color: #666666;
	}
	.first {
		@extend .part;
		width: 100%;
		height: 619px;
		background: #fff;
		padding-top: 106px;
		box-sizing: border-box; 
	}
	.first-con {
		width: 1200px;
		height: 388px;
	}
	.first-img {
		width: 616px;
		height: 341px;
	}
	.first-label {
		@extend .label;
		color: #333333;
		margin-right: 20px;
	}
	.first-label-eng {
		color: #999999;
	}
	.first-desc {
		text-align: left;
		margin-top: 66px;
		width: 483px;
		float: right;
		height: 365px;
		margin-right: 30px;
	}
	.first-desc-detail {
		margin-top: 39px;
		width: 483px;
		font-size: 14px;
		/*line-height: 24px;*/
		letter-spacing: 0px;
		color: #666666;
		margin-bottom: 33px;
	}
	.first button {
		width: 115px;
		height: 33px;
		background-color: #2081e4;
		color: #fffefe;
		font-size: 14px;
		line-height: 33px;
	}
	.second {
		box-sizing: border-box;
		clear: both;
		width: 100%;
		padding-top: 125px;
		height: 713px;
		background-color: #f8f9fc;
		text-align: center;
	}
	.second-con {
		display: flex;
		width: 1200px;
		margin-top: 79px;
		height: 291px;
		text-align: left;
	}
	.second-con >div {
		flex: 1;
		display: inline-block;
		width: 278px;
		text-align: center;
		height: 291px;
		margin-right: 28px;
		background-color: #ffffff;
		border: 1px solid #ccc;
	}
	.second-con >div:hover {
		background-color: #1f6af1; 
		border: solid 1px #cccccc; 
		color: #fff;
	}
	.second-con >div:hover div { 
		color: #fff;
	}
	.second-con >div:hover .second-con-sep {
		background: #ccc;
	}
	.second-con >div 
	.second-con div:last-child {
		flex: 1;
		margin-right: 0;
	}
	.second-label {
		@extend .label;
		color: #333333;
	}
	.second-con-head {
		height: 69px;
		margin-top: 70px;
		margin-bottom: 33px;
	}
	.second-con-sep {
		width: 20px;
		height: 4px;
		background-color: #999999;
		margin-bottom: 30px;
	}
	.second-con-sub {
		height: 21px;
		font-size: 20px;
		letter-spacing: 2px;
		color: #333333;
		margin-bottom: 12px;
	}
	.second-con-desc {
		height: 15px;
		font-size: 14px;
		letter-spacing: 1px;
		color: #666666;
	}
	.third {
		padding-top: 120px;
		box-sizing: border-box;
		height: 633px;
		background: #fff;
		text-align: center;
	}
	.third-con {
		width: 1200px;
		height: 415px;
		text-align: left;
	}
	.third-con-left {
		display: inline-block;
		width: 483px;
		height: 415px;
		text-align: right;
	}
	.third-con-head {
		margin-top: 38px;
		margin-bottom: 40px;
	}
	.third-con-desc {
		/* text-indent: 28px; */
		width: 483px;
		font-size: 14px;
		line-height: 24px;
		letter-spacing: 0px;
		color: #666666;
		text-align: left;
	}
	.third-con-desc-sub {
		height: 21px;
		text-align: right;
		font-family: MicrosoftYaHei;
		font-size: 20px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 30px;
		margin-bottom: 18px;
		letter-spacing: 2px;
		color: #666;
	}
	.third-con-left button {
		margin-left: 30px;
		width: 115px;
		height: 33px;
		background-color: #2081e4;
		font-size: 14px;
		line-height: 24px;
		letter-spacing: 0px;
		color: #fffefe;
		margin-top: 25px;
	}
	.third-con-img {
		float: right;
		width: 616px;
		height: 341px;
	}
	.fourth {
		width: 100%;
		clear: both;
		height: 408px;
		background: url("../images/founder-bg.png") no-repeat;
		background-position: top center;
		text-align: center;
	}
	.fourth-con {
		position: relative;
		width: 885px;
		height: 408px;
	}
	.fourth-con img {
		position: absolute;
		left: 0;
		bottom: 0;
	}
	.fourth-con-right {
		width: 395px;
		position: absolute;
		right: 0;
		top: 128px;
		text-align: left;
	}
	.fourth-label {
		@entend .label;
		color: #fff;
		font-size: 30px;
	}
	.fourth-label-eng {
		@exted .label-eng;
		color: #ccc;
	}
	.fourth-con-sub {
		margin-top: 36px;
		height: 17px;
		font-size: 16px;
		line-height: 24px;
		letter-spacing: 0px;
		color: #ffffff;
	} 
	.fourth-con-desc {
		margin-top: 26px;
	}
	.fourth-con-desc li {
		font-size: 14px;
		letter-spacing: 0px;
		line-height: 24px;
		color: #eeeeee;
	}
</style>










