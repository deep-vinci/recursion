const all = (a, c) => {
    if (a.length == 0)
        return true
    else 
        return c(a[0]) && all(a.slice(1), c)
}

// execution code
var allAreLessThanSeven = all([1,2,6], function(num){
	return num < 7;
});

console.log(allAreLessThanSeven); // false

