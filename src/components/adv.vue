<template>
<div class="birthday">
  <div class="title-wrap">
    <div class="floor_icon"><van-icon name="birthday-cake-o" color="#f74012" /></div>
    <h2>生日专区</h2>
    <router-link to="/d3">
      查看更多
      <div class="floor_arrow"><van-icon name="arrow" color="#989898" /></div>
    </router-link>
  </div>
  <div class="container">
    <div class="left">
      <router-link to="/d3"><img src="../images/birthday/fuirt.png"></router-link>
    </div>
    <div class="right">
      <div class="top">
        <router-link to="/d3"><img src="../images/birthday/friut2.png"></router-link>
      </div>
      <div class="bottom">
        <router-link to="d3" class="b-left"><img src="../images/birthday/birth3.png"></router-link>
        <router-link to="d3" class="b-right"><img src="../images/birthday/birth3-07.png"></router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'adv'
  }
</script>

<style scoped>
  @import "../assets/adv.css";
  .bottom{width: 100%;overflow: hidden;display: grid;grid-template-columns:50% 50%;}

</style>
