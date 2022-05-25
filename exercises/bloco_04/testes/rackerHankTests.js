/* const arr = [1, 3, 5, 7, 9];
// const arr = [5, 5, 5, 5, 5];
function miniMaxSum(arr) {
  // Write your code here
  let maximumValue = arr[0];
  let minimumValue = arr[0];
  let sumMin = 0;
  let sumMax = 0;
  const identicalNumbers = arr.every((value) => value === maximumValue);
  if (identicalNumbers) {
    const arrLength = arr.length - 1;
    sumMin = maximumValue * arrLength;
    sumMax = minimumValue * arrLength;
  } else {
    arr.forEach((value) => {
        if(value > maximumValue) {
            maximumValue = value;
        }
        if (value < minimumValue) {
            minimumValue = value;
        }
    });
    arr.forEach((value) => {
      if (value !== minimumValue) {
        sumMax += value;
      }
      if (value !== maximumValue) {
        sumMin += value;
      }
    });
  }
  console.log(`maximum value = ${maximumValue}`);
  console.log(`minimum value = ${minimumValue}`);
  console.log(`sumMax value = ${sumMax}`);
  console.log(`sumMin value = ${sumMin}`);
  console.log(sumMin, sumMax);
}

miniMaxSum(arr); */

let input = 6;
let sum = 0;
let arrayOfTwentyOne = [];
const TWENTY_ONE = 21;

for (let index = input; index > 0; index -= 1) {
  for (let index2 = input; index2 > 0; index2 -= 1) {
    for (let index3 = input; index3 > 0; index3 -= 1) {
      for (let index4 = 0; index4 < input; index4 += 1) {
        sum = index + index2 + index3 + index4;
        if (sum === TWENTY_ONE) {
          const number = `${index}${index2}${index3}${index4}`;
          arrayOfTwentyOne.push(number);
        }
        if (sum > TWENTY_ONE) {
          continue;
        }
      }
    }
  }
}
if  (arrayOfTwentyOne.length === 0) {
  console.log('null');
} else {
  let print = [];
  for(let i = 0; i < arrayOfTwentyOne.length; i += 1) {
    print += arrayOfTwentyOne[i] + ',';
    if(i < arrayOfTwentyOne.length - 1) {
      print += arrayOfTwentyOne[i] + ',';
    } else {
      print += arrayOfTwentyOne[i];
    }
  }
  console.log(print);
}
