const backTop = document.getElementById('back_top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backTop.classList.add('show');
    } else {
        backTop.classList.remove('show');
    }
});

backTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
