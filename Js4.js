function returnEvenNumbers(firstNumber, secondNumber) {
  let arr = [];

  for (let i = firstNumber + 1; i < secondNumber; i++) {
    if (i % 2 == 0) {
      arr.push(i);
    } else {
      // console.log("sondgoi");
    }
  }
  console.log(arr);
}

returnEvenNumbers(3, 9);
