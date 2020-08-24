<template>
    <div class="m3">
      <van-nav-bar title="账户充值"  left-arrow @click-left="onClickLeft"/>
      <div class="top">
        <p>
          <span>卡号：</span>
          <input type="text" placeholder="123456789">
        </p>
        <p>
          <span>余额：</span>
          <input type="password" placeholder="0.00积分">
        </p>
      </div>
        <div class="mind">
          <p>充值金额</p>
          <ul id="add_color">
            <li class="orchard_color" :class="{active:shows==1}" @click="approve">10积分<br>售价10</li>
            <li :class="{active:shows==2}" @click="sales">20积分<br>售价20</li>
            <li :class="{active:shows==3}" @click="range">30积分<br>售价30</li>
            <li :class="{active:shows==4}" @click="rangeo">40积分<br>售价40</li>
            <li :class="{active:shows==5}" @click="ranget">50积分<br>售价50</li>
            <li :class="{active:shows==6}" @click="rangef">60积分<br>售价60</li>
          </ul>
          <p>支付方式</p>
          <van-cell @click="showPopup" ><van-icon name="alipay" /></van-cell>
          <van-popup v-model="show" round position="bottom" :style="{ height: '70%' }">
          <van-password-input
            :value="value"
            info="密码为 6 位数字"
            :focused="showKeyboard"
            @focus="showKeyboard = true"
          />
          <!-- 数字键盘 -->
          <van-number-keyboard
            :show="showKeyboard"
            @input="onInput"
            @delete="onDelete"
            @blur="showKeyboard = false"
          />
            <div class="close">
              <router-link to="/suc">确认充值</router-link>
            </div>
          </van-popup>
        </div>

    </div>
</template>

<script>
  import {NavBar,Grid, GridItem,Popup,Icon,PasswordInput, NumberKeyboard } from 'vant';
  export default {
    name: 'm3',
    components:{NavBar,Grid, GridItem,Popup,Icon,PasswordInput, NumberKeyboard },
    methods:{
      onClickLeft(){
        this.$router.push({path:'/me'});
      },
      showPopup() {
        this.show = true;
      },
      onInput(key) {
        this.value = (this.value + key).slice(0, 6);
      },
      onDelete() {
        this.value = this.value.slice(0, this.value.length - 1);
      },
      approve(){
        this.shows =1;
      },
      sales(){
        this.shows=2;
      },
      range () {
        this.shows=3;
      },
      rangeo () {
        this.shows=4;
      },
      ranget () {
        this.shows=5;
      },
      rangef () {
        this.shows=6;
      },

    },
    data(){
      return{
        active:0,
        shows:1,
        show:false,
        value: '',
        showKeyboard: true

      }
    }
  }
</script>

<style scoped>
  .m3{background-color: #f2f2f2;}
  .top{width: 100%;}
  p{width: 100%;height: 2.2rem;background: #fff;line-height: 2.2rem;
        color: #666;font-size: 1rem;position: relative;
        border-bottom:1px solid #eaeaea;margin: 0;
      }
  .top input{width: 70%;padding-left: 10px;height: 2rem;border: 0;}
  .mind{margin-top: 20px;width: 100%;height:287px;}
  #add_color{display: grid;grid-template-columns:repeat(3,29%);grid-gap: 15px;
    width: 100%;height: 120px;background-color: white;margin: 0 auto;border-bottom:1px solid #eaeaea;}
  #add_color li{width: 100%;line-height: 25px;text-align: center;
    color: #343434;font-size: 0.8rem;position: relative;height: auto;}
  #add_color li span{position: absolute;width: 1.4rem;height: 1.4rem;right: 1rem;}
  #add_color li span>img{height: 10px;width: 10px;padding: 9px 0;}
  #add_color .active{color: #df5000; border:1px solid #df1a0a;border-radius: .3em;}
  .mind .van-icon{font-size: 24px;}
  .close{width: 100%;height: 6rem;margin-top: 20px;}
  a{width: 80%;margin: 0 auto;background-color: #ed3341;height: 3rem;
    line-height: 2rem;color: white;font-size: 16px;border-radius: 0.3rem;
    padding: 10px;border: 0;
  }
</style>
