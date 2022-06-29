const dayElement = document.getElementById("day");
const hourElement = document.getElementById("hour");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");
const popDate = new Date('Oct 25, 2022 00:00:00').getTime();

updateCountdown();

function updateCountdown(){
  const currentDate = new Date().getTime();
  const gap = popDate - currentDate;
  const seconds = 1000;
  const minutes = seconds * 60;
  const hour = minutes * 60;
  const day = hour * 24;

  const daysLeft = Math.floor(gap / day);
  const hoursLeft = Math.floor((gap % day) / hour);
  const minutesLeft = Math.floor((gap % hour) / minutes);
  const secondsLeft = Math.floor((gap % minutes) / seconds);

  dayElement.innerText = daysLeft;
  hourElement.innerText = hoursLeft;
  minutesElement.innerText = minutesLeft;
  secondsElement.innerText = secondsLeft;

  setInterval(updateCountdown, 1000);
}
