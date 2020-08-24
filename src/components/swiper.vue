<template>
  <van-swipe :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="(tab, index) in tabs" :key="index">
      <img :src="tab.imgSrc">
    </van-swipe-item>
  </van-swipe>
</template>

<script>
  import banner1 from '../images/images/banner1.png'
  import banner2 from '../images/images/banner2.jpg'
  import banner3 from '../images/images/banner3.jpg'
  import { Swipe, SwipeItem } from 'vant';
  export default {
    name: 'swiper',
    components:{Swipe,SwipeItem},
    data(){
      return{
        tabs:[
          {imgSrc:banner1},
          {imgSrc:banner2},
          {imgSrc:banner3},
        ]
      }
    }
  }
</script>

<style scoped>
  .van-swipe-item img{border: 0;display: block;width: 100%;vertical-align: middle;}
</style>
