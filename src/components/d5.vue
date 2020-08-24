<template>
  <div>
    <van-nav-bar title="轻松出行"  left-arrow @click-left="onClickLeft"/>

    <sidbar></sidbar>
  </div>

</template>

<script>
  import { NavBar } from 'vant';
  import sidbar from '../components/sidbar';
  export default {
    name: 'd5',
    components:{sidbar,NavBar},
    methods:{
      onClickLeft(){
        this.$router.push({path:'/'});
      }
    }
  }
</script>

<style scoped>

</style>
