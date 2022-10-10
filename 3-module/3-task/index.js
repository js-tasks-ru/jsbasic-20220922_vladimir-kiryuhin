function camelize(str) {
  let arr = str.split("-");
  let names = arr.map
  ((item, position) => position == 0 ? item : item[0].toUpperCase() + item.slice(1));
  let result = names.join("");
  return result;
}
