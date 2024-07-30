document.addEventListener('DOMContentLoaded', function(){
    const cabecalho = document.querySelector('.containerHeader');

    window.addEventListener('scroll', function(){
        if(window.scrollY > 50){
            cabecalho.classList.add('scrolled');
        }
        else{
            cabecalho.classList.remove('scrolled');
        }
    });

    cabecalho.addEventListener('mouseover', function(){
        cabecalho.classList.add('scrolled');
    });

    cabecalho.addEventListener('mouseout', function(){
        cabecalho.classList.remove('scrolled');
    });
});