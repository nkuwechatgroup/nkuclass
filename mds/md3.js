const db = wx.cloud.database()
const app = getApp()

function parse_data1(data, type, num) {
  var datas1 = app.globalData.datas
  data.forEach(function(item0) {
    var item = item0.room
    var x = datas1[item]
    if (x == undefined || x == "-10") {
      if (item0.num == -10) {
        datas1[item] = "-10"
      } else {
        datas1[item] = item0.num + '|' + item0.name + '|' + item0.teacher + '|' + item0.department
      }

    }
  })

  console.log(num)
  if (num != 0) {
    datas1['num'] = num
    db.collection('fast_list').add({
      data: datas1,
      success: console.log,
      fail: console.log
    })
  }
  // db.collection('fast_list').where({
  //   num: num
  // }).get({
  //   success: function(res) {
  //     console.log(res)
  //     if (res.data.length == 0) {
  //       datas1['num'] = num
  //       db.collection('fast_list').add({
  //         data: datas1,
  //         success: console.log,
  //         fail: console.log
  //       })
  //     }else{
  //       db.collection('fast_list').doc
  //     }
  //   }
  // })


  app.globalData.datas = datas1
  // console.log(app.globalData.datas)
  flash(type)


  // out.outclass()

}

function flash(type) {
  var out = ''
  if (type == 1) {
    out = require('../pages/list1/list1.js')
    out.update_page()
  } else if (type == 2) {
    out = require('../pages/list2/list2.js')
    out.update_page()
  }
}

function datas_load(day, clas, type) {
  var x1 = require('md1.js')
  var num2 = x1.data_index(day, clas - 1)
  // var _this = this
  console.log(num2)


  if (day == 0) {
    day = 7
  }
  db.collection('fast_list').where({
    num: num2
  }).get({
    success: function(res) {
      console.log(res)
      if (res.data.length == 1) {
        app.globalData.datas = res.data[0]
        flash(type)
      } else {
        wx.showLoading({
          title: '悄悄的等一下',
        })
        setTimeout(function () {
          wx.hideLoading()
        }, 1500)
        wx.cloud.callFunction({
          name:'list_getcount',
          data:{
            day:day,
            clas:clas
          },
          success: function (res) {
            console.log(res)
            var total = res.result.total
            var sum = 0
            var total2 = Math.ceil(total / 100)
            for (var v = 0; v < total2; v++) {
              // console.log(v)
              wx.cloud.callFunction({
                name: 'list_get',
                data: {
                  day: day,
                  clas: clas,
                  skip: v * 100
                },
                success: function (res) {

                  sum += res.result.data.length
                  console.log(sum)
                  if (sum >= total) {
                    parse_data1(res.result.data, type, num2)
                  } else {
                    parse_data1(res.result.data, type, 0)
                  }
                },
                fail: console.log

              })
            }
          },
          fail:console.log
        })
        
      }
    }
  })

}

module.exports.datas_load = datas_load