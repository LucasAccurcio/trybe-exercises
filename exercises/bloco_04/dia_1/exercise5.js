let a = 60;
let b = 60;
let c = 60;

if (a < 0 || b < 0 || c < 0) {
  console.log("Temos um valor negativo");
}
else if ((a+b+c) == 180) {
  let soma = a + b + c;
  console.log("Temos um triângulo "+soma+"º somando os ângulos");
}
else {
  let soma = a + b + c;
  console.log("Não temos um triângulo - soma dos ângulos = "+soma+"º");
}