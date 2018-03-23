<template>
    <div class="banner">
        <div class="nav-con">
            <img src="../images/logo-white.png" class="icon">
            <ul class="nav">
                <li v-for="(item, index) in navigator" @click="tab(item, index)">
                    <a v-if="index == curIndex" class="hilight">{{ item.name }}</a>
                    <a v-if="index != curIndex">{{ item.name }}</a>
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
        	handleSelect (key, keypath) {
        		console.log(key, keypath)
        	},
            tab (item, index) {
                this.$router.push(item.path);
            }
        },
        mounted () {
            
        }
    }
</script>

<style lang="scss">
    $large-width: 1920;
    $fontSize: 14px;
    @function get-width-ratio($width, $parent-width) {
        @return $width / $parent-width * 100%;
    }
    @media screen and (min-width: 800px) {
        
    }
    body {
        background: url("../images/banner.png") no-repeat;
        background-position: top center;
    }
    .banner {
        height: 500px;
    }
    .nav-con {
        padding-top: 15px;
        margin-left: calc(50% - 600);
        width: 1200px;
        list-style: none;
    }
    .icon {
        width: 149px;
        float: left;
    }
	.nav {
        display: inline-block;
        list-style: none;
        float: right;
    }
    .nav li {
        width: 100px;
        text-align: center;
        margin-right: 6px;
        height: 38px;
        display: inline-block;
        font-family: MicrosoftYaHei;
        font-size: $fontSize;
        font-weight: normal;
    }
    a {
        display: inline-block;
        width: 100px;
        height: 38px;
        line-height: 38px;
        text-decoration: none;
        color: #fff;
        cursor: pointer;
    }
    .hilight {
        background: rgba(0, 0, 0, 0.15);
    }
</style>