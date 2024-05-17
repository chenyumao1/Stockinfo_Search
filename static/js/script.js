// script.js
// document.addEventListener('DOMContentLoaded', function() {
//     const searchButton = document.getElementById('search-button');
//     const monthDropdown = document.getElementById('exampleFormControlSelect1');
//     const keywordInput = document.getElementById('keyword');

//     if (searchButton && monthDropdown && keywordInput) {
//         searchButton.addEventListener('click', function() {
//             const keyword = keywordInput.value;
//             const month = monthDropdown.value;
//             fetchNews(keyword, month, 'Yahoo Entertainment'); 
//             saveSearchHistory(keyword, month);
//         });
//     } else {
//         console.log("Search elements are not available on this page.");
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('search-button');
    const monthDropdown = document.getElementById('exampleFormControlSelect1');
    const keywordInput = document.getElementById('keyword');
    const newsDisplay = document.getElementById('news-display');

    searchButton.addEventListener('click', function() {
        const keyword = keywordInput.value;
        const month = monthDropdown.value;
        fetchNews(keyword, month, 'Yahoo Entertainment'); 
        saveSearchHistory(keyword, month);
    });

    document.querySelectorAll('.publisher-btn').forEach(button => {
        button.addEventListener('click', function() {
            const publisher = button.getAttribute('data-publisher');
            const keyword = keywordInput.value;
            const month = monthDropdown.value;
            // console.log(publisher)
            fetchNews(keyword, month, publisher); 
        });
    });
});


function fetchNews(keyword, month, publisher) {
    $.post('/filter_news_by_publisher', {
        company_name:keyword,
        period: month,
        publisher: publisher
    }, function(data) {
        console.log(data); 
        console.log("test");
        const newsDisplay = document.getElementById('news-display');
        newsDisplay.innerHTML = '';  
        if (data.length > 0) {
            data.forEach(function(article) {
                const newsItem = document.createElement('div');
                newsItem.className = 'news-item';
                newsItem.innerHTML = `
                    <h3 class="news-title">${article.title}</h3>
                    <p class="news-author">Author: ${article.author}</p>
                    <p class="news-author">Published at: ${article.publishedAt}</p>
                    <p class="news-author">Description: ${article.description}</p>

                    <a href="${article.url}" target="_blank">Read more...</a>`; 
                newsDisplay.appendChild(newsItem);

        });
    }else{
        newsDisplay.innerHTML = '<p>No news found for this publisher.</p>';
    }});

// function addHistory();

}

function saveSearchHistory(keyword, month) {
    $.post('/save_search_history', {
        company_name: keyword,
        period: month,
    }, function(response) {
        console.log(response);
    });
}