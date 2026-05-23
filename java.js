$(document).ready(function () {
   
    var $grid = $('.grid').isotope({
        itemSelector: '.all',
        layoutMode: 'fitRows',
        transitionDuration: '0.6s'
    });

    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        });
    });
});


const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
const loginSection = document.getElementById('loginSection');
const registerSection = document.getElementById('registerSection');

if (registerTab) {
    registerTab.onclick = function() {
    
        loginSection.style.display = 'none';
        registerSection.style.display = 'block';

        registerTab.classList.add('btn-warning', 'text-white');
        registerTab.classList.remove('btn-light');
        
        loginTab.classList.add('btn-light');
        loginTab.classList.remove('btn-warning', 'text-white');
    };
}

if (loginTab) {
    loginTab.onclick = function() {
   
        loginSection.style.display = 'block';
        registerSection.style.display = 'none';

        loginTab.classList.add('btn-warning', 'text-white');
        loginTab.classList.remove('btn-light');
        
        registerTab.classList.add('btn-light');
        registerTab.classList.remove('btn-warning', 'text-white');
    };
}