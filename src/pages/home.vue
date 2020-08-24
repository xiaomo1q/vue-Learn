<template>
  <div class="wangfu">
    <crest class="der"></crest>
    <swiper class="per"></swiper>
    <nav-fix class="fix"></nav-fix>
    <move class="move"></move>
    <adv class="adv"></adv>
    <fruit class="adv"></fruit>
    <integral class="adc"></integral>
    <Index class="dex"></Index>
  </div>
</template>

<script>
  import Index from '../components/index'
  import Crest from '../components/crest'
  import Swiper from '../components/swiper'
  import NavFix from '../components/nav_fic'
  import Move from '../components/move'
  import Adv from '../components/adv'
  import Fruit from '../components/fruit'
  import Integral from '../components/integral'

  export default {
    name: 'home',
    components:{Index,Crest,Swiper,NavFix,Move,Adv,Fruit,Integral}
  }
</script>

<style scoped>
.wangfu{background: #f2f2f2;}
  .der{height:43px;width: 100%;top:0;left:0;position: sticky;background: #ffffff;z-index: 999;}
  .per{width: 100%;height: 150px;}
  .move{width: 100%;height: 295px;}
  .adv{width: 100%;height:250px;background: #F7F7F7;margin-top: 10px;}
  .adc{width: 100%;height:230px;background: #F7F7F7;margin-top: 10px;}
  .fix{width: 100%;height: 229px;padding-top: 12px;background: #f2f2f2;
    overflow: hidden;
    text-align: center;padding-bottom: 10px;}
.dex{height: 60px;z-index: 999;width: 100%;bottom: 0;left: 0;}


</style>
