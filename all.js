const all = (a, c) => {
    if (a.length == 0)
        return true
    else 
        if (c(a[0]) == true) {
            a.shift()
            return true && all(a, c);
        } else { 
            return false
        }
}

var allAreLessThanSeven = all([1,2,9], function(num){
	return num < 7;
});

console.log(allAreLessThanSeven); // false
