let menuIcon = document.querySelector('#menu-icon');
let navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('fa-xmark');
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuIcon.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
    }
});