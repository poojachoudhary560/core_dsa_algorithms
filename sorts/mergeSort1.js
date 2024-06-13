// function mergeSort(arr, l, h) {
//     if (l >= h) {
//         return;//returns recursively
//     }

//     if (l < h) {
//         let mid = Math.floor((l + h) / 2);
//         mergeSort(arr, l, mid);
//         mergeSort(arr, mid + 1, h);
//         merge(arr, l, mid, h);
//     }
// }

// function merge(arr, l, mid, h) {
//     let ini = l;
//     let low = l;
//     let high = mid + 1;
//     let start = 0;
//     let arrC = new Array(h - l + 1);
//     console.log(arr[l], arr[high])
//     while (low <= mid && high <= h) {
//         if (arr[low] < arr[high]) {
//             arrC[start] = arr[low];
//             low++
//         } else {
//             arrC[start] = arr[high];
//             high++;
//         }
//         start++;
//     }

//     console.log("....", arr, l, mid, h, arrC)

//     while (low <= mid) {
//         arrC[start] = arr[low];
//         low++;
//         start++;
//     }
//     while (high <= h) {
//         arrC[start] = arr[high];
//         high++;
//         start++;
//     }
//     // arr = [...arrC];
//     for (let i = 0; i < start; i++) {
//         arr[ini] = arrC[i]
//         ini++
//     }
//     console.log(arrC)
// }

// // let arr22 = [2,5,1,3];
// // merge(arr22, 0, 1, 3)

// let a4 = [90, 24, 6, 73]
// mergeSort(a4, 0, 3);

function mergeSortedAr(a1, a2) {
  let i = 0;
  let j = 0;
  let k = 0;
  let res = Array(a1.length + a2.length);
  while (i < a1.length && j < a2.length) {
    if (a1[i] < a2[j]) {
      res[k] = a1[i];
      i++;
      k++;
    } else {
      res[k] = a2[j];
      j++;
      k++;
    }
  }

  while (i < a1.length) {
    res[k] = a1[i];
    i++;
    k++;
  }

  while (j < a2.length) {
    res[k] = a2[j];
    j++;
    k++;
  }

  return res;
}

function mergeSort(arr, low, high) {
  if (low === high) {
    return [arr[low]];
  }
  let mid = Math.floor((low + high) / 2);
  let firstSorted = mergeSort(arr, low, mid);
  let secondSorted = mergeSort(arr, mid + 1, high);
  return mergeSortedAr(firstSorted, secondSorted);
}

let arr = [7, 4, 1, 3, 6, 8, 2, 5];
let res = mergeSort(arr, 0, arr.length - 1);
console.log("res", res);
