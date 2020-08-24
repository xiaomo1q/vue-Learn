<template>
  <div class="d6">
    <van-nav-bar title="应季甄选"  left-arrow @click-left="onClickLeft"/>
    <div style="width: 100%">  <img src="../images/zhenxuan/zhenxu.png"></div>
    <ul id="add_color">
      <li class="orchard_color" :class="{active:shows==1}" @click="approve">春节特供</li>
      <li :class="{active:shows==2}" @click="sales">欢乐元宵</li>
      <li :class="{active:shows==3}" @click="range">欢乐端午</li>
    </ul>
    <ul id="rink">
      <li v-for="(rangeItem,index) in rangeList" :key="index">
        <img :src="rangeItem.imgSrc">
        <p>{{rangeItem.title}}</p>
        <p class="rankA">{{rangeItem.number}} <span>{{rangeItem.percent}}</span></p>
      </li>
    </ul>
  </div>
</template>

<script>
  import { NavBar } from 'vant';
  import f16 from '../images/friut/fruit_16.png';
  import f20 from '../images/friut/fruit_20.png';
  export default {
    name: 'd6',
    data(){return{
      rangeList: [
        { number: "11 积分",imgSrc:f16,title:"海南三亚大台农芒果1.2kg约150g/个",percent:'55人收货'},
        { number: "25 积分",imgSrc:f20,title:"海南三亚大台农芒果1.2kg约150g/个",percent:'66人收货'},
        { number: "43 积分",imgSrc:f16,title:"海南三亚大台农芒果1.2kg约150g/个",percent:'44人收货'},
        { number: "44 积分",imgSrc:f20,title:"海南三亚大台农芒果1.2kg约150g/个",percent:'22人收货'},
        { number: "65 积分",imgSrc:f20,title:"海南三亚大台农芒果1.2kg约150g/个",percent:'33人收货'},
        { number: "66 积分",imgSrc:f20,title:"海南三亚大台农芒果1.2kg约150g/个",percent:'11人收货'},
      ],
      shows:0,
    }},
    components:{NavBar},
    methods:{
      onClickLeft(){
        this.$router.push({path:'/'});
      },
      approve(){
        this.shows =1;
      },
      sales(){
        this.shows=2;
        return this.rangeList.sort((a, b) => b.percent - a.percent).reverse()
      },
      range () {
        this.shows=3;
        return this.rangeList.sort((a, b) => a.number - b.number).reverse()
      },

    }
  }
</script>

<style scoped>
  .d6{background-color: #f2f2f2;}
  img{width: 100%;border: 0;display: block;vertical-align: middle;}
  li{list-style-type: none;}
  #add_color{display: flex;flex: 1;width: 100%;height: 42px;margin: 15px 0;background-color: white;}
  #add_color li{width: 33%;line-height: 42px;text-align: center;
    color: #343434;font-size: 0.6rem;position: relative;height: auto;}
  #add_color li span{position: absolute;width: 1.4rem;height: 1.4rem;right: 1rem;}
  #add_color li span>img{height: 10px;width: 10px;padding: 9px 0;}
  #add_color .active{color: #df5000; border-bottom:1px solid #df5000;}
  #rink{margin-top:20px;display: grid;grid-template-columns: repeat(2,50%);grid-gap: 5px;width: 100%;height: auto;background-color: white;}
  #rink li{border: 1px solid #A4A4A4;}
  #rink li p{margin: 0;width: 90%;text-align: left;padding-left: 10px;}
  #rink .rankA{color: #df1902;}
  #rink span{color: #2c3e50;padding-left: 20px;}
</style>
