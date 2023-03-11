const horas=document.getElementById('horas');
const minutos=document.getElementById('minutos');
const segundos=document.getElementById('segundos');
const dia=document.getElementById('dia');
const ano=document.getElementById('ano');
const mes=document.getElementById('mes');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min =  dateToday.getMinutes();
    let seg = dateToday.getSeconds();
    
    if(hr < 10){
        hr='0'+hr;
    }
    if(min < 10){
        min='0'+min;
    }
    if(seg < 10){
        seg='0'+seg;
    }
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
})
const diaa = setInterval(function day(){
    let dateToday = new Date();
    let day = dateToday.getDate();
    let year = dateToday.getFullYear();
    let mounth = dateToday.getMonth();

    mounth=mounth+1

    if (day < 10){
        day='0'+day;
    }
    if (mounth < 10){
        mounth='0'+mounth;
    }

    dia.textContent = day;
    ano.textContent = year;
    mes.textContent =  mounth;
})
