function ucFirst(str) {
  if (str == null) {
    return str;
  } else {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
