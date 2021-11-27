export function friendlyDate(date) {
  let now = Date.now();
  date = date instanceof Object ? date : new Date(date);
  let time = date.getTime();
  let space = now - time;
  let str = "";

  switch (true) {
    case space < 1000 * 60:
      str = "刚刚";
      break;
    case space < 1000 * 60 * 60:
      str = Math.floor(space / (1000 * 60)) + "分钟前";
      break;
    case space < 1000 * 60 * 60 * 24:
      str = Math.floor(space / (1000 * 60 * 60)) + "小时前";
      break;
    case space < 1000 * 60 * 60 * 24 * 365:
      str = Math.floor(space / (1000 * 60 * 60 * 24)) + "天前";
      break;
    default:
      str = Math.floor(space / (1000 * 60 * 60 * 24 * 365)) + "年前";
  }
  return str;
}
