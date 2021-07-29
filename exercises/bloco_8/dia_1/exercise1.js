const wakeup = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const goSpleep = () => 'Partiu dormir!!';

const doingAllThings = () => console.log(`1º - ${wakeup()},
2º - ${breakfast()},
3º - ${goSpleep()}`);
// doingAllThings(); // Executa a função a cima

const doingThings = (callback) => {
  const result = callback();
  console.log(result);
}
doingThings(wakeup);
doingThings(breakfast);
doingThings(goSpleep);