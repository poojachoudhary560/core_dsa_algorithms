// find anagram mappings
// let a1 = [2, 7, 9, 2, 8, 1, 1, 3, 9];
// let a2 = [3, 1, 2, 9, 8, 1, 7, 9, 2];
// both arrays are anagrams of each other
// for every element in a1, print the index of that element in a2
// op: 2,6,3,8,4,1,5,0,7

function findAnagramMappings(a1, a2) {
  if (a1.length !== a2.length) return false;
  let res = [];
  // create hash map
  let itemCountMap = new Map();

  for (let i = 0; i < a2.length; i++) {
    if (itemCountMap.has(a2[i])) {
      let itemData = itemCountMap.get(a2[i]);
      // itemCountMap.get(a1[i])[1].push(i)
      itemCountMap.set(a2[i], [itemData[0], [...itemData[1], i]]);
    } else {
      itemCountMap.set(a2[i], [0, [i]]);
    }
  }
  console.log(itemCountMap);

  for (let i = 0; i < a1.length; i++) {
    if (itemCountMap.has(a1[i])) {
      let ar = itemCountMap.get(a1[i]);
      let countAr = ar[1];
      let index = ar[0];
      res.push(countAr[index]);
      itemCountMap.set(a1[i], [index + 1, countAr]);
    }
  }
  // console.log(itemCountMap, res);
  return res;
}

let a1 = [2, 7, 9, 2, 8, 1, 1, 3, 9];
let a2 = [3, 1, 2, 9, 8, 1, 7, 9, 2];
let res = findAnagramMappings(a1, a2);
console.log("res", res);
