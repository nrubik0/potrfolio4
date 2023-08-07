const burgerIcon = document.getElementById('burgerIcon');
const navLinks = document.getElementById('navLinks');

burgerIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});