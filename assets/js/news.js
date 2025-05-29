// News data for the research group website
// Add new news items at the top of the array for automatic chronological ordering

const newsData = [
    {
        date: "May 29, 2025",
        title: "New Website Launch",
        content: "We are thrilled to launch our research group website! Thanks to the Claude Sonnet 4 :).",
        isRecent: true
    },
];

// Function to load recent news on homepage (shows first 3 items with length control)
function loadRecentNews() {
    const newsContainer = document.getElementById('recent-news-container');
    if (!newsContainer) return;

    const recentNews = newsData.slice(0, 3); // Get first 3 news items
    
    newsContainer.innerHTML = recentNews.map(news => {
        // Truncate content if too long (optional - you can remove this if you want full content)
        const maxLength = 150;
        let content = news.content;
        if (content.length > maxLength) {
            content = content.substring(0, maxLength) + '...';
        }
        
        return `
            <div class="news-item">
                <div class="news-date">${news.date}</div>
                <div class="news-content">
                    <strong>${news.title}:</strong> ${content}
                </div>
            </div>
        `;
    }).join('');
}

// Function to load all news on news page
function loadAllNews() {
    const newsContainer = document.getElementById('all-news-container');
    if (!newsContainer) return;

    newsContainer.innerHTML = newsData.map(news => `
        <div class="news-article">
            <div class="news-date">${news.date}</div>
            <h3>${news.title}</h3>
            <div class="news-content">
                <p>${news.content}</p>
            </div>
        </div>
    `).join('');
}

// Auto-load news when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadRecentNews();
    loadAllNews();
});