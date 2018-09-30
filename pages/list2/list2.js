// pages/ll/lll.js
var datas = new Array()
var send_data = new Array


Page({

  /**
   * 页面的初始数据
   */
  data: {
    datass: [],
    days: 0,
    times: 0,
    blocks: "",
    se_data: [
      ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12', 'Class 13']
    ],
    index:0,
  },
  bindchange: function(event) {

  },
  bindchange2: function(event) {

  },
  onShareAppMessage: function () {
    return {
      title: '自习不需要理由',
      // desc: '自习不需要理由',
      path: "pages/wel/wel1",
    }
  },
  select_time:function(event){
    // console.log(event)
    var day2 = Number(event.detail.value[0])+1
    var time2 = Number(event.detail.value[1])+1
    var _this = this
    wx.request({
      // url: 'https://a12910.xyz/a?i=0',
      url: 'https://a12910.xyz/nkuclass' + "?type=all&str1=" + day2 + '&str2=' + time2,
      // data: "fff", 
      header: {
        // "Content-Type": "application/json"
      },

      success: function (res) {
        const app = getApp()
        app.globalData.datas = res.data
        // var md11 = require("../../mds/md1.js")
        // var _this = this
        var send_data = app.globalData.s_data

        _this.setData({
          datass: app.globalData.datas,
          // days: md11.dayday(send_data[1]),
          days: day2,
          times: time2,
          // index: options.index,
          // se_data: se_data
        })


      },
      fail: function (err) {
        console.log(err)
      },
      complete: function (res) {
        // console.log("complete")
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log('sssss')
    const app = getApp()
    // var md11 = require("../../mds/md1.js")
    var _this = this
    var send_data = app.globalData.s_data
    // var se_data=this.data.select_data
  

    this.setData({
      datass: app.globalData.datas,
      // days: md11.dayday(send_data[1]),
      days: send_data[1],
      times: send_data[2],
      index: options.index,
      // se_data: se_data
    })

    var warn = app.globalData.warning
    if (warn != "") {
      wx.showModal({
        title: warn[1],
        content: warn[0],
        showCancel: false,

      })
    }
  },

  onShow: function() {
    wx.setStorageSync('place', 2);

    
  }

})

var recordclass

function recclass(clas) {
  recordclass = clas
}

function outclass() {
  return recordclass
}

module.exports.recclass = recclass
module.exports.outclass = outclass