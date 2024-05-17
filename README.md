# Stock Information and News Web Application

## Description

A web application that provides stock information and company news using Yahoo Finance and Stock News APIs. Built with Python, Flask, and JavaScript, it includes user authentication, news search stored in MongoDB, and stock data visualization.

## Features

- **User Authentication**: Users must log in to access the application. User information is stored in a local SQL database.
- **News Search**: Users can search for news of different companies by specifying a time period. The news is fetched from the Stock News API and stored in MongoDB.
- **Stock Data**: Users can search for stock data, which is fetched from Yahoo Finance API. The application presents the data and plots the stock price changes as a line chart.

## Technologies Used

- **Backend**: Python, Flask
- **Frontend**: Java, CSS, JavaScript
- **Databases**: SQL (for user information), MongoDB (for news data)
- **APIs**: Yahoo Finance API (for stock data), Stock News API (for company news)

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/stock-info-news-app.git
   cd stock-info-news-app

2. **	Install the required Python packages:**
   pip install -r requirements.txt

3.	Set up the databases:
	•	SQL Database: Configure your local SQL database and update the connection details in the application configuration.
	•	MongoDB: Ensure MongoDB is installed and running on your local machine. Update the connection details in the application configuration.
4.	Set up API keys:
	•	Obtain API keys for Yahoo Finance and Stock News API.
	•	Create a .env file in the root directory and add your API keys:

  YAHOO_FINANCE_API_KEY=your_yahoo_finance_api_key
  STOCK_NEWS_API_KEY=your_stock_news_api_key

5. Run the application
flask run

6.	Access the application:
Open your web browser and go to http://127.0.0.1:5000.

Usage

	1.	Log in or Register: Use the log in or register page to access the application.
	2.	Search for News: Use the news search functionality to find company news by specifying the time period.
	3.	Search for Stock Data: Use the stock search functionality to get the latest stock data and view the price changes in a line chart.

Project Structure

	•	app/: Contains the Flask application and routes.
	•	static/: Contains static files like CSS and JavaScript.
	•	templates/: Contains HTML templates for the application.
	•	models/: Contains SQLAlchemy models for the SQL database.
	•	utils/: Contains utility functions for API calls and data processing.

Contributing

Contributions are welcome! Please open an issue or submit a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for more details.

Contact

If you have any questions, feel free to reach out to me at [maoch404@outlook.com].














  












   
