//Create a terminal clock (HH:MM:SS)
const currentDate  = new Date();
let hr = currentDate.getHours()
let min = currentDate.getMinutes()
let sec = currentDate.getSeconds()
console.log(String(hr)+":"+String(min)+":"+String(sec));
