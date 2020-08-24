<template>
  <div>
    <div class="box">
      <div id="room">

        <div v-for="(item,i) in list" class="row">
          <div class="sit bg-nosit">{{i+1}}</div>
          <div @click="selectSeat(item1,i,index)" :class="['sit',{'bg-temp':item1==3},{'bg-sited':item1==2},{'bg-sit':item1==1},{'bg-nosit':item1==0}]"
               v-for="(item1,index) in item">
          </div>
        </div>
      </div>
      <div class="win">
        <div class="flew">
          <div class="seating">座位：</div>
          <div v-for="sit in msg">
            <div class="select-sit">{{sit|f3}}</div>
          </div>
        </div>
        <div class="flew">
          <p>
            <span>总价：</span>
            <span style="color: #ed0012">￥{{filmSession.filmPrice*msg.length|price}}</span>
          </p>
          <button type="button" class="btn" @click="sub">确认选座</button>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'seat',
    data(){
      return{
        filmSession: {
          fstartTime: new Date(),
          filmPrice: 33.50
        },
        list: [
          [2, 2, 1, 1, 1, 1, 1, 1, 2, 2],
          [1, 1, 2, 2, 2, 2, 2, 2, 1, 1],
          [1, 1, 2, 1, 1, 1, 1, 2, 1, 1],
          [1, 1, 2, 1, 1, 1, 1, 2, 1, 1],
          [1, 1, 2, 1, 1, 1, 1, 2, 1, 1],
          [1, 1, 2, 1, 1, 1, 1, 2, 1, 1],
          [1, 1, 2, 1, 1, 1, 1, 2, 1, 1],
          [1, 1, 2, 1, 1, 1, 1, 2, 1, 1],
          [1, 1, 2, 2, 2, 2, 2, 2, 1, 1],
          [2, 2, 0, 0, 0, 0, 0, 0, 2, 2]
        ],
        // 已选座位数
        msgCount: 0,
        // 选座信息
        msg: []
      }
    },
    methods: {
      // 选座时触发
      selectSeat(data, x, y) {
        if (data == 1 && this.msgCount <= 3) {
          this.$set(this.msg, this.msgCount++, [x, y]);
          this.list[x][y] = 3;
        } else if (data == 3) {
          // 用于记录要删除的座位下标
          var temp = null;
          for (var i = 0; i < this.msg.length; i++) {
            if (this.msg[i][0] == x && this.msg[i][1] == y) {
              temp = i;
              break;
            }
          }
          this.msgCount--;
          this.$delete(this.msg, temp);
          this.list[x][y] = 1;
        } else {
          if (this.msgCount == 4) {
            this.$layer.msg("最多只能订4张票！");
            alert("最多只能订4张票！")
          }
        }
      },
      // 确认选座时触发
      sub() {
        var x, y;
        for (var i = 0; i < this.msg.length; i++) {
          x = this.msg[i][0];
          y = this.msg[i][1];
          this.$set(this.list, 'x,y', 2);
          this.list[x][y] = 2;
        }
        return this.$router.push({path:'/success'})

      }
    },
    // 过滤器
    filters: {
      // 选座信息过滤器
      f3(data) {
        return (data[0] + 1) + "排 | " + (data[1] + 1) + "座";
      },
      // 日期过滤器
      time(data) {
        var date = new Date(data);
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hours = date.getHours() > 9 ? date.getHours() : ("0" + date.getHours());
        var minutes = date.getMinutes() > 9 ? date.getMinutes() : ("0" + date.getMinutes());
        return month + "月" + day + "日  " + hours + ":" + minutes;
      },
      // 价格过滤器,数字保留两位小数
      price(data) {
        var price = parseFloat(data);
        return price.toFixed(2);
      }
    }
  }
</script>

<style scoped>
  #room {width: 100%;background: #f2f2f2;}
  .row {display: flex;flex: 1;width: 100%;height: 29px;clear: both;}
  .sit {min-width:21px;margin: 4px 4px 4px 4px;background-size: cover;}
  .bg-sit {background: url('../images/xuanzuo/online_2.png')no-repeat;background-size: 80%;}
  .bg-sit:hover {cursor: pointer;}
  .bg-sited {background: url('../images/xuanzuo/online_3.png')no-repeat;background-size: 80%;}
  .bg-temp {cursor: pointer;background: url('../images/xuanzuo/online_1.png')no-repeat;background-size: 80%;}
  .select-sit {
    border: 1px  solid red;
    border-radius: 0.5rem;
    margin-left: 5px;font-size: 0.8rem;padding: 3px;
    background-color: rgba(255, 3, 23, 0.14);
  }
  .btn {border-radius: 10px;width: 98px;height: 39px;
    background-color: rgba(255, 0, 0, 0.8);
    font-size: 16px;color: white;
  }
  .win {
    margin-top: 20px;
    padding: 6%;
    width: 86%;
    /* background-color: white; */
    z-index: 999;
    border: 1px white solid;
  }
  .box {width: 90%;margin-left: 5%;height: 64%;}
  .flew{display: flex;flex: 1;width: 100%;}
  .flew p{width:69%;text-align: initial;margin: 7px 0;}
</style>
