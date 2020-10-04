const fetch = require('node-fetch');
require('dotenv').config();

const newsController = {};

const API_KEY = process.env.NEWS_API_KEY;
const CATEGORIES = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

// get information from google maps api
newsController.getNews = (req, res, next) => {
  const { countrycode } = req.params;
  const url = `https://newsapi.org/v2/top-headlines?country=${countrycode}&category=${CATEGORIES[1]}&pageSize=5&page=1&apiKey=${API_KEY}`;

  fetch(url)
    .then((data) => data.json())
    .then(results => {
      res.locals.news = results.articles;
      return next();
    })
    .catch((error) => next({ log: `Error in newsController.getNews; ERROR: ${error}` }));

  // TODO: make promiseAll work so that we fetch a request per news category and get 5 articles per.
  /*
  const promises = [];
  iterate through each element in CATEGORIES
  for (let i = 0; i < CATEGORIES.length; i += 1) {
    const categoryName = CATEGORIES[i];
    const url = `https://newsapi.org/v2/top-headlines?country=${countrycode}&category=${categoryName}&pageSize=5&page=1&apiKey=${API_KEY}`;
    console.log('in news.js', 'url: ', url);
    promises.push(fetch(url));
  }

  Promise.all(promises)
    .then((resultsArr) => {
      console.log(`resultsArr: ${JSON.stringify(resultsArr)}`);
      // iterate over resultsArray
      // store data in res.locals.news.<category_name>
      resultsArr.forEach((newResultObj, index) => {
        console.log(`newResultObj.articles: ${newResultObj.articles}`);
        res.locals.news[CATEGORIES[index]] = newResultObj.articles;
      });
      return next();
    })
    .catch((error) => next({ log: `Error in newsController.getNews; ERROR: ${error}` }));

    */
};

module.exports = newsController;
