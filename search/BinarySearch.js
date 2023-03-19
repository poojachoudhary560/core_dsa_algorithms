function binarySearch(arr, val) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) { // min <= max as if arr has only 1 element, then
        let mid = Math.floor((min + max) / 2); // to get rid of decimals
        /*
            if(val === arr[mid]) { // No need for === check as if val less or greater will be captured
                return mid; 
            } 
        */
        console.log(min <= max, min, max, mid, val)

        if (val < arr[mid]) {
            max = mid - 1;
        } else if (val > arr[mid]) {
            min = mid + 1
        } else {
            return mid
        }
        console.log(min <= max, min, max, mid, val, '----')

    }
    return -1; // if nothing is found
}

let no = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 22, 33, 44, 55, 66, 77, 88], 22)
let no1 = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 22, 33, 44, 55, 66, 77, 88], 21)
console.log(no)
console.log(no1)