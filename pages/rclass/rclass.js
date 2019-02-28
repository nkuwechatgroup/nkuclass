// rclass.js
const app = getApp()
const db = wx.cloud.database()
var main_clas = []
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clas: '', //课程表
    dayy: '', //日期
    timee: '', //时间
    room: '',
    Data: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    index: 3,
    // num: 17,
    warn: '',
    touchx: -1,
    // time_list:x1
    // teacher:''
  },
  onShareAppMessage: function() {
    return {
      title: 'I am here, waiting for you',
      // desc: 'I am here, waiting for you',
      path: "pages/rclass/rclass?dayy=" + this.data.dayy + "&timee=" + this.data.timee + "&num=" + this.data.num,

    }
  },

  bindchange: function(event) {

    this.data.clas = classee;
    this.setData({
      clas: this.data.clas,
      dayy: this.data.dayy,
      timee: this.data.timee,
      room: this.data.room
      // index: aa
    });
  },

  parse_data:function(data){
    var datax = []
    for(var i=0; i<7; i++){
      var datax2 = []
      for(var q=0; q<14; q++){
        datax2.push('')
      }
      datax.push(datax2)
    }
    data.forEach(function(item){
      if(item.day == 7){
        item.day = 0
      }
      if(item.num!=-10){
          datax[item.day][item['class'] - 1] = item
      }
    })
    console.log(datax)
    return datax
  },

  select_time: function(event) {
    this.data.dayy = Number(event.detail.value)
    var _this = this
    var day = this.data.dayy
    var time = this.data.timee
    // var _this = this
    // var names = new Array()
    // var xx = require("../../mds/md1.js")

    var data = main_clas[this.data.dayy]
    // for (var t = 0; t < 14; t++) {
    //   // console.log(xx.data_index(this.data.dayy, t))
    //   if(main_clas==undefined){
    //     data.push('')
    //   }else{
    //     data.push(main_clas[xx.data_index(this.data.dayy, t)])
    //   }
      
    // }
    // console.error(main_clas)
    console.log(data)
    for (var i = 0; i < 14; i++) {
      var str = data[i]
      var name2 = {
        name: '',
        teacher: '',
        department: ''
      }
      if (str != '') {
        // var num = str.split('|')

        name2.name = str.name
        name2.sname = str.name
        if(name2.name.length>13){
          name2.sname = name2.name.slice(0, 13) + "..."
        }
        name2.teacher = str.teacher
        name2.department = str.department

      } else {
        name2.name = ""
        name2.teacher = ""
        name2.sname = ''
      }
      data[i] = name2
    }
    // console.log(res.data)
    var room_s = this.data.room
    if (room_s.substr(0, 5) == "津南公教楼") {
      room_s = "公教" + room_s.slice(5)
    }
    _this.setData({
      room: this.data.room,
      room_s:room_s,
      clas: data,
      dayy: _this.data.dayy
      // warn: res.data[15]
    })

    var is_empty=true
    data.forEach(function(item){
      if(item.name!=''){
        is_empty=false
      }
    })
    if(is_empty){
      wx.showToast({
        title: '呃·好像没有课啊',
        icon:'none'
      })
    }

    // console.log(event)
    
    // console.log(_this.data.room)
    // var x = require('../../mds/md1.js')
    // var x1 = []
    // for (var q = 1; q < 15; q++) {
    //   x1.push(x.data_index(this.data.dayy, q))
    // }
    // console.log(x1)
    // db.collection('room_info').where({
    //   num: _this.data.room
    // }).get({
    //   success: function(res) {
    //     console.log(res)
    //     main_clas = res.data[0]
    //     _this.select_time2()
    //   }
    // })

    


  },
  touch_start: function(event) {
    this.data.touchx = event.touches[0].pageX

  },

  touch_end: function(event) {
    // console.log(event.changedTouches[0].pageX)
    var move = this.data.touchx - event.changedTouches[0].pageX
    var dd = 0
    if (move < -80) {
      if (this.data.dayy == 0) {
        dd = 6
      } else {
        dd = this.data.dayy - 1
      }
      var k = {
        value: dd
      }
      var h = {
        detail: k
      }
      // console.log(h)
      this.select_time(h)
    } else if (move > 80) {
      if (this.data.dayy == 6) {
        dd = 0
      } else {
        dd = this.data.dayy +1
      }
      var h = {
        detail: {
          value: dd
        }
      }
      // console.log(h)
      this.select_time(h)
    }
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _this = this
    this.setData({
      room: options.room,
      dayy: options.dayy,
      timee: Number(options.timee)+1
      // room: options.room,
      // num: options.num
    });
    

    // var data = {
    //   hour: time1.getHours(),
    //   minutes: time1.getMinutes(),
    //   day: time1.getDay(),
    //   date: time1.getDate(),
    //   loacte: app.globalData.locate,
    //   num: options.num
    // }

    // wx.cloud.callFunction({
    //   // 要调用的云函数名称
    //   name: 'statistics',
    //   // 传递给云函数的参数
    //   data: data,
    //   success: res => {
    //     console.log(res)
    //   },
    //   fail: err => {
    //     console.log(err)
    //     // handle error
    //   },
    //   complete: () => {
    //     // ...
    //   }
    // })

    // console.log(data)

    // wx.cloud.callFunction({
    //   // 云函数名称
    //   name: 'nku1',
    //   // 传给云函数的参数
    //   data: {
    //     class1: Number(options.num)
    //   },
    //   success: function (res) {
    //     // console.log(res.result) // 3
    //     var p = (options.dayy - 1) * 15 + 1
    //     // console.log(res.result)
    //     // var res_data = res.result.data.slice(p, p + 15)
    //     var res_data = new Array()
    //     // console.log(p)
    //     for (var i = p; i < p + 15; i++) {
    //       res_data.push(res.result.data[0][i + ""])
    //     }
    //     // console.log(res_data)

    //     // var names = new Array()
    //     for (var i = 0; i < 14; i++) {
    //       var str = res_data[i]
    //       var name2 = {
    //         name: '',
    //         teacher: ''
    //       }
    //       if (str != "") {
    //         var num = str.indexOf('·')

    //         name2.name = str.slice(0, num)
    //         name2.teacher = '·' + str.slice(num + 1) + '·'

    //       } else {
    //         name2.name = ""
    //         name2.teacher = ""
    //       }
    //       res_data[i] = name2

    //       var room = res.result.data[0]["name"]
    //       if (room.substr(0, 5)=="津南公教楼"){
    //         room = "公教" + room.slice(5)
    //       }
    //       // console.log(res.data)
    //       _this.setData({
    //         room: room,
    //         clas: res_data,
    //         dayy: options.dayy,
    //         timee: options.timee,
    //         num: options.num
    //       })

    //     }
    //   },
    //   fail: console.error
    // })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {


  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var _this = this
    var event = {
      detail: {
        value: this.data.dayy
      }
    }
    // console.log(_this.data.room)
    wx.cloud.callFunction({
      name:'room_get',
      data:{
        room:_this.data.room
      },
      success:function(res){
        console.log(res)
        main_clas = _this.parse_data(res.result.data)
        _this.select_time(event)
      }
    })
    // db.collection('room_info').where({
    //   num: _this.data.room
    // }).get({
    //   success: function (res) {
    //     // console.log(res)
    //     // if(res.data.length==0){
          
    //     // }
    //     main_clas = res.data[0]
    //     _this.select_time(event)
    //   }
    // })

    

    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})