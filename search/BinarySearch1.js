function nativeBinary(arr, val) {
    let min = 0;
    let max = arr.length - 1;
    while (min <= max) {
        let mid = Math.floor((min + max) / 2)
        if (val > arr[mid]) {
            min = mid + 1;
        } else if (val < arr[mid]) {
            max = mid - 1;
        } else {
            return mid;
        }
    }
    return -1;
}

// nativeBinary([1], 1)

function binaryAnotherApproach(arr, val) {
    let min = 0;
    let max = arr.length - 1;
    let mid = Math.floor((min + max) / 2);

    while (val !== arr[mid] && min < max) {
        if (val > arr[mid]) {
            min = mid + 1;
        } else {
            max = mid - 1;
        }
        mid = Math.floor((min + max) / 2);
    }

    if (val === arr[mid]) {
        return mid;
    }
    return -1;
}

binaryAnotherApproach([0, 1], 1);