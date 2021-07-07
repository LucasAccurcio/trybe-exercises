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

//Exercício 2:
const input = document.getElementById('task-input');//Pega o texto da caixa
const clickBtn = document.getElementById('btn-add');
const divButtons = document.querySelector('.buttons-container');

function newBtnHoliday(btnName) {
  let newButton = document.createElement('button');
  newButton.id = 'btn-holiday';
  newButton.innerHTML = btnName;
  divButtons.appendChild(newButton);
}
newBtnHoliday('Feriados');


//Exercício 3:
function btnFeriado() {
  const btnFeriados = document.querySelector('#btn-holiday');
  let feriados = document.querySelectorAll('.holiday');
  let newColor = 'red';
  let oldColor = '#777';
  
  btnFeriados.addEventListener('click', function(){
    for (let i = 0; i < feriados.length; i += 1) {
      if (feriados[i].style.color === newColor) {
        feriados[i].style.color = oldColor;
      } else {
        feriados[i].style.color = newColor;
      }
    }
  });
};
btnFeriado();

//Exercício 4
function newBtnFriday(btnName) {
  let newButton = document.createElement('button');
  newButton.id = 'btn-friday';
  newButton.innerHTML = btnName;
  divButtons.appendChild(newButton);
}
newBtnFriday('Sexta-feira');

//Exercício 5
function btnFriday() {
  const btnSexta = document.querySelector('#btn-friday');
  let dayFriday = document.querySelectorAll('.friday');
  let newColor = 'green';
  let oldColor = '#777';
  
  btnSexta.addEventListener('click', function(){
    for (let i = 0; i < dayFriday.length; i += 1) {
      if (dayFriday[i].style.color === newColor) {
        dayFriday[i].style.color = oldColor;
      } else {
        dayFriday[i].style.color = newColor;
      }
    }
  });
};
btnFriday();

//Exercício 6
function mouseOver(event) {
  event.target.style.fontSize = '22px';
  event.target.style.fontWeight = 'bold';
}
function mouseOut(event) {
  event.target.style.fontSize = '20px';
  event.target.style.fontWeight = 'normal';
}
let dias = document.querySelector('#days');
dias.addEventListener('mouseover', mouseOver);
dias.addEventListener('mouseout', mouseOut);

//Exercício 7
function newTask(tarefa) {
  let local = document.querySelector('.my-tasks');
  let span = document.createElement('span');
  span.innerHTML = tarefa;
  local.appendChild(span);
};
newTask('cozinhar');

//Exercício 8
function addSubTitle (cor) {
  let localContainer = document.querySelector('.my-tasks');
  let newDiv = document.createElement('div');
  newDiv.className = 'task';
  newDiv.style.backgroundColor = cor;
  localContainer.appendChild(newDiv);
};
addSubTitle('green');

//Exercicio 9
function selectTask () {
  let local = document.querySelector('.task');
  let task = '';
  local.addEventListener('click', function () {
    if (task === '') {
      local.className = 'task selected';
      task = 'task select';
    } else {
      local.className = 'task';
      task = '';
    }
  });
};
selectTask();

//Exercício 10
function paintDay () {

let task = document.getElementsByClassName('task selected');
let days = document.querySelector('#days');
let localTask = document.querySelector('.task');
let cor = localTask.style.backgroundColor;
days.addEventListener('click', function(event) {
  let corAtual = event.target.style.color;
  if (task.length > 0 && corAtual !== cor){
    let color = task[0].style.backgroundColor
    event.target.style.color = color;
  } else {
    event.target.style.color = 'rgb(119,119,119)';
  }
});
};
paintDay();
