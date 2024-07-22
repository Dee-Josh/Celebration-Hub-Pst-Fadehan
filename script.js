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
const allow = document.querySelector('.allow');
const mute = document.querySelector('.mute');
const overlay = document.querySelector('.overlay');
const allowPlay = document.querySelector('.allow-play');
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


const img = document.querySelector('.sub-two img');
let i = 1;
setInterval(() => {
    img.src=`./Img/${i}.jpeg`;
    i++;
    if (i > 16) {
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



// let currentSlide = 1;
// function updateImg(){
//     slideImage.src=`./Img/${currentSlide}.jpg`;
//     count.textContent = currentSlide;
// }

// leftBtn.addEventListener('click', ()=>{
//     if (currentSlide > 1) {
//         currentSlide--;
//     } 
//     updateImg();
// })

// rightBtn.addEventListener('click', ()=>{
//     if (currentSlide <24) {
//         currentSlide++;
//     }  
//     updateImg();
// })
// updateImg();

// let activeSlide;

// function activateSlide(){
//     leftBtn.style.display='none';
//     rightBtn.style.display='none';
//     slideBtn2.textContent = "Stop Slideshow";

//     currentSlide = 1;
//     activeSlide = setInterval(() => {
//         if (currentSlide <24) {
//             currentSlide++;
//         }else{
//             currentSlide = 1;
//         }
//         updateImg();
//         slideImage.classList.toggle('animate');
//     }, 5000);
// }

// function deactivateSlide(){
//     leftBtn.style.display='initial';
//     rightBtn.style.display='initial';

//     slideBtn2.innerHTML = `<i class="fa-solid fa-video"></i> Start Slideshow`;

//     clearInterval(activeSlide);
    
//     slideImage.classList.remove('animate');
// }

// xmark.addEventListener('click', ()=>{
//     normalDisplay.style.display ='block';
//     slideDisplay.style.display = 'none';
//     deactivateSlide();
// })

// seeAll.addEventListener('click', ()=>{
//     normalDisplay.style.display ='none';
//     slideDisplay.style.display = 'flex';
// })

// slideBtn1.addEventListener('click', ()=>{
//     normalDisplay.style.display ='none';
//     slideDisplay.style.display = 'flex';
//     activateSlide();
// })

// slideBtn2.addEventListener('click', ()=>{
//     if (slideBtn2.textContent !== 'Stop Slideshow') {
//         activateSlide();
//     }else{
//         deactivateSlide();
//     }
// })

// allImg.forEach((img, index)=>{
//     img.addEventListener('click', ()=>{
//         normalDisplay.style.display ='none';
//         slideDisplay.style.display = 'flex';
//         currentSlide = (index + 1);
//         updateImg();
//     })
    
// })

bars.addEventListener('click', ()=>{
    console.log('clicked');

    bars.classList.toggle('fa-bars');
    bars.classList.toggle('fa-xmark');
    nav.classList.toggle('open');
})


const audio = new Audio;

const birthdaySongs = [
    "./sounds/1.mp3",
    "./sounds/2.mp3",
    "./sounds/3.mp3",
    "./sounds/4.mp3",
    "./sounds/5.mp3",
    "./sounds/6.mp3",
    "./sounds/7.mp3",
    "./sounds/8.mp3",
    "./sounds/10.mp3"
];

const slideSongs = [
    "./sounds/1.mp3",
    "./sounds/3.mp3",
    "./sounds/7.mp3",
    "./sounds/8.mp3"
];


function removeOverlay(){
    // allowPlay.style.display ='none';
    overlay.style.display ='none';
}

mute.addEventListener('click',()=>{
    removeOverlay();
    defaultPlay.classList.remove('fa-volume-up')
    defaultPlay.classList.add('fa-volume-mute')
});

allow.addEventListener('click', ()=>{
    removeOverlay();

    const audioSource = Math.trunc(Math.random()*3);
    audio.src = slideSongs[1];
    audio.play();
})

audio.addEventListener('ended', ()=>{
    const audioSource = Math.trunc(Math.random()*3);
    audio.src = slideSongs[audioSource];
    audio.play();
})

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


// FOR SUBMITING WISHES

const submitBtn = document.querySelector('.sub-btn');
const wishText = document.querySelector('.wish-text');
const nameW = document.querySelector('.enter-wish input'); 
const wishContainer = document.querySelector('.wishes'); 

// Create a new Date object
const currentDate = new Date();

// Define arrays for month names and date suffixes
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const date = currentDate.getDate();
const monthIndex = currentDate.getMonth();

// Format the date in "Month Day" format
const formattedDate = `${months[monthIndex]} ${date}`;


submitBtn.addEventListener("click", ()=>{
    let text = wishText.value;
    let theName = nameW.value;
    let totalDetails = `
    <div class="wish-container">
        <i class="fa-solid fa-cake"></i>
        <div class="wish-details">
            <h3 class="wish-name">${theName}</h3>
            <p class="wish-date">${formattedDate}</p>
            <p class="wish-info">${text}</p>
        </div>
    </div>
    `

    wishContainer.innerHTML+= totalDetails;
    localStorage.setItem("data", totalDetails);
    storeFunctionWithExpiry("data", totalDetails, 1800000)

    setTimeout(() => {
        wishText.value="";
        nameW.value="";
    }, 500);
})

let totalDetails = retrieveFunction("data");
totalDetails && (wishContainer.innerHTML+= totalDetails);





// Setting and Deleting wish from local storage


// Function to store a function in local storage with expiry time
function storeFunctionWithExpiry(key, data, expirySeconds) {
    const now = new Date();
    const expiry = now.getTime() + (expirySeconds * 1000)  // expiry in milliseconds
    localStorage.setItem(key, JSON.stringify(data));
    localStorage.setItem('expiry', JSON.stringify(expiry));
}

// Function to retrieve a function from local storage
function retrieveFunction(key) {
    const itemStr = localStorage.getItem(key);
    const expiry = localStorage.getItem("expiry");
    if (!itemStr){
        return null;
    } 

    const item = JSON.parse(itemStr);
    const now = new Date().getTime();

    // Check if the function has expired
    if (now > expiry) {
        // If expired, delete from local storage and return null
        localStorage.removeItem(key);
        return null;
    }
    return item; // Return the function if it's still valid
}
