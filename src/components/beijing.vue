<template>
  <div>
    <van-nav-bar title="定位"  left-arrow @click-left="onClickLeft"/>
    <van-index-bar @select="select" @click="cell">
      <van-index-anchor>快速选取</van-index-anchor>
      <van-cell title="北京 北京市 丰台区..." />
      <van-index-anchor>定位</van-index-anchor>
      <van-cell title="北京朝阳区" />
      <van-index-anchor index="A" />
      <van-cell title="安徽" @click="cell"/>
      <van-cell title="鞍山"  @click="cell"/>
      <van-index-anchor index="B"/>
      <van-cell title="北京"  @click="cell"/>
      <van-index-anchor index="C"/>
      <van-cell title="重庆"  @click="cell" />
      <van-cell title="成都"  @click="cell"/>
      <van-cell title="长春"  @click="cell"/>
      <van-index-anchor index="D"/>
      <van-cell title="大理"  @click="cell"/>
      <van-cell title="大同" @click="cell"/>
      <van-index-anchor index="F"/>
      <van-cell title="福建" @click="cell"/>
      <van-cell title="佛山" @click="cell"/>
      <van-index-anchor index="G"/>
      <van-cell title="广州" @click="cell"/>
      <van-cell title="桂林" @click="cell"/>
      <van-index-anchor index="H"/>
      <van-cell title="杭州" @click="cell"/>
      <van-cell title="汉中" @click="cell"/>
      <van-cell title="怀化" @click="cell"/>
      <van-index-anchor index="J"/>
      <van-cell title="济南" @click="cell"/>
      <van-cell title="景德镇" @click="cell"/>
      <van-index-anchor index="K"/>
      <van-cell title="昆明" @click="cell"/>
      <van-index-anchor index="L"/>
      <van-cell title="兰州" @click="cell"/>
      <van-cell title="洛阳" @click="cell"/>
      <van-index-anchor index="N"/>
      <van-cell title="南京" @click="cell"/>
      <van-cell title="宁波" @click="cell"/>
      <van-index-anchor index="Q"/>
      <van-cell title="青岛" @click="cell"/>
      <van-cell title="泉州" @click="cell"/>
      <van-index-anchor index="S"/>
      <van-cell title="三亚" @click="cell"/>
      <van-cell title="上海" @click="cell"/>
      <van-cell title="沈阳" @click="cell"/>
      <van-cell title="深圳" @click="cell"/>
      <van-index-anchor index="T"/>
      <van-cell title="太原" @click="cell"/>
      <van-cell title="天津" @click="cell"/>
      <van-cell title="唐山" @click="cell"/>
      <van-index-anchor index="W"/>
      <van-cell title="温州" @click="cell"/>
      <van-cell title="武汉" @click="cell"/>
      <van-index-anchor index="X"/>
      <van-cell title="厦门" @click="cell"/>
      <van-cell title="西安" @click="cell"/>
      <van-index-anchor index="Y"/>
      <van-cell title="延安" @click="cell"/>
      <van-cell title="宜宾" @click="cell"/>
      <van-index-anchor index="Z"/>
      <van-cell title="张家界" @click="cell"/>
      <van-cell title="张家口" @click="cell"/>
    </van-index-bar>

  </div>

</template>

<script>
  import { NavBar } from 'vant';
  import { IndexBar, IndexAnchor } from 'vant';
  import {mapMutations} from 'vuex'
  export default {
    name: 'beijing',
    components:{NavBar,IndexAnchor,IndexBar},
    data(){return{

    }},
    // props:{
    //     title:String,
    // },
    methods:{

      ...mapMutations({
        cell: 'changeCity' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
      }),
      onClickLeft(){
        this.$router.push({path:'/'})
      },
      select(index){
        console.log(index)
      },
      cell(e,){
        // console.log(e.target.innerText);
       let val = e.target.innerText;
       console.log(val);
       // this.$emit('cell',val);
        this.$store.commit('changeCity',val)
        this.$router.push({ path: '/'});

      },
      // ...mapMutations(['changeCity'])
    },

    computed: {

    }
  }
</script>

<style>
.van-index-anchor{color: #969696;background: #f8f8f8;text-align: initial;border-bottom: 1px solid rgba(150, 150, 150, 0.52);border-top: 1px solid rgba(150, 150, 150, 0.51);
  width: 89%;height: 1.5rem;line-height: 1.5rem;padding: 0 2%;}
  .van-cell{text-align: initial;width: 93%}
  .van-cell:hover{background: rgba(201, 201, 201, 0.22);}
.van-index-bar__sidebar{right: 3px;}
.van-index-bar__index {padding: 0 4px 4px 4px;}

</style>
