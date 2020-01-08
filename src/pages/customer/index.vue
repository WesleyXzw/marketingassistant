<template>
  <div class="view-customer">
    <div class="search">
      <input type="text" placeholder="搜索客户姓名">
      <button class="weui-btn btn-select" type="primary" @click="showPicker">筛选</button>
      <mpvue-picker ref="mpvuePicker" :mode="mode" :pickerValueDefault="pickerValueDefault" @onChange="onChange" @onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
    </div>
    <div class="tags-manage">
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
import mpvuePicker from 'mpvue-picker'

export default {
  components: {
    mpvuePicker
  },
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
      }],
      mode: 'selector',
      pickerValueArray: [
        {
          label: '住宿费',
          value: 1
        },
        {
          label: '活动费',
          value: 2
        },
        {
          label: '通讯费',
          value: 3
        },
        {
          label: '补助',
          value: 4
        }
      ],
      pickerValueDefault: [1]
    }
  },
  created () {
  },
  methods: {
    // 查看客户详情
    viewCustomerInfo (customer) {
      mpvue.navigateTo({ url: './customer-info/main' })
    },
    showPicker () {
      this.$refs.mpvuePicker.show()
    },
    onConfirm (e) {
      console.log(e)
    },
    onChange (e) {
      console.log(e)
    },
    onCancel (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.view-customer {
  height: 100%;
}
.search {
  position: relative;
  height: 30px;
  padding: 10px;

  input {
    border: 1px solid #BBBBBB;
    height: 28px;
    line-height: 28px;
    width: calc(100% - 90px);
  }

  .btn-select {
    position: absolute;
    right: 10px;
    top: 10px;
    background: transparent;
    border: 1px solid #BBBBBB;
    color: #101010;
    width: 80px;
    height: 30px;
    line-height: 30px;
  }
}
.tags-manage {
  border: 1px solid #BBBBBB;
  margin-bottom: 5px;
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
