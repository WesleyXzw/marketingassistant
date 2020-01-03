<template>
  <div>
    <view class="weui-flex">
      <view class="weui-flex__item">
        <view>潜在客户数</view>
        <view>11</view>
        <view>日增<span>1</span></view>
      </view>
      <view class="weui-flex__item">
        <view>总客户数</view>
        <view>11</view>
        <view>日增<span>1</span></view>
      </view>
      <view class="weui-flex__item">
        <view>今日访客数</view>
        <view>11</view>
        <view>日增<span>1</span></view>
      </view>
    </view>

    <view class="weui-flex menu">
      <view class="weui-flex__item">
        <img src="../../../static/tabs/home.png" alt="">
        <view>展业海报</view>
      </view>
      <view class="weui-flex__item">
        <img src="../../../static/tabs/home.png" alt="">
        <view>产品商城</view>
      </view>
      <view class="weui-flex__item">
        <img src="../../../static/tabs/home.png" alt="">
        <view>潜在客户</view>
      </view>
      <view class="weui-flex__item">
        <img src="../../../static/tabs/home.png" alt="">
        <view>智能名片</view>
      </view>
    </view>

    <view>
      <p>今日提醒</p>
      <view v-for="(reminder, index) in reminderList" :key="index">
        <view>{{reminder.title}}</view>
      </view>
    </view>

    <view>
      <p>财经资讯</p>
      <view v-for="(news, index) in newsList" :key="index" @click="viewNews(news.id)">
        <view>{{news.message}}</view>
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
      reminderList: [{
        id: 1,
        title: '12-31财经新闻',
        message: '外商投资法实施条例公布 涉及负面清单等'
      },
      {
        id: 2,
        title: '12-31财经新闻',
        message: '外商投资法实施条例公布 涉及负面清单等'
      },
      {
        id: 3,
        title: '12-31财经新闻',
        message: '外商投资法实施条例公布 涉及负面清单等'
      }],
      newsList: [{
        id: 1,
        message: '最高法：涉农名工工资案中有案必立 严惩恶意欠薪',
        pic: ''
      }, {
        id: 2,
        message: '最高法：涉农名工工资案中有案必立 严惩恶意欠薪',
        pic: ''
      }, {
        id: 3,
        message: '最高法：涉农名工工资案中有案必立 严惩恶意欠薪',
        pic: ''
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
    viewNews (id) {
      mpvue.navigateTo({url: '../news/news-detail/main'})
    }
  },
  created () {
    // let app = getApp()
  }
}
</script>

<style lang="scss" scoped>
.menu {
  img {
    width: 40px;
    height: 40px;
  }
}
</style>
