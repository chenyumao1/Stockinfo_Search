document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    const keywordInput = document.getElementById('keyword');  
    const monthDropdown = document.getElementById('monthDropdown');
    const stockDataDisplay = document.getElementById('stockDataDisplay');
    const stockChartImg = document.getElementById('stockChartImg');

    searchButton.onclick = function() {
        const symbol = keywordInput.value;  
        const period = monthDropdown.value;
        fetchStockData(symbol, period);
        fetchStockChart(symbol, period);
    };
});


function fetchStockData(symbol, period) {
    const url = `/get_stock_data?company_code=${encodeURIComponent(symbol)}&period=${encodeURIComponent(period)}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const dataHtml = `
                <table class="table">
                    <tr><th>Company</th><td>${data.company}</td></tr>
                    <tr><th>Current Price</th><td>${data.current_price}</td></tr>
                    <tr><th>High Price</th><td>${data.high_price}</td></tr>
                    <tr><th>Low Price</th><td>${data.low_price}</td></tr>
                    <tr><th>Open Price</th><td>${data.open_price}</td></tr>
                    <tr><th>Volume</th><td>${data.volume}</td></tr>
                    <tr><th>Dividends</th><td>${data.dividends}</td></tr>
                </table>`;
            // document.getElementById('stockDataDisplay').innerHTML = dataHtml;
            const stockDataDisplay = document.getElementById('stockDataDisplay');
            const dataContainer = document.getElementById('dataContainer'); 
            dataContainer.innerHTML = dataHtml;
            stockDataDisplay.style.display = 'block';
            
        })
        .catch(error => console.error('Error fetching stock data:', error));
}

function fetchStockChart(symbol, period) {
    const imageUrl = `/plot_stock/${symbol}/${period}`; 
    stockChartImg.src = imageUrl; 
    stockChart.style.display = 'block';
    stockChartImg.style.display = 'block';
}
