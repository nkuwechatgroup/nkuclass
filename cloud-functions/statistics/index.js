// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  var date = new Date()
  var time = {
    month: date.getMonth(),
    date: date.getDate(),
    day: date.getDay(),
    hour: date.getHours(),
    minute: date.getMinutes()
  }

  const wxContext = cloud.getWXContext()

  var info = {
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }

  return await db.collection('static2').add({
    data: {
      time: time,
      clas: event.clas,
      day:event.day,
      room:event.room,
      user_info: info
    }
  })
}