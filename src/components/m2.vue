<template>
<div class="m2">
  <van-nav-bar title="收货地址"  left-arrow @click-left="onClickLeft"/>
  <div>

    <van-popup v-model="show" position="bottom"/>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      @add="onAdd"
      @edit="onEdit"
      is-link @click="show"
    />

    <van-popup v-model="show1" position="bottom" :overlay="false">
      <van-button @click="show1 = false">关闭</van-button>
      <van-address-edit
        :address-info="addressInfo"
        :columns-num="2"
        :area-list="areaList"
        show-postal
        show-change
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @change="onchange"
        @change-detail="onChangeDetail"
      />
    </van-popup>
    <van-popup v-model="show2" position="bottom" :overlay="false">
      <van-button @click="show2 = false">关闭</van-button>
      <van-address-edit
        :address-info="addressInfo"
        :columns-num="2"
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onchange"
        @change-detail="onChangeDetail"
      />
    </van-popup>

  </div>

</div>
</template>

<script>
  import { NavBar ,AddressEdit,AddressList,Popup,Button} from 'vant';
  import areaList from '../assets/area';
  // import AddRess from './adress';
  export default {
    name: 'm2',
    components:{NavBar,AddressList,AddressEdit,Popup,Button},
    data () {
      return {
        msg: 'Welcome to Home.vue App sss',
        chosenAddressId:'1',
        show:false,
        show1:false,
        show2:false,
        areaList:'',
        searchResult:[
          { id: '1',
            name: '张三',
            tel: '13000000000',
            address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
          }
        ],
        addressInfo:'',
        imageURL:'kdkk',
        list:[
          { id: '1',
            name: '张三',
            tel: '13000014520',
            province:'江苏',
            city:'无锡',
            county:'崇安区',
            areaCode:'120000',
            addressDetail: '文三路 138 号东方通信大厦 8 楼 501 室',
            postalCode:'123456',
            isDefault:true
          }
        ],
        disabledList: [
          {
            id: '3',
            name: '王五',
            tel: '1320000000',
            address: '浙江省杭州市滨江区江南大道 15 号'
          }
      ]
      }
    },
    methods:{
      onClickLeft () {
        this.$router.push({path: '/me'})
      },
      onAdd() {
        console.log('新增收货地址');
        this.show1 = true;
        console.log('areaList')
        console.log(areaList)
        this.areaList = areaList;
        // 地址编辑默认信息
        this.addressInfo = new Object;
      },
      onEdit(item, index) {
        let addressInfo = new Object;
        this.areaList = areaList;
        // Toast('编辑收货地址:' + index);
        console.log('编辑收货地址:' + index);
        console.log(item);
        // 进入编辑模式
        let inh = this.list.id;
        this.show2 = true;
        addressInfo = {
          id:inh,
          name:item.name,
          tel:item.tel,
          province:item.province,
          city:item.citys,
          county:item.county,
          areaCode:item.areaCode,
          addressDetail	:item.addressDetail	,
          postalCode:item.postalCode,
          isDefault:item.isDefault,
        }
        this.addressInfo = addressInfo;
      },
      onchange(content) {
        let changer = new Object;
        console.log('content');
        console.log(content);
        let ing = this.list.id;
        changer = {
          id: ing,
          name: content.name,
          tel: content.tel,
          city: content.citys,
          county: content.county,
          isDefault: content.isDefault,
          postalCode: content.postalCode,
          province: content.province,
          areaCode: content.areaCode,
          addressDetail: content.province + content.citys + content.county + content.addressDetail
        };
        let is_change = this.list.shift(changer);
        let is_changer = this.list.push(changer);
        // 判断是否选中默认
        if (content.isDefault) {
          this.chosenAddressId = ing;
        }
        if (is_changer) {
          this.show2 = false;
        }
        if (is_change) {
          this.show2 = false;
        }
        console.log(this.list);
      },
      onSave(content) {
        let addr = new Object;
        console.log('content');
        console.log(content);
        let len = this.list.length+1;
        addr = {
          id:len,
          name:content.name,
          tel:content.tel,
          city:content.citys,
          county:content.county,
          isDefault:content.isDefault,
          postalCode:content.postalCode,
          province:content.province,
          areaCode:content.areaCode,
          addressDetail:content.province+content.citys+content.county+content.addressDetail
        };
        let is_add = this.list.push(addr);
        // 判断是否选中默认
        if (content.isDefault) {
          this.chosenAddressId = len;
        }
        if (is_add) {
          this.show1 = false;
        }
        console.log(this.list);
      },
      onDelete(content) {
        let changer = new Object;
        console.log('content');
        console.log(content);
        let ing = this.list.id;
        changer = {
          id: ing,
          name: content.name,
          tel: content.tel,
          city: content.citys,
          county: content.county,
          isDefault: content.isDefault,
          postalCode: content.postalCode,
          province: content.province,
          areaCode: content.areaCode,
          addressDetail: content.province + content.citys + content.county + content.addressDetail
        };
        let is_change = this.list.shift(changer);
        if (is_change) {
          this.show2 = false;
        }
        console.log(this.list);
      },
      onChangeDetail(val) {
        if (val) {
          this.searchResult = [{
            name: '黄龙万科中心',
            address: '杭州市西湖区'
          }];
        }else {
            this.searchResult = [];
        }
      }

    },
  }
</script>

<style scoped>
  /*弹出层*/
  .van-popup{
    /*  width: 100%;
      top: 40%!important;*/
  }
  .van-address-list__add{
    z-index: 1999;
    font-size: 14px;
  }

  .van-popup{
    height: 100%;
    width: 100%;
  }

</style>
