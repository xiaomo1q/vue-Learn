<template>
<div class="exam">
  <van-nav-bar title="选座"  left-arrow @click-left="onClickLeft"/>
  <div style="margin-bottom: 12px;" >
    <p class="ujh"><span class="move_txt">美国队长</span><span  class="move_text">今天15:30</span></p>
      <ul>
        <li v-for="(tab,index) in tabs" :key="index">
          <span class="exam_img"><img :src="tab.imgSrc"style="width: 20%;"></span>
          <span>{{tab.title}}</span>
        </li>
      </ul>
    <div class="sed">
      <img src="../images/xuanzuo/online_5.png" width="80%">
      <p class="sed_txt">四号厅</p>
      <p class="sed_sp">屏幕中央</p>
    </div>
  </div>
<seat></seat>
</div>
</template>

<script>
import seat from '../components/seat'
import { NavBar } from 'vant';
import sp1 from '../images/xuanzuo/online_1.png'
import sp2 from '../images/xuanzuo/online_2.png'
import sp3 from '../images/xuanzuo/online_3.png'
  export default {
    name: 'examl',
    components:{seat,NavBar},
    data(){
      return{
        tabs:[
          {imgSrc:sp1,title:'已选'},
          {imgSrc:sp2,title:'可选'},
          {imgSrc:sp3,title:'已售'},
        ]
      }
    },
    methods:{
      onClickLeft(){
        this.$router.push({path:'/vv1'})
      }
    }
    }
</script>

<style scoped>
  .exam{background: #f2f2f2;}
  .ujh{font-size: 1rem;text-align: initial;padding: 0 20px;margin: 0;color: #666;
    background: white;
    width: 100%;height: 40px;line-height: 40px;border-bottom: 1px solid #eaeaea;
  }
  .move_txt{border-right: 1px solid #373737;padding-right: 30px;}
  .move_text{padding-left:20px;}
  ul{display: flex;flex: 1;width: 100%;height: 40px;padding: 10px;}
  li{width: 30%;line-height: 35px;}
  li span{width: 60%;text-align: center;}
  .exam_img{padding: 2px;width: 20%;}
  .sed_txt{width: 20%;margin:0 auto;font-size: 0.5rem;background: none;}
  .sed_sp{width: 20%;margin: auto;background: #7d7e80;color: white;font-size: 0.3rem;}
</style>
