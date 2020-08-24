<template>
  <div class="integral">
    <div class="title-wrap">
      <div class="floor_icon"><van-icon name="birthday-cake-o" color="#f74012" /></div>
      <h2>积分商城</h2>
      <router-link to="/d1">
        查看更多
        <div class="floor_arrow"><van-icon name="arrow" color="#989898" /></div>
      </router-link>
    </div>
    <div class="container">
      <router-link to="/d1"><img src="../images/integral/jf-13.png"></router-link>
      <router-link to="/d1"><img src="../images/integral/jf-15.png"></router-link>
      <router-link to="/d1"><img src="../images/integral/jf-14.png"></router-link>
      <router-link to="/d1"><img src="../images/integral/jf.png"></router-link>
      </div>
  </div>

</template>

<script>
  export default {
    name: 'integral'
  }
</script>

<style scoped>
  @import "../assets/adv.css";

  .container{width: 100%;overflow: hidden;display: grid;grid-template-columns:50% 50%;}

</style>
