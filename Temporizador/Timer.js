function getTimeFromSecond(second){
    const data = new Date(second * 1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false, 
        timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let second = 0;
let timer;

function startTimer(){
    timer = setInterval(function() {
        second++; 
        document.querySelector(".relogio").innerHTML= getTimeFromSecond(second);
    }, 1000);
}

function execTimer(){
    document.querySelector(".relogio").classList.remove('stop');
    clearInterval(timer);
    startTimer();
}

function stopTimer(){
    document.querySelector(".relogio").classList.add('stop');
    clearInterval(timer);
}

function zerarTimer(){
    document.querySelector(".relogio").classList.remove('stop');
    clearInterval(timer);
    second = 0;
    document.querySelector(".relogio").innerHTML = "00:00:00";
}
