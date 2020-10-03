import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const NewsView = props => {
  
  const NEWS_API_URI = '';
  
  const imgURL = 'https://s.yimg.com/it/api/res/1.2/mb7a8hbeszkqryeaNs1CzA--~A/YXBwaWQ9eW5ld3M7c209MTt3PTgwMA--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-09/02e56da0-fe15-11ea-9fff-350ed1bdddc7';
  const headline = 'Tesla announces releases of Electric Helicopters';
  const source = 'Reuters';
  const arrayOfNewsItems = [{ imgURL, headline, source }, { imgURL, headline, source }, { imgURL, headline, source }, { imgURL, headline, source }, { imgURL, headline, source } ];
  const newsArticles = arrayOfNewsItems.map(newInfo => {
    return ( 
      <div className='item-wrapper'>
        <img src={newInfo.imgURL}></img>
        <strong>{headline}</strong>
        <p>{source}</p>
      </div>
    );
  });
  return (
    <div className='info-container'>
      {/*<h1>Local Information</h1>*/}
      {newsArticles}
    </div>
  );
}
export default NewsView;