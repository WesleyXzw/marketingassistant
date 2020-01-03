<template>
  <div class="view-index">
    <view class="weui-flex count-module">
      <view class="weui-flex__item">
        <view class="count-title">潜在客户数</view>
        <view class="count-value">11</view>
        <view class="count-title">日增<span class="count-change">1</span></view>
      </view>
      <view class="weui-flex__item">
        <view class="count-title">总客户数</view>
        <view class="count-value">11</view>
        <view class="count-title">日增<span class="count-change">1</span></view>
      </view>
      <view class="weui-flex__item">
        <view class="count-title">今日访客数</view>
        <view class="count-value">11</view>
        <view class="count-title">日增<span class="count-change">1</span></view>
      </view>
    </view>

    <view class="weui-flex menu">
      <view class="weui-flex__item menu-item">
        <img src="" alt="">
        <view class="menu-name">展业海报</view>
      </view>
      <view class="weui-flex__item menu-item">
        <img src="" alt="">
        <view class="menu-name">产品商城</view>
      </view>
      <view class="weui-flex__item menu-item">
        <img src="" alt="">
        <view class="menu-name">潜在客户</view>
      </view>
      <view class="weui-flex__item menu-item">
        <img src="" alt="">
        <view class="menu-name">智能名片</view>
      </view>
    </view>

    <view class="remind">
      <p class="remind-head">今日提醒</p>
      <view v-for="(remind, index) in remindList" :key="index" class="remind-item">
        <view class="remind-title">{{remind.title}}</view>
        <view class="remind-message">·{{remind.message}}</view>
        <div class="icon-right">></div>
      </view>
    </view>

    <view class="news">
      <p class="news-head">财经资讯<a class="news-more" @click="moreNews">更多资讯 ></a></p>
      <view v-for="(news, index) in newsList" :key="index" @click="viewNews(news.id)" class="news-item">
        <view class="news-message">{{news.message}}</view>
        <view class="news-time">{{news.time}}</view>
        <img :src="news.pic" alt="">
      </view>
    </view>

    <!-- <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <img class="userinfo-avatar" src="/static/images/user.png" background-size="cover" />

      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div> -->

    <!-- <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div> -->

    <!-- <form class="form-container">
      <input type="text" class="form-control" :value="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form> -->

    <!-- <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a> -->
    <!-- <button class="weui-btn mini-btn" type="primary" size="mini">按钮</button> -->
  </div>
</template>

<script>
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
        pic: '../../static/images/404.jpg',
        time: '30分钟前'
      }, {
        id: 2,
        message: '最高法：涉农名工工资案中有案必立 严惩恶意欠薪',
        pic: '../../static/images/404.jpg',
        time: '30分钟前'
      }, {
        id: 3,
        message: '最高法：涉农名工工资案中有案必立 严惩恶意欠薪hi当网红I为和地位和地位的是231二手考试宝典覅我的火神',
        pic: '../../static/images/404.jpg',
        time: '30分钟前'
      }]
    }
  },

  components: {
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

.count-module {
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
    color: #101010;
  }
  .count-change {
    color: #DF3D33;
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
    border: 1px solid #BBBBBB;
  }

  .menu-item {
    font-size: 12px;
    color: #101010;
  }
}
.remind {
  border: 1px solid #BBBBBB;
  padding: 10px 15px 5px;
  margin-bottom: 5px;

  .remind-head {
    font-size: 14px;
    color: #101010;
    font-weight: 600;
    line-height: 30px;
    margin-left: -5px;
  }

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

    .icon-right {
      position: absolute;
      right: 10px;
      top: 0;
      font-size: 14px;
      line-height: 56px;
    }
  }
}
.news {
  border: 1px solid #BBBBBB;
  padding: 10px 15px 5px;

  .news-head {
    font-size: 14px;
    color: #101010;
    font-weight: 600;
    line-height: 30px;
    margin-left: -5px;
    position: relative;

    .news-more {
      position: absolute;
      right: -5px;
      top: 0;
      line-height: 30px;
      font-size: 12px;
      color: #A29B9B;
    }
  }

  .news-item {
    border: 1px solid #BBBBBB;
    padding: 10px 104px 10px 15px;
    position: relative;
    margin-bottom: 5px;

    &:last-child {
      margin-bottom: 30px;
    }

    .news-message {
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .news-time {
      font-size: 11px;
      color: #A29B9B;
    }

    img {
      width: 84px;
      height: 54px;
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
}
</style>
