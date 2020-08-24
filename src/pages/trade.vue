<template>
    <div>
      <header>购物车</header>

      <div class="container">
        <div v-if="shopCar.length > 0">
          <div class="item" v-for="(item,index) in shopCar" :key="index">
            <div class="logo">
              <img :src="item.businessLogo">
              <span>{{item.businessName}}</span>
              <van-icon name="delete" @click="del"/>
            </div>
            <div class="details">
            <img :src="item.commodityImg">
            <div class="details-list">
              <span>{{item.commodityName}}</span>
              <div class="list-more">
                <span>颜色分类：{{item.commodityColor}}</span>
                <span>尺码：{{item.commoditySize}}</span>
              </div>
              <div class="list-price">￥{{item.commodityPrice}}/件</div>
            </div>
          </div>
            <div class="num">
            <span>购买数量</span>
            <div>
              <button v-on:click="btn(false,index)">-</button>
              <input :value="item.num" type=""/>
              <button v-on:click="btn(true,index)">+</button>
            </div>

          </div>
          </div>
        </div>
        <div v-else>暂无数据。。。</div>
      </div>

      <footer>
        <div class="footer-left">
          实际付款：<span>￥{{totalPrice}}免运费</span>
        </div>
        <div class="footer-right" v-on:click="pay">立即付款</div>
      </footer>
      <index class="dex"></index>
    </div>
</template>

<script>
  import Index from '../components/index'
  import {Icon} from 'vant'
  export default {
    name: 'trade',
    components:{Index,Icon},
    data(){
      return{
        index:0,
        totalPrice:0,
        shopCar:[
          {
            id:'1',
            businessLogo:'http://gw2.alicdn.com/tfscom/tuitui/TB1OLjvMVXXXXcaaXXXXXXXXXXX',
            businessName:'商家名称1111',
            commodityImg:'http://img.alicdn.com/tfscom/i1/28306811/TB2FK.jbTJ_SKJjSZPiXXb3LpXa_!!28306811.jpg_280x380xz.jpg',
            commodityName:'秋冬甜美港风CHIC超潮独角兽贴布刺绣流苏宽松拼色麂皮短外套开衫',
            commodityColor:'墨绿色',
            commoditySize:"L115-105",
            commodityPrice:'29.9',
            num:1
          },
          {
            id:'2',
            businessLogo:'http://img.alicdn.com/imgextra/i4/687132834/TB2p6EMyxtmpuFjSZFqXXbHFpXa_!!687132834-0-beehive-scenes.jpg',
            businessName:'商家名称2222',
            commodityImg:'http://img.alicdn.com/tfscom/i3/687132834/TB2qCLny00opuFjSZFxXXaDNVXa_!!687132834.jpg_280x380xz.jpg',
            commodityName:'【上天下海】13PLUS独立自制纯棉高腰文艺抽绳流苏民族蓝色连衣裙',
            commodityColor:'墨色',
            commoditySize:"L115-106",
            commodityPrice:'29.9',
            num:1
          },
          {
            num:1,
            id:'3',
            businessLogo:'http//img.alicdn.com/imgextra/i4/11140421/TB2R7aylR4lpuFjy1zjXXcAKpXa_!!11140421-0-beehive-scenes.jpg',
            businessName:'商家名称333',
            commodityImg:'http://img.alicdn.com/tfscom/i3/687132834/TB2Lgs7fi0TMKJjSZFNXXa_1FXa_!!687132834.jpg_280x380xz.jpg',
            commodityName:'【小月光】13PLUS独立自制米色针织复古文艺百搭开衫一字领上衣',
            commodityColor:'绿色',
            commoditySize:"L20-105",
            commodityPrice:'29.9'
          },
          {
            num:1,
            id:'4',
            businessLogo:'http://img.alicdn.com/imgextra/i4/836192226/TB2Ow1oxr5YBuNjSspoXXbeNFXa_!!836192226-0-beehive-scenes.jpg',
            businessName:'商家名称4444',
            commodityImg:'http://img.alicdn.com/imgextra/i1/836192226/TB2LYvbiWmgSKJjSspiXXXyJFXa_!!836192226-0-beehive-scenes.jpg_280x380xz.jpg',
            commodityName:'北欧实木转角置物架墙角书架拐角隔板装饰架客厅多层三角墙上搁板',
            commodityColor:'白色',
            commoditySize:"L115-105",
            commodityPrice:'29.9'
          },
        ]
      }
    },
    methods:{
      pay(){
        this.$router.push({path:'/suc'})
      },
      getTotalPrice(){
        //总计
        let price =0;
        this.shopCar.forEach((item,index)=>{
          price += item.num * item.commodityPrice
        })
        this.totalPrice = price.toFixed(2);
      },
      btn(bool,index){
        console.log(bool,index);
        let shopIndex=this.shopCar[index];
        if(bool){
          shopIndex.num ++
        }else{
          if(shopIndex.num ==1){
            return;
          }
          shopIndex.num --;
        }
        this.getTotalPrice();
      },
      del(index){
        this.shopCar.splice(index,1);
        this.getTotalPrice();
      }
    },
    mounted(){
      this.getTotalPrice();
    }
  }
</script>

<style scoped>
  .dex{height: 60px;z-index: 999;width: 100%;bottom: 0;left: 0;}
  header{
  height: 36px;
  width: 100%;
  position: fixed;
  line-height: 36px;
  background: #fff;
  text-align: center;
  left: 0;
  top: 0;
  z-index: 999;
  border-bottom: 1px solid #ccc;
}

  footer{
  height: 50px;
  width: 100%;
  position: fixed;
  line-height: 50px;
  background: #fff;
  text-align: center;
  left: 0;
  bottom: 48px;
  z-index: 998;
  border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
}
  .container{
    background: #fff;
    padding: 50px 0;
  }
  /*.item{padding: 10px;}*/
  .logo{
    height: 40px;
    display: flex;
    align-items: center;
  }
  .logo img{width: 20px;height: 20px;}
  .logo span{
    width: 81%;
    text-align: initial;
    color: #888;
    font-size: 12px;
    margin-left: 20px;
  }
  .logo .van-icon{font-size: 20px;color: #df1a0a;}
  .details{
    background: #f5f5f5;
    padding: 15px;
    display: flex;
    font-size: 12px;
  }
  .details img{
 width: 90px;height: 90px;
  }
  .details-list{
    text-align: initial;
    margin-left: 15px;
    color: #888;
  }
  .list-more span{
    display: block;
    color: #ccc;
  }
  .list-price{
    font-size: 14px;
  }
  .num{color: #666;padding: 10px;
    display: flex;justify-content: space-between;}
  .num button{
    width: 31px;
    height: 25px;
    background: #e0e0e0;
    color: #58595b;
    border: 0;outline: none;
  }
  .num input{
    width: 37px;
    height: 25px;
    background: #fff;
    border: none;
    text-align: center;
  }
  .container>.item + .item{
    border-top: 1px solid #ccc;
  }
  .footer-left{
    flex: 1;
    text-align: left;
    line-height: 50px;
    font-size: 16px;
    padding-left: 14px;
  }
  .footer-left span{color: red;}
  .footer-right{
    height: 50px;
    width: 150px;
    line-height: 50px;
    background: red;
    text-align: center;
    color: #fff;
  }
</style>
