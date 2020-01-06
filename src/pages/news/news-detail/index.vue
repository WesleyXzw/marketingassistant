<template>
  <div class="view-news-detail">
    <div class="news-detail-title">{{news.title}}</div>
    <div class="news-detail-writer">{{news.writer}} {{news.time}}</div>
    <div class="news-detail-content">{{news.content}}</div>

    <div class="weui-grids news-footer">
      <div class="weui-grid">
        <img src="../../../../static/images/news-detail/icon_share.png" alt="">
        <div>转发</div>
      </div>
      <div class="weui-grid btn-create">
        <img class="icon-large" src="../../../../static/images/news-detail/icon_create.png" alt="">
        <div>生成海报</div>
      </div>
      <div class="weui-grid">
        <img src="../../../../static/images/news-detail/icon_transpond.png" alt="">
        <div>朋友圈</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data () {
    return {
      news: {
        title: '央行：是全面降准 1月6日下调 释放8000多亿 稳健货币政策没变',
        content: '为支持实体经济发展，降低社会融资实际成本，中国人民银行决定于2020年1月6日下调金融机构存款准备金率0.5个百分点（不含财务公司、金融租赁公司和汽车金融公司）。中国人民银行将继续实施稳健的货币政策，保持灵活适度，不搞大水漫灌，兼顾内外平衡，保持流动性合理充裕。中国人民银行有关负责人表示：此次降准是全面降准，体现了逆周期调节，释放长期资金约8000多亿元。',
        writer: '润和资讯研究所',
        time: '2020-1-1'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.view-news-detail {
  padding: 10px 15px 70px;
}
.news-detail-title {
  font-size: 15px;
  margin-bottom: 10px;
}
.news-detail-writer {
  font-size: 12px;
  color: #A29B9B;
  margin-bottom: 10px;
}
.news-detail-content {
  font-size: 13px;
  color: #0D0B0B;
}
.news-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  border-top: 2px solid #bbbbbb;
  overflow: visible;

  .weui-grid {
    border: 0;
    padding: 5px 10px;
    color: #0d0b0b;
    font-size: 13px;
    line-height: 13px;
  }

  img {
    width: 24px;
    height: 24px;
  }

  .icon-large {
    width: 50px;
    height: 50px;
    margin-top: -32px;
  }

  .btn-create div {
    margin-top: 6px;
  }
}
</style>
