const factRecursively = n => {
    if (n == 1)
        return 1
    else 
        return n * factRecursively(n-1)
}

console.log(factRecursively(5))