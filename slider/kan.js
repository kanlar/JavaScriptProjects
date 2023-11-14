const imageContainer = document.querySelector('.img-container')
const imgs = document.querySelectorAll('img')
const nextIcon = document.querySelector('.next')
const prevIcon = document.querySelector('.prev')


let currentImg = 1;
let timeout;

nextIcon.addEventListener('click', function(e){
    currentImg ++;
    clearTimeout(timeout);
    updateImg ();
})

prevIcon.addEventListener('click', function(e){
    currentImg --;
    clearTimeout(timeout);
    updateImg ();
})

function updateImg(){
    if(currentImg > imgs.length){
        currentImg = 1;
    }else if(currentImg < 1){
        currentImg = imgs.length;
    }
    imageContainer.style.transform = `translateX(-${(currentImg - 1)*700}px)`;
    timeout = setTimeout(function(e){
        currentImg++;
        updateImg()
    }, 4000)
}

updateImg()