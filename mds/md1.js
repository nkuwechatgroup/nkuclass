function timetrans(ho, min) {
  var t = 60 * ho + min;
  //console.log(t);
  if (t < 8 * 60 + 45) { return 1 };
  if (t < 9 * 60 + 40) { return 2 };
  if (t < 10 * 60 + 45) { return 3 };
  if (t < 11 * 60 + 40) { return 4 };
  if (t < 12 * 60 + 45) { return 5 };
  if (t < 13 * 60 + 40) { return 6 };
  if (t < 14 * 60 + 45) { return 7 };
  if (t < 15 * 60 + 40) { return 8 };
  if (t < 16 * 60 + 45) { return 9 };
  if (t < 17 * 60 + 40) { return 10 };
  if (t < 19 * 60 + 15) { return 11 };
  if (t < 20 * 60 + 10) { return 12 };
  return 13;
  //if (t >= 20 * 60 + 10) { return 13 };
  //if (t >= 21 * 60 + 5) { return 14 };
}

function dayday(num) {
  switch (num) {
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
    case 7:
      return "Sunday";
      break;
  }
}

function getdayday(num) {
  switch (num) {
    case "Monday":
      return 1;
      break;
    case "Tuesday":
      return 2;
      break;
    case "Wednesday":
      return 3;
      break;
    case "Thursday":
      return 4;
      break;
    case "Friday":
      return 5;
      break;
    case "Saturday":
      return 6;
      break;
    case "Sunday":
      return 7;
      break;
  }
}

module.exports.timetrans = timetrans;
module.exports.dayday = dayday;
module.exports.getdayday = getdayday;
