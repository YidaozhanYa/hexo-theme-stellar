function judgeOutdated() {
  var postDate = new Date(document.getElementById("post-meta").firstElementChild.dateTime);
  var nowDate = new Date();
  const year1 = postDate.getFullYear();
  const year2 = nowDate.getFullYear();
  const month1 = postDate.getMonth() + 1;
  const month2 = nowDate.getMonth() + 1;
  const day1 = postDate.getDate();
  const day2 = nowDate.getDate();
  m = 3; //几个月过时
  if (year2 === year1) { // 判断两个日期 是否是同年
    if (month2 - month1 > m) { // 相差是否 在m个月中
      return true;
    } else if (month2 - month1 === m) { // 如果正好为 m月 判断天数
      if (day2 > day1) {
        return true;
      }
    }
  } else { // 不同年
    if (year2 - year1 > 1) {
      return true;
    }
    else if (year2 - year1 === 1) {
      if (month2 > m || month1 + m - month2 < 12) {
        return true;
      }
      else if (month1 + m - month2 === 12) { // 正好为m月 判断天数
        if (day2 > day1) {
          return true;
        }
      }
    }
  }
  return false;
}


document.addEventListener('DOMContentLoaded', function () {
  if (judgeOutdated()) { document.getElementById("outdate").innerText = "，文章内容可能已经过时！" };
});
