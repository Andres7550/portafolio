window.addEventListener('scroll', function(){
    const header= this.document.querySelector('header');
    if (window.scrollY>50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const toggleBtn = document.getElementById('theme-toggle-btn');
const currentTheme = localStorage.getItem('theme') || 'light';

if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme','light');
    toggleBtn.textContent = '🌞';
} 

toggleBtn.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme','dark');
        toggleBtn.textContent = '🌜';
        localStorage.setItem('theme','dark');
    } else {
        document.documentElement.setAttribute('data-theme','light');
        toggleBtn.textContent = '🌞';
        localStorage.setItem('theme','light');
    }
});