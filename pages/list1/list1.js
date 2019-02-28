// pages/ll/lll.js
// var datas = new Array()
// var send_data = new Array
var app = getApp()
const db = wx.cloud.database()

function update_page() {
  var pages = getCurrentPages() //获取加载的页面
  var _this = pages[pages.length - 1]
  _this.setData({
    datas: app.globalData.datas
  })
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    page_list: [],
    datas: '',
    days: 1,
    times: 1,
    blocks: "",
    se_data: [
      ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12', 'Class 13', 'Class 14']
    ],
    index: 0,
  },

  bindchange: function(event) {

  },
  bindchange2: function(event) {

  },
  onShareAppMessage: function() {
    return {
      title: '自习不需要理由',
      // desc: '自习不需要理由',
      path: "pages/wel/wel1",
    }
  },

  select_time: function(event) {
    console.log(event)
    var xx = require('../../mds/md1.js')
    var w = event.detail.value
    var _this = this
    var num = xx.data_index(w[0], w[1])
    // console.log(num)

    var xxx = require('../../mds/md3.js')
    app.globalData.datas = {}
    xxx.datas_load(w[0], w[1]+1, 1)
    _this.setData({
      days: w[0],
      times: w[1]
    })
    // db.collection('main_list').where({
    //   num: num
    // }).get({
    //   success: function (res) {
    //     console.log(res)
    //     _this.setData({
    //       datas: res.data[0],
    //       days:w[0],
    //       times:w[1]
    //     })        
    //     // app.globalData.datas = res.data[0]

    //     // 
    //   },
    //   fail: console.log
    // })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this = this

    var data1 = require('datas.js')
    var xx = require("../../mds/md1.js")
    var x = xx.getnow()

    var das = app.globalData.datas
    console.log(das)
    this.setData({
      page_list: data1.list_data,
      datas: das,
      days: x.day.num,
      times: x.time,
      index: options.index
    })


    // // var connect = wx.getStorageSync('connect');
    // if(connect=="False"){
    //   wx.navigateTo({
    //     url: '../blank/blank?text="好像没有网络了欸"',
    //   })
    // }



    // // console.log('sssss')
    // var is_help = wx.getStorageSync('is_help2');
    // // console.log(is_help)
    // if (is_help != 'True') {
    //   wx.navigateTo({
    //     url: '../lista/lista?index=4',
    //   })
    //   wx.setStorageSync('is_help2', 'True');
    // }


    // const app = getApp()
    // // var md11 = require("../../mds/md1.js")
    // var _this = this
    // var send_data = app.globalData.s_data
    // // var se_data=this.data.select_data


    // this.setData({
    //   datass: app.globalData.datas,
    //   // days: md11.dayday(send_data[1]),
    //   days: send_data[1],
    //   times: send_data[2],
    //   index: options.index,
    //   // se_data: se_data
    // })

    // // var app = getApp()
    // var warn = app.globalData.warning
    // if (warn != "") {
    //   wx.showModal({
    //     title: warn[1],
    //     content: warn[0],
    //     showCancel: false,

    //   })
    // }
  },

  onShow: function() {
    wx.setStorageSync('place', 1);

  }

})

var recordclass

function recclass(clas) {
  recordclass = clas
}

function outclass() {
  return recordclass
  // console.log('ss')
}

module.exports.recclass = recclass
module.exports.outclass = outclass
module.exports.update_page = update_page