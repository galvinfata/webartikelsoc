function loadArticles() {
    fetch('/public/static.json')
        .then(response => response.json())
        .then(data => {
            const articlesContainer = document.getElementById('articles-container');
            articlesContainer.innerHTML = '';

            data.articles.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.classList.add('article');

                const titleElement = document.createElement('h2');
                titleElement.textContent = article.title;

                const summaryElement = document.createElement('p');
                summaryElement.textContent = article.summary;

                const linkElement = document.createElement('a');
                linkElement.href = article.path;
                linkElement.textContent = 'Read more';

                articleElement.appendChild(titleElement);
                articleElement.appendChild(summaryElement);
                articleElement.appendChild(linkElement);
                articlesContainer.appendChild(articleElement);
            });
        })
        .catch(error => {
            console.error('Error loading articles:', error);
        });
}

document.addEventListener('DOMContentLoaded', loadArticles);