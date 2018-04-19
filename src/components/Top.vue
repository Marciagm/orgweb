<template>
    <div class="banner">
        <div class="nav-con">
            <img src="../images/logo-white.png" class="icon">
            <ul class="nav">
                <li v-for="(item, index) in navigator">
                    <a :href="'#' + item.path" v-if="index == curIndex" class="hilight">{{ item.name }}</a>
                    <a :href="'#' + item.path" v-if="index != curIndex">{{ item.name }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    export default {
        props: ['curIndex'],
        name: 'top',
        data () {
        	return {
        		navigator: [
                    {
                        name: '首页',
                        path: '/',
                        index: 0,
                        bg: 'rgba(0, 0, 0, 0.15)'
                    },
                    {
                        name: '产品概述',
                        path: '/product',
                        index: 1
                    }, 
                    {
                        name: '应用领域',
                        path: '/field',
                        index: 2
                    },
                    /*{
                        name: '新闻动态',
                        path: '/news',
                        //component: News
                    },*/
                    {
                        name: '关于我们',
                        path: '/about-us',
                        index: 3
                    }, 
                    {
                        name: '加入我们',
                        index: 4,
                        path: '/join-us'
                    }
                ]
        	}
        },
        methods: {
        },
        mounted () {
        }
    }
</script>

<style lang="scss">
    .banner {
        background: url("../images/banner.png") no-repeat;
        background-position: top center;
        background-color: #0159a9;
        height: 500px;
    }
    .nav-con {
        padding-top: 15px;
        width: 1200px;
    }
    .icon {
        width: 149px;
        float: left;
    }
	.nav {
        display: inline-block;
        float: right;
    }
    .nav li {
        width: 100px;
        text-align: center;
        margin-right: 6px;
        height: 38px;
        display: inline-block;
        font-size: 14px;
    }
    .banner a {
        display: inline-block;
        width: 100px;
        height: 38px;
        line-height: 38px;
        color: #fff;
    }
    .hilight {
        background: rgba(0, 0, 0, 0.15);
    }
</style>