<template>
  <div class="view-customer">
    <div class="search">
      搜索
    </div>
    <div class="tags">
      标签管理
    </div>
    <div class="common-card customer-list">
      <div class="customer-item" v-for="(customer, index) in customerList" :key="index" @click="viewCustomerInfo(customer)">
        <img :src="customer.avatar" alt="">
        <div class="customer-name">{{customer.name}}</div>
        <div class="customer-time">最后沟通时间：{{customer.last_chat_time}}</div>
        <div class="customer-count">产品访问：{{customer.product_visit_count}}  咨询阅读：{{customer.news_read_count}}</div>
        <div class="customer-tags">
          <span class="customer-tag" v-for="(tag, i) in customer.tags" :key="i">{{tag}}</span>
        </div>
        <div class="icon-arrow-right">></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      customerList: [{
        name: '黄晓明',
        avatar: '../../static/images/customer/huang.jpeg',
        product_visit_count: '10',
        news_read_count: '8',
        last_chat_time: '2天前',
        tags: ['新用户', '高净值']
      }, {
        name: '郭敬明',
        avatar: '../../static/images/customer/guo.jpeg',
        product_visit_count: '11',
        news_read_count: '9',
        last_chat_time: '2分钟前',
        tags: ['高净值', '投资稳健型']
      }]
    }
  },
  created () {
  },
  methods: {
    viewCustomerInfo (customer) {
      mpvue.navigateTo({ url: './customer-info/main' })
    }
  }
}
</script>

<style lang="scss" scoped>
.view-customer {
  height: 100%;
}
.customer-list {
  padding-top: 5px;
  min-height: 80%;

  .customer-item {
    border: 1px solid #BBBBBB;
    padding: 5px 10px 5px 56px;
    margin-bottom: 5px;
    position: relative;

    img {
      width: 36px;
      height: 36px;
      border-radius: 36px;
      border: 1px solid #BBBBBB;
      position: absolute;
      top: 8px;
      left: 10px;
    }

    .customer-name {
      font-size: 15px;
    }

    .customer-time {
      font-size: 11px;
      color: #A29B9B;
      position: absolute;
      right: 10px;
      top: 5px;
      line-height: 24px;
    }

    .customer-count {
      font-size: 11px;
      color: #A29B9B;
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

    .icon-arrow-right {
      font-size: 12px;
      height: 18px;
      line-height: 18px;
      position: absolute;
      right: 5px;
      top: 30px;
    }
  }
}
</style>
