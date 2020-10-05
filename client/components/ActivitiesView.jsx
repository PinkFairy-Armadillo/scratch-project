import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';

const mapStateToProps = ( {
  informationReducer: { lat,long,countryCode }
}) => ({lat,long,countryCode});

const ActivitiesView = props => {
  const [activitiesData, setActivitiesData] = useState([]);
  const [fetchedData, setFetchedData] = useState(false);
  const [currentActivities, setCurrentActivities] = useState([]); // DISCUSS
  
  const countryCode = 'US';
  const DEFAULT_IMG = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80';

  const fetchData = (category = 'bars') => {
    fetch(`/businesses/${category}?lat=${props.lat}&lon=${props.long}`, {
      method: 'GET',
      headers: {
        "Content-Type": "Application/JSON",
      }
    })
    .then(res => res.json())
    .then(data => {
      setActivitiesData(data);
      setFetchedData(true);
      setCurrentActivities(createActivities(data)) // DISCUSS
    })
    .catch(err => console.log('Activities fetch ERROR: ', err));
  }
  
  const changeCategory = (category) => {
    return () => {
      fetchData(category);      
      // setCurrentActivities(createActivities(activitiesData, category)); // DISCUSS
    }
  }

  const createActivities = (activitiesObject, category) => {
    return activitiesObject.map((restInfo, i) => {
      return ( 
        <div key={i} className='restaurantWrapper'>
        <img src={restInfo.image_url} />
        <p>Name: {restInfo.name}</p>
        <p>Rating: {restInfo.rating}</p>
        <p>Reviews: {restInfo.reviews}</p>
        <p>Location: {restInfo.location.address1}</p>
        </div>
      );
    });
  }

  useEffect(() => {
    if (!fetchedData) fetchData();
  },[]);

  useEffect( () => {
    fetchData();
  }, [props.city])

  if (!activitiesData) return null;

  if (fetchedData){
    const CATEGORIES = ['restaurants', 'bars', 'climbing', 'health', 'bowling', 'fitness'];
    const buttonsArray = [];
    
    for (let i = 0; i < CATEGORIES.length; i += 1) {
      buttonsArray.push(
        <button key={`b${i}`} onClick={changeCategory(CATEGORIES[i])} id={CATEGORIES[i]}>{CATEGORIES[i]}</button>
      )
    }

    return (
      <div>
      <h1 id='title'>Local Activities Information</h1>
      <div className="restaurantButtons" >
      {buttonsArray}
      </div>
      <div className='restaurantContainer'>
        {currentActivities}
      </div>
    </div>
    )
  } else {
    return (
      <h1 id='title'>Fetching from database</h1>
    )
  } 
}
export default connect(mapStateToProps, null)(ActivitiesView)