// mind fuck in the beginning but i later realised its pretty straightforward
// const totalIntegers = (arr, count = 0) => {
//     if (arr.length == 0) {
//         return count
//     } else {
//         if (arr[0].constructor === Array) {
//             return totalIntegers(arr[0], count) + totalIntegers(arr.slice(1), 0);
//         } else {
//             return totalIntegers(arr.slice(1), count+1)
//         }
//     }
// }

// const lengthArr = (arr, count = 0) => {
//     if (arr.length == 0) {
//         return count;
//     } else {
//         return lengthArr(arr.slice(1), count + 1);
//     }

// }

const totalIntegers = (arr, c = 0) => {
  arr.forEach((element) => {
    if (typeof element === "number") c++;
    else if (typeof element == "object") c = totalIntegers(element, c);
  });

  return c;
};

let arr = [1, [2, 1, [1, 2, 2, [0]]], 2];
let nArr = [1, [1, 1, [1, 11, 3, [2]]], [1, 3], 1];
let nnArr = [1, [2, 1], 2];

let testCase = [[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]];
console.log(totalIntegers(arr));
console.log(totalIntegers(nArr));
console.log(totalIntegers(nnArr));
console.log(totalIntegers(testCase));
