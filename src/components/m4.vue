<template>
  <div class="m3">
    <van-nav-bar title="账户充值"  left-arrow @click-left="onClickLeft"/>

    <div class="top">
      <p>转出（需清空的）卡号</p>
        <input type="text" placeholder="卡号">
        <input type="password" placeholder="密码">
    </div>
    <div class="top">
      <p>转出（需合并的）卡号</p>
        <input type="text" placeholder="卡号">
        <input type="password" placeholder="密码">
    </div>

    <div class="close">
      <button>确认转移</button>
    </div>
  </div>
</template>

<script>
  import {Icon} from 'vant'
  export default {
    name: 'm4',
    components:{Icon},
    methods: {
      onClickLeft () {
        this.$router.push({path: '/me'});
      },
    }
  }
</script>

<style scoped>
  .top{width: 100%;}
  p{width: 100%;height: 2.2rem;background: #fff;line-height: 2.2rem;
    color: #303030;font-size: 1rem;position: relative;
    margin: 0;text-align: left;padding-left: 20px;
  }
  .top input{width: 90%;padding: 5px 3px;border-radius: 0.3em;margin: 3px auto;
    height: 2.5rem;border:2px solid #dbdbdb;}
  .close{width: 100%;height: 6rem;margin-top: 20px;}
  button{width: 80%;margin: 0 auto;background-color: #ed0012;height: 3rem;
    line-height: 2rem;color: white;font-size: 16px;border-radius: 0.3rem;
    padding: 10px;border: 0;
  }
</style>
