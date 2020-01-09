import Vue from 'vue'
import App from './App'
import '../static/weui/weui.wxss'
import '../static/css/common.wxss'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
