<template>
  <div class="view-index">
    <view class="weui-flex count-card">
      <view class="weui-flex__item" @click="viewData">
        <view class="count-title">潜在客户数</view>
        <view class="count-value">11</view>
        <view class="count-title">日增<span class="red">1</span></view>
      </view>
      <view class="weui-flex__item">
        <view class="count-title">总客户数</view>
        <view class="count-value">11</view>
        <view class="count-title">日增<span class="red">1</span></view>
      </view>
      <view class="weui-flex__item">
        <view class="count-title">今日访客数</view>
        <view class="count-value">11</view>
        <view class="count-title">日增<span class="red">1</span></view>
      </view>
    </view>

    <view class="weui-flex menu">
      <view class="weui-flex__item menu-item" @click="switchWorkbench">
        <img src="../../../static/images/index/work.png" alt="">
        <view class="menu-name">工作台</view>
      </view>
      <view class="weui-flex__item menu-item">
        <img src="../../../static/images/index/shop.png" alt="">
        <view class="menu-name">产品商城</view>
      </view>
      <view class="weui-flex__item menu-item">
        <img src="../../../static/images/index/poster.png" alt="">
        <view class="menu-name">展业海报</view>
      </view>
      <view class="weui-flex__item menu-item">
        <img src="../../../static/images/index/card.png" alt="">
        <view class="menu-name">智能名片</view>
      </view>
    </view>

    <view class="common-card remind">
      <p class="common-card-title">今日提醒</p>
      <view v-for="(remind, index) in remindList" :key="index" class="remind-item">
        <view class="remind-title">{{remind.title}}</view>
        <view class="remind-message">·{{remind.message}}</view>
        <div class="icon-arrow-right">></div>
      </view>
    </view>

    <view class="common-card">
      <p class="common-card-title">财经资讯<a class="common-card-title-right-option has-arrows" @click="moreNews">更多资讯 ></a></p>
      <newsList :newsList="newsList"></newsList>
    </view>
  </div>
</template>

<script>
import newsList from '@/components/newsList'

export default {
  data () {
    return {
      remindList: [{
        id: 1,
        title: '12-31 财经新闻',
        message: '外商投资法实施条例公布 涉及负面清单等蹬蹬蹬蹬蹬'
      },
      {
        id: 2,
        title: '12-31 财经新闻可视电话久违的后期我我都是我23等我',
        message: '外商投资法实施条例公布 涉及负面清单等'
      },
      {
        id: 3,
        title: '12-31 财经新闻',
        message: '外商投资法实施条例公布 涉及负面清单等'
      }],
      newsList: [{
        id: 1,
        message: '最高法：涉农名工工资案中有案必立 严惩恶意欠薪',
        pic: '../../static/images/news-detail/news.jpg',
        time: '30分钟前'
      }, {
        id: 2,
        message: '最高法：涉农名工工资案中有案必立 严惩恶意欠薪',
        pic: '../../static/images/news-detail/news.jpg',
        time: '30分钟前'
      }, {
        id: 3,
        message: '最高法：涉农名工工资案中有案必立 严惩恶意欠薪hi当网红I为和地位和地位的是231二手考试宝典覅我的火神',
        pic: '../../static/images/news-detail/news.jpg',
        time: '30分钟前'
      }]
    }
  },
  components: {
    newsList
  },
  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    // 查看资讯详情
    viewNews (id) {
      mpvue.navigateTo({ url: '../news/news-detail/main' })
    },
    // 切换到资讯列表
    moreNews () {
      mpvue.switchTab({ url: '../news/news-list/main' })
    },
    // 切换到工作台tab
    switchWorkbench () {
      mpvue.switchTab({ url: '../workbench/main' })
    },
    // 查看统计数据
    viewData () {
      mpvue.navigateTo({ url: '../data/main' })
    }
  },
  created () {
    // let app = getApp()
  }
}
</script>

<style lang="scss" scoped>
.view-index {
  overflow-x: hidden;
}
.count-card {
  text-align: center;
  border: 1px solid #BBBBBB;
  padding: 10px 0;
  margin: 10px 0 5px;

  .count-title {
    font-size: 12px;
    color: #A29B9B;
  }
  .count-value {
    font-size: 20px;
  }
}
.menu {
  text-align: center;
  border: 1px solid #BBBBBB;
  padding: 10px 0;
  margin-bottom: 5px;

  img {
    width: 40px;
    height: 40px;
    // border: 1px solid #BBBBBB;
  }

  .menu-item {
    font-size: 12px;
  }
}
.remind {
  .remind-item {
    border: 1px solid #BBBBBB;
    padding: 2px 5px;
    margin-bottom: 5px;
    height: 56px;
    position: relative;

    &:last-child {
      margin-bottom: 0;
    }

    .remind-title, .remind-message {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-right: 15px;
    }

    .remind-message {
      margin-left: 10px;
    }

    .icon-arrow-right {
      position: absolute;
      right: 10px;
      top: 0;
      font-size: 14px;
      line-height: 56px;
    }
  }
}
</style>
