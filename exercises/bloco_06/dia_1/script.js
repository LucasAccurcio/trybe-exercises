let states = [
   'AC/Acre',
   'AL/Alagoas',
   'AP/Amapá',
   'AM/Amazonas',
   'BA/Bahia',
   'CE/Ceará',
   'DF/Distrito Federal',
   'ES/Espírito Santo',
   'GO/Goías',
   'MA/Maranhão',
   'MT/Mato Grosso',
   'MS/Mato Grosso do Sul',
   'MG/Minas Gerais',
   'PA/Pará',
   'PB/Paraíba',
   'PR/Paraná',
   'PE/Pernambuco',
   'PI/Piauí',
   'RJ/Rio de Janeiro',
   'RN/Rio Grande do Norte',
   'RS/Rio Grande do Sul',
   'RO/Rondônia',
   'RR/Roraíma',
   'SC/Santa Catarina',
   'SP/São Paulo',
   'SE/Sergipe',
   'TO/Tocantins'
];

const estados = document.querySelector('#estados');

for (let i = 0; i < states.length; i += 1) {
  const estado = document.createElement('option');
  const sigla = states[i].slice(0,2);
  estados.value = sigla[i];
  estado.innerHTML = states[i].slice(3);
  estados.appendChild(estado);
}

const button = document.querySelector('#submit');
let inputName = document.querySelector('#name-text');

function getUserValue (event) {
  event.preventDefault();
  console.log(inputName.value);
}
button.addEventListener('click', getUserValue);