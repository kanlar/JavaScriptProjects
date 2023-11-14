const button = document.getElementById('button');
const videoContainer = document.querySelector('.videoContainer')
const close = document.querySelector('.close')
const video = document.querySelector('video')

button.addEventListener('click', function(e){
    videoContainer.classList.remove('active')

});

close.addEventListener('click', function(e){
    videoContainer.classList.add('active')
    video.pause();
    video.currentTime = 0;
})
