<template>
  <div class="Sumbar">
    <van-submit-bar
      :price="3050"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>

</template>

<script>
  import { SubmitBar } from 'vant';
  export default {
    name: 'SubmitBar',
    components:{SubmitBar},
    data(){
      return{
        checked:0
      }
    },
    methods:{
      onSubmit(){}
    }
  }
</script>

<style>
  .Sumbar {height: 50px;}
  .Sumbar .van-icon{font-size: 20px;color: white;}
  .Sumbar .van-submit-bar {position: fixed;bottom: 51px;}
  .Sumbar .van-checkbox{width: 65px;display: flex;height: 40px;}
  .Sumbar .van-checkbox__icon--round{margin-right: 6px;height: 20px;width: 20px;}
</style>
