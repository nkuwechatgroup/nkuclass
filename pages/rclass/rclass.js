// rclass.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clas: '', //课程表
    dayy: '1', //日期
    timee: '', //时间
    room_name: '',
    Data: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    index: 3,
    num: 17
    // teacher:''
  },
  onShareAppMessage: function () {
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

  select_time:function(event){
    this.data.dayy = Number(event.detail.value) + 1
    // console.log(event)
    var _this = this
    wx.cloud.callFunction({
      // 云函数名称
      name: 'nku1',
      // 传给云函数的参数
      data: {
        class1: Number(_this.data.num)
      },
      success: function (res) {
        // console.log(res.result) // 3
        var p = (event.detail.value) * 15 + 1
        // console.log(res.result)
        // var res_data = res.result.data.slice(p, p + 15)
        var res_data = new Array()
        // console.log(p)
        for (var i = p; i < p + 15; i++) {
          res_data.push(res.result.data[0][i + ""])
        }
        // console.log(res_data)

        // var names = new Array()
        for (var i = 0; i < 14; i++) {
          var str = res_data[i]
          var name2 = {
            name: '',
            teacher: ''
          }
          if (str != "") {
            var num = str.indexOf('·')

            name2.name = str.slice(0, num)
            name2.teacher = '·' + str.slice(num + 1) + '·'

          } else {
            name2.name = ""
            name2.teacher = ""
          }
          res_data[i] = name2

          var room = res.result.data[0]["name"]
          if (room.substr(0, 5) == "津南公教楼") {
            room = "公教" + room.slice(5)
          }
          // console.log(res.data)
          _this.setData({
            // room: room,
            clas: res_data,
            dayy: _this.data.dayy
            // dayy: event.detail.value+1,
            // timee: options.timee,
            // num: options.num
          })
          
        }
      },
      fail: console.error
    })

    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    // this.setData({
    //   clas: this.data.clas,
    //   dayy: options.dayy,
    //   timee: options.timee,
    //   // room: options.room,
    //   num: options.num
    // });
    var time1 = new Date()
    
    console.log()
    var _this = this
    wx.cloud.callFunction({
      // 云函数名称
      name: 'nku1',
      // 传给云函数的参数
      data: {
        class1: Number(options.num)
      },
      success: function (res) {
        // console.log(res.result) // 3
        var p = (options.dayy - 1) * 15 + 1
        // console.log(res.result)
        // var res_data = res.result.data.slice(p, p + 15)
        var res_data = new Array()
        // console.log(p)
        for (var i = p; i < p + 15; i++) {
          res_data.push(res.result.data[0][i + ""])
        }
        // console.log(res_data)

        // var names = new Array()
        for (var i = 0; i < 14; i++) {
          var str = res_data[i]
          var name2 = {
            name: '',
            teacher: ''
          }
          if (str != "") {
            var num = str.indexOf('·')

            name2.name = str.slice(0, num)
            name2.teacher = '·' + str.slice(num + 1) + '·'

          } else {
            name2.name = ""
            name2.teacher = ""
          }
          res_data[i] = name2

          var room = res.result.data[0]["name"]
          if (room.substr(0, 5)=="津南公教楼"){
            room = "公教" + room.slice(5)
          }
          // console.log(res.data)
          _this.setData({
            room: room,
            clas: res_data,
            dayy: options.dayy,
            timee: options.timee,
            num: options.num
          })
          
        }
      },
      fail: console.error
    })


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