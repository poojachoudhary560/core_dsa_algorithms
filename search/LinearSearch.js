function linearSearch(ar, val) {
    for(let i=0; i<ar.length; i++) {
        if(val === ar[i]) {
            return i;
        }
    }
    return -1;
}

linearSearch([1,3,2,6,5,99,7,66], 92)