let arr = [2, 4, 5, -1, -2];
function Numbers() {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr1.push(i);
    } else {
      arr2.push(i);
    }
    console.log(arr1, arr2);
    arr.push(0);
    const sortArr = arr.sort((a, b) => a - b);
    console.log(sortArr);
    return arr.length;
  }
}
let result = Numbers();
console.log(result);
