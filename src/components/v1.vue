<template>
    <div class="v1">
      <van-nav-bar title="爱丽丝梦游仙境2"  left-arrow @click-left="onClickLeft"/>
      <div id="video">
        <dl>
          <dt><img src="../images/pay/gp.png"></dt>
          <dd>
            <span class="video_con">2016-05-28上映<font class="fr">8.5分</font></span>
            <span class="video_con">类型：奇幻、冒险</span>
            <span class="video_con">导演：詹姆斯   柏斌</span>
            <span class="video_con">主演：小李子   海瑟薇   杰森斯坦森</span>
            <span class="video_con">片长：136分钟</span>
          </dd>
        </dl>
      </div>
      <div class="tabs">
        <van-tabs v-model="active">
          <van-tab title="快速购票">
            <van-collapse v-model="activeName" accordion>
              <van-collapse-item title="朝阳区" name="1">
                <div class="box">
                  <div class="quick">
                    <h3>北京大地影院-慈云寺店</h3>
                    <span class="quick_span">北京市朝阳区北京市朝阳区北京市朝阳区</span>
                  </div>
                  <div class="btn">
                    <router-link to="/vv1" class="btn_sel">选座购票</router-link>
                  </div>
                </div>
              </van-collapse-item>
              <van-collapse-item title="海淀区" name="2">
                <div class="box">
                <div class="quick">
                  <h3>北京大地影院-慈云寺店</h3>
                  <span class="quick_span">北京市朝阳区北京市朝阳区北京市海淀区</span>
                </div>
                <div class="btn">
                  <router-link to="/vv1" class="btn_sel">选座购票</router-link>
                </div>
              </div>
              </van-collapse-item>
              <van-collapse-item title="东城区" name="3">
                <div class="box">
                  <div class="quick">
                    <h3>北京大地影院-慈云寺店</h3>
                    <span class="quick_span">北京市朝阳区北京市朝阳区北京市海淀区</span>
                  </div>
                  <div class="btn">
                    <router-link to="/vv1" class="btn_sel">选座购票</router-link>
                  </div>
                </div>
              </van-collapse-item>
              <van-collapse-item title="压瓦区" name="4">
                <div class="box">
                  <div class="quick">
                    <h3>北京大地影院-慈云寺店</h3>
                    <span class="quick_span">北京市朝阳区北京市朝阳区北京市朝阳区</span>
                  </div>
                  <div class="btn">
                    <router-link to="/vv1" class="btn_sel">选座购票</router-link>
                  </div>
                </div>
              </van-collapse-item>
              <van-collapse-item title="永安区" name="5">
                <div class="box">
                <div class="quick">
                  <h3>北京大地影院-慈云寺店</h3>
                  <span class="quick_span">北京市朝阳区北京市朝阳区北京市海淀区</span>
                </div>
                <div class="btn">
                  <router-link to="/vv1" class="btn_sel">选座购票</router-link>
                </div>
              </div>
              </van-collapse-item>
              <van-collapse-item title="西城区" name="6">
                <div class="box">
                  <div class="quick">
                    <h3>北京大地影院-慈云寺店</h3>
                    <span class="quick_span">北京市朝阳区北京市朝阳区北京市海淀区</span>
                  </div>
                  <div class="btn">
                    <router-link to="/vv1" class="btn_sel">选座购票</router-link>
                  </div>
                </div>
              </van-collapse-item>
              <van-collapse-item title="海淀区" name="7">
                <div class="box">
                  <div class="quick">
                    <h3>北京大地影院-慈云寺店</h3>
                    <span class="quick_span">北京市朝阳区北京市朝阳区北京市海淀区</span>
                  </div>
                  <div class="btn">
                    <router-link to="/vv1" class="btn_sel">选座购票</router-link>
                  </div>
                </div>
              </van-collapse-item>
              <van-collapse-item title="东城区" name="8">
                <div class="box">
                  <div class="quick">
                    <h3>北京大地影院-慈云寺店</h3>
                    <span class="quick_span">北京市朝阳区北京市朝阳区北京市海淀区</span>
                  </div>
                  <div class="btn">
                    <router-link to="/vv1" class="btn_sel">选座购票</router-link>
                  </div>
                </div>
              </van-collapse-item>
              <van-collapse-item title="压瓦区" name="9">
                <div class="box">
                  <div class="quick">
                    <h3>北京大地影院-慈云寺店</h3>
                    <span class="quick_span">北京市朝阳区北京市朝阳区北京市朝阳区</span>
                  </div>
                  <div class="btn">
                    <router-link to="/vv1" class="btn_sel">选座购票</router-link>
                  </div>
                </div>
              </van-collapse-item>
              <van-collapse-item title="永安区" name="10">
                <div class="box">
                  <div class="quick">
                    <h3>北京大地影院-慈云寺店</h3>
                    <span class="quick_span">北京市朝阳区北京市朝阳区北京市海淀区</span>
                  </div>
                  <div class="btn">
                    <router-link to="/vv1" class="btn_sel">选座购票</router-link>
                  </div>
                </div>
              </van-collapse-item>
            </van-collapse>
          </van-tab>
          <van-tab title="影片详情" >
            <p class="details">
              影片介绍：《爱丽丝漫游仙境2》德普大男神即将上线,爱丽丝为拯救疯帽匠重返仙境,原班人马全员回爱丽丝漫游仙境2》德普大男神即将上线,爱丽丝为拯救疯帽匠重返仙境,原班人马全员回..
            </p>
          </van-tab>
        </van-tabs>
      </div>


    </div>
</template>

<script>
  import { NavBar,Tab, Tabs,Collapse, CollapseItem } from 'vant';
  export default {
    name: 'v1',
    components:{NavBar,Tab, Tabs,Collapse, CollapseItem},
    methods: {
      onClickLeft () {
        this.$router.push({path: '/'});
      },
    },
    data(){
      return{
        active:0,
        activeName:'1'
      }
    }
  }
</script>

<style scoped>
  .van-tab__pane, .van-tab__pane-wrapper{height: 500px;}
  div.van-collapse-item__content{background: none;padding: 0;}
  .v1{background-color: #f2f2f2;}
  img{width: 100%;}
  #video{width: 100%;height:176px;background: url("../images/pay/xiq_02.png")no-repeat;position: relative;}
  dl{width: 85%;margin: 0 auto;padding:16px 0;display: flex;flex: 1;}
  dt{width: 38%;padding: 6px;}
  dd{width:65%;margin: 0;padding-right: 20px;}
  dd .video_con{ width: 100%;
    text-align: left;color: #fff;
    font-size: .9rem;display: block;
    margin: 0.3rem 0;overflow: hidden;
    text-overflow: ellipsis;
  }
  dd .video_con .fr{padding-left: 30px;}
  .details{width: 93%;font-size: 0.9rem;
    text-align: left;padding:0 12px;
    line-height: 1.7rem;color: #666;
    word-spacing: 1px;letter-spacing: 1px;
  }

  .box{width: 98%;
    padding:2%;
    height: 4rem;
    background: #f2f2f2;
    line-height: 1.3rem;
  }
  .quick{float:left;width: 65%;font-size: .9rem;overflow: hidden;text-overflow: ellipsis;}
  .quick h3{font-size: .8rem;margin: 8px auto;}
  .quick span{font-size: .4rem;}
  .btn{width: 26%;float: right;margin-top: 6px;}
  .btn_sel{width:100%;height: 2rem;
    padding: 11px;
    background: #ed3341;text-align: center;
    line-height: 3rem;margin-top: 0.4rem;
    color: #fff;font-size: 0.7rem;
    border-radius: 3px;
  }



</style>
