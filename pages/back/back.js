// pages/back/back.js
const app = getApp()
const db = wx.cloud.database()
var table1=[]
Page({

  /**
   * 页面的初始数据
   */
  data: {
    room_name:'二主楼A202',
    table:[],
    days:[1,2,3,4,5,6,7],
    well:false,
    index:0,
    img_path:'png/null.png'
  },

  well_up:function(options){
    this.setData({
      well:true
    })
  },

  well_end:function(){
    this.setData({
      well:false
    })
  },
  next1:function(){
    this.setData({
      index:1
    })
  },
  upload1:function(options){
    var _this = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        console.log(res)
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        _this.setData({
          img_path:tempFilePaths
        })        
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      room_name:options.room_name
    })

    // wx.showModal({
    //   title: '更新课程信息',
    //   content: '点击改变你认为不正确的地方',
    //   showCancel:false,
    // })

    
    var _this = this
    db.collection('room_info').where({
      num: options.room_name
    }).get({
      success(res){
        console.log(res)
        var x1 = require('datas.js')
        var x2 = x1.x
        var data = res.data[0]
        table1 = data
        var send_data=[]

        for(var y=0; y<14; y+=1){
          var xx = []
          for(var x=0; x<7; x++){
            if(data==undefined){
              xx.push({
                name:x2[y][x],
                type:''
              })
            }else{
              var name = data[x2[y][x]].split('|')
              if(name[4]=='blank'){
                xx.push({
                  type: '',
                  name: x2[y][x]
                })
              }else{
                xx.push({
                type:name[0],
                name:x2[y][x]
              })
              }
              
            }
          }
          send_data.push(xx)
        }
        console.log(send_data)
        _this.setData({
          table:send_data
        })
        

      }
    })

  },

  saveit:function(){
    var table = this.data.table
    var tt = JSON.stringify(table)
    var _this = this

    var cloud_path = 'back/' + _this.data.img_path.slice(12,)
    wx.cloud.uploadFile({
      cloudPath:cloud_path,
      filePath:_this.data.img_path,
      success:function(res){
        console.log(res)
      }

    })

    db.collection('back').add({
      data:{
        img:cloud_path,
        room:_this.data.room_name,
        table:_this.data.table
      },
      success:function(res){
        console.log(res)
        wx.showToast({
          title: '反馈已提交',
        })
        setTimeout(function(){
          wx.navigateBack()
        },1000)
      },
      fail:console.log
    })

  },

  change_type:function(options){
    // console.log(options)
    var x= options.currentTarget.dataset.id
    var table2 = this.data.table
    // console.log(x)
    if(table2[x[0]][x[1]].type == ''){
      table2[x[0]][x[1]].type = 'yes'
    }else{
      table2[x[0]][x[1]].type = ''
    }
    this.setData({
      table:table2
    })
    wx.showToast({
      title: '点击改变你认为不正确的地方',
      icon: 'none'
    })
    // console.log(table2)
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