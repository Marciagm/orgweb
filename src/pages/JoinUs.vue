<template>
	<div>
		<top-part curIndex=4></top-part>
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
	</div>
</template>

<script>
	import TopPart from '@/components/Top'
	import RecPart from '@/components/Rec'
	
	export default {
		components: {
			TopPart,
			RecPart
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
						curIndex: 0,
						items: [
							{
								title: '大规模机器学习科学家',
								task: [
									'从事前沿大规模机器学习算法的研究；',
									'研究数据挖掘或统计学习领域的前沿技术,并用于实际问题的建模和优化；',
									'通过对数据的敏锐洞察,深入挖掘产品潜在价值和需求,进而提供更有价值的技术和策略,推动产品成长；',
									'负责相关方向核心成果的专利化，以及顶级期刊和会议论文的发表。'
								],
								require: [
									'硕士以上学历, 计算机专业机器学习、数据挖掘处理方向；数学专业统计学、应用数学方向优先；',
									'精通常用算法和数据结构，对机器学习算法有较强的实现能力；',
									'理解机器学习基本算法的设计思想和求解手段，如DNN,SVM, LR, RF, Boosting等；',
									'有大规模机器学习系统研发经验或机器学习算法优化理论的研究经验者优先；',
									'有搜索引擎、广告投放系统、推荐系统等相关技术的研究或实践经验者优先；',
									'良好的逻辑思维能力，对数据敏感，能够发现关键数据、抓住核心问题；',
									'具有良好的沟通能力，和良好的团队合作精神；',
									'在顶级国际期刊或国际会议上发表论文，或参加相关国际比赛获奖，及持有相关专利者优先。'
								]
							},
							{
								title: '大规模机器学习工程师',
								task: [
									'从事前沿大规模机器学习算法的研究与分布式开发，实现理论和工程的重大突破；',
									'将算法应用到互联网海量数据中，解决公司核心机器学习问题，如搜索、推荐、CTR预估等；',
									'提供开放平台，提供业内领先的机器学习服务，将技术创新推向亿万用户；',
									'构建各种数据规模下，计算最快的大规模机器学习平台。'
								],
								require: [
									'计算机、数学相关专业硕士以上学位；',
									'良好的机器学习原理和最优化理论基础，深入理解机器学习问题求解方法；',
									'有丰富的大规模机器学算法习开发和应用经验；',
									'良好的编程功底；',
									'熟悉分布式/高性能计算系统，有map-reduce、spark、mpi、gpu等开发经验者优先；',
									'具有良好的沟通能力，和良好的团队合作精神；',
									'在顶级国际期刊或国际会议上发表论文，或参加相关国际比赛获奖，及持有相关专利者优先。'
								]
							}
						]
					},
					{
						name: '研发',
						curIndex: 0,
						items: [
							{
								title: 'Java开发工程师',
								task: [
									'负责基于机器学习平台的项目开发工作；',
									'负责设计、开发机器学习平台业务模块及相应功能实现，按时交付模块开发工作；',
									'负责线上相关故障、疑难问题及时的排查和处理；',
									'配合开发、产品、运营等，完成职责内工作及技术支撑工作。'
								],
								require: [									
									'大学本科及以上学历，计算机相关软件专业，3年以上Java开发经验;',
									'能够熟练使用主流开发框架（SpringMVC/Spring/MyBatis/Hibernate/Struts2等）;',
									'熟悉Spring Boot、RPC框架;',
									'熟悉数据库基本原理，熟悉MySQL，了解SQL的性能优化;',
									'熟悉html5/javascript/css等前端技术;',
									'自我驱动的学习和工作习惯，对未知技术和领域能快速掌握并实践;',
									'良好的沟通、协调能力，能在一定的压力下有效开展工作。'
								]
							},
							{
								title: '前端研发工程师',
								task: [
									'负责基于机器学习平台的项目前端开发工作；',
									'负责设计、开发机器学习平台业务模块及相应功能实现，按时交付模块开发工作；',
									'负责线上相关故障、疑难问题及时的排查和处理；',
									'配合开发、产品、运营等，完成职责内工作及技术支撑工作。',
								],
								require: [
									//'大学本科及以上学历，计算机相关软件专业，3年以上Java开发经验;',
									'大学本科及以上学历，计算机相关软件专业，3年以上工作经验;',
									/*'能够熟练使用主流开发框架（SpringMVC/Spring/MyBatis/Hibernate/Struts2等）;',*/
									'熟悉html5/javascript/css等前端技术，有SeaJs或者 RequireJs开发经验优先;',
									'熟悉angularjs、vue.js等UI开发框架;',
									'自我驱动的学习和工作习惯，对未知技术和领域能快速掌握并实践;',
									'良好的沟通、协调能力，能在一定的压力下有效开展工作。'
								]
							},
							{
								title: '测试工程师',
								task: [									
									'负责参与产品的测试（包括自动化）需求分析，寻找合适的测试解决方案；',
									'负责参与产品的测试（包括自动化）设计，设计高效的测试框架方案，具备一定的扩展性；',
									'负责参与产品的自动化测试脚本开发(如：接口/功能/性能/测试工具开发等)；',
									'负责参与产品的测试技术文档积累(如：测试checkList/测试报告等)；',
									'负责产品的性能压力测试，发现问题组织开发分析解决，最后形成问题闭环，出具性能测试报告。'
								],
								require: [
									'计算机专业本科以上学历，2年以上测试经验；',
									'具备丰富的自动化测试经验，精通自动化测试框架，具有一定的实践经验；',
									'熟悉C/C++/C#/java/Python/Javascript/PHP/Ruby/等任何一门语言；',
									'精通Windows/LINUX/UNIX等操作系统；',
									'精通数据库如：oracle/mysql/sql server/等；',
									'熟悉多种测试工具如:Jira/QC/LoadRuner/Jmeter/QTP/Selenium等；',
									'具备良好的团队合作精神，责任心强，工作积极主动，能够承受一定的工作压力。'
								]
							},
							{
								title: '运维工程师',
								task: [
									'负责服务器、网络、存储设备的日常监控，设备巡检；',
									'负责服务器、网络、存储的简单调测，存储配置，服务器、存储硬件故障处理及报修工作；',
									'负责网络及系统的故障排查、性能优化，应急处置等工作；',
									'负责用户反馈的线上相关故障、疑难问题及时的排查和处理；',
									/*'能独立处理和解决所负责的任务，在上级的领导和监督下完成量化的工作要求；',*/
									'开发相关的自动化脚本，优化项目。'
								],
								require: [									
									'互联网公司工作经验三年以上，本科以上学历；',
									'熟悉Windows、Linux操作系统,能独立排除操作系统故障;',
									'熟悉基本数据库管理和维护,常用网络设备配置，对TCP/IP协议、路由、交换知识了解；',
									'理解VMware 、KVM、docker等虚拟化相关技术，理解云架构体系；',
									'对开源监控系统有深入理解，例如：Cacti、Zabbix、Nagios；',
									'对开源自动化工具有深入理解，例如：Puppet, Chef、Ansible、Saltstack；',
									'能够使用Python、Shell等脚本语言进行运维脚本、工具开发；',
									'具备Web-base编程经验者优先。'
								]
							}
						]
					},
					{
						name: '产品',
						curIndex: 0,
						items: [
							{
								title: '机器学习产品经理',
								task: [
									'基于应用场景的人工智能产品整体规划、阶段目标、产品设计和推进实现；',
									'产品上线后，分析使用数据，提炼使用场景，找到产品改进点和突破点，用丰富的交互场景推动产品创新；',
									'对用户的交互使用体验负责；',
									'有效地横向串联产品的所有功能模块，与算法、数据、运营团队充分沟通协作，保证产品功能落地；',
									'负责行业市场分析、用户需求调研和竞品分析工作。',
								],
								require: [
									'本科以上计算机、统计学、机器学习、数据挖掘、数学、理科经济学等相关专业；',
									'熟悉人工智能行业情况，了解业界和学术界前沿的工作进展；',
									'很强的学习能力，能快速理解行业和业务逻辑；',
									'很强的数据采集规划能力，为人工智能产品采集数据提供思路和方案；',
									'强烈的好奇心和对产品创新的激情，为人工智能创造价值而骄傲；',
									'具有较强的分析和解决问题的能力，具备良好的团队合作精神；',
									'有大型项目数据分析、人工智能产品设计、数据产品设计经验者优先。'
								]
							},
							{
								title: '产品视觉设计师',
								task: [
									'负责公司人工智能产品的视觉设计；',
									'参与产品高保真交互原型的讨论；',
									'完成符合业务目标的视觉设计稿，和开发对接，为开发提供支持；',
									'在开发完成后参与测试，确保开发还原质量；',
									'跟踪数据表现，并总结项目经验，制定下次迭代计划；',
									'制定视觉相应规范，与前端共同维护前端规范，组件库。'
								],
								require: [
									'充分理解公司人工智能产品逻辑；',
									'审美及设计水平好；',
									'受过专业的艺术教育；',
									'有丰富的视觉设计项目经验（做过PC端，移动端设计）；',
									'优先考虑有动画和动效设计经验者；',
									'关注设计潮流，热爱使用各类产品；',
									'热爱思考、总结，能将项目经验使用在后续项目中。'
								]
							}
						]
					},
					{
						name: '其他',
						curIndex: 0,
						items: [
							{
								title: '行政助理',
								task: [
									'日常事务的协助与支持，活动组织、会议室预定、报销、考勤等；',
									'会务安排，做好会前准备、会议记录和会后内容整理工作；',
									'办公用品、礼品、办公设备的申请、领用和分发工作；',
									'各项规章制度监督与执行；',
									'总监交办的其他任务的督办、协调及落实。'
								],
								require: [
									'大学本科或以上学历；',
									'1年以上助理、秘书相关工作经验优先；',
									'熟练操作Office等常用办公软件，特别是Word，Excel，PowerPoint；',
									'有大型活动组织策划经验，有很好的协调能力；',
									'有很好的团队合作意识，亲和力强，有很好的沟通能力；',
									'乐观开朗，随机应变，耐心细致，认真负责 -热爱互联网，喜欢上网，对互联网熟悉者优先考虑 。'
								]
							}
						]
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
	}
	.rec-nav ul li {
		display: inline-block;
		margin-left: 220px;
	}
	.rec-nav ul li a {
		width: 32px;
		font-size: 16px;
		line-height: 17px;
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
		font-size: 16px;
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
		font-size: 16px;
		letter-spacing: 0px;
		color: #333333;
		margin-bottom: 18px;
	}
	.rec-detail-second {
		font-size: 16px;
		letter-spacing: 0px;
		color: #333333;
		margin-bottom: 40px;
	}
	.rec-info-label {
		height: 17px;
		font-size: 16px;
		margin-bottom: 19px;
		letter-spacing: 0px;
		color: #333333;
	}
	.rec-info-task li {
		font-size: 14px;
		margin-bottom: 18px;
	}
</style>
























