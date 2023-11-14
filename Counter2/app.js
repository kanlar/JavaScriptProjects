let count = 0;
const buttonsUp = document.querySelector('.button-container-one')
const buttonsDown = document.querySelector('.button-container-two')


    
    buttonsUp.addEventListener('click', function(e){
        const number = e.target.classList
        if(number.contains('decrease')){
            count--;
        }else if(number.contains('increase')){
            count++;
        }else{
            count = 0; 
        }
        return resultup.innerHTML = count
    })

    buttonsDown.addEventListener('click', function(e){
        const number = e.target.classList
        if(number.contains('decrease')){
            count--;
        }else if(number.contains('increase')){
            count++;
        }else{
            count = 0; 
        }
        return resultdown.innerHTML = count
    })






