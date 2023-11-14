const btn = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const articles = document.querySelectorAll('.content');

about.addEventListener('click', function (e) {
    const id = e.target.dataset.id;
    if (id) {
        btn.forEach(function (bt) {
           bt.classList.remove('active')
          e.target.classList.add('active')
        });
        //articleları gizleme
        articles.forEach(function(article){
            article.classList.remove('active')
        })
        const element = document.getElementById(id)
        element.classList.add('active')
    }
});