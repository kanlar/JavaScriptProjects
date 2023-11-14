let count = 0;

//select value and buttons

const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function (btn){
    btn.addEventListener('click', function(e){
    const number =  e.target.classList;
    if(number.contains('decrease')){
        count--;
    }else if(number.contains('increase')){
        count++;
    }else{
        count = 0;
    }
    if(count > 0){
        value.style.color = 'green';
    }
    if(count < 0){
        value.style.color = 'red';
    }
    if(count === 0){
        value.style.color = 'orange';
    }
    value.textContent = count;
    })
});