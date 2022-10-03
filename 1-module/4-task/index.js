function checkSpam(str) {
  if (str.toUpperCase().indexOf("XXX") != -1) {
    return true;
  } else if (str.toUpperCase().indexOf("1XBET") != -1) {
    return true;
  } else {
    return false;
  }
}
