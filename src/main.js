import Vue from 'vue'
import App from './App'
import '../static/weui/weui.wxss'
import '../static/css/common.wxss'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
Vue.prototype.globalData = getApp().globalData
// 设置全面屏判断变量
Vue.prototype.globalData.isFullScreen = false
// 判断是否全面屏
wx.getSystemInfo({
  success: function (res) {
    console.log(res)
    // 根据 屏幕高度 进行判断
    if (res.screenHeight - res.windowHeight - res.statusBarHeight - 32 > 72) {
      Vue.prototype.globalData.isFullScreen = true
    }
  }
})
