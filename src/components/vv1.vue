<template>
  <div class="vv1">
    <van-nav-bar title="时间安排"  left-arrow @click-left="onClickLeft"/>
    <div id="video">
        <div class="ticket_box">
          <p style="font-size: 1rem;">北京大地影院-慈云寺店</p>
          <p class="ticket_scall">
            <span class="ticket_pic"><img src="../images/pay/ad.png"></span>
            北京市朝阳区北京市朝阳区北京市朝阳区
          </p>
        </div>
    </div>
    <p>爱丽丝梦游仙境2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.8</p>
    <div class="tabs">
      <van-tabs v-model="active">
        <van-tab title="今天05-03">
          <ul class="rink">
            <li v-for="(item,index) in items" :key="index">
                <p><span style="font-weight: bold;font-size: 1rem;">{{item.time}}</span>
                 <span>{{item.times}}</span>
                </p>
              <p class="txt"><span>{{item.txt}}</span><span>{{item.text}}</span></p>
                <p class="num">{{item.num}}</p>
              <router-link :to=item.routerName>{{item.btn}}</router-link>
            </li>
          </ul>
        </van-tab>
        <van-tab title="明天05-04" >
          <ul class="rink">
            <li v-for="(aitem,index) in aitems" :key="index">
              <p><span style="font-weight: bold;font-size: 1rem;">{{aitem.time}}</span>
                <span>{{aitem.times}}</span>
              </p>
              <p class="txt"><span>{{aitem.txt}}</span><span>{{aitem.text}}</span></p>
              <p class="num">{{aitem.num}}</p>
              <router-link :to=aitem.routerName>{{aitem.btn}}</router-link>
            </li>
          </ul>
        </van-tab>
      </van-tabs>
    </div>

    <div class="mins"><span style="color: #df1a0a">温馨提示：</span>影院提前60分钟关闭网络售票</div>
  </div>
</template>

<script>
  import { NavBar,Tabs,Tab} from 'vant';
  import examl from '../pages/examl'
  export default {
    name: 'vv1',
    components:{NavBar,Tabs,Tab},
    data(){
      return{
        active:0,
        items:[
          {time:'12:36',times:'13:02结束',txt:'2D/国语',text: '3号厅',num:'46积分',btn:'立即购票',routerName:{name:'exam'}},
          {time:'12:36',times:'13:02结束',txt:'2D/国语',text: '3号厅',num:'46积分',btn:'立即购票',routerName:{name:'exam'}},
          {time:'12:36',times:'13:02结束',txt:'2D/国语',text: '3号厅',num:'46积分',btn:'立即购票',routerName:{name:'exam'}},
          {time:'12:36',times:'13:02结束',txt:'2D/国语',text: '3号厅',num:'46积分',btn:'立即购票',routerName:{name:'exam'}},
          {time:'12:36',times:'13:02结束',txt:'2D/国语',text: '3号厅',num:'46积分',btn:'立即购票',routerName:{name:'exam'}},
          {time:'12:36',times:'13:02结束',txt:'2D/国语',text: '3号厅',num:'46积分',btn:'立即购票',routerName:{name:'exam'}},
          {time:'12:36',times:'13:02结束',txt:'2D/国语',text: '3号厅',num:'46积分',btn:'立即购票',routerName:{name:'exam'}},
      ],
        aitems:[
          {time:'10:20',times:'12:02结束',txt:'2D/国语',text: '3号厅',num:'46积分',btn:'立即购票',routerName:{name:'exam'}},
          {time:'11:36',times:'13:02结束',txt:'2D/国语',text: '3号厅',num:'46积分',btn:'立即购票',routerName:{name:'exam'}},
          {time:'12:36',times:'14:02结束',txt:'2D/国语',text: '3号厅',num:'46积分',btn:'立即购票',routerName:{name:'exam'}},
          {time:'13:36',times:'15:02结束',txt:'2D/国语',text: '3号厅',num:'46积分',btn:'立即购票',routerName:{name:'exam'}},
          {time:'12:36',times:'13:02结束',txt:'2D/国语',text: '3号厅',num:'46积分',btn:'立即购票',routerName:{name:'exam'}},
          {time:'16:36',times:'13:02结束',txt:'2D/国语',text: '3号厅',num:'46积分',btn:'立即购票',routerName:{name:'exam'}},
      ]
      }
    },
    methods: {
      onClickLeft () {
        this.$router.push({path: '/v1'});
      },
    }
  }
</script>

<style scoped>
  .vv1{background: #f2f2f2;}
  #video{width: 100%;height:176px;background: url("../images/pay/gp_back.png")no-repeat;
    background-size: 100%;
    position: relative;}
  .ticket_box {width: 100%;
    height: 2.5rem;text-align: initial;
    top: 0;left: 0;
    padding: 2% 3%;
    background: #393845;
    position: absolute;
    color: white;font-size: 0.7rem;
  }
  .ticket_box p{margin: 0;letter-spacing: 1px;}
  .ticket_box p span{margin: 0; width: 1rem;height: 1rem;float: left;}
  .ticket_box p span>img{border: 0;display: block;width: 100%;vertical-align: middle;}
  .tabs{background: white;}
  .rink{width: 100%;}
  .rink li{width: 100%;display: flex;flex: 1;height:53px;border-bottom: 1px solid #f2f2f2;}
  .rink li p{width: 23%;display: block;margin: 10px 0;text-align: center;color: #4c4d4f;}
  .rink li .txt{width: 20%;display: block;margin: 12px 0;text-align: center;}
  .rink li p span{padding-left: 13px;font-size: 0.6rem;}
  .rink li a{ margin: 13px;border: 1px solid #ed0012;border-radius: 0.4rem;
    font-size: 0.6rem;
    color: #ed0012;width: 20%;line-height: 26px;text-align: center;}
  .rink li .num{color: #df5000;font-size: 0.6rem;line-height: 35px;}

    .mins{margin-top: 50px;padding-bottom: 20px;font-size: 0.9rem;}






</style>
