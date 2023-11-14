const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//gün tarhi belirleme

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');


let futurueDate = new Date(2023, 10, 13, 11, 30, 0);
const year = futurueDate.getFullYear()

let month = futurueDate.getMonth()
month = months[month]

let weekday = futurueDate.getDay();
weekday = weekdays[weekday];

const day = futurueDate.getDate();
const hours = futurueDate.getHours();
const minutes = futurueDate.getMinutes();
const ms = futurueDate.getSeconds();

giveaway.textContent = `giveaway ends on ${weekday}, ${day} ${month} ${year} ${hours}:${minutes}am`

// gelecek zaman sayımı
const futureTime = futurueDate.getTime();
//console.log(futureTime)

function getRemainingTime(){
const today = new Date().getTime();
const t = futureTime - today;
//console.log(t);
// 1 saniye = 1000 ms
//1 daika = 60 saniye

const oneDay = 24*60*60*1000;
const oneHour = 60*60*1000;
const oneMinute = 60*1000;
//heessap vakti
let days = t / oneDay;
days = Math.floor(days);
let hours = Math.floor((t % oneDay) / oneHour);
let minutes = Math.floor((t % oneHour) / oneMinute);
let sec = Math.floor((t % oneMinute) / 1000);

const values = [days,hours,minutes,sec];

function format(item){
  if(item < 10 ){
    return item = `0${item}`
  }
  return item
}

items.forEach(function (item, index){
  item.innerHTML = format(values[index]);
})
if(t<0){
  clearInterval(countDown);
  deadline.innerHTML = `<h4 class='expired'>sorry, this 
  giveaway has expired </h4>`
}
}
let countDown = setInterval(getRemainingTime,1000)
getRemainingTime();

