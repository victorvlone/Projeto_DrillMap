document.addEventListener('DOMContentLoaded', function(){
    const darkModeToggle = document.querySelectorAll('.darkModeToggle');
    const logos = document.querySelectorAll('.logo');
    const icons = document.querySelectorAll('.icon');


    function toggleDarkMode(){
        document.body.classList.toggle('dark-mode');
        document.querySelector('.section__banner').classList.toggle('banner__DarkMode');
        document.querySelector('.Container-SectionOne').classList.toggle('banner__DarkMode');
        document.querySelector('.sectionTwo').classList.toggle('sectionTwo__DarkMode');
        document.querySelector('.mensal').classList.toggle('container_DarkMode');
        
        document.querySelectorAll('.sectionOne-mobile-listText').forEach(function(listText){
            listText.classList.toggle('sectionTwo__DarkMode');
        });
        document.querySelectorAll('.advantageContainer').forEach(function(element) {
            element.classList.toggle('container_DarkMode');
        });
        document.querySelector('.wrapper').classList.toggle('container_DarkMode');

        if (document.body.classList.contains('dark-mode')){
            logos.forEach(function(logo) {
                logo.src = 'images/DrillMapLogoBGDarkmode.png'
            });
            icons.forEach(function(icon){
                icon.textContent = 'light_mode';
            });
    
        } else {
            logos.forEach(function(logo) {
                logo.src = 'images/DrillMapLogoBG.png'
            });
            icons.forEach(function(icon){
                icon.textContent = 'dark_mode';
            });
        }
    }

    darkModeToggle.forEach(function(toggle) {
        toggle.addEventListener('click', toggleDarkMode);
    });

});