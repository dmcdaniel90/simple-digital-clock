'use strict';

(function updateTime() {
  const date = new Date();
  let minutes = date.getMinutes().toString();
  let hours = date.getHours().toString();
  let timeArray = [];

  //Setting the time
  padTime();

  let digitOne = timeArray[0];
  let digitTwo = timeArray[1];
  let digitThree = timeArray[2];
  let digitFour = timeArray[3];

  document.querySelector('#digitOne').textContent = digitOne;
  document.querySelector('#digitTwo').textContent = digitTwo;
  document.querySelector('#digitThree').textContent = digitThree;
  document.querySelector('#digitFour').textContent = digitFour;

  function padTime() {
    if (hours.length == 2 && minutes.length == 2) {
      timeArray = Array.from(hours + minutes);
    } else if (hours.length == 1 && minutes.length == 2) {
      hours = '0' + hours;
    } else if (hours.length == 2 && minutes.length == 1) {
      minutes = '0' + minutes;
    } else if (hours.length == 1 && minutes.length == 1) {
      hours = '0' + hours;
      minutes = '0' + minutes;
    }
    timeArray = Array.from(hours + minutes);
  }
  //!PROBLEM - The time 12:02 is displaying as 12:2. digitThree has disappeared.
  //*FIX - Use multiple logical operators based on the length property and else/if statements

  //Setting the date
  const currentDay = function () {
    const today = date.getDay();

    switch (today) {
      case 0:
        return 'Sunday';
      case 1:
        return 'Monday';
      case 2:
        return 'Tuesday';
      case 3:
        return 'Wednesday';
      case 4:
        return 'Thursday';
      case 5:
        return 'Friday';
      case 6:
        return 'Saturday';
    }
  };

  const currentDayNumber = date.getDate();

  const month = function () {
    const today = date.getMonth();

    switch (today) {
      case 0:
        return 'January';
      case 1:
        return 'February';
      case 2:
        return 'March';
      case 3:
        return 'April';
      case 4:
        return 'May';
      case 5:
        return 'June';
      case 6:
        return 'July';
      case 7:
        return 'August';
      case 8:
        return 'September';
      case 9:
        return 'October';
      case 10:
        return 'November';
      case 11:
        return 'December';
    }
  };

  const dateString = `Today is ${currentDay()} the ${currentDayNumber}th of ${month()} and the time is ${date.toLocaleTimeString()}`;

  //Setting the color theme based on time of day
  let bgColor, bgColor2, textColor, boxShadow, clockBorder;
  const digitDivs = [...document.querySelectorAll('.digit-container')];

  if (Number(hours) >= 8 && Number(hours) < 18) {
    bgColor = 'var(--day-bg-color1)';
    bgColor2 = 'var(--day-bg-color2)';
    textColor = 'var(--day-text-color)';
    boxShadow = '0px 0px 69px 12px rgba(179, 235, 228, 1)';
    clockBorder = '10px ridge white';

    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
    document.querySelector('.clock-container').style.boxShadow = boxShadow;
    document.querySelector('.clock-container').style.border = clockBorder;

    for (const div of digitDivs) {
      div.style.backgroundColor = bgColor2;
    }

    document.querySelector('.date-string').textContent = `${dateString} 🌞`;
  } else {
    bgColor = 'var(--night-bg-color1)';
    bgColor2 = 'var(--night-bg-color2)';
    textColor = 'var(--night-text-color)';
    boxShadow = '0px 0px 69px 12px rgba(104, 135, 132, 1)';
    clockBorder = '10px ridge rgb(212, 212, 212)';

    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
    document.querySelector('.clock-container').style.boxShadow = boxShadow;
    document.querySelector('.clock-container').style.border = clockBorder;

    for (const div of digitDivs) {
      div.style.backgroundColor = bgColor2;
    }

    document.querySelector('.date-string').textContent = `${dateString} 🌛`;
  }

  setInterval(updateTime, 1000);
})();
