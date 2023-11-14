const bar = document.getElementById('menuBars');
const overlay = document.getElementById('overlay');
const navMainPage = document.getElementById('navMainPage');
const navAbout = document.getElementById('navAbout');
const navServices = document.getElementById('navServices');
const navPrices = document.getElementById('navPrices');
const navContact = document.getElementById('navContact');

const navItems = [navMainPage, navAbout, navServices, navPrices, navContact]


function toggleNav(e) {
    bar.classList.toggle("change");
    overlay.classList.toggle('overlay-active')
    if(overlay.classList.contains('overlay-active')){
        overlay.classList.remove('overlay-slide-left')
        overlay.classList.add('overlay-slide-right')

        navMainPage.classList.remove('slide-out-1');
        navMainPage.classList.add('slide-in-1');

        navAbout.classList.remove('slide-out-2');
        navAbout.classList.add('slide-in-2');

        navServices.classList.remove('slide-out-3');
        navServices.classList.add('slide-in-3');

        navPrices.classList.remove('slide-out-4');
        navPrices.classList.add('slide-in-4');

        navContact.classList.remove('slide-out-5');
        navContact.classList.add('slide-in-5');
        
    }else{
        overlay.classList.remove('overlay-slide-right')
        overlay.classList.add('overlay-slide-left')

        navMainPage.classList.remove('slide-in-1');
        navMainPage.classList.add('slide-out-1');

        navAbout.classList.remove('slide-in-2');
        navAbout.classList.add('slide-out-2');

        navServices.classList.remove('slide-in-3');
        navServices.classList.add('slide-out-3');

        navPrices.classList.remove('slide-in-4');
        navPrices.classList.add('slide-out-4');

        navContact.classList.remove('slide-in-5');
        navContact.classList.add('slide-out-5');
    }
}

bar.addEventListener('click', toggleNav);

navItems.forEach((nav) => {
    nav.addEventListener('click', function(){
        toggleNav();
    })
})