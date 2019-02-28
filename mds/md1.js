function timetrans(ho, min) {

  var t = 60 * ho + min;
  //console.log(t);
  if (t < 8 * 60 + 45) {
    return 1
  };
  if (t < 9 * 60 + 40) {
    return 2
  };
  if (t < 10 * 60 + 45) {
    return 3
  };
  if (t < 11 * 60 + 40) {
    return 4
  };
  if (t < 12 * 60 + 45) {
    return 5
  };
  if (t < 13 * 60 + 40) {
    return 6
  };
  if (t < 14 * 60 + 45) {
    return 7
  };
  if (t < 15 * 60 + 40) {
    return 8
  };
  if (t < 16 * 60 + 45) {
    return 9
  };
  if (t < 17 * 60 + 40) {
    return 10
  };
  if (t < 19 * 60 + 15) {
    return 11
  };
  if (t < 20 * 60 + 10) {
    return 12
  };
  if (t < 21 * 60 + 10) {
    return 13
  };
  return 14;
  //if (t >= 20 * 60 + 10) { return 13 };
  //if (t >= 21 * 60 + 5) { return 14 };
}

function getday(num){
  var x = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  for(var t=0; t<7; t++){
    if(num==x[t]||num==t){
      return {day:x[t], num:t}
    }
  }
}

function data_index(day, num) {
  num++
  var days = ['周日','周一', '周二', '周三', '周四', '周五', '周六']
  // console.log(day, num)
  if(day==7){
    console.error(day)
  }
  return days[day] + num
}

function getnow(){
  var date = new Date()
  var ho = date.getHours()
  var min = date.getMinutes()
  // console.log(date.getDay())
  var day = getday(date.getDay())
  var send_data = {
    day: day,
    time: timetrans(ho, min)-1,
    num: this.data_index(day.num, timetrans(ho, min)-1)
  }
  console.log(send_data)
  return send_data
}
module.exports.timetrans = timetrans
module.exports.getday = getday
module.exports.getnow = getnow
module.exports.data_index = data_index