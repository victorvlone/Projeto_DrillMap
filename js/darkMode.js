document.addEventListener('DOMContentLoaded', function(){
    const darkModeToggle = document.getElementById('darkModeToggle');

    function toggleDarkMode(){
        document.body.classList.toggle('dark-mode');
        document.querySelector('.section__banner').classList.toggle('banner__DarkMode');
        document.querySelectorAll('.sectionTwo').forEach(section => {
            section.classList.toggle('container-DarkMode');
        });
    }
    darkModeToggle.addEventListener('click', toggleDarkMode);
});