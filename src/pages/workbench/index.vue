<template>
  <div class="view-workbench">
    <div class="common-card card-add-customer">
      <div class="common-card-title">添加客户<div class="common-card-title-right-option">本月</div></div>
      <div class="weui-grids add-count">
        <div class="weui-grid">
          <div class="count-value">11</div>
          <div class="count-name">新增客户</div>
        </div>
        <div class="weui-grid">
          <div class="count-value">3</div>
          <div class="count-name">主动添加</div>
        </div>
        <div class="weui-grid">
          <div class="count-value">8</div>
          <div class="count-name">被动添加</div>
        </div>
      </div>
      <div class="add-customer-detail">
        <div class="detail-content">
          <div class="detail-title">用公司分配的手机号添加客户</div>
          <div class="detail-remark pr">还有9个未添加<span class="icon-arrow-right">></span></div>
        </div>
        <div class="detail-content count">
          <div class="detail-title">接受公司分派的新用户</div>
          <div class="detail-remark">本月已接受公司分派新客户<span class="red">4</span>人，可接受上限为10人</div>
          <switch checked class="detail-switch"/>
        </div>
      </div>
    </div>
    <div class="common-card data-list">
      <div class="common-card-title">我的任务</div>
      <div class="data-item" v-for="(mission, index) in missionList" :key="index">
        <div class="data-info">{{mission.info}}</div>
        <div class="data-detail">{{mission.detail}}</div>
        <div class="data-isdone" v-if="mission.countDone === mission.countAll">{{mission.countDone + '/' + mission.countAll}}<span class="icon-arrow-right">></span></div>
        <div class="data-undone" v-if="mission.countDone < mission.countAll"><span class="red">{{mission.countDone}}</span>/{{mission.countAll}}<span class="icon-arrow-right">></span></div>
      </div>
    </div>

    <div class="common-card data-list">
      <div class="common-card-title">销售线索</div>
      <div class="data-item" v-for="(clue, index) in clueList" :key="index">
        <div class="data-info">{{clue.info}}</div>
        <div class="data-detail">{{clue.detail}}</div>
        <div class="data-count">{{clue.count}}人符合标准<span class="icon-arrow-right">></span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      missionList: [{
        info: '朋友圈发布',
        detail: '将我们的产品和企业信息分享给客户',
        countDone: 1,
        countAll: 1
      }, {
        info: '首单回访',
        detail: '这些客户最近第一次下单',
        countDone: 2,
        countAll: 7
      }, {
        info: '流失回访',
        detail: '这些客户已经未使用本公司产品一段时间了',
        countDone: 1,
        countAll: 3
      }, {
        info: '活动邀请',
        detail: '邀请客户参与我们的活动',
        countDone: 9,
        countAll: 10
      }],
      clueList: [{
        info: '重点巩固顾客',
        detail: '近期与你有过互动',
        count: 8
      }, {
        info: '近期兴趣客户',
        detail: '近期有关注过产品、阅读过文章的客户',
        count: 3
      }, {
        info: '优惠券即将到期客户',
        detail: '-',
        count: 10
      }, {
        info: '接近复购周期客户',
        detail: '复购周期即将到来',
        count: 20
      }]
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.card-add-customer {
  .add-count {
    border: 0;

    .weui-grid {
      border: 0;
      text-align: center;
      padding: 5px 10px;

      .count-value {
        font-size: 20px;
        color: #101010;
      }

      .count-name {
        font-size: 12px;
        color: #A29B9B;
      }
    }
  }

  .add-customer-detail {
    .detail-content {
      border: 1px solid #BBBBBB;
      border-bottom: 0;
      padding: 16px 10px;
      position: relative;

      &:last-child {
        border-bottom: 1px solid #BBBBBB;
      }

      &.count {
        line-height: 20px;
        padding: 5px 10px;
      }

      .detail-title {
        font-size: 12px;
      }

      .detail-remark {
        font-size: 9px;
        color: #A29B9B;

        &.pr {
          position: absolute;
          right: 10px;
          top: 0;
          line-height: 49px;
        }

        .icon-arrow-right {
          margin-left: 5px;
          color: #101010;
          font-size: 12px;
        }
      }
    }
    
    .detail-switch {
      position: absolute;
      right: 10px;
      top: 14px;
    }
  }
}
.data-list {
  .data-item {
    border: 1px solid #BBBBBB;
    padding: 5px 85px 5px 15px;
    position: relative;
    margin-bottom: 5px;

    &:last-child {
      margin-bottom: 0;
    }

    .data-info {
      font-size: 12px;
      color: #101010;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .data-detail {
      font-size: 9px;
      color: #A29B9B;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .data-isdone {
      color: #388E3B;
    }

    .data-undone {
      color: #101010;
    }

    .data-isdone, .data-undone, .data-count {
      position: absolute;
      right: 10px;
      top: 0;
      line-height: 45px;
      font-size: 11px;

      .icon-arrow-right {
        color: #101010;
        margin-left: 5px;
      }
    }
  }
}
</style>
