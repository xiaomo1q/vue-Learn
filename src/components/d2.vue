<template>
  <div class="video">
      <van-nav-bar title="影音天地"  left-arrow @click-left="onClickLeft"/>
      <div class="swiper">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(tab, index) in tabs" :key="index">
            <img :src="tab.imgSrc">
          </van-swipe-item>
        </van-swipe>
      </div>
    <div class="floor">
      <div class="title-wrap">
        <div class="floor_icon"><van-icon name="hot-o" color="#f74012" /></div>
        <h2>最新上映</h2>
        <router-link to="/d2">
          查看更多
          <div class="floor_arrow"><van-icon name="arrow" color="#989898" /></div>
        </router-link>
      </div>
            <ul>
              <li v-for="(tabn, index) in tabns" :key="index">
                <router-link to="/v1">
                  <img :src="tabn.imgSrc">
                  <p>
                    <span class="title-tab">{{tabn.title}}</span>
                    <span class="title-number">{{tabn.text}}</span>
                  </p>
                </router-link>

              </li>
            </ul>
    </div>
    <div class="floor">
      <div class="title-wrap">
        <div class="floor_icon"><van-icon name="hot-o" color="#f74012" /></div>
        <h2>演出资讯</h2>
        <router-link to="/y1">
          查看更多
          <div class="floor_arrow"><van-icon name="arrow" color="#989898" /></div>
        </router-link>
      </div>
      <div class="item-title">
        <router-link v-for="(item, index) in items" :key="index" to="/v1">
          <img :src="item.imgSrc">
          <p>{{item.title}}</p>
          <p>{{item.text}}</p>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
  import { NavBar } from 'vant';
  import { Swipe, SwipeItem } from 'vant';
  import banner1 from '../images/move/banner.png'
  import banner2 from '../images/move/banner2.jpg'
  import banner3 from '../images/move/banner1.jpg'
  import move1 from '../images/move/move2.png';
  import move2 from '../images/move/move3.png';
  import move4 from '../images/move/move_05.png';
  import move3 from '../images/move/move010.jpg';
  export default {
    name: 'd2',
    components:{NavBar,Swipe,SwipeItem},
    data(){
      return{
        tabs:[
          {imgSrc:banner1},
          {imgSrc:banner2},
          {imgSrc:banner3},
        ],
        tabns:[
          {imgSrc:move4,text:'9.0',title:'美国队长'},
          {imgSrc:move2,text:'7.8',title:'简爱'},
          {imgSrc:move1,text:'8.0',title:'霍比特人'},
          {imgSrc:move4,text:'9.0',title:'美国队长'},
          {imgSrc:move2,text:'7.8',title:'简爱'},
          {imgSrc:move1,text:'8.0',title:'霍比特人'},

        ],
        items:[
          {imgSrc:move3,text:'2016.05.23-2016.06.31',title:'中国儿童艺术剧院儿童童剧《伊索寓言》'},
          {imgSrc:move3,text:'2016.05.23-2016.06.31',title:'中国儿童艺术剧院儿童童剧《伊索寓言》'},
          {imgSrc:move3,text:'2016.05.23-2016.06.31',title:'中国儿童艺术剧院儿童童剧《伊索寓言》'},
          {imgSrc:move3,text:'2016.05.23-2016.06.31',title:'中国儿童艺术剧院儿童童剧《伊索寓言》'},
          {imgSrc:move3,text:'2016.05.23-2016.06.31',title:'中国儿童艺术剧院儿童童剧《伊索寓言》'},
          {imgSrc:move3,text:'2016.05.23-2016.06.31',title:'中国儿童艺术剧院儿童童剧《伊索寓言》'},
          {imgSrc:move3,text:'2016.05.23-2016.06.31',title:'中国儿童艺术剧院儿童童剧《伊索寓言》'},
          {imgSrc:move3,text:'2016.05.23-2016.06.31',title:'中国儿童艺术剧院儿童童剧《伊索寓言》'},
          {imgSrc:move3,text:'2016.05.23-2016.06.31',title:'中国儿童艺术剧院儿童童剧《伊索寓言》'},
          {imgSrc:move3,text:'2016.05.23-2016.06.31',title:'中国儿童艺术剧院儿童童剧《伊索寓言》'},
          {imgSrc:move3,text:'2016.05.23-2016.06.31',title:'中国儿童艺术剧院儿童童剧《伊索寓言》'},
        ]

      }
    },
    methods:{
      onClickLeft(){
        this.$router.push({path:'/'})
      }
    }
  }
</script>

<style scoped>
  .video{background: #f2f2f2;}
  .floor{background: #fefefe;margin-top: 10px;}
  .van-icon{font-size: 22px;}
  .floor_icon{width: 7%;margin-top: 5px}
  .floor_arrow{width: 7%;margin-top: 5px;float: right;}
  .title-wrap{display: flex;flex: 1;width: 100%;height: 45px;color:#494949;line-height: 45px; }
  .title-wrap h2{padding-left: 5px;width: 28%;font-size: 17px;font-weight: normal;margin: 0;text-align: initial;}
  .title-wrap a{width: 65%;font-size: 17px;text-align: end;padding-right: 20px;color: #494949;}
  .title-wrap a span{width: 7%;margin-top: 5px}
  .swiper .van-swipe-item img{border: 0;display: block;width: 100%;vertical-align: middle;}
  .van-swipe__indicators{bottom: 0;}
  ul{height:300px;display: grid;grid-template-columns: repeat(3,30%);margin:0 auto;justify-content: center;grid-gap: 5px;}
  li{width: 100%;height: 140px;}
  li img{width:80%;}
  li p{
    color: #F7F7F7;
    text-align: left;
    left: 10px;bottom: 0;
    line-height: 30px;padding: 0 8px;
    margin:-30px auto;font-size: 12px;
  }
  .title-number{color: #df5000;padding-left: 28px;}
  .title-tab{width: 71%;}
  .item-title{display: grid;grid-template-columns: repeat(2,45%);width: 100%;font-size:12px;justify-content: center;grid-gap: 5px;}
  .item-title img{width:90%; height: 150px;}
  .item-title a{border: 1px solid #c3c3c3;}
  .item-title a p{margin: 0;text-align: left;width: 80%;padding: 0 20px;}
</style>
