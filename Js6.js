const arr = [1, 2, 3, 4, 5, 6];
const arr1 = arr.indexOf(3);
function too(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}
let result = too(arr, 2);
console.log(result);
