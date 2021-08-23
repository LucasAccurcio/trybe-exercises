function generateArray (length) {
  const array = [];
  for (let i = 0; i < length; i += 1){
    const number = Math.floor(Math.random() * 50) + 1;
    array.push(number ** 2);
  }
  return array;
}

function ifOnSuccess (sum) {
  const arrayDivisor  = [2, 3, 5, 10];
  return arrayDivisor.map((element) => sum / element);
}

function somaArray (array) {
  return array.reduce((acc, element) => acc + element, 0);
}

const fetchPromise = () => {
  const myPromise = new Promise((onSuccess, onError) => {
    const arrayTenPosition = generateArray(10);
    const sum = arrayTenPosition.reduce((acc,curr) => acc + curr);
    (sum < 8000) ? onSuccess(sum) : onError();
    console.log(sum);
  });
  myPromise
    .then((sum) => ifOnSuccess(sum))
    .then((array) => somaArray(array))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
};
fetchPromise();