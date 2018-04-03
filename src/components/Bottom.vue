<template>
	<div class="foot">
		<div class="foot-info">
			<div class="foot-info-link">
				<span class="foot-title">快捷链接</span>
				<ul class="foot-list">
					<li v-for="item in nav">
						<a :href="'#' + item.path">{{ item.name }}</a>
					</li>
				</ul>
			</div>

			<div class="foot-info-addr">
				<span class="foot-title">联系我们</span>
				<ul class="foot-list">
					<li>邮箱：wisutech@ebrain.ai</li>
					<li>地址：北京市海淀区鼎好大厦3层智铀科技</li>
				</ul>
			</div>
			<!-- seprator -->
			<div class="seprator"></div>
			<!-- qr -->
			<div class="foot-qr">
				<span class="foot-title">关注我们</span>
				<div>
					<img src="../images/qr.png">
				</div>
			</div>
		</div>

		<div class="copy-right">
			{{ copyRight }}
		</div>
	</div>
</template>

<script>
	var _hmt = _hmt || [];
	(function() {
	  var hm = document.createElement("script");
	  hm.src = "https://hm.baidu.com/hm.js?0cf1fc6d2e6cf52e4074d129b3da6e07";
	  var s = document.getElementsByTagName("script")[0]; 
	  s.parentNode.insertBefore(hm, s);
	})();
	export default {
		name: 'bottom',
		data() {
			return {
				copyRight: 'Copyright （c）2017  北京智铀科技有限公司 京ICP备17072393号 All Rights Reserved',
				nav: [
					{
						name: '网站首页',
						path: '/'
					},
					{
						name: '产品概述',
						path: '/product'
					},
					{
						name: '应用领域',
						path: '/field'
					},
					/*{
						name: '新闻动态',
						path: '/news'
					},*/
					{
						name: '关于我们',
						path: '/about-us'
					},
					{
						name: '加入我们',
						path: '/join-us'
					}
				]
			}
		},
		mounted () {
		}
	}
</script>

<style lang="scss">
	@media screen and (max-width: 1200px) {
		html, body {
			min-width: 1200px;
		}	
	}
	
	.foot {
		width: 100%;	
	    color: #333;
	    background: #f2f2f2;
	    line-height: 60px;
	    text-align: left;
	}
	.foot-info {
		width: 1020px;
		padding-top: 69px;
		height: 280px;
		left: calc(50% - 600);
	}
	.foot-title {
		height: 17px;
		line-height: 17px;
		font-size: 16px;
		letter-spacing: 0px;
		color: #333333;
		margin-bottom: 28px;
	}
	.foot-info-link {
		width: 100px; 
		margin-right: 150px; 
		height: 207px;
		float: left;
	}
	.foot-list {
		padding: 0;
		margin: 0;
		height: 170px;
	}
	.foot-list li {
		font-size: 14px;
		line-height: 15px;
		margin-bottom: 23px;
		letter-spacing: 0px;
		color: #666666;

	}
	.foot-list li a, .foot-list li a:link, .foot-list li a:hover, .foot-list li a:active {
		color: #666;
	} 
	.link-info {
		height: 17px;
		margin-bottom: 28px;
	}
	.link-info li {
		height: 14px;
		margin-bottom: 22px; 
	}
	.copy-right {
		text-align: center;
		width: 100%;
		height: 40px;
		background: #333;
		font-size: 12px;
		line-height: 40px;
		letter-spacing: 0px;
		color: #999999;
	}
	.foot-info-addr {
		display: inline-block;
		vertical-align: top;	
		width: 485px;
	}
	.seprator {
		margin-top: 77px;
		display: inline-block;
		width: 1px;
		height: 80px;
		background-color: #cccccc;
	}
	.foot-qr {
		float: right;
	}
</style>
