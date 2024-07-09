const productOfArray = (a) => {
    if (a.length == 0) {
        return 1
    } else {
        return a.shift() * productOfArray(a)
    }
}

console.log(productOfArray([1,2,3]))