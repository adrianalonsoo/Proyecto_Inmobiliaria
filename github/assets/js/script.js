const mobileBtn = document.getElementById('toggler-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileDropdown = document.querySelector('.dropdown');
const mobileSubMenu = document.querySelector('.submenu')

mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');

    if(!mobileMenu.classList.contains('hidden')) {
        mobileBtn.classList.remove('fa-bars');
        mobileBtn.classList.add('fa-xmark');
    } else {
        mobileBtn.classList.remove('fa-xmark');
        mobileBtn.classList.add('fa-bars');
    }
});

// Open-hide dropdown on mobile menu
mobileDropdown.addEventListener('click', () => {
    mobileSubMenu.classList.toggle('hidden');
});