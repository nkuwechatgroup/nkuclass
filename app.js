//app.js
App({

  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // wx.connectSocket({
    //   url: 'ws://www.a12910.xyz:8001'
    // }),

    wx.cloud.init()
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    

  },

  
  globalData: {
    userInfo: null,
    datas: {},
    
    // s_data:[],
    // loaction:-1,
    // warning:"",
    // locate:[]
  }
})


