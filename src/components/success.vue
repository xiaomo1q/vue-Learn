<template>
  <div style="background: #f2f2f2">
    <van-nav-bar title="选座"  left-arrow @click-left="onClickLeft"/>
    <div class="secc">
      <p class="ess"><img src="../images/index/dd_03.png"><span>交易成功</span></p>
      <h4>你将在15分钟内收到取票短信，请凭短信中的取票密码在影院自助取票机取票</h4>
      <div class="su_sp">
        <span>订单号：14575248563</span><br/>
        <span>影片：爱丽丝梦游仙境</span><br/>
        <span>影院：万达影城</span><br/>
        <span>付款：20积分</span>
      </div>
    </div>
  </div>

</template>

<script>
  import { NavBar } from 'vant';
  export default {
    name: 'success',
    components:{NavBar},
    methods:{
      onClickLeft(){
        return this.$router.push({path:'/exam'})
      }
    }
  }
</script>

<style scoped>
.secc{width: 100%;height: auto;background:white;}
  .ess{width: 50%;margin:10px auto;padding: 20px;line-height: 20px;}
  .ess img{width: 20%;}
  .ess span{width: 20%;font-size: 25px;color: #df1a0a;font-weight: bold;}
  h4{width: 74%;text-align: left;padding-left: 20px;margin: 10px auto;line-height: 26px;}
 .su_sp{width: 74%;text-align: left;padding-left: 20px;margin: 10px auto;line-height: 33px;}

</style>
