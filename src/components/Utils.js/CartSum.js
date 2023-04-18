export const itemTotalCount = (arr) =>
  arr.reduce((acu, cur) => acu + cur.count, 0);

export const itemTotalPrice = (arr) =>
  arr.reduce((acu, cur) => acu + cur.price * cur.count, 0).toFixed(2);
