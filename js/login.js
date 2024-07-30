const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginPopup = document.querySelector('.btnLogin-popup');
const registerPopup = document.querySelector('.btnRegister-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
    wrapper.style.right = '26%';
});
loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
    wrapper.style.right = '20%';
});
loginPopup.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
    wrapper.style.right = '20%';
    wrapper.classList.add('active-popup');
});
registerPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active');
    wrapper.classList.add('active-popup');
    wrapper.style.right = '26%';
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});