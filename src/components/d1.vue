<template>
    <div class="jifen">
      <van-nav-bar title="积分商城"  left-arrow @click-left="onClickLeft"/>
      <div class="swiper">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(tab, index) in tabs" :key="index">
            <img :src="tab.imgSrc">
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="fic">
        <van-swipe indicator-color="red">
          <van-swipe-item>
            <ul>
              <li v-for="(tabn, index) in tabns" :key="index">
                <router-link :to="tabn.routerName">
                  <img :src="tabn.imgSrc">
                  <p>{{tabn.title}}</p>
                </router-link>
              </li>
            </ul>
          </van-swipe-item>
          <van-swipe-item>
            <ul>
              <li v-for="(tabnd, index) in tabnds" :key="index">
                <router-link :to="tabnd.routerName">
                  <img :src="tabnd.imgSrc">
                  <p>{{tabnd.title}}</p>
                </router-link>
              </li>
            </ul>
          </van-swipe-item>
        </van-swipe>
      </div>
      <best></best>
    </div>
</template>

<script>
  import Best from './d1_best';
  import { NavBar } from 'vant';
  import { Swipe, SwipeItem } from 'vant';
  import banner1 from '../images/jifen/banner.png'
  import banner2 from '../images/jifen/banner2.png'
  import banner3 from '../images/jifen/banner3.png'
  import j1 from '../images/jifen/icon1.png'
  import j2 from '../images/jifen/icon3.png'
  import j3 from '../images/jifen/icon4.png'
  import j4 from '../images/jifen/icon5.png'
  import j5 from '../images/jifen/icon6.png'
  import j6 from '../images/jifen/icon-07.png'
  import j7 from '../images/jifen/icon-08.png'
  import j8 from '../images/jifen/icon-09.png'

  export default {
    name: 'd1',
    components:{NavBar,SwipeItem,Swipe,Best},
    data(){
      return{
        tabs:[
          {imgSrc:banner1},
          {imgSrc:banner2},
          {imgSrc:banner3},
        ],
        tabns:[
          {id:1, title:"积分商城", imgSrc:j1, routerName:{name:'d1'}},
          {id:2, title:"美容护肤", imgSrc:j2, routerName:{name:'j2'}},
          {id:3, title:"电子数码", imgSrc:j3, routerName:{name:'j3'}},
          {id:4, title:"家居必备", imgSrc:j4, routerName:{name:'j4'}},
          {id:4, title:"美食天地", imgSrc:j5, routerName:{name:'j5'}},
          {id:4, title:"服饰箱包", imgSrc:j6, routerName:{name:'j6'}},
          {id:4, title:"健康母婴", imgSrc:j7, routerName:{name:'j7'}},
          {id:4, title:"运动广场", imgSrc:j8, routerName:{name:'j8'}}
        ],
        tabnds:[
          {id:1, title:"积分商城1", imgSrc:j1, routerName:{name:'d1'}},
          {id:2, title:"美容护肤1", imgSrc:j2, routerName:{name:'j2'}},
          {id:3, title:"电子数码1", imgSrc:j3, routerName:{name:'j3'}},
          {id:4, title:"家居必备1", imgSrc:j4, routerName:{name:'j4'}},
          {id:4, title:"美食天地1", imgSrc:j5, routerName:{name:'j5'}},
          {id:4, title:"服饰箱包1", imgSrc:j6, routerName:{name:'j6'}},
          {id:4, title:"健康母婴1", imgSrc:j7, routerName:{name:'j7'}},
          {id:4, title:"运动广场1", imgSrc:j8, routerName:{name:'j8'}}
        ],
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
  .jifen{background: #f2f2f2;}
  .fic{background: #f8f8f8;}
  .fic ul{display: grid;grid-template-columns: repeat(4,25%);}
  .fic li{width: 100%;margin: 5px auto;}
  .fic li a>img{width:50%;}
  .fic li a>p{margin: 5px auto;font-size: 12px;color: #000000;}
  .swiper .van-swipe-item img{border: 0;display: block;width: 100%;vertical-align: middle;}
</style>
