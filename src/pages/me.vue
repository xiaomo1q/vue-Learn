<template>
 <div id="me">
   <div class="top">
     <div class="me_mian">
       <p class="me_pic">
         <img src="../images/my/my_03.png">
       </p>
       <span class="number">1234567809</span><br/>
       <span class="txt">余额：0.00积分</span>
     </div>
   </div>
   <div class="bottom">
     <ul>
       <li v-for="(item,index) in items":key="index">
         <router-link :to="item.routerName">
           <img :src=item.imgSrc class="imgone">
           <p>{{item.text}}</p>
           <img :src=item.img class="imgtwo">
         </router-link>

       </li>
     </ul>
   </div>

   <div class="close">
     <button>退出登录</button>
   </div>
   <index class="dex"></index>
 </div>
</template>

<script>
  import Index from '../components/index'
  import m1 from '../images/my/main_04.png'
  import m2 from '../images/my/main_11.png'
  import m3 from '../images/my/main_13.png'
  import m4 from '../images/my/main_15.png'
  import right from '../images/my/right.png'
  export default {
    name: 'me',
    data(){
      return{
        items:[
          {imgSrc:m1,text:'我的订单',img:right,routerName:{name:'m1'}},
          {imgSrc:m2,text:'收货地址',img:right,routerName:{name:'m2'}},
          {imgSrc:m3,text:'账户充值',img:right,routerName:{name:'m3'}},
          {imgSrc:m4,text:'余额转移',img:right,routerName:{name:'m4'}},
          ]
      }
    },
    components:{Index}
  }
</script>

<style scoped>
  .dex{height: 60px;z-index: 999;width: 100%;bottom: 0;left: 0;}
  #me{background-color: #f2f2f2;}
  img{width: 100%;border: 0;}
  .top{background: url("../images/my/bj.png")no-repeat;width: 100%;height: 196px;}
  .me_mian{width: 50%;margin: 0 auto;padding-top: 28px;color: white;}
  .me_pic{width: 50%;height:50%;margin:auto;}
  .number{font-size: 1.2rem;font-weight: 500;margin-top: 10px;}
  .txt{font-size: 0.8rem;}
  .bottom{margin-top: 20px;}
  .bottom li{width: 100%;background-color: white;}
  .bottom li a{display: flex;flex: 1;width: 88%;height: 60px;
    border-bottom: 1px solid #f2f2f2;margin: 0 auto;
    line-height: 60px;color: #525252;
  }
  .bottom li a>.imgone{width: 33.5px;height: 33.5px;padding: 16px;}
  .bottom li a p{width: 87%;text-align: left;margin: 0;}
  .bottom li a>.imgtwo{width: 14px;height: 19px;padding: 23px;}
  .close{width: 100%;height: 2rem;margin-top: 40px;}
  button{width: 80%;margin: 0 auto;background-color: #ed3341;height: 3rem;
  line-height: 2rem;color: white;font-size: 16px;border-radius: 0.3rem;
    padding: 10px;border: 0;
  }
</style>
