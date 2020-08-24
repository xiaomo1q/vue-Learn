<template>
  <div class="birthday">
    <van-nav-bar title="生日专区"  left-arrow @click-left="onClickLeft"/>
    <div class="swiper">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(tab, index) in tabs" :key="index">
          <img :src="tab.imgSrc">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="container">
      <div class="left">
        <a><img src="../images/birthday/jieri.png"></a>
      </div>
      <div class="right">
        <div class="top">
          <a><img src="../images/birthday/birthday_05.png"></a>
        </div>
        <div class="bottom">
          <a><img src="../images/birthday/birthday_08.png"></a>
        </div>
      </div>
    </div>
    <div class="layout">
      <span>为你推荐</span>
    </div>
    <div class="item-title">
      <a v-for="(item, index) in items" :key="index" >
        <img :src="item.imgSrc">
      </a>
    </div>
  </div>
</template>

<script>
  import { NavBar } from 'vant';
  import { Swipe, SwipeItem } from 'vant';
  import banner1 from '../images/birthday/banner1.png'
  import banner2 from '../images/birthday/banner3.png'
  import banner3 from '../images/birthday/banner.jpg'
  import birth1 from '../images/birthday/birth-05.png'
  import birth2 from '../images/birthday/birth-06.png'
  import birth3 from '../images/birthday/birth-08.png'
  import birth4 from '../images/birthday/birth-07.png'
  import birth5 from '../images/birthday/birth-09.png'
  import birth6 from '../images/birthday/birth.png'
  export default {
    name: 'd3',
    components:{NavBar,Swipe,SwipeItem},
    data(){
      return {
        tabs: [
          {imgSrc: banner1},
          {imgSrc: banner2},
          {imgSrc: banner3},
        ],
        items:[
          {imgSrc:birth1},
          {imgSrc:birth2},
          {imgSrc:birth3},
          {imgSrc:birth4},
          {imgSrc:birth5},
          {imgSrc:birth6},
        ]
      }
    },
    methods:{
      onClickLeft(){
        this.$router.push({path:'/'});
      }
    }
  }
</script>

<style scoped>
  @import "../assets/adv.css";
  .birthday{background: #f7f7f7;}
  .container{margin: 20px auto;width: 100%;}
  .container img{width: 96%;}
  .left{width: 35%;}.right{width: 64%;}
  .swiper .van-swipe-item img{border: 0;display: block;width: 100%;vertical-align: middle;}

  .layout{width: 100%;position: relative;color: #666;height: 32px;line-height: 32px;background: #f2f2f2;}
  .layout:after{content: '';position: absolute;width: 100%;
    height: 1px;background: #f00;top: 50%;
    left: 0;z-index: 1;
  }
  .layout span{    position: absolute;z-index: 2;right: 0;left: 0;
    margin: auto;width: 100px;display: inline-block;background: #f2f2f2;
  }
  .item-title{display: grid;grid-template-columns: repeat(2,48%);width: 100%;justify-content: center;grid-gap: 5px;}
  .item-title img{width:100%;height: 100%;}
  .item-title a{border: 1px solid #c3c3c3;}
</style>
