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
          <div class="detail-remark">还有9个未添加<span class="icon-right">></span></div>
        </div>
        <div class="detail-content">
          <div class="detail-subtitle">接受公司分派的新用户</div>
          <div class="detail-remark">本月已接受公司分派新客户<span class="red">4</span>人，可接受上限为10人</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
}
</style>
