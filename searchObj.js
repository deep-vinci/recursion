
const contains = (obj, val) => {
    for (let key in obj) {
        if (typeof obj[key] == 'object') {
            return contains(obj[key], val)
        } else { 
            
            if (obj[key] == val) {
                return true
            } 
            // return obj[key] == val && contains(obj[key], val)
        }
    }
    return false
}

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false


console.log(hasIt, doesntHaveIt)