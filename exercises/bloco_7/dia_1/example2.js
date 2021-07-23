const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort(function(a, b) {
  return a - b;
});


console.log(`Os números ${oddsAndEvens} se encontram de forma ordenada`); // será necessário alterar essa linha 😉