const lengthArr = (arr, count = 0) => {
    if (arr.length == 0) {
        return count;
    } else {
        return lengthArr(arr.slice(1), count + 1);
    }
    
}

console.log(lengthArr([2, 2]))