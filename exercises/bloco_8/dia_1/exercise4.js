const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const repetidor = (gabarito, respostas, callback) => {
  let contador = 0;
  for (let i = 0; i < gabarito.length; i += 1) {
    const resultado = callback(gabarito[i], respostas[i]);
    contador += resultado;
  }  
  return `Resultado final = ${contador} pontos.`
}

const conferir = (gab, resp) => {
  if(resp === 'N.A') return 0;
  if(gab === resp) return 1;
  else return -0.5;
}

console.log(repetidor(RIGHT_ANSWERS, STUDENT_ANSWERS, conferir));