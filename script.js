// Пример: кнопка для изменения темы
document.addEventListener('DOMContentLoaded', () => {
    const themeButton = document.createElement('button');
    themeButton.textContent = 'Тёмная тема';
    document.body.prepend(themeButton);
    
    themeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
    });
});