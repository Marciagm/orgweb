<template>
    <div class="banner">
        <div class="nav-con">
            <img src="../images/logo-white.png" class="icon">
            <ul class="nav">
                <li v-for="(item, index) in navigator">
                    <router-link  :to="item.path" v-if="index == curIndex" class="hilight">{{ item.name }}</router-link>
                    <router-link  :to="item.path" v-if="index != curIndex">{{ item.name }}</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { routers as nav } from '@/config'
    export default {
        props: ['curIndex'],
        name: 'top',
        data () {
        	return {
        		navigator: nav
        	}
        },
        methods: {
        },
        mounted () {
        }
    }
</script>

<style lang="scss">
    $fontSize: 14px;
    .banner {
        background: url("../images/banner.png") no-repeat;
        background-position: top center;
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
        font-size: $fontSize;
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