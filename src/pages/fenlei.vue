<template>
    <div class="sidbar">
        <crest class="der"></crest>
      <div>
        <van-tabs v-model="active">
          <van-tab title="电子数码">
            <ul class="rink">
              <li v-for="(rangeItem,index) in rangeList" :key="index">
                <router-link to="/fen1">
                  <img :src="rangeItem.imgSrc">
                  <p>{{rangeItem.title}}</p>
                </router-link>
              </li>
            </ul>
          </van-tab>
          <van-tab title="居家必备">
            <ul class="rink">
              <li v-for="(rangeItem,index) in rangeList" :key="index">
                <img :src="rangeItem.imgSrc">
                <p>{{rangeItem.title}}</p>
                <p class="rankA">{{rangeItem.number}} <span>{{rangeItem.percent}}</span></p>
              </li>
            </ul>
          </van-tab>
          <van-tab title="美容护肤">
            <ul class="rink">
              <li v-for="(rangeItem,index) in tabs" :key="index">
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
                <img :src="rangeItem.imgSrc">
                <p>{{rangeItem.title}}</p>
                <p class="rankA">{{rangeItem.number}} <span>{{rangeItem.percent}}</span></p>
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
          <van-tab title="箱包配饰">
            <ul class="rink">
              <li v-for="(rangeItem,index) in rangeList" :key="index">
                <img :src="rangeItem.imgSrc">
                <p>{{rangeItem.title}}</p>
                <p class="rankA">{{rangeItem.number}} <span>{{rangeItem.percent}}</span></p>
              </li>
            </ul>
          </van-tab>
          <van-tab title="电子数码">
            <ul class="rink">
              <li v-for="(rangeItem,index) in rangeList" :key="index">
                <img :src="rangeItem.imgSrc">
                <p>{{rangeItem.title}}</p>
                <p class="rankA">{{rangeItem.number}} <span>{{rangeItem.percent}}</span></p>
              </li>
            </ul>
          </van-tab>
          <van-tab title="电子数码">
            <ul class="rink">
              <li v-for="(rangeItem,index) in rangeList" :key="index">
                <img :src="rangeItem.imgSrc">
                <p>{{rangeItem.title}}</p>
                <p class="rankA">{{rangeItem.number}} <span>{{rangeItem.percent}}</span></p>
              </li>
            </ul>
          </van-tab>
        </van-tabs>
      </div>
      <index class="dex"></index>
    </div>
</template>

<script>
  import Index from '../components/index'
  import Crest from '../components/crest'
  import { Tabs,Tab } from 'vant';
  import f1 from '../images/fenlei/fenlei-03.png';
  import f2 from '../images/fenlei/fenlei-05.png';
  import f3 from '../images/fenlei/fenlei-07.png';
  export default {
    name: 'fenlei',
    components:{Index,Crest,Tabs,Tab},
    data(){
      return{
        active:0,
        rangeList: [
              { imgSrc:f3,title:"电子数码"},
              { imgSrc:f3,title:"电子数码"},
              { imgSrc:f3,title:"电子数码"},
              { imgSrc:f3,title:"电子数码"},
              { imgSrc:f3,title:"电子数码"},
              { imgSrc:f3,title:"电子数码"},
              { imgSrc:f3,title:"电子数码"},
              { imgSrc:f3,title:"电子数码"},
            ],
        List: [
          { imgSrc:f1,title:"生活家电"},
          { imgSrc:f1,title:"生活家电"},
          { imgSrc:f1,title:"生活家电"},
          { imgSrc:f1,title:"生活家电"},
          { imgSrc:f1,title:"生活家电"},
          { imgSrc:f1,title:"生活家电"},
          { imgSrc:f1,title:"生活家电"},
          { imgSrc:f1,title:"生活家电"},
        ],
        tabs:[
          { imgSrc:f2,title:"美容护肤"},
          { imgSrc:f2,title:"美容护肤"},
          { imgSrc:f2,title:"美容护肤"},
          { imgSrc:f2,title:"美容护肤"},
          { imgSrc:f2,title:"美容护肤"},
          { imgSrc:f2,title:"美容护肤"},
          { imgSrc:f2,title:"美容护肤"},
          { imgSrc:f2,title:"美容护肤"},
          { imgSrc:f2,title:"美容护肤"},
          { imgSrc:f2,title:"美容护肤"},
          { imgSrc:f2,title:"美容护肤"},

        ]
      }
    }
  }
</script>

<style>
  .der{height:43px;width: 100%;top:0;left:0;position: sticky;background: #ffffff;z-index: 999;}
  .dex{height: 60px;z-index: 999;width: 100%;bottom: 0;left: 0;}
   .rink a{color:#666;text-decoration: none;font-size: 1rem;}
  .sidbar{background: #f2f2f2;}
  .rink{margin-top:20px;display: grid;grid-template-columns: repeat(3,30%);grid-gap: 5px;width: 105%;height: auto;}
  .rink li{background: white;color: #666;font-size: 1rem;}
  .rink li img{width: 100%;}
  .rink li p{margin: 0;width: 90%;text-align: left;padding-left: 10px;}
  .rink span{color: #2c3e50;padding-left: 20px;}
  .van-tabs--line .van-tabs__wrap{height: auto;}
  .van-tabs{display: flex;flex: 1;}
  .van-tabs__content{width:78%;background: white;}
 .van-tabs__wrap{width: 20%;}
  .van-tabs__nav{display: block;}
  .van-tabs__content--animated{width: 50%;}
  .van-tabs__line{background: none;}
  .van-tabs__wrap--scrollable .van-tabs__nav{background: #f2f2f2;}
  .van-tab--active{color: #df1a0a;}
  /*.van-tab__pane, .van-tab__pane-wrapper{padding-left: 16px;}*/
</style>
