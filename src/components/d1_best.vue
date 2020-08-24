<template>
  <div class="best">
    <div class="best_title">
      <h3>
          <van-icon name="hot-o" color="#f74012" />
          <p>热卖品单</p>
      </h3>
      <div class="best_top">
        <ul>
          <li v-for="(tabn, index) in tabns" :key="index">
            <router-link to="/fen1">
            <img :src="tabn.imgSrc">
            <p>{{tabn.title}}</p>
            <span>{{tabn.text}}</span>
            </router-link>
          </li>
        </ul>
      </div>
    <br/>
      <h3>
        <van-icon name="hot-o" color="#f74012" />
        <p>热卖品单</p>
      </h3>
      <div class="best_bottom">
        <ul>
          <li v-for="(tab, index) in tabs" :key="index">
            <router-link to="/fen1">
              <img :src="tab.imgSrc">
              <p>{{tab.title}}</p>
              <span>{{tab.text}}</span>
            </router-link>

          </li>
        </ul>
      </div>
      <p style="font-size: 16px">没有更多的商品啦</p>
    </div>
  </div>
</template>

<script>
  import { Icon } from 'vant';
  import sp from '../images/jifen/sp.png'
  export default {
    name: 'd1_best',
    components:{Icon},
    data() {
      return {
        tabns: [
          {title:"迷你智能电饭煲HYFG-1016", imgSrc:sp,text:'86.0积分'},
          {title:"迷你智能电饭煲HYFG-1016", imgSrc:sp,text:'86.0积分'},
          {title:"迷你智能电饭煲HYFG-1016", imgSrc:sp,text:'86.0积分'},
        ],
        tabs: [
          {title:"迷你智能电饭煲HYFG-1016", imgSrc:sp,text:'86.0积分'},
          {title:"迷你智能电饭煲HYFG-1016", imgSrc:sp,text:'86.0积分'},
          {title:"迷你智能电饭煲HYFG-1016", imgSrc:sp,text:'86.0积分'},
          {title:"迷你智能电饭煲HYFG-1016", imgSrc:sp,text:'86.0积分'},
          {title:"迷你智能电饭煲HYFG-1016", imgSrc:sp,text:'86.0积分'},
          {title:"迷你智能电饭煲HYFG-1016", imgSrc:sp,text:'86.0积分'},
          {title:"迷你智能电饭煲HYFG-1016", imgSrc:sp,text:'86.0积分'},
          {title:"迷你智能电饭煲HYFG-1016", imgSrc:sp,text:'86.0积分'},
        ],
      }
    }
  }
</script>

<style scoped>
  .best{height: 1350px;}
  .van-icon {font-size: 22px;}
  .best_title{margin-top: 10px;}
  .best_title h3{margin: 0 auto;
    width: 26%;height: 1.8rem;text-align: center;
    color: #fc5830;font-size: 1.1rem;line-height: 1.8rem;
    font-weight: normal;}
  .best_title h3 p{float:right;margin: 0;}
  .best_top ul{height: 177px;width: 100%;display: flex;flex: 1;}
  .best_bottom ul{height: 988px;display: grid;grid-template-columns: repeat(2,50%);grid-gap: 5px;}
  .best_top li{width: 33%;margin: 5px 3px;background: #fff;}
  .best_bottom li{width: 90%;padding: 8px;background: #fff;text-align: initial;}
  .best_top li img{width:82%;}
  .best_bottom li img{width:90%;}
  .best_top li p{margin: 5px auto;font-size: 12px;color: #838282;width: 64%;}
  .best_bottom li p{margin: 0;font-size: 14px;color: #403f3f;text-align: initial;width: 87%;}
    li span{margin: 5px auto;font-size: 16px;color: #ff2a27;width: 64%;}

</style>
