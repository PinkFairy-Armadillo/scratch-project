import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const NewsView = props => {
  const [newsData, setNewsData] = useState([]);
  const [fetchedData, setFetchedData] = useState(false);
  
  const countryCode = 'US';
  const DEFAULT_IMG = 'https://joebalestrino.com/wp-content/uploads/2019/02/Marketplace-Lending-News.jpg';

  const fetchData = (category = 'business') => {
    console.log('fetching news');
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
    })
    .catch(err => console.log('News fetch ERROR: ', err));
  }
  
  const changeCategory = (category) => {
    return () => {
      console.log(category);
      fetchData(category);
    }
  }

  useEffect(() => {
    if (!fetchedData) fetchData();
  },[]);

  if (!newsData) return null;

  if (!newsData.length)
    return (
      <div>Sorry, no articles found</div>
    );  

  if (fetchedData){
    const newsArticles = newsData.map(newsInfo => {
      return ( 
        <div className='item-wrapper'>
          <a href={newsInfo.url}>
          <img src={newsInfo.urlToImage || DEFAULT_IMG}></img>
          <strong>{newsInfo.title}</strong>
          <p>{newsInfo.source.name}</p>
          </a>
        </div>
      );
    });
    const CATEGORIES = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
    const buttonsArray = [];
    
    for (let i = 0; i < CATEGORIES.length; i += 1) {
      buttonsArray.push(
        <button className="news-btns" onClick={changeCategory(CATEGORIES[i])}>{CATEGORIES[i]}</button>
      )
    }

    return (
      <div>
      <h1>Local News Information</h1>
      {buttonsArray}
      <div className='info-container'>
        {newsArticles}
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