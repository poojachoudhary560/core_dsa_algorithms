let ar = [2, 5, 5, 6, 3, 2, 3, 2, 4, 5, 2, 2, 2, 2, 3, 6];
let map = new Map();
let res = [];
function countUniqueInK(ar, k) {
  let i = 0;
  let j = 0;
  while (j < ar.length) {
    if (map.has(ar[j])) {
      map.set(ar[j], map.get(ar[j]) + 1);
    } else {
      map.set(ar[j], 1);
    }
    // if(j-i < k) {

    //     j++;
    // }
    if (j - i + 1 === k) {
      console.log(i, j, j - i + 1, map);
      res.push(map.size);
      if (map.get(ar[i]) === 1) {
        map.delete(ar[i]);
      } else {
        map.set(ar[i], map.get(ar[i]) - 1);
      }
      i++;
      j++;
    } else {
      j++;
    }
  }
  console.log(res);
}

countUniqueInK(ar, 4);

// [3, 3, 4, 3, 2, 3, 4, 3, 3, 2, 1, 2, 3]
