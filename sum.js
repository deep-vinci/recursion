function sumRange(n) {
    if (n <= 1) 
        return n;
    else 
        return n + sumRange(n-1)
}

console.log(sumRange(3))
console.log(sumRange(4))
console.log(sumRange(5))
