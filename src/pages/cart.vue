<template>

  <div class="cart">
    <p class="pa">购物车<span>编辑</span></p>
    <div class="supp">
      <div>
        <div class="header">
          <p>供货商:易果生鲜</p>
          <p style="color: #df5000;text-align: right;"><van-icon name="delete"/></p>
        </div>
        <div class="mind">
          <van-card
            price="1239.0积分"
            desc="规格：50ml"
            title="Dior/迪奥小姐花漾淡香氛50ml 甜 心女士淡香 EDT 清新甜美"
            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
          >
            <div slot="tags" class="tags">
            <p class="footer">
              <input  value="-" class="plus" type="button"@click="bddClick">
              <span class="txt">{{count}}</span>
              <input  value="+" class="reduce" type="button" @click="addClick">
            </p>
          </div>
          </van-card>
        </div>
        <coupon class="coupon"></coupon>
      </div>
      <div>
        <div class="header">
          <p>供货商:易果生鲜</p>
          <p style="color: #df5000;text-align: right;"><van-icon name="delete" /></p>
        </div>
        <div class="mind">
          <van-card
            price="1239.0积分"
            desc="规格：50ml"
            title="Dior/迪奥小姐花漾淡香氛50ml 甜 心女士淡香 EDT 清新甜美"
            thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
          >
            <div slot="tags" class="tags">
            <p class="footer">
              <input  value="-" class="plus" type="button"@click="bdd">
              <span class="txt">{{counit}}</span>
              <input  value="+" class="reduce" type="button" @click="add">
            </p>
          </div>
          </van-card>
        </div>
        <coupon class="coupon"></coupon>
      </div>
    </div>

    <submit-bar class="bar"></submit-bar>
    <index class="dex"></index>
  </div>
</template>

<script>
  import Index from '../components/index'
  import SubmitBar from '../components/SubmitBar'
  import Coupon from '../components/coupon'
  import {Icon} from 'vant'
  import {store} from '../assets/store';
  export default {
    name: 'cart',
    components:{Index,SubmitBar,Icon,Coupon},
    computed:{
      count:function () {
        return store.state.count;
      },
      counit:function () {
        return store.state.counit;
      },
    },
    methods:{
      addClick(){
        store.commit('increment')
      },
      bddClick(){
        store.commit('decrement')
      },

      add(){
        store.commit('add')
      },
      bdd(){
        store.commit('del')
      },
    }
  }
</script>

<style scoped>
  .dex{height: 60px;z-index: 999;width: 100%;bottom: 0;left: 0;}
  .cart{background-color: #f2f2f2;}
  .cart .pa{width: 100%;height: 2.2rem;background: #fff;line-height: 2.2rem;
  color: #303030;font-size: 1.2rem;position: relative;
  margin: 0;
  }
  .cart .pa span{float: right;color: #df0600;padding-right: 5px;}
  .van-card__title,.van-card__bottom, .van-card__desc,.tags{text-align: left;margin-bottom: 5px;}
  .header{margin-top: 10px;}
  .van-card__bottom{width: 50%;float: left;}
  .tags{float: right;width: 35%;}
  .tags p{margin: 0;}
  .van-card__title {color: #7d7e80;}
  .van-card__content{display: block;}
  .van-card{margin: 0;}
  .van-button--mini {min-width: 20px;}
  .van-button--default {border: 1px solid #e6390e;border-radius: 0.2rem;}
  .header{width: 100%;height: 40px;line-height: 40px;background-color: white;color: #a4a4a4;
    border-bottom:1px solid #f2f2f2;display: flex;}
  .header p{margin: 0;width: 50%;padding: 0 10px;text-align: left;}
  .header p .van-icon{font-size: 22px;}
  .supp{margin-bottom: 30px;}
  .footer{width: 84px;float: right;
    border: 1px solid #c3c3c3;
    border-radius: 2px;display: flex;flex: 1;
}
  .footer input{width:33%;border: 0;background: #fff;}
  .txt{width: 30px;height: 20px;text-align: center;line-height: 22px;}
  .plus,.reduce{width: 26px;height: 23px;}
  .plus{border-right: 1px solid #c3c3c3;}
  .reduce{border-left: 1px solid #c3c3c3;}
</style>
