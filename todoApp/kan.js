const search = document.querySelector('.search input');
const item = document.querySelector('.todos');
const add = document.querySelector('.add')



const generateTemplate = function (todo) {
   const html = 
    `  <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    item.innerHTML += html;
}

add.addEventListener('submit', function (e) {
    e.preventDefault();
    const todo = add.add.value.trim();
    if(todo.length > 0){
        generateTemplate(todo)
        add.reset();
    }
})

item.addEventListener('click', function (e) {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})

const filterTodos = function(term){    
    Array.from(item.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));
}

search.addEventListener('keyup', function(e){
    e.preventDefault()
   const term = e.target.value.trim().toLowerCase();
   filterTodos(term)
})