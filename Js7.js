function Numbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum / array.length);
}
Numbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);
