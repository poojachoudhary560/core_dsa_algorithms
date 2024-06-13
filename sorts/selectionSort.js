// algo
// iterate i over arr
// initially decalre i as min
// start a loop j from i+1 till end and keep on updating min by comparing j and min
// swap min and i

// also if there are n elements and n-1 are sorted so last one will automatically be sorted =>  n-1 iterations for i

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
}

let arr = [5, 9, 8, 1, 2];
selectionSort(arr);
console.log(arr);
