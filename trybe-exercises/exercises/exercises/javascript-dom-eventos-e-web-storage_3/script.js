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

  //ex - 1 
  let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  function createDaysOfTheMonth() {
    let daysList = document.querySelector('#days');
  
    for (let index = 0; index < dezDaysList.length; index += 1) {
      let day = dezDaysList[index];
      let dayItem = document.createElement('li');
  
      if (day === 24 | day === 31) {
        dayItem.className = 'day holiday';
        dayItem.innerHTML = day;
        daysList.appendChild(dayItem);
      } else if (day === 4 | day === 11 | day === 18) {
        dayItem.className = 'day friday';
        dayItem.innerHTML = day;
        daysList.appendChild(dayItem);
      } else if (day === 25) {
        dayItem.className = 'day holiday friday';
        dayItem.innerHTML = day;
        daysList.appendChild(dayItem);
      } else {
        dayItem.innerHTML = day;
        dayItem.className = 'day';
        daysList.appendChild(dayItem);
      }
    };
  };
  createDaysOfTheMonth();

//ex - 2
  function holidayButton(buttonName){
  let buttonContainer = document.querySelector('.buttons-container');
  let newBtn = document.createElement('button');
  let newBtnID = 'btn-holiday';
  newBtn.innerHTML = buttonName;
  newBtn.id = newBtnID;
  buttonContainer.appendChild(newBtn)
  }
  
  holidayButton('Feriados')

//ex - 3

  function displayHolidays() {
    let getHolidayButton = document.querySelector('#btn-holiday');
    let getHolidays = document.querySelectorAll('.holiday')
    let backgroundColor = 'cyan';
    let setNewColor = 'cyan';
  
    getHolidayButton.addEventListener('click', function() {
      for (let index = 0; index < getHolidays.length; index += 1) {
        if (getHolidays[index].style.backgroundColor === setNewColor) {
          getHolidays[index].style.backgroundColor = backgroundColor;
        } else {
          getHolidays[index].style.backgroundColor = setNewColor;
        }
      }
    })
  };
  displayHolidays();