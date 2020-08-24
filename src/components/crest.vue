<template>
  <div>
    <div class="jb"><a href="#" class="jb-a"><i class="jb-logo"></i></a></div>
    <div><van-search placeholder="请输入搜索关键词" v-model="value" background="none"/></div>
    <div class="login" >
      <button id="loginmain" @click="btn">
        {{this.val}}
<!--        {{changeCity}}-->
        <font class="login_icon">
          <img src="../images/login_icon.png">
        </font>
      </button>
    </div>
<!--    <cal v-model="show"  v-bind:title="title" @cell="dosth"></cal>-->
  </div>
</template>

<script>
  import { Search } from 'vant';
  import { mapState} from 'vuex'
  export default {
    name: 'crest',
    components:{Search},
    data(){
      return{
        value:"",
      }
    },
    methods:{

      btn(){
        this.$router.push({ path: '/address'});
      }
    },
    mounted () {
      console.log(this.$route)
      if(this.$route.params.val){
        this.title = this.$route.params.val;
      }
    },
    computed: {
      ...mapState(['val']),
      // ...mapMutations(['changeCity'])
    }
  }
</script>

<style scoped>
  .jb{position: absolute;left: 10px;top: 3px;width: 30px;height: 35px;}
 a{display: block;width: 100%;color: #333;text-decoration: none;}
 button{display: block;width: 100%;color: #333;text-decoration: none;background: none;border: 0;}
  .jb-logo{
    display: inline-block;
    background: url(../images/jd-sprites.jpg) no-repeat;
    background-size: 100%;
  }
  i{width: 30px;height: 35px;background-position: -2px -106px;}
  .van-search{width: 73%;margin: auto;padding: 5px 12px;}
  .van-search__content {border-radius: 10px;}
  .login{
    position: absolute;
    right: 10px;
    top: 0;font-size: 12px;
    /*width: 28px;*/
    height: 40px;
    line-height: 42px;
  }
  .login #loginmain{
    /*width: 24px;*/
    height: 40px;color: #989898;transition: .4s color;}
  .login #loginmain font{ width: 8px;height: 8px;position: absolute;top: 19px;right: -6px;transform: rotate(0deg);}
  img{border: 0;display: block;width: 100%;vertical-align: middle;}


</style>
