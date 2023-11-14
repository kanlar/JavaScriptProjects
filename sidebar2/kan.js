const bar = document.querySelector('.bar')
const sideBar = document.querySelector('.sidebar')
const xmark = document.querySelector('.fa-xmark')

bar.addEventListener('click', function(e){
   sideBar.classList.toggle('show-sidebar')
})

xmark.addEventListener('click', function(e){
    sideBar.classList.remove('show-sidebar')
})
