<template>
  <div class="counter-warp">
    <div class="weui-tab">
      <ul>
          <li v-on:click="dataTab('tab1','customer')" :class="{tabActive:tab =='customer'}">
            <span>客户数据</span>
          </li>
          <li v-on:click="dataTab('tab2','visitor')" :class="{tabActive:tab =='visitor'}">
              <span >访客数据</span>
          </li>
          <li v-on:click="dataTab('tab3','sneakGuest')" :class="{tabActive:tab =='sneakGuest'}">
              <span >潜客数据</span>
          </li>
      </ul>
      <div class="weui-tab__panel">
        <div id="tab1" v-if="dataTab1" class="weui_tab_bd_item weui_tab_bd_item_active news">
          <view class="weui-flex count-module">
            <view v-for="(data, index) in dataList1" :key="index"  class="weui-flex__item menu-item">
              <view class="count-value">{{data.numb}}</view>
              <view class="count-title">{{data.id}}</view>
            </view>
          </view>
        </div>
        <div id="tab2" v-if="dataTab2" class="weui_tab_bd_item weui_tab_bd_item_active news">
          <view class="weui-flex count-module">
            <view v-for="(data, index) in dataList2" :key="index"  class="weui-flex__item menu-item">
              <view class="count-value">{{data.numb}}</view>
              <view class="count-title">{{data.id}}</view>
            </view>
          </view>
        </div>
        <div id="tab3" v-if="dataTab3" class="weui_tab_bd_item weui_tab_bd_item_active news">
          <view class="weui-flex count-module">
            <view v-for="(data, index) in dataList3" :key="index"  class="weui-flex__item menu-item">
              <view class="count-value">{{data.numb}}</view>
              <view class="count-title">{{data.id}}</view>
            </view>
          </view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Use Vuex
import store from './store'

export default {
  data () {
    return {
      tab: 'customer',
      dataTab1: true,
      dataTab2: false,
      dataTab3: false,
      dataList1: [
        {
          numb: 4,
          id: '总客户数(人)'
        }, {
          numb: 2,
          id: '今日新增(人)'
        }],
      dataList2: [
        {
          numb: 4,
          id: '今日访客(人)'
        }, {
          numb: 2,
          id: '7月访客(人)'
        }, {
          numb: 3,
          id: '全部访客(人)'
        }, {
          numb: 4,
          id: '转发次数(次)'
        }],
      dataList3: [
        {
          numb: 4,
          id: '潜客数(人)'
        }, {
          numb: 2,
          id: '今日新增(人)'
        }]
    }
  },
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    dataTab (id, name) {
      console.log(id, name)
      this.tab = name
      switch (id) {
        case 'tab1':
          this.dataTab1 = true
          this.dataTab2 = this.dataTab3 = false
          break
        case 'tab2':
          this.dataTab2 = true
          this.dataTab1 = this.dataTab3 = false
          break
        case 'tab3':
          this.dataTab3 = true
          this.dataTab2 = this.dataTab1 = false
          break
      }
    },
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
}
</script>

<style lang="scss" scoped>
/* .counter-warp {
  text-align: center;
  margin-top: 100px;
} */
ul {
  left: 0px;
  top: 88px;
  width: 375px;
  height: 37px;
  line-height: 20px;
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  text-align: center;
  font-family: Arial;
  border-bottom: 2px solid #BBBBBB;
}
ul li {
  list-style: none;
  display: inline-block;
  line-height: 30px;
  top: 92px;
  width: 60px;
  margin:0 30px;
  height: 30px;
  font-size: 14px;
  text-align: center;
  font-family: Microsoft Yahei;
}
.tabActive {
  border-bottom:1px solid #F22424;
}
.count-module {
  text-align: center;
  margin: 10px 0 5px;
  border-bottom: 2px solid #BBBBBB;

  .count-title {
    font-size: 12px;
    color: #A29B9B;
  }
  .count-value {
    font-size: 20px;
    color: #101010;
  }
  .count-change {
    color: #DF3D33;
  }
}

</style>
