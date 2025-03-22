document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const fontToggleBtn = document.getElementById('font-toggle');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
    }

    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light-theme');
        } else {
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        }
    });

    const fonts = ['font-1', 'font-2'];
    let currentFontIndex = 0;

    const savedFont = localStorage.getItem('font');
    if (savedFont) {
        body.classList.add(savedFont);
        currentFontIndex = fonts.indexOf(savedFont);
    }

    fontToggleBtn.addEventListener('click', () => {

        body.classList.remove(fonts[currentFontIndex]);
        currentFontIndex = (currentFontIndex + 1) % fonts.length;

        body.classList.add(fonts[currentFontIndex]);

        localStorage.setItem('font', fonts[currentFontIndex]);
    });
});