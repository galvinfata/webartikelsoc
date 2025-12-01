document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.article-menu button');
    const articles = document.querySelectorAll('.article-content');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            articles.forEach(a => a.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(btn.dataset.article).classList.add('active');
        });
    });
});