const modeContainer = document.querySelector('.mode-container');
const modeToggle = document.querySelector('.mode-toggle');
const darkMode = document.querySelector('.dark-mode');
const lightMode = document.querySelector('.light-mode');
const autoMode = document.querySelector('.auto-mode');
const html = document.documentElement;
let autoModeChecker = false;

window.addEventListener('load', () => {
    let themeColor = localStorage.getItem('color-theme');
    if (themeColor === 'dark') {
        darkMode.click()
    } else if (themeColor === 'light') {
        lightMode.click()
    } else {
        autoMode.click()
    }
})

darkMode.addEventListener('click', () => {
    modeToggle.setAttribute('style', '')
    modeToggle.style.left = '50%';
    modeToggle.style.transform = 'translateX(-50%)';
    localStorage.setItem('color-theme', 'dark')
    html.classList.add('dark');
    html.classList.remove('light');
    autoModeChecker = false;
    changeThemeOnline()
})

lightMode.addEventListener('click', () => {
    modeToggle.setAttribute('style', '')
    modeToggle.style.left = '0';
    localStorage.setItem('color-theme', 'light')
    html.classList.add('light');
    html.classList.remove('dark');
    autoModeChecker = false;
    changeThemeOnline()
})

autoMode.addEventListener('click', () => {
    modeToggle.setAttribute('style', '')
    modeToggle.style.right = '-5px';
    localStorage.setItem('color-theme', 'auto')
    autoModeChecker = true;
    changeTheme()
    changeThemeOnline()
})

function changeThemeOnline() {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
        if (autoModeChecker) {
            changeTheme()
        }
    })
}

function changeTheme() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        html.classList.add('dark');
        html.classList.remove('light');
    } else {
        html.classList.add('light');
        html.classList.remove('dark');
    }
}