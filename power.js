const powerRecursively = (n, e) => {
    if (e == 0)
        return 1
    else 
        return n * powerRecursively(n, e - 1)
}

console.log(powerRecursively(2, 4))
