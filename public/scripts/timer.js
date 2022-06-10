import { cookTime, mrStampy } from './cartUpdate.js';

// Timer function for when order has been placed

 export function makeTimer() {

  let time = cookTime * 60; // 3 minutes
  console.log("time", time);
  let endTime = new Date(mrStampy);
  console.log("endTime", endTime);

  endTime = Date.parse(endTime) / 1000;
  console.log("parse endTime", endTime);
  endTime += time;

  let now = new Date();
  now = Date.parse(now) / 1000;
  console.log("now", now);

  let timeLeft = endTime - now;
  console.log("time left", timeLeft);
  let days = Math.floor(timeLeft / 86400);
  let hours = Math.floor((timeLeft - days * 86400) / 3600);
  let minutes = Math.floor(
    (timeLeft - days * 86400 - hours * 3600) / 60
  );
  let seconds = Math.floor(
    timeLeft - days * 86400 - hours * 3600 - minutes * 60
  );
  console.log("see me!!!!!!", seconds);

  $("#days").html(` ${days} <span>  Days </span>`);
  $("#hours").html(` ${ hours}  <span>  Hours </span>`);
  $("#minutes").html(` ${ minutes}  <span>  Minutes </span>`);
  $("#seconds").html( `${ seconds}  <span>  Seconds </span>`);
}
