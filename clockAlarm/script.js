const secondHand = document.querySelector('.analogSecond');
const minuteHand = document.querySelector('.analogMinute');
const hourHand = document.querySelector('.analogHour');

let time = document.getElementById('time');
const btn = document.getElementById('setAlarm');

let definedAlarm = null

function alarm() {
    const setHour = document.getElementById('setHour');
    const setMinute = document.getElementById('setMinute');

    definedAlarm = setHour.value + ':' + setMinute.value;
};

btn.addEventListener('click', alarm);

setInterval(() => {
    const now = new Date();

    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = (seconds / 60) * 360;
    const minutesDegrees = (minutes / 60) * 360;
    const hoursDegrees = ((hours % 12) / 12) * 360;

    secondHand.style.transform =
        `translateX(-50%) rotate(${secondsDegrees}deg)`;

    minuteHand.style.transform =
        `translateX(-50%) rotate(${minutesDegrees}deg)`;

    hourHand.style.transform =
        `translateX(-50%) rotate(${hoursDegrees}deg)`;

    time.innerText = String(hours).padStart(2, '0') + " : " + String(minutes).padStart(2, '0') + " : " + String(seconds).padStart(2, '0');

    const currentTime =
        String(hours).padStart(2, '0') +
        ':' +
        String(minutes).padStart(2, '0');

    if (definedAlarm == currentTime) {
        alert('ALARME DAS ' + definedAlarm + '!');
        definedAlarm = null;
    }
}, 1000);

