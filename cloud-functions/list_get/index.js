// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
const _ = db.command
// 云函数入口函数
exports.main = async(event, context) => await db.collection('main_list2').where({
    day: event.day,
    'class': event.clas,
    week3: 1

  })
  .skip(event.skip)
  .get()