// lista.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    now_index: 0,
  },

  onShareAppMessage: function () {
    return {
      title: '自习不需要理由',
      // desc: '自习不需要理由',
      path: "pages/wel/wel1",
    }
  },
  next: function(event) {
    // console.log(event)
    var index = Number(event.target.dataset.index)
    if (index == -1 ) {
      wx.navigateBack({
        delta:1
      })
    } else if(index == undefined){

    }else{
      this.setData({
        now_index: index,
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      now_index:options.index
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