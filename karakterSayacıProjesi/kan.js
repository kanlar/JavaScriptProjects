const textArea = document.querySelector('.text-area');
const totalCounter = document.getElementById('totalCounter');
const remainingCounter = document.getElementById('remainingCounter')


textArea.addEventListener('keyup', updateCounter);


function updateCounter(){
    totalCounter.textContent = textArea.value.length;
    remainingCounter.textContent = 
    textArea.getAttribute('maxlength') - textArea.value.length;
}
updateCounter();