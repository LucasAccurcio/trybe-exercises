function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();
// Escreva seu código abaixo.
//Exercício 1:
function daysOfMonth () {
  let day = [];
  for (let i = 1; i <= 31; i += 1) {
    day.push(i);
  }
  return day;
}

const days = daysOfMonth();
const getDayList = document.getElementById('days');

for (let i = 29; i <= 30 ; i +=1) {
  const dayItem = document.createElement('li');
  dayItem.className = 'day';
  dayItem.innerHTML = i;
  getDayList.appendChild(dayItem);
}
for (let day of days) {
  const dayItem = document.createElement('li');
  if (day === 24 || day === 31) {
    dayItem.className = 'day holiday';
  } else if (day === 4 || day === 11 || day === 18) {
    dayItem.className = 'day friday';
  } else if (day === 25) {
    dayItem.className = "day holiday friday";
  } else {
    dayItem.className = 'day';
  }
  dayItem.innerHTML = day;
  getDayList.appendChild(dayItem);
}
console.log(getDayList);

//Exercício 2:
const input = document.getElementById('task-input');//Pega o texto da caixa
const clickBtn = document.getElementById('btn-add');
const divButtons = document.querySelector('.buttons-container');

function clicouBtn() {
  let newButton = document.createElement('button');
  newButton.id = 'btn-holiday';
  newButton.innerHTML = input.value; //Texto da caixa
  divButtons.appendChild(newButton);
  console.log("Clicou");
}
let stringBtn = 
clickBtn.addEventListener('click', clicouBtn);
