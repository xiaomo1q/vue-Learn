<template>
    <div class="sidbar" >
      <van-tabs v-model="active" animated>
        <van-tab title="电子数码">
          <ul class="rink">
            <li v-for="(rangeItem,index) in rangeList" :key="index">
              <router-link to="/fen1">
              <img :src="rangeItem.imgSrc">
              <p>{{rangeItem.title}}</p>
              <p class="rankA">{{rangeItem.number}} <span>{{rangeItem.percent}}</span></p>
              </router-link>
            </li>
        </ul>
        </van-tab>
        <van-tab title="生活家电">
          <ul class="rink">
            <li v-for="(rangeItem,index) in List" :key="index">
              <router-link to="/fen1">
              <img :src="rangeItem.imgSrc">
              <p>{{rangeItem.title}}</p>
              <p class="rankA">{{rangeItem.number}} <span>{{rangeItem.percent}}</span></p>
              </router-link>
            </li>
        </ul>
        </van-tab>
        <van-tab title="美容护肤">
          <ul class="rink">
            <li v-for="(rangeItem,index) in Lists" :key="index">
              <router-link to="/fen1">
                <img :src="rangeItem.imgSrc">
                <p>{{rangeItem.title}}</p>
                <p class="rankA">{{rangeItem.number}} <span>{{rangeItem.percent}}</span></p>
              </router-link>

            </li>
        </ul>
        </van-tab>
        <van-tab title="旅行必备">
          <ul class="rink">
            <li v-for="(rangeItem,index) in rangeList" :key="index">
              <router-link to="/fen1">
              <img :src="rangeItem.imgSrc">
              <p>{{rangeItem.title}}</p>
              <p class="rankA">{{rangeItem.number}} <span>{{rangeItem.percent}}</span></p>
              </router-link>
            </li>
        </ul>
        </van-tab>
        <van-tab title="居家必备">
          <ul class="rink">
            <li v-for="(rangeItem,index) in rangeList" :key="index">
              <router-link to="/fen1">
              <img :src="rangeItem.imgSrc">
              <p>{{rangeItem.title}}</p>
              <p class="rankA">{{rangeItem.number}} <span>{{rangeItem.percent}}</span></p>
              </router-link>
            </li>
        </ul>
        </van-tab>
        <van-tab title="箱包配饰">
          <ul class="rink">
            <li v-for="(rangeItem,index) in rangeList" :key="index">
              <router-link to="/fen1">
              <img :src="rangeItem.imgSrc">
              <p>{{rangeItem.title}}</p>
              <p class="rankA">{{rangeItem.number}} <span>{{rangeItem.percent}}</span></p>
              </router-link>
            </li>
        </ul>
        </van-tab>
        <van-tab title="电子数码">
          <ul class="rink">
            <li v-for="(rangeItem,index) in rangeList" :key="index">
                     <router-link to="/fen1">
              <img :src="rangeItem.imgSrc">
              <p>{{rangeItem.title}}</p>
              <p class="rankA">{{rangeItem.number}} <span>{{rangeItem.percent}}</span></p>
                     </router-link>
            </li>
        </ul>
        </van-tab>
        <van-tab title="电子数码">
          <ul class="rink">
            <li v-for="(rangeItem,index) in rangeList" :key="index">
              <router-link to="/fen1">
              <img :src="rangeItem.imgSrc">
              <p>{{rangeItem.title}}</p>
              <p class="rankA">{{rangeItem.number}} <span>{{rangeItem.percent}}</span></p>
              </router-link>
            </li>
        </ul>
        </van-tab>
      </van-tabs>
    </div>
</template>

<script>
  import { Tab, Tabs } from 'vant';
  import f1 from '../images/fenlei/fenlei-03.png';
  import f2 from '../images/fenlei/fenlei-05.png';
  import f3 from '../images/fenlei/fenlei-07.png';
  export default {
    name: 'sidbar',
    components:{Tab, Tabs},
    data(){
      return{
        active:0,
        rangeList: [
          { number: "144 积分",imgSrc:f3,title:"未来人类 X711 X711-1070-77SH1 512G固态 4T 64G内存",percent:'123人收货'},
          { number: "125 积分",imgSrc:f3,title:"未来人类 X711 X711-1070-77SH1 512G固态 4T 64G内存",percent:'345人收货'},
          { number: "433 积分",imgSrc:f3,title:"未来人类 X711 X711-1070-77SH1 512G固态 4T 64G内存",percent:'456人收货'},
          { number: "544 积分",imgSrc:f3,title:"未来人类 X711 X711-1070-77SH1 512G固态 4T 64G内存",percent:'2657人收货'},
          { number: "865 积分",imgSrc:f3,title:"未来人类 X711 X711-1070-77SH1 512G固态 4T 64G内存",percent:'6576人收货'},
          { number: "966 积分",imgSrc:f3,title:"未来人类 X711 X711-1070-77SH1 512G固态 4T 64G内存",percent:'1751人收货'},
        ],
        List: [
          { number: "144 积分",imgSrc:f1,title:"未来人类 X711 X711-1070-77SH1 512G固态 4T 64G内存",percent:'123人收货'},
          { number: "125 积分",imgSrc:f1,title:"未来人类 X711 X711-1070-77SH1 512G固态 4T 64G内存",percent:'345人收货'},
          { number: "433 积分",imgSrc:f1,title:"未来人类 X711 X711-1070-77SH1 512G固态 4T 64G内存",percent:'456人收货'},
          { number: "544 积分",imgSrc:f1,title:"未来人类 X711 X711-1070-77SH1 512G固态 4T 64G内存",percent:'2657人收货'},
          { number: "865 积分",imgSrc:f1,title:"未来人类 X711 X711-1070-77SH1 512G固态 4T 64G内存",percent:'6576人收货'},
          { number: "966 积分",imgSrc:f1,title:"未来人类 X711 X711-1070-77SH1 512G固态 4T 64G内存",percent:'1751人收货'},
        ],
        Lists: [
          { number: "144 积分",imgSrc:f2,title:"DKY流沙鎏金牛奶小姐绿茶冥府之路柏林少女清新自然",percent:'123人收货'},
          { number: "125 积分",imgSrc:f2,title:"DKY流沙鎏金牛奶小姐绿茶冥府之路柏林少女清新自然",percent:'345人收货'},
          { number: "433 积分",imgSrc:f2,title:"DKY流沙鎏金牛奶小姐绿茶冥府之路柏林少女清新自然",percent:'456人收货'},
          { number: "544 积分",imgSrc:f2,title:"DKY流沙鎏金牛奶小姐绿茶冥府之路柏林少女清新自然",percent:'2657人收货'},
          { number: "865 积分",imgSrc:f2,title:"DKY流沙鎏金牛奶小姐绿茶冥府之路柏林少女清新自然",percent:'6576人收货'},
          { number: "966 积分",imgSrc:f2,title:"DKY流沙鎏金牛奶小姐绿茶冥府之路柏林少女清新自然",percent:'1751人收货'},
        ],
      }
    }
  }

</script>

<style scoped>
/*.sidbar{background: #f2f2f2;}*/
  .rink{margin-top:20px;display: grid;grid-template-columns: repeat(2,50%);grid-gap: 5px;width: 88%;height: auto;margin:20px auto;}
  .rink li{border: 1px solid #A4A4A4;background: white;color: #666;font-size: 1rem;}
  .rink li a img{width: 60%;}
  .rink li p{margin: 0;width: 90%;text-align: left;padding-left: 10px;font-size: 0.3rem;color: #666;text-decoration: none;}
  .rink .rankA{color: #df1902;}
  .rink span{color: #2c3e50;padding-left: 20px;}

</style>
