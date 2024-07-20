// DOM IMPLEMENTATION

const subNav1 = document.querySelector('.link-1');
const subNav2 = document.querySelector('.link-2');
const subNav3 = document.querySelector('.link-3');
const bac2top = document.querySelector('.back-2-top');
const header = document.querySelector('.welcome-display');
const leftBtn = document.querySelector('.fa-chevron-left');
const rightBtn = document.querySelector('.fa-chevron-right');
const slideImage =document.querySelector('.slide-img img');
const count = document.querySelector('#count');
const xmark = document.querySelector(".fa-xmark");
const normalDisplay = document.querySelector('.display-normal');
const slideDisplay = document.querySelector('.slide-view');
const seeAll = document.querySelector('.see-all');
const slideBtn1 = document.querySelector('.slide-btn1');
const slideBtn2 = document.querySelector('.slide-btn2');
const allImg = document.querySelectorAll('.pic img');
const bars = document.querySelector('.bar-btn');
const nav = document.querySelector('.hdr-2');
const defaultPlay = document.querySelector('.hdr-3 i');

if (slideDisplay) {
    slideDisplay.style.display='none';
}


subNav2.addEventListener('click', ()=>{
    window.location = './index.html#wishes';
})

subNav3.addEventListener('click', ()=>{
    window.location = './gallery.html';
})

let noOfImage = 17;


const img = document.querySelector('.sub-two img');
let i = 1;
setInterval(() => {
    img.src=`./Img/${i}.jpeg`;
    i++;
    if (i > noOfImage) {
        i = 1
    }
}, 3000);

function isAtTheTop(element){
    const theContainer = element.getBoundingClientRect();
    return(
        theContainer.top >=0 && theContainer.left>=0 && theContainer.right<=(window.innerWidth || documentElement.clientWidth)
    );
}

setInterval(() => {
    isAtTheTop(header) ? bac2top.style.display = 'none': bac2top.style.display = 'flex';
}, 100);



let currentSlide = 1;
function updateImg(){
    slideImage.src=`./Img/${currentSlide}.jpeg`;
    count.textContent = currentSlide;
}

leftBtn.addEventListener('click', ()=>{
    if (currentSlide > 1) {
        currentSlide--;
    } 
    updateImg();
})

rightBtn.addEventListener('click', ()=>{
    if (currentSlide < noOfImage) {
        currentSlide++;
    }  
    updateImg();
})
updateImg();

let activeSlide;

function activateSlide(){
    leftBtn.style.display='none';
    rightBtn.style.display='none';
    slideBtn2.textContent = "Stop Slideshow";

    currentSlide = 1;
    activeSlide = setInterval(() => {
        if (currentSlide < noOfImage) {
            currentSlide++;
        }else{
            currentSlide = 1;
        }
        updateImg();
        slideImage.classList.toggle('animate');
    }, 5000);
}

function deactivateSlide(){
    leftBtn.style.display='initial';
    rightBtn.style.display='initial';

    slideBtn2.innerHTML = `<i class="fa-solid fa-video"></i> Start Slideshow`;

    clearInterval(activeSlide);
    
    slideImage.classList.remove('animate');
}

xmark.addEventListener('click', ()=>{
    normalDisplay.style.display ='block';
    slideDisplay.style.display = 'none';
    deactivateSlide();
})

seeAll.addEventListener('click', ()=>{
    normalDisplay.style.display ='none';
    slideDisplay.style.display = 'flex';
})

slideBtn1.addEventListener('click', ()=>{
    normalDisplay.style.display ='none';
    slideDisplay.style.display = 'flex';
    activateSlide();
})

slideBtn2.addEventListener('click', ()=>{
    if (slideBtn2.textContent !== 'Stop Slideshow') {
        activateSlide();
    }else{
        deactivateSlide();
    }
})

allImg.forEach((img, index)=>{
    img.addEventListener('click', ()=>{
        normalDisplay.style.display ='none';
        slideDisplay.style.display = 'flex';
        currentSlide = (index + 1);
        updateImg();
    })
    
})

bars.addEventListener('click', ()=>{
    console.log('clicked');

    bars.classList.toggle('fa-bars');
    bars.classList.toggle('fa-xmark');
    nav.classList.toggle('open');
})


const audio = new Audio;
const slideSongs = [
    "./sounds/1.mp3",
    "./sounds/3.mp3",
    "./sounds/7.mp3",
    "./sounds/8.mp3"
];



const audioSource = Math.trunc(Math.random()*3);
audio.src = slideSongs[1];
audio.play();

audio.addEventListener('ended', ()=>{
const audioSource = Math.trunc(Math.random()*3);
audio.src = slideSongs[audioSource];
audio.play();
});

defaultPlay.addEventListener('click', ()=>{
    if(defaultPlay.classList.contains('fa-volume-up')){
        audio.pause();
    }else{
        audio.src = slideSongs[1];
        audio.play();
    }

    defaultPlay.classList.toggle('fa-volume-up');
    defaultPlay.classList.toggle('fa-volume-mute');
})

// FOR STOPING SONG IN GALLERY

const video = document.querySelector('video');

video.addEventListener('click', ()=>{
    audio.pause();
    defaultPlay.classList.remove('fa-volume-up');
    defaultPlay.classList.add('fa-volume-mute');
})