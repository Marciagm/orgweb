<template>
	<div class="foot">
		<!-- <ul class="firm-info">
			<li style="width: 65px; margin-right: 184px;">
				快捷链接
				<ul class="link-info">
					<li v-for="item in nav">{{ item.name }}</li>
				</ul>
			</li>
			<li style="width: 485px;">
				联系我们
				邮箱：wisutech@ebrain.ai
				地址：北京市海淀区鼎好大厦3层智铀科技
			</li>	
		</ul> -->
		<div class="foot-info">
			<div class="foot-info-link">
				<span>快捷链接</span>
				<ul>
					<li v-for="item in nav">{{ item.name }}</li>
				</ul>
			</div>
			<div class="foot-info-addr">
			</div>
			<!-- separator -->
			<div></div>
			<!-- qr -->
			<div class="foot-qr">
				<span></span>
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
	export default {
		name: 'bottom',
		data() {
			return {
				copyRight: 'Copyright （c）2017  北京智铀科技有限公司 京ICP备17072393号 All Rights Reserved',
				nav: [
					{
						name: '产品概述',       
					},
					{
						name: '解决方案'
					},
					{
						name: '新闻动态'
					},
					{
						name: '关于我们'
					},
					{
						name: '联系我们'
					}
				]
			}
		}
	}
</script>

<style lang="scss">
	.foot {
		width: 100%;	
	    color: #333;
	    background: #f2f2f2;
	    line-height: 60px;
	}
	.foot-info {
		width: 1200px;
		padding-top: 69px;
		height: 280px;
		left: calc(50% - 600);
		list-style: none;
	}
	.foot-info-link {
		display: inline-block; 
		width: 100px; 
		margin-right: 150px; 
		height: 210px; 
		background: red;
	}
	.foot-info-link ul {
		list-style: none;
	}
	.bottom-nav {
		width: 1200px;
		list-style: none;
	}
	.bottom-nav li {
		display: inline-block;
		width: 65px;
		height: 17px;
		font-family: MicrosoftYaHei;
		font-size: 16px;
		font-weight: normal;
		letter-spacing: 0px;
		color: #333333;
		margin-right: 184px;
	}
	.link-info {
		height: 17px;
		margin-bottom: 28px;
	}
	.link-info li {
		list-style: none;
		height: 14px;
		margin-bottom: 22px; 
	}
	.copy-right {
		text-align: center;
		width: 100%;
		height: 40px;
		background: #333;
		font-family: MicrosoftYaHei;
		font-size: 12px;
		font-weight: normal;
		font-stretch: normal;
		line-height: 40px;
		letter-spacing: 0px;
		color: #999999;
	}
</style>
