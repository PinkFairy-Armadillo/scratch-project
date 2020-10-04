import React, { useState, useEffect } from 'react';

const NewsView = props => {
  const [newsData, setNewsData] = useState([]);
  const [fetchedData, setFetchedData] = useState(false);
  const [currentArticles, setCurrentArticles] = useState([]);
  
  const countryCode = 'US';
  const DEFAULT_IMG = 'https://joebalestrino.com/wp-content/uploads/2019/02/Marketplace-Lending-News.jpg';

  const fetchData = (category = 'business') => {
    fetch(`http://localhost:5000/news/${countryCode}?category=${category}`, {
      method: 'GET',
      headers: {
        "Content-Type": "Application/JSON",
      }
    })
    .then(res => res.json())
    .then(data => {
      setNewsData(data.news );
      setFetchedData(true);
      setCurrentArticles(createNewsArticles(data.news))
    })
    .catch(err => console.log('News fetch ERROR: ', err));
  }
  
  const changeCategory = (category) => {
    return () => {
      setCurrentArticles(createNewsArticles(newsData, category));
    }
  }

  const createNewsArticles = (newsObject, category = 'business') => {
    return newsObject[category].map((newsInfo, i) => {
      return ( 
        <div key={`d${i}`} className='item-wrapper'>
          <a href={newsInfo.url} >
          <img src={newsInfo.urlToImage || DEFAULT_IMG}></img>
          <strong>{newsInfo.title}</strong>
          <p> {newsInfo.source.name}</p>
          </a>
        </div>
      );
    });
  }

  useEffect(() => {
    if (!fetchedData) fetchData();
  },[]);

  if (!newsData) return null;

  if (fetchedData){
    const CATEGORIES = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
    const buttonsArray = [];
    
    for (let i = 0; i < CATEGORIES.length; i += 1) {
      buttonsArray.push(
        <button key={`b${i}`} className="news-btns" onClick={changeCategory(CATEGORIES[i])}>{CATEGORIES[i]}</button>
      )
    }

    return (
      <div>
      <h1>Local News Information</h1>
      {buttonsArray}
      <div className='info-container'>
        {currentArticles}
      </div>
    </div>
    )
  } else {
    return (
      <h1>Fetching from database</h1>
    )
  } 
}
export default NewsView;