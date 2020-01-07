<template>
  <div class="view-customer-info">
    <div class="common-card customer-info">
      <img :src="customer.avatar" alt="" class="customer-avatar">
      <div class="customer-name">{{customer.name}}</div>
      <div class="weui-grids customer-count">
        <div class="weui-grid">
          <div class="count-value">11</div>
          <div class="count-name">产品访问（次）</div>
        </div>
        <div class="weui-grid">
          <div class="count-value">3</div>
          <div class="count-name">资讯阅读（次）</div>
        </div>
        <div class="weui-grid">
          <div class="count-value">8</div>
          <div class="count-name">文章阅读（次）</div>
        </div>
      </div>
      <button class="weui-btn btn-edit" type="primary">信息编辑</button>
      <button class="weui-btn btn-chat" type="primary">聊一聊</button>
    </div>

    <div class="common-card">
      <div class="common-card-title">用户标签</div>
      <div class="customer-tags">
        <span class="customer-tag" v-for="(tag, index) in customer.tags" :key="index">{{tag}}</span>
      </div>
    </div>

    <div class="customer-data">
      <div class="customer-tabs">
        <div :class="'customer-tab' + (tabIndex === 1 ? ' actived' : '')" @click="changeTabIndex(1)">客户动态</div>
        <div :class="'customer-tab' + (tabIndex === 2 ? ' actived' : '')" @click="changeTabIndex(2)">客户画像</div>
      </div>
      <div class="customer-data-detail" v-show="tabIndex === 1"></div>
      <div class="customer-data-detail" v-show="tabIndex === 2">
        投资偏好
        感兴趣产品
        话题偏好
      </div>
    </div>

    <div class="customer-from common-card clearfix">
      <div class="common-card-title">用户来源</div>
      <div class="customer-from-list">
        <div class="customer-from-item" v-for="(from, index) in customer.fromList" :key="index">
          <img class="from-avatar" :src="from.avatar" alt="">
          <div class="from-name">{{from.name}}</div>
          <div v-if="index !== (customer.fromList.length - 1)" class="icon-arrows-right">>></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      customer: {
        name: '黄晓明',
        avatar: '../../../static/images/customer/huang.jpeg',
        product_visit_count: '10',
        news_read_count: '8',
        tags: ['新用户', '高净值'],
        fromList: [{
          name: '黄渤',
          avatar: '../../../static/images/customer/bo.jpeg'
        }, {
          name: '孙红雷',
          avatar: '../../../static/images/customer/lei.jpg'
        }, {
          name: '罗志祥',
          avatar: '../../../static/images/customer/xiang.jpeg'
        }]
      },
      tabIndex: 1
    }
  },
  created () {
  },
  methods: {
    // 切换客户数据tab
    changeTabIndex (index) {
      this.tabIndex = index
    }
  }
}
</script>

<style lang="scss" scoped>
.view-customer-info {
  .customer-info {
    text-align: center;
    padding: 10px 0 0;
    position: relative;

    .customer-avatar {
      width: 66px;
      height: 66px;
      border-radius: 66px;
      border: 1px solid #BBBBBB;
    }

    .customer-name {
      font-size: 20px;
    }

    .customer-count {
      border: 0;

      .weui-grid {
        border: 0;
        text-align: center;
        padding: 5px 10px;

        .count-value {
          font-size: 20px;
        }

        .count-name {
          font-size: 12px;
          color: #A29B9B;
        }
      }
    }

    .btn-edit {
      position: absolute;
      right: 10px;
      top: 10px;
      font-size: 10px;
      color: #388E3B;
      border: 1px solid #388E3B;
      background: transparent;
      border-radius: 18px;
      height: 18px;
      line-height: 17px;
      padding: 0 10px;
    }

    .btn-chat {
      position: absolute;
      right: 10px;
      top: 55px;
      font-size: 10px;
      color: #3597EC;
      border: 1px solid #3597EC;
      background: transparent;
      border-radius: 28px;
      height: 28px;
      line-height: 27px;
      padding: 0 15px;
    }
  }

  .customer-tags {
    .customer-tag {
      font-size: 11px;
      color: #3597EC;
      padding: 2px 10px;
      border: 1px solid #3597EC;
      border-radius: 18px;
      margin-right: 10px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .customer-data {
    border: 1px solid #BBBBBB;

    .customer-tabs {
      border-bottom: 1px solid #BBBBBB;
      display: flex;

      .customer-tab {
        border-right: 1px solid #BBBBBB;
        flex: 1;
        text-align: center;
        font-size: 14px;
        font-weight: 600;
        height: 34px;
        line-height: 34px;
        color: #A29B9B;

        &:last-child {
          border-right: 0;
        }

        &.actived {
          color: #101010;
        }
      }
    }

    .customer-data-detail {
      min-height: 280px;
      text-align: center;
    }
  }

  .customer-from {
    margin-top: 5px;

    .customer-from-list {
      padding: 5px 0;
    }
    
    .customer-from-item {
      text-align: center;
      width: 40px;
      float: left;
      font-size: 12px;
      color: #A29B9B;
      margin-right: 35px;
      position: relative;

      &:last-child {
        margin-right: 0;
      }
    }

    .from-avatar {
      width: 36px;
      height: 36px;
      border-radius: 36px;
      border: 1px solid #BBBBBB;
    }

    .icon-arrows-right {
      position: absolute;
      right: -26px;
      top: 14px;
      font-size: 14px;
      color: #101010;
    }
  }
}
</style>
