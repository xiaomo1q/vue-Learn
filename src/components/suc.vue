<template>
  <div style="background: #f2f2f2">
    <van-nav-bar title="ok"  left-arrow @click-left="onClickLeft"/>
    <div class="secc">
      <p class="ess"><img src="../images/index/dd_03.png"><span>交易成功</span></p>
    </div>
  </div>
</template>

<script>
  import { NavBar } from 'vant';
  export default {
    name: 'suc',
    components:{NavBar},
    methods:{
      onClickLeft(){
        return this.$router.push({path:'/'})
      }
    }
  }
</script>

<style scoped>
  .secc{width: 100%;height: auto;background:white;}
  .ess{width: 50%;margin:10px auto;padding: 20px;line-height: 20px;}
  .ess img{width: 20%;}
  .ess span{width: 20%;font-size: 25px;color: #df1a0a;font-weight: bold;}

</style>
