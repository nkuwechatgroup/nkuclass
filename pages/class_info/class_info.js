// pages/class_info/class_info.js
const app = getApp()
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    class_name:"数学分析3-2",
    teacher_name:"李军",
    // department:"MATH",
    time_info:[],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      class_name:options.class_name,
      teacher_name:options.teacher_name,
      // department:options.department
    })
    var _this = this
    var weeks=['Sun. ','Mon. ','Tues.','Wed.','Thur.','Fri.  ','Sat. ']
    db.collection('class_info').where({
      name:options.class_name,
      teacher: options.teacher_name
      // department: _this.data.department
    }).get({
      success:function(res){
        console.log(res)
        res.data.forEach(function(item){
          _this.data.time_info.push({
            time:weeks[item.day]+' ' + item.start + '-' + item.end,
            room:item.room
          })
        })
        _this.setData({
          time_info:_this.data.time_info
        })
      },
      fail:console.log
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})