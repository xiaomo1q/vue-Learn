<template>

  <div class="sku-container">
    <van-sku
      v-model="showBase"
      :sku="skuData.sku"
      :goods="skuData.goods_info"
      :goods-id="skuData.goods_id"
      :hide-stock="skuData.sku.hide_stock"
      :quota="skuData.quota"
      :quota-used="skuData.quota_used"
      :initial-sku="initialSku"
       reset-stepper-on-hide
       reset-selected-sku-on-hide
      disable-stepper-input
      :close-on-click-overlay="closeOnClickOverlay"
      :custom-sku-validator="customSkuValidator"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
    <van-button
      block
      type="primary"
      @click="showBase = true"
    >
     请选择商品尺寸
    </van-button>

</div>

</template>

<script>
  import { Sku } from 'vant';
  import skuData from '../assets/data';
  export default {
    name: 'shopp',components:{Sku},
    data(){
      return {
        skuData:skuData,
        showBase: false,
        showCustom: false,
        showStepper: false,
        showSoldout: false,
        closeOnClickOverlay: true,
        initialSku: {
          s1: '30349',
          s2: '1193',
          selectedNum: 3
        },
        customSkuValidator: () => '请选择xxx!',
      }
    },
    methods:{
      onBuyClicked(data){
        console.log(data);
      },
      onAddCartClicked(e){
        console.log(e)
        this.$emit('AddCart')
      }
    }
  }
</script>

<style>
  .van-sku-row{text-align: left;}
  .van-button--normal{font-size: 18px;}
  .van-button--primary {
    color: #fff;
    background-color: #ed0012;
    border: 1px solid #ed0012;
  }
  .van-button--block {
    position: fixed;
    bottom: 0;
    z-index: 99;
  }
</style>
