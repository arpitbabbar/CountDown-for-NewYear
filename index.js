
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

const d = new Date();
let n = d.getFullYear()+1;
const countdown = () => {
    const nowD = new Date();
    const newYD = new Date(n,"0");
    const diffSec = (newYD - nowD)/1000;

    const daysR = Math.floor(diffSec/3600/24);
    const hoursR = Math.floor(diffSec/3600)%24;
    const minR = Math.floor(diffSec/60)%60;
    const secR = Math.floor(diffSec)%60;

    days.textContent = format(daysR);
    hours.textContent = format(hoursR);
    min.textContent = format(minR);
    sec.textContent = format(secR);

}
const format = (time) => {
    return time >= 10 ? time : `0${time}`;
}

countdown();
setInterval(countdown,1000);

