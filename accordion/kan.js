const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) =>{
    const accordionButton = accordion.querySelector('.btn');
    accordionButton.addEventListener('click', function(e){
       accordion.querySelector('.minusIcon').classList.toggle('active');
       accordion.querySelector('.plusIcon').classList.toggle('active');
       accordion.querySelector('.accordionText').classList.toggle('active');
    });
});