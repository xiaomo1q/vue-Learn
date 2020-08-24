<template>
  <div class="fruit">
    <div class="title-wrap">
      <div class="floor_icon"><van-icon name="birthday-cake-o" color="#f74012" /></div>
      <h2>果香飘香</h2>
      <router-link to="/d4">
        查看更多
        <div class="floor_arrow"><van-icon name="arrow" color="#989898" /></div>
      </router-link>
    </div>
    <div class="container">
      <div class="left">
        <router-link to="/d4"><img src="../images/furit/fuirt-08.png"></router-link>
      </div>
      <div class="right">
        <div class="top">
          <router-link to="/d4"><img src="../images/furit/friut2-09.png"></router-link>
        </div>
        <div class="bottom">
          <router-link to="/d4"><img src="../images/furit/friut2-10.png"></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'fruit'
  }
</script>

<style scoped>
@import "../assets/adv.css";
</style>
