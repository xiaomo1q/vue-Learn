<template>

  <div>
<!--    <van-tabbar v-model="active">-->
<!--      <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>-->
<!--      <van-tabbar-item icon="apps-o" to="/fenlei">分类</van-tabbar-item>-->
<!--      <van-tabbar-item icon="cart-o">购物车</van-tabbar-item>-->
<!--      <van-tabbar-item icon="contact">我的</van-tabbar-item>-->
<!--    </van-tabbar>-->

    <router-view />
    <van-tabbar route >
      <van-tabbar-item
        replace
        to="/"
        icon="home-o"
      >
        首页
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/fenlei"
        icon="apps-o"
      >
        分类
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/cart"
        icon="cart-o"
      >
        购物
      </van-tabbar-item>
      <van-tabbar-item
        replace
        to="/me"
        icon="cart-o"
      >
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>

</template>

<script>
  import { Tabbar,TabbarItem } from 'vant';
  export default {
    name: 'index',
    components:{TabbarItem,Tabbar},
    data(){
      return{
        active:0
      }
    }
  }
</script>

<style>

/*icon{*/
/*  z-index: 999;*/
/*  width: 100%;*/
/*  height: 60px;*/
/*  position: fixed;*/
/*  bottom: 0;*/
/*  left: 0;*/
/*}*/
/*  .van-tabbar-item__icon{*/
/*    height: 40px;*/
/*  }*/
</style>
