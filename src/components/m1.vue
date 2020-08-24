<template>
    <div class="m1">
      <van-nav-bar title="我的订单"  left-arrow @click-left="onClickLeft"/>
      <div class="card">
        <div>
        <div class="header">
          <p>编号：23456789</p>
          <p style="color: #df5000;text-align: right;">卖家已发货</p>
        </div>
        <van-card
          num="2"
          price="2.00"
          desc="规格：50ml"
          title="Dior/迪奥小姐花漾淡香氛50ml 甜 心女士淡香 EDT 清新甜美"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        >
          <div slot="tags" class="tags">
            <van-tag plain type="danger">七天无退换</van-tag>
          </div>
          <div slot="footer">
            <van-button size="mini">删除订单</van-button>
            <van-button size="mini">追加评价</van-button>
          </div>
        </van-card>
      </div>
        <div>
          <div class="header">
            <p>编号：23456789</p>
            <p style="color: #df5000;text-align: right;">卖家已发货</p>
          </div>
          <van-card
          num="2"
          price="2.00"
          desc="规格：50ml"
          title="Dior/迪奥小姐花漾淡香氛50ml 甜 心女士淡香 EDT 清新甜美"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        >
          <div slot="tags" class="tags">
            <van-tag plain type="danger">七天无退换</van-tag>
          </div>
          <div slot="footer">
            <van-button size="mini">删除订单</van-button>
            <van-button size="mini">追加评价</van-button>
          </div>
        </van-card>
        </div>
        <div>
          <div class="header">
            <p>编号：23456789</p>
            <p style="color: #df5000;text-align: right;">卖家已发货</p>
          </div>
          <van-card
          num="2"
          price="2.00"
          desc="规格：50ml"
          title="Dior/迪奥小姐花漾淡香氛50ml 甜 心女士淡香 EDT 清新甜美"
          thumb="https://img.yzcdn.cn/vant/t-thirt.jpg"
        >
          <div slot="tags" class="tags">
            <van-tag plain type="danger">七天无退换</van-tag>
          </div>
          <div slot="footer">
            <van-button size="mini">删除订单</van-button>
            <van-button size="mini">追加评价</van-button>
          </div>
        </van-card>
        </div>
      </div>
      <div class="best">
        <h3>
          <van-icon name="hot-o" color="#f74012" />
          <p>热卖品单</p>
        </h3>
        <div class="best_bottom">
          <ul>
            <li v-for="(tab, index) in tabs" :key="index">
              <img :src="tab.imgSrc">
              <p>{{tab.title}}</p>
              <span>{{tab.text}}</span>
            </li>
          </ul>
        </div>
        <p style="font-size: 16px">没有更多的商品啦</p>
      </div>
    </div>
</template>

<script>
  import { NavBar } from 'vant';
  import { Card } from 'vant';
  import sp from '../images/jifen/sp.png'
  export default {
    name: 'm1',
    components:{NavBar,Card},
    data(){
      return{
        tabs: [
          {title:"迷你智能电饭煲HYFG-1016", imgSrc:sp,text:'86.0积分'},
          {title:"迷你智能电饭煲HYFG-1016", imgSrc:sp,text:'86.0积分'},
          {title:"迷你智能电饭煲HYFG-1016", imgSrc:sp,text:'86.0积分'},
          {title:"迷你智能电饭煲HYFG-1016", imgSrc:sp,text:'86.0积分'},
          {title:"迷你智能电饭煲HYFG-1016", imgSrc:sp,text:'86.0积分'},
          {title:"迷你智能电饭煲HYFG-1016", imgSrc:sp,text:'86.0积分'},
          {title:"迷你智能电饭煲HYFG-1016", imgSrc:sp,text:'86.0积分'},
          {title:"迷你智能电饭煲HYFG-1016", imgSrc:sp,text:'86.0积分'},
        ],
      }
      },
    methods:{
      onClickLeft(){
        this.$router.push({path:'/me'})
      }
    }
  }
</script>

<style scoped>
  .m1{background-color: #f2f2f2;}
  .van-card__title,.van-card__bottom, .van-card__desc,.tags{text-align: left;}
  .card,.best{margin-top: 20px;}
  .header{margin-top: 10px;}
  .van-card{margin: 0;}
  .van-button--mini {min-width: 66px;}
  .van-button--default {border: 1px solid #e6390e;border-radius: 0.5rem;}
  .header{width: 100%;height: 40px;line-height: 40px;background-color: white;color: #afafaf;
  border-bottom:1px solid #f2f2f2;display: flex;}
  .header p{margin: 0;width: 50%;padding: 0 10px;}

  h3{margin: 0 auto;width: 26%;height: 1.8rem;text-align: center;
    color: #fc5830;font-size: 1.1rem;line-height: 1.8rem;
    font-weight: normal;padding-bottom: 5px;}
   h3 p{float:right;margin: 0;}
  .best_bottom li{width: 90%;padding: 8px;background: #fff;text-align: initial;}
  .best_bottom ul{height: 988px;display: grid;grid-template-columns: repeat(2,50%);grid-gap: 5px;}
  .best_bottom li img{width:90%;}
  .best_bottom li p{margin: 0;font-size: 14px;color: #403f3f;text-align: initial;width: 87%;}
  li span{margin: 5px auto;font-size: 16px;color: #ff2a27;width: 64%;}
</style>
