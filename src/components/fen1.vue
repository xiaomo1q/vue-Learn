<template>
<div style="background: #f2f2f2;">
  <van-nav-bar title="商品详情"  left-arrow @click-left="onClickLeft">
    <van-icon name="shopping-cart-o" slot="right" :info="getinfo"/>
  </van-nav-bar>
  <div style="background: white">
    <p class="des_box"><img src="../images/gg/gg_03.png"></p>
    <p class="des_txt">北美电器（ACA）面包机全自动家用  彩钢全新升级款 AB-DCN03<br/><span>49积分</span></p>
  </div>
  <div class="tabs">
    <van-tabs v-model="active">
      <van-tab title="详情">
        <div class="sp">
          <img src="../images/xqq/sp_1.png">
          <img src="../images/xqq/sp_2.png">
        </div>
      </van-tab>
      <van-tab title="规格" >
        <div class="detail" style="display: block;">
          品牌及名称：海尔变频空调海尔变频空调<br/>
          型号：AB-DCN03<br/>
          规格：280x308x292<br/>
          材质：钢化模型<br/>
          产地：上海<br/>
          配送时间：我们会在您下单后的2-3个工作日内日发货
        </div>
      </van-tab>
    </van-tabs>
  </div>
  <shop class="actond" @AddCart="soca"></shop>

</div>
</template>

<script>
  import { NavBar } from 'vant';
  import Shop from '../components/shopp';
  export default {
    name: 'fen1',
    components:{NavBar,Shop},
    data(){return{active:0,info:3}},
    methods:{
      onClickLeft(){
        this.$router.push({path:'/fenlei'})
      },
      soca(){
        this.info=this.info + 1;

      }
    },
    computed:{
      getinfo(){
        return this.info;
      }
    }
  }
</script>

<style scoped>
  .des_box{width: 100%;height: auto;}
  .des_box img{width: 80%;}
  .des_txt{font-size: 0.9rem;letter-spacing: 1px;margin: 0;
    text-align: initial;line-height: 20px;padding-left: 10px;width: 90%;}
  .des_txt span{color: #df1a0a;}
  .actond{height: 100px;width: 100%;}
  .tabs{margin-top: 10px;}
  .sp{width: 100%;height: auto;}
  .sp img{width: 100%;height: auto;}
  .detail{text-align: initial;width: 94%;font-size: 0.9rem;color: #666;
    letter-spacing: 1px;margin: 14px auto;line-height: 23px;}
</style>
