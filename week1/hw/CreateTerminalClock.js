//Create a terminal clock (HH:MM:SS)
//We are creating a object called Date which as function of get the current time and date but we need time so we use the functions it provide 
const currentDate  = new Date();
let hr = currentDate.getHours()
let min = currentDate.getMinutes()
let sec = currentDate.getSeconds()
console.log(String(hr)+":"+String(min)+":"+String(sec));
//There is much better way to do it 
//We see later 
