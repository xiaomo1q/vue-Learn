<template>
    <div >
      <div class="fic"><ul>
        <li v-for="(tab, index) in tabs" :key="index">
          <router-link :to="tab.routerName">
            <img :src="tab.imgSrc">
            <p>{{tab.title}}</p>
          </router-link>
        </li>
      </ul></div>

      <div class="marquee">
        <div class="marquee_title">
          <img src="../images/wangfu.png">
        </div>
        <div class="marquee_box">
          <ul class="marquee_list" :class="{marquee_top:animate}">
            <li v-for="(item,index) in marqueeList" :key="index">{{item.name}}</li>
          </ul>
        </div>
      </div>
    </div>
</template>
<script>
  import d1 from '../images/index/1.png'
  import d2 from '../images/index/2.png'
  import d3 from '../images/index/3.png'
  import d4 from '../images/index/4.png'
  import d5 from '../images/index/5.png'
  import d6 from '../images/index/6.png'
  import d7 from '../images/index/7.png'
  import d8 from '../images/index/8.png'
  import { NoticeBar } from 'vant';
  export default {
    name: 'nav_fic',
    data(){
      return{
        tabs:[
          {id:1, title:"积分商城", imgSrc:d1, routerName:{name:'d1'}},
          {id:2, title:"影音天地", imgSrc:d2, routerName:{name:'d2'}},
          {id:3, title:"生日专区", imgSrc:d3, routerName:{name:'d3'}},
          {id:4, title:"果园飘香", imgSrc:d4, routerName:{name:'d4'}},
          {id:4, title:"关爱健康", imgSrc:d5, routerName:{name:'d5'}},
          {id:4, title:"应季辗选", imgSrc:d6, routerName:{name:'d6'}},
          {id:4, title:"轻松出行", imgSrc:d7, routerName:{name:'d5'}},
          {id:4, title:"景点门票", imgSrc:d8, routerName:{name:'d5'}}
        ],
        animate: false,
        marqueeList: [
          {name: "春季签收水果前确认"},
          {name: "夏季签收水果前确认"},
          {name: "秋季签收水果前确认"},
          {name: "冬季签收水果前确认"},
        ]
      }
    },
    created: function() {
      setInterval(this.showMarquee, 2000);
    },
    methods: {
      showMarquee: function() {
        this.animate = true;
        setTimeout(() => {
          this.marqueeList.push(this.marqueeList[0]);
          this.marqueeList.shift();
          this.animate = false;
        }, 500);
      }
    }
  }
</script>

<style>
.fic ul{display: grid;grid-template-columns: repeat(4,25%); /*grid-template-rows: repeat(4,25%);*/}
.fic li{width: 100%;margin: 10px auto;}
.fic li a>img{width:50%;}
.fic li a>p{margin: 5px auto;font-size: 12px;color: #838282;}

.marquee {
  width: 90%;height: 35px;margin: 0 auto;
  align-items: center;color: #3a3a3a;
  background-color: white;display: flex;
  border-radius:0.8em;
}
.marquee_title {
  padding: 0 15px;
  height: 25px;
  width:102px;
}
.marquee_title>img{
  width:100%;height: 25px;
}
.marquee_box {
  display: block;
  position: relative;
  width: 60%;
  height: 30px;
  overflow: hidden;
}
.marquee_list {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
}
.marquee_top {
  transition: all 0.5s;
  margin-top: -30px;
}
.marquee_list li {
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  padding-left: 20px;
}
.marquee_list li span {
  padding: 0 2px;
}

</style>
