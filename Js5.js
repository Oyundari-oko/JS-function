function returnEvenNumbers(negdehtoo, hoyrdahtoo) {
  let arr = [];
  for (let i = negdehtoo + 1; i < hoyrdahtoo; i++) {
    if (i % 2 === 0) {
    } else {
      arr.push(i);
    }
  }
  console.log(arr);
}
returnEvenNumbers(2, 10);
