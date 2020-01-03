<template>
  <div>
    <div class="news-detail-title">{{news.title}}</div>
    <div class="news-detail-title">{{news.writer}} {{news.time}}</div>
    <div class="news-detail-title">{{news.content}}</div>
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
</style>
