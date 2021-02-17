/*
정리하면 현재 시간과 d-day 시간을 구하고 그 차를 구한다.
이 차는 ms 초로 표현되므로. 초분시를 따로 구하고 그것의 단위로 나머지 연산을 하면 각 초분시를 구할 수 있다.
이것을 innerHTML로
*/

const clockTitle = document.querySelector('.js-clock');


function getTime(){
    const xmasDay = new Date(`${new Date().getFullYear()}-12-24:00:00:00+0900`);
    const now = new Date();
    const diff = new Date(xmasDay - now);
    const secondsInMS = Math.floor(diff/1000);
    const minutesInMs = Math.floor(secondsInMS/60);
    const hoursInMs = Math.floor(minutesInMs/60);
    const days = Math.floor(hoursInMs/24);
    const seconds = secondsInMS % 60;
    const minutes = minutesInMs % 60;
    const hours = hoursInMs % 24;
    const daysStr = `${days < 10 ? `0${days}` : days}d`;
    const hourStr = `${hours < 10 ? `0${hours}` : hours}h`;
    const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m`;
    const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
    clockTitle.textContent = `${daysStr} ${hourStr} ${minutesStr} ${secondsStr}`


}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();
