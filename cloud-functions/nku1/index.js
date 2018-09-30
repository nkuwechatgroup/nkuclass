// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  var class1 = event.class1
  // var num = event.num
  
  return await db.collection('class_list').where({
    tab: class1
  }).get()
  // return class1
}