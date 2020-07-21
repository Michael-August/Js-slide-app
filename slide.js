// Time

function showTime(){
    let date = new Date();
    let hour = date.getHours();
    let minuites = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";

    if(hour == 0){
        hour = 12;
    }
    if(hour > 12){
        hour = hour - 12;
        session = "PM";
    }
    // if(hour < 10){
    //     hour = '0' + hour;
    // }
    // if(minuites < 10){
    //     minuites = '0' + minuites;
    // }
    // if(seconds < 10){
    //     seconds = '0' + seconds;
    // }

    hour = (hour < 10) ? "0" + hour : hour;
    minuites = (minuites < 10) ? "0" + minuites : minuites;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let time = hour + ":" + minuites + ":" + seconds + " " + session;
    document.getElementById('time').innerHTML = time;
    document.getElementById('time').textContent = time;
    setTimeout(showTime, 1000);
}
showTime();
// setInterval(showTime, 1000);
// difference between setinterval and settimeout


// slide

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const form = document.querySelector('.hide-form');
const open = document.querySelector('.d-show');
const close = document.querySelector('.d-none');
const food = document.querySelector('.foodstuff');
const timeInput = document.querySelector('#time').value;
const foodInput = document.querySelector('#food').value;
const guide = document.querySelector('.guide');
const set = document.querySelector('.set');
const auto = false;
const intervalTime = 5000;
let slideInterval;


// // practicing arrays
// let monthlysales = Array.of(12, 32, 34);
// // spread operators
// let yearlyTotal = (...monthlysales)
// the find method
// function findfirstthousand(){
//     let firstthousand = monthlysales.find(element => element> 1000)
// }
// .fill()


// set event

let timeArray = [];
let foodArray = [];
function addEvent(){
    // function setTime(){
    //     const timeInput = document.querySelector('#time').value;
    //     timeArray.push(timeInput);
    //     console.log(timeArray);
    // }
    function setFood(){
        const foodInput = document.querySelector('#food').value;
        foodArray.push(foodInput);
        console.log(foodArray);
    }
    // setTime();
    setFood();
}
function setEvent(){
    let date = new Date();
    let hour = date.getHours();
    let session = "AM"
    foodArray.forEach(function (event){
        if(event <= 11 && session == 'AM'){
            slides[0].classList.add('current');
            console.log('breakfast time');
        }
        console.log("yes");
    })
}
setEvent();

// Toggle form
function openForm(){
    form.classList.remove('hide-form');
    form.classList.add('show-form');
    open.classList.add('d-none');
    close.classList.remove('d-none');
    close.classList.add('d-show');
    guide.innerHTML = 'click close X to close form.'
}

function closeForm(){
    form.classList.remove('show-form');
    form.classList.add('hide-form');
    close.classList.remove('d-show')
    open.classList.remove('d-none');
    open.classList.add('d-show');
    guide.innerHTML = 'click the openform button to set an event.'
    // guide[1].innerHTML = 'use the add to add and the set to set.'
}

function nextSlide(){
    const current = document.querySelector('.current');
    current.classList.remove('current')
    // check for next slide
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current');
    }else{
        // adding current to the begining
        slides[0].classList.add('current');
    }
    // removing the current class
    setTimeout(() => current.classList.remove('current'));
    if(auto){
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide, intervalTime);
    }
}

function prevSlide(){
    const current = document.querySelector('.current');
    current.classList.remove('current')
    // check for previous slide
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current');
    }else{
        // adding current to the last
        slides[slides.length - 1].classList.add('current');
    }
    // removing the current class
    setTimeout(() => current.classList.remove('current'));
    if(auto){
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide, intervalTime);
    }
}

// auto slide

if(auto){
    // run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}
