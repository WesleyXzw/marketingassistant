<template>
  <div>
    <div class="weui-tab">
      <ul>
          <li v-on:click="newTab('tab1','recommend')" :class="{tabActive:tab =='recommend'}">
            <span>推荐</span>
          </li>
          <li v-on:click="newTab('tab2','bank')" :class="{tabActive:tab =='bank'}">
              <span >银行</span>
          </li>
          <li v-on:click="newTab('tab3','insure')" :class="{tabActive:tab =='insure'}">
              <span >保险</span>
          </li>
          <li v-on:click="newTab('tab4','fund')" :class="{tabActive:tab =='fund'}">
              <span >基金</span>
          </li>
      </ul>
      <div class="weui-tab__panel">
        <div id="tab1" v-if='newTabDis1' class="weui_tab_bd_item weui_tab_bd_item_active news" >
          <!-- <view v-for="(news, index) in newsList" :key="index" @click="viewNews(news.id)" class="news-item">
            <view class="news-message">{{news.message}}</view>
            <view class="news-time">{{news.time}}</view>
            <img :src="news.pic" alt="">
          </view> -->
          <newsList :newsList='newsList'></newsList>
        </div>
        <div id="tab2" v-if='newTabDis2' class="weui_tab_bd_item weui_tab_bd_item_active news">
          <newsList :newsList='newsList'></newsList>
        </div>
        <div id="tab3" v-if='newTabDis3' class="weui_tab_bd_item weui_tab_bd_item_active news">
          <newsList :newsList='newsList'></newsList>
        </div>
        <div id="tab4" v-if='newTabDis4' class="weui_tab_bd_item weui_tab_bd_item_active news">
          <newsList :newsList='newsList'></newsList>
        </div>
      </div>
    </div>
   </div>
</template>

<script>
import newsList from '@/components/newsList'

export default {
  components: {
    newsList
  },
  data () {
    return {
      tab: 'recommend',
      newTabDis1: true,
      newTabDis2: false,
      newTabDis3: false,
      newTabDis4: false,
      news: {
        title: '央行：是全面降准 1月6日下调 释放8000多亿 稳健货币政策没变',
        content: '为支持实体经济发展，降低社会融资实际成本，中国人民银行决定于2020年1月6日下调金融机构存款准备金率0.5个百分点（不含财务公司、金融租赁公司和汽车金融公司）。中国人民银行将继续实施稳健的货币政策，保持灵活适度，不搞大水漫灌，兼顾内外平衡，保持流动性合理充裕。中国人民银行有关负责人表示：此次降准是全面降准，体现了逆周期调节，释放长期资金约8000多亿元。',
        writer: '润和资讯研究所',
        time: '2020-1-1'
      },
      newsList: [{
        id: 1,
        message: '最高法：涉农名工工资案中有案必立 严惩恶意欠薪',
        pic: '../../../static/images/404.jpg',
        time: '30分钟前'
      }, {
        id: 2,
        message: '最高法：涉农名工工资案中有案必立 严惩恶意欠薪',
        pic: '../../../static/images/404.jpg',
        time: '30分钟前'
      }, {
        id: 3,
        message: '最高法：涉农名工工资案中有案必立 严惩恶意欠薪hi当网红I为和地位和地位的是231二手考试宝典覅我的火神',
        pic: '../../../static/images/404.jpg',
        time: '30分钟前'
      }]
    }
  },
  methods: {
    newTab (id, name) {
      this.tab = name
      switch (id) {
        case 'tab1':
          this.newTabDis1 = true
          this.newTabDis2 = this.newTabDis3 = this.newTabDis4 = false
          break
        case 'tab2':
          this.newTabDis2 = true
          this.newTabDis1 = this.newTabDis3 = this.newTabDis4 = false
          break
        case 'tab3':
          this.newTabDis3 = true
          this.newTabDis1 = this.newTabDis4 = this.newTabDis2 = false
          break
        case 'tab4':
          this.newTabDis4 = true
          this.newTabDis1 = this.newTabDis3 = this.newTabDis2 = false
          break
      }
    },
    // 查看资讯详情
    viewNews (id) {
      mpvue.navigateTo({ url: '../news-detail/main' })
    }
  }
}
</script>

<style lang="scss" scoped>
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
  border: 1px solid rgba(187, 187, 187, 1);
}
ul li {
  width: 40px;
  margin:0px 20px;
  list-style: none;
  display: inline-block;
  line-height: 30px;
  top: 92px;
  height: 30px;
  font-size: 14px;
  text-align: center;
  font-family: Microsoft Yahei;
}
.tabActive {
  border-bottom:1px solid #F22424;
}
.news {
  // border: 1px solid #BBBBBB;
  padding: 10px 15px 5px;

  .news-head {
    font-size: 14px;
    color: #101010;
    font-weight: 600;
    line-height: 30px;
    margin-left: -5px;
    position: relative;sss

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
