// pages/classlist/classlist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clas : '',//教室名
    classes : '',//课程表

  },
  bindchange:function(event){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //options.clas = "A110"
      // this.setData({clas: options.clas});
      
      var req = require('../../files/' + options.clas + '.js')
      var classes = req.out()
      
      this.data.classes = classes
      // this.setData({classes : this.data.classes});
      //console.log(this.data.classes);
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