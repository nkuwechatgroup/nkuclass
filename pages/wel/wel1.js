// pages/ll/lll.js
const db = wx.cloud.database()
const app = getApp()

var main_list = []



Page({

    /**
     * 页面的初始数据
     */
    data: {
        index: 1,
        db_data: '2019.2.28',
        mark: "2.0.3"
    },

    select_tap2: function(event) {
        wx.navigateTo({
            url: '../lista/lista',
        })
    },

    select_tap2: function(event) {

        // console.log(event.detail)
        var x = event.detail.x
        var y = event.detail.y
        if (x < 100) {
            this.setData({
                index: 0,
            })

            // }else if(x<280&&y>450&&y<520){
            //   wx.navigateTo({
            //     url: '../lista/lista',
            //   })
        } else if (x > 280) {
            this.setData({
                index: 2,
            })
        }


    },
    select_tap: function(event) {

        // console.log(event.detail)
        var x = event.detail.x
        var y = event.detail.y
        if (x < 100) {
            this.setData({
                index: 0,
            })

        } else if (x > 100 && x < 280 && y > 450 && y < 520) {
            wx.navigateTo({
                url: '../lista/lista',
            })
        } else if (x > 280) {
            this.setData({
                index: 2,
            })
        }


    },


    onShareAppMessage: function() {
        return {
            title: 'NKU自习吧',
            desc: '自习不需要理由',
            path: "pages/wel/wel1"
        }
    },


    back_to_main: function(event) {
        this.setData({
            index: 1,
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

        // db.collection('main_list').where({
        //   num:x.num
        // }).get({
        //   success:function(res){
        //     console.log(res)
        //     app.globalData.datas = res.data[0]       
        //   },
        //   fail:console.log
        // })

        // this.setData({
        //   db_data:this.data.db_data
        // })

        // var is_help = wx.getStorageSync('is_help');
        // if (is_help=='True'){
        //   wx.getLocation({
        //   success: function(res) {
        //     var locate
        //     var alt = res.altitude
        //     var lon = res.longitude
        //     var get_locate = function(alt1, lon1, alt2, lon2, num){
        //         if(locate!=-1){
        //           return locate;
        //         }
        //         if(alt< alt1 && alt> alt2 && lon < lon1 && lon > lon2){
        //           return num;
        //         }else{
        //           return -1;
        //         }
        //     }
        //     locate = get_locate(39.143934, 39.078922, 117.215799, 117.125839, 10)
        //     if(locate>=10){
        //       this.setData({
        //         index:0,
        //       })
        //     }

        //   },
        // })

        // }


    },

    onShow: function() {

        var _this = this
        var xx = require('../../mds/md1.js')
        var x = xx.getnow()
        console.log(x)
        var select = {
            // day: 4,
            name: {
                regexp: '数学',
                options: 'i',
            }
            // name:'中华国学'
        }
        wx.cloud.callFunction({
            name: 'test',
            data: {
                select: select
            },
            success: (res) => {
                console.log(res)
            },
            fail: console.log
        })

        var xx2 = require('../../mds/md3.js')
        xx2.datas_load(x.day.num, x.time + 1, 0)

        db.collection('main_list2').where({
            name: {
                regexp: '数学',
                options: 'i',
            }
            // name:'中华国学'
        }).get({
            success: (res) => {
                console.log(res)
            },
            fail: console.log
        })
        //   const app = getApp()
        //   // var tti = require("../../mds/rep.js")
        //   var md11 = require("../../mds/md1.js")


        //   var date = new Date
        //   var x = date.getDay()
        //   if (x == 0) {
        //     x = 7
        //   }
        //   var t1 = date.getHours()
        //   var t2 = date.getMinutes()
        //   var date2 = String(date.getMonth()+1)+ "-" + String(date.getDate())
        //   var _this = this
        //   // send_data[0] = x
        //   // send_data[1] = md11.timetrans(t1, t2)
        //   // send_data = [2, 4]
        //   // app.globalData.s_data = ["all", 3, 2]
        //   // date2 = "10-1"
        //   app.globalData.s_data = ["all2", x, md11.timetrans(t1, t2), date2]
        //   var send_data = app.globalData.s_data
        //   // console.log(send_data)
        //   // var send_data = new Uint8Array([app.globalData.s_data[0], app.globalData.s_data[1]])
        //   wx.request({
        //     // url: 'https://a12910.xyz/a?i=0',
        //     url: 'https://a12910.xyz/nkuclass' + "?type=all2&day=" + send_data[1] + '&time=' + send_data[2] + '&date=' + send_data[3],
        //     // data: "fff", 
        //     header: {
        //       // "Content-Type": "application/json"
        //     },


        //     success: function (res) {
        //       // console.log(res.data)
        //       app.globalData.datas = res.data[0]
        //       // wx.redirectTo({
        //       //   url: '../list1/list1'
        //       // })
        //       app.globalData.s_data[1] = res.data[1]
        //       app.globalData.warning = res.data[2]
        //       // console.log (res)
        //       _this.setData({
        //         db_data:res.data[0][499],
        //       })
        //       wx.setStorageSync('connect', 'True');
        //     },
        //     fail: function (err) {
        //       console.log(err)
        //       wx.setStorageSync('connect', 'False');

        //     },
        //     complete: function (res) {
        //       // console.log("complete")
        //     }
        //   })

        //   var is_help = wx.getStorageSync('is_help');
        //   // console.log(is_help)
        //   if(is_help!='True'){
        //     wx.navigateTo({
        //       url: '../lista/lista?index=0',
        //     })
        //     wx.setStorageSync('is_help', 'True');
        //   }else{
        //     wx.setStorageSync('is_help2', 'True');
        //   }

        //   wx.getLocation({
        //     type: 'wgs84',
        //     success: function (res) {
        //       app.globalData.locate = [res.latitude, res.longitude]      }
        //   })

    },

    onReady: function() {
        var _this = this

        var place = wx.getStorageSync('place');
        if (place == 1) {
            setTimeout(function() {
                _this.setData({
                    index: 0
                })
            }, 1000);

        } else if (place == 2) {
            setTimeout(function() {
                _this.setData({
                    index: 2
                })
            }, 1000);
        }
    },



})