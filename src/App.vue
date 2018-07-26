<template>
<div id="app">
    <keep-alive>
         <router-view/>
    </keep-alive>
    <!-- 底部 -->
    <footer>
        <router-link to="/home">
            <i class="iconfont">&#xe61e;</i>
            <p>首页</p>
        </router-link>
        <router-link to="/hot">
             <i class="iconfont">&#xe638;</i>
             <p>热卖</p>
        </router-link>
        <router-link to="/cart">
             <i class="iconfont">&#xe60a;</i>
             <p>购物车</p>
        </router-link>
        <router-link to="/mine">
             <i class="iconfont">&#xe61a;</i>
             <p>我的</p>
        </router-link>
    </footer>
</div>
</template>

<style scoped>
    body,html,#app{
    	width: 100%;
    	height: 100%;
    	overflow: hidden;
  
    }
    footer{
        width:100%;
        height: .49rem;
        position: absolute;
        left:0;
        bottom: 0;
        overflow: hidden;
        display: flex;
        align-items: center;
        background: #fff;
    }
    footer a{
        display: block;
        flex: 1;
        text-align: center;
        font-size: .12rem; 
        color: #666666;
    }
    footer p{
        margin-top:.02rem;
    }
    footer .router-link-active{
        color:#F87D88;
    }
    footer .iconfont{
        font-size: .22rem;
    }

</style>



