<template>
  <div class="floor">
    <div class="title-wrap">
      <div class="floor_icon"><van-icon name="hot-o" color="#f74012" /></div>
      <h2>最新上映</h2>
      <router-link to="/d2">
        查看更多
          <div class="floor_arrow"><van-icon name="arrow" color="#989898" /></div>
      </router-link>
    </div>
    <div class="swiper">
      <van-swipe indicator-color="white">
        <van-swipe-item>
          <ul>
            <li v-for="(tab, index) in tabs" :key="index">
              <router-link :to="tab.routerName">
                <img :src="tab.imgSrc">
                <p>
                  <span class="title-tab">{{tab.title}}</span>
                  <span class="title-number">{{tab.text}}</span>
                </p>
              </router-link>
            </li>
          </ul>
        </van-swipe-item>
        <van-swipe-item>
          <ul>
            <li v-for="(tab, index) in tabs" :key="index">
              <router-link :to="tab.routerName">
                <img :src="tab.imgSrc">
                <p>
                  <span class="title-tab">{{tab.title}}</span>
                  <span class="title-number">{{tab.text}}</span>
                </p>
              </router-link>
            </li>
          </ul>
        </van-swipe-item>
        <van-swipe-item>
          <ul>
            <li v-for="(tab, index) in tabs" :key="index">
              <router-link :to="tab.routerName">
                <img :src="tab.imgSrc">
                <p>
                  <span class="title-tab">{{tab.title}}</span>
                  <span class="title-number">{{tab.text}}</span>
                </p>
              </router-link>
            </li>
          </ul>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="adv">
      <img src="../images/images/birthday.png">
    </div>
  </div>

</template>

<script>
  import { Icon } from 'vant';
  import move1 from '../images/move/move2.png';
  import move2 from '../images/move/move3.png';
  import move4 from '../images/move/move_05.png';

  export default {
    name: 'move',
    components:{Icon},
    data(){
      return{
        tabs:[
          {imgSrc:move2,text:'7.8',title:'简爱', routerName:{name:'v1'}},
          {imgSrc:move1,text:'8.0',title:'霍比特人',routerName:{name:'v1'}},
          {imgSrc:move4,text:'9.0',title:'美国队长',routerName:{name:'v1'}},
        ]

      }
    }
  }
</script>

<style scoped>
  .floor{background: #fefefe;}
  .van-icon{font-size: 22px;}
  .floor_icon{width: 7%;margin-top: 5px}
  .floor_arrow{width: 7%;margin-top: 5px;float: right;}
  .title-wrap{display: flex;flex: 1;width: 100%;height: 45px;color:#494949;line-height: 45px; }
  .title-wrap h2{padding-left:5px;width: 28%;font-size: 17px;font-weight: normal;margin: 0;text-align: initial;}
  .title-wrap a{width: 65%;font-size: 17px;text-align: end;padding-right: 20px;color: #494949;}
  .title-wrap a span{width: 7%;margin-top: 5px}
  .swiper .van-swipe-item img{border: 0;display: block;width: 100%;vertical-align: middle;}
  .van-swipe__indicators{bottom: 0;}
  .swiper{background: #f8f8f8;}
  .swiper ul{display: grid;grid-template-columns: repeat(3,30%);grid-gap: 10px;}
  .swiper li{width: 100%;margin: 5px auto;height: 140px;}
  .swiper li img{width:50%;}
  .swiper li p{
    color: #F7F7F7;
    text-align: left;
    left: 10px;bottom: 0;
    line-height: 30px;padding: 0 8px;
    margin:-36px auto;font-size: 12px;
  }
  .title-number{color: #df5000;padding-left: 28px;}
  .title-tab{width: 71%;}
  .adv{width: 100%;margin-top: 20px;height: 80px;}
  .adv>img{width: 100%;height: 80px;}
</style>
